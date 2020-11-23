<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://www.packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Channel Information Tag

[TOC]

## Overview

The purpose of this tag is to display general information about the specified Channel as set under `Developer --> Channels`.

    {exp:channel:info channel="news"}
        Channel Name: {channel_title}<br>
        Description: {channel_description}
    {/exp:channel:info}

## Parameters

### `channel=`

    channel="channel_name"

The name (short name) of the channel. This is a **required** parameter.

## Variables

### `{channel_description}`

This variable simply displays the content from the "Channel Description" field.

### `{channel_encoding}`

This variable simply displays the content from the "XML Character Encoding" setting.

### `{channel_lang}`

This variable simply displays the content from the "XML Language" setting.

### `{channel_title}`

This variable simply displays the content from the "Full Channel Name" setting.

### `{channel_url}`

This variable simply displays the content from the "Channel URL" setting.
