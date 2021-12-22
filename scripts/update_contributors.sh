#!/bin/bash

## This source file is part of the open source project
## ExpressionEngine (https://expressionengine.com)
##
## @link      https://expressionengine.com/
## @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
## @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

## This script expects enviornment variables to be set called "GHUSER" and "GHTOKEN". These should correspond to your GitHub username and GitHub personal access token respectively. Reference the GitHub API docs for more information: https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api#authentication
##
## This Script also is expecting the jq library to be installed. https://stedolan.github.io/jq/

set -eu
here="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
length="$(curl -s -u "$GHUSER:$GHTOKEN" https://api.github.com/repos/expressionengine/expressionengine-user-guide/contributors | jq length)"

i=0
CONTRIBUTORS=""
echo "Starting Loop"
while [ $i -lt $length ]
do
    AUTHOR=$(curl -s -u "$GHUSER:$GHTOKEN" https://api.github.com/repos/expressionengine/expressionengine-user-guide/contributors | jq ".[$i] | .login" | tr -d '"')
    IMAGE=$(curl -s -u "$GHUSER:$GHTOKEN" https://api.github.com/users/$AUTHOR | jq .avatar_url | tr -d '"')
    NAME=$(curl -s -u "$GHUSER:$GHTOKEN" https://api.github.com/users/$AUTHOR | jq .name | tr -d '"')
    if [ "$NAME" = "null" ]; then
        NAME="$AUTHOR"
    fi
    echo $NAME' - '$AUTHOR | tr -d '"'
    CONTRIBUTORS+=$'\n<div class="flex-container" style="margin-bottom:10px"><div class="flex-child"><img src="'$IMAGE'" width=50 style="margin:0 10px 0 0"/></div><div class="flex-child">'$NAME'<br><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author='$AUTHOR'" target="_BLANK">@'$AUTHOR'</a></div></div>'
    ((i=i+1))
done

cat > "$here/../docs/CONTRIBUTORS.md" <<- EOF
# Docs Contributors

This is a list of all who have contributed content or source code to the ExpressionEngine Docs sorted ordered by most commits. If you're interested in contributing to the Docs or to the ExpressionEngine Core Project be sure to read through the [Contributing documentation](/contributing.md). 

$CONTRIBUTORS

Additionally, the following contributed content prior to 2011 when this repository was created:

- Paul Burdick

EOF