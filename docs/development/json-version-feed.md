<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# JSON Version Feed

[TOC]

If you have need of knowing the current available version of ExpressionEngine, or the release history of previous version numbers, that information is available to you via a JSON feed at the following URL:

    https://expressionengine.com/support/expressionengine-version-history.json

## Feed Format

The returning feed is formatted thusly:

    {
        "current_version": "5.1.2",
        "version_history": {
            "5.1.2": "2019-01-03",
            "5.1.1": "2018-12-21",
            "5.1.0": "2018-12-20",
            "5.0.2": "2018-12-13",
            "5.0.1": "2018-11-18",
            "4.3.8": "2019-01-03",
            "4.3.7": "2018-12-21"
        }
    }

### `current_version`

The current version of ExpressionEngine available for download.

### `version_history`

A hash table of all versions and release dates for ExpressionEngine, including the most current.

| Key            | Value                     |
| -------------- | ------------------------- |
| version number | release date (yyyy-mm-dd) |

## Accessing the Feed

When utilizing the JSON version feed, please utilize caching and restrict calls to no more than once per day. Abuse of the resource by a specific user will result in terminated access to the JSON version feed for that user.
