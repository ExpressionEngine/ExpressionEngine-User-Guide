#!/bin/bash

## This source file is part of the open source project
## ExpressionEngine (https://expressionengine.com)
##
## @link      https://expressionengine.com/
## @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
## @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

## This script expects environment variables to be set called "GHUSER" and "GHTOKEN". These should correspond to your GitHub username and GitHub personal access token respectively. Reference the GitHub API docs for more information: https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api#authentication
##
## This Script also is expecting the jq library to be installed. https://stedolan.github.io/jq/

set -euo pipefail

if [[ $# -ne 2 ]]; then
    echo "Usage: $0 <base> <head>" >&2
    exit 1
fi

for dependency in curl jq mktemp; do
    if ! command -v "$dependency" >/dev/null 2>&1; then
        echo "Error: Missing required dependency: $dependency" >&2
        exit 1
    fi
done

BASE=$1
HEAD=$2
URL="https://api.github.com/repos/expressionengine/expressionengine/compare/${BASE}...${HEAD}"

RESPONSE_JSON="$(mktemp)"
COMMITS_JSON="$(mktemp)"
CORE_CONTRIBUTORS_HTML="$(mktemp)"
cleanup() {
    rm -f "$RESPONSE_JSON" "$COMMITS_JSON" "$CORE_CONTRIBUTORS_HTML"
}
trap cleanup EXIT

USE_BASIC_AUTH=false
USE_BEARER_AUTH=false
if [[ -n "${GHUSER:-}" && -n "${GHTOKEN:-}" ]]; then
    USE_BASIC_AUTH=true
elif [[ -n "${GHTOKEN:-}" ]]; then
    USE_BEARER_AUTH=true
else
    echo "Warning: GHUSER/GHTOKEN not set; using unauthenticated GitHub API requests (rate limited)." >&2
fi

if [[ "$USE_BASIC_AUTH" == true ]]; then
    curl --fail --silent --show-error -u "${GHUSER}:${GHTOKEN}" "$URL" > "$RESPONSE_JSON"
elif [[ "$USE_BEARER_AUTH" == true ]]; then
    curl --fail --silent --show-error -H "Authorization: Bearer ${GHTOKEN}" "$URL" > "$RESPONSE_JSON"
else
    curl --fail --silent --show-error "$URL" > "$RESPONSE_JSON"
fi

if ! jq -e '.commits and (.commits | type == "array")' "$RESPONSE_JSON" >/dev/null; then
    API_MESSAGE="$(jq -r '.message // "Unexpected API response: .commits not found"' "$RESPONSE_JSON")"
    echo "Error: $API_MESSAGE" >&2
    exit 1
fi

jq '.commits' "$RESPONSE_JSON" > "$COMMITS_JSON"

#Now lets sort of JSON object alphabetically
tmp="$(mktemp)"
jq ". |=sort_by(.commit | .author | .name // \"\")" "$COMMITS_JSON" > "$tmp" && mv "$tmp" "$COMMITS_JSON"

length="$(jq -r 'length' "$COMMITS_JSON")"
if ! [[ "$length" =~ ^[0-9]+$ ]]; then
    echo "Error: Unable to determine commit length from GitHub response." >&2
    exit 1
fi

x=0
CONTRIBUTORS=""
echo "Starting Loop"
declare -a contributorList=()
while (( x < length )); do
    AUTHOR="$(jq -r ".[$x] | .author | .login // \"\"" "$COMMITS_JSON")"
    if [[ -z "$AUTHOR" ]]; then
        ((x=x+1))
        continue
    fi

    if [[ ! " ${contributorList[*]-} " =~ " ${AUTHOR} " ]]; then
        contributorList[${#contributorList[@]}]="$AUTHOR"
        IMAGE="$(jq -r ".[$x] | .author | .avatar_url // \"\"" "$COMMITS_JSON")"
        NAME="$(jq -r ".[$x] | .commit | .author | .name // \"\"" "$COMMITS_JSON")"
        if [[ -z "$NAME" ]]; then
            NAME="$AUTHOR"
        fi

        echo "$NAME - $AUTHOR"
        CONTRIBUTORS+=$'\n<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="'"$IMAGE"'" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">'"$NAME"'</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author='"$AUTHOR"'" target="_BLANK">@'"$AUTHOR"'</a></p></div></div></div></li>'
    fi

    ((x=x+1))
done

echo "=== Copy html below and insert into changelog ==="
cat > "$CORE_CONTRIBUTORS_HTML" <<- EOF
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
    $CONTRIBUTORS
    </ul>
</div>
</div>

EOF
cat "$CORE_CONTRIBUTORS_HTML"
