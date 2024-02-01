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

set -eu
here="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
#Get all the contributors and output JSON to a file
curl -s -u "$GHUSER:$GHTOKEN" https://api.github.com/repos/expressionengine/expressionengine-user-guide/contributors?per_page=100 | jq . > contributors.json

#Get the length of the contributors JSON object
length="$(cat contributors.json | jq length)"

#Initialize our contributors string that will be used later
CONTRIBUTORS=""
echo "Starting Loop"

#For each element in our JSON object we'll grab the users name and add it. This will allows us to sort alphabetically later
i=0
while [ $i -lt $length ]
do
    AUTHOR=$(cat contributors.json | jq ".[$i] | .login" | tr -d '"')
    NAME=$(curl -s -u "$GHUSER:$GHTOKEN" https://api.github.com/users/$AUTHOR | jq .name | tr -d '"')
    if [ "$NAME" = "null" ]; then
        NAME="$(echo $AUTHOR | sed 's/.*/\L&/; s/[a-z]*/\u&/g')"
    fi
    tmp=$(mktemp)
    jq ".[$i] |= . + {\"name\": \"$NAME\"}" contributors.json > "$tmp" && mv "$tmp" contributors.json

    ((i=i+1))
done

#Now lets sort of JSON object alphabetically
jq ".|=sort_by(.name)" contributors.json > "$tmp" && mv "$tmp" contributors.json

#Now that we are all sorted, we're going to output our html from our JSON object.
x=0
while [ $x -lt $length ]
do
    AUTHOR=$(cat contributors.json | jq ".[$x] | .login" | tr -d '"')
    if [[ ${AUTHOR} != *"dependabot"* ]]; then
        IMAGE=$(cat contributors.json | jq ".[$x] | .avatar_url" | tr -d '"')
        NAME=$(cat contributors.json | jq ".[$x] | .name" | tr -d '"')

        echo $NAME' - '$AUTHOR | tr -d '"'

        CONTRIBUTORS+=$'\n<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="'$IMAGE'" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">'$NAME'</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author='$AUTHOR'" target="_BLANK">@'$AUTHOR'</a></p></div></div></div></li>'
    fi
    ((x=x+1))
done

rm contributors.json

#Finally we output our markdown file
cat > "$here/../docs/contributors.md" <<- EOF
# Docs Contributors

This is a list of all who have contributed content or source code to the ExpressionEngine Docs sorted alphabetically. If you're interested in contributing to the Docs or to the ExpressionEngine Core Project be sure to read through the [Contributing documentation](/contributing.md).

<div class="max-w-7xl mx-auto py-12 px-4">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-5">
    $CONTRIBUTORS
    </ul>
</div>
</div>



Additionally, the following contributed content prior to 2011 when this repository was created:

- Paul Burdick

EOF
