---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# CP/Alert Service

[TOC]

## Simple Example

Alerts are for providing feedback on an action and calling attention to warnings or errors. We also created an Alert Service for creating alerts in your code. For example:

    ee('CP/Alert')->makeInline('fortune-cookie-form')
      ->asIssue()
      ->withTitle(lang('fortune_cookie_save_error'))
      ->addToBody(lang('fortune_cookie_save_error_desc'))
      ->now();

## CP/Alert Service Methods

**class `ExpressionEngine\Service\Alert\AlertCollection`**

[TOC=3]

### `make($name, $type = 'alert')`

Makes a new named alert of the specified type.

| Parameter | Type     | Description                                                        |
| --------- | -------- | ------------------------------------------------------------------ |
| \$name    | `String` | The name of the alert                                              |
| \$type    | `String` | The type of the alert ('inline', 'banner', 'standard', or 'alert') |
| Returns   | `Alert`  | An alert                                                           |

### `makeInline($name)`

Makes a new named inline alert.

| Parameter | Type     | Description           |
| --------- | -------- | --------------------- |
| \$name    | `String` | The name of the alert |
| Returns   | `Alert`  | An alert              |

### `makeBanner($name)`

Makes a new named banner alert.

| Parameter | Type     | Description           |
| --------- | -------- | --------------------- |
| \$name    | `String` | The name of the alert |
| Returns   | `Alert`  | An alert              |

### `makeStandard($name)`

Makes a new named standard alert.

| Parameter | Type     | Description           |
| --------- | -------- | --------------------- |
| \$name    | `String` | The name of the alert |
| Returns   | `Alert`  | An alert              |

### `get($name, $type = 'inline')`

Gets the rendered value of a named alert of a certain type.

| Parameter | Type     | Description                                               |
| --------- | -------- | --------------------------------------------------------- |
| \$name    | `String` | The name of the alert                                     |
| \$type    | `String` | The type of the alert ('inline', 'banner', or 'standard') |
| Returns   | `String` | The rendered HTML of the alert                            |

### `getAllBanners()`

Gets the rendered value of all banner alerts.

| Parameter | Type     | Description                    |
| --------- | -------- | ------------------------------ |
| Returns   | `String` | The rendered HTML of the alert |

### `getAllInlines()`

Gets the rendered value of all inline alerts.

| Parameter | Type     | Description                    |
| --------- | -------- | ------------------------------ |
| Returns   | `String` | The rendered HTML of the alert |

### `getStandard()`

Gets the rendered value of the standard alert.

| Parameter | Type     | Description                    |
| --------- | -------- | ------------------------------ |
| Returns   | `String` | The rendered HTML of the alert |

## Alert Object Methods

**class `ExpressionEngine\Service\Alert\AlertCollection`**

[TOC=3]

### `asAttention()`

Marks the alert as one that provides general information about what you are viewing.

| Parameter | Type    | Description |
| --------- | ------- | ----------- |
| Returns   | `Alert` | \$this      |

TIP: **New in version 4.2.0**

### `asLoading()`

Creates an alert with a loading style and animation, typically to be shown while AJAXs requests are processing.

| Parameter | Type    | Description |
| --------- | ------- | ----------- |
| Returns   | `Alert` | \$this      |

TIP: **New in version 4.2.0**

### `asImportant()`

Marks the alert as an important alert. This alert style is the same as the Warning style but cannot be closed by default.

| Parameter | Type    | Description |
| --------- | ------- | ----------- |
| Returns   | `Alert` | \$this      |

TIP: **New in version 4.2.0**

### `asIssue()`

Marks the alert as an issue alert.

| Parameter | Type    | Description |
| --------- | ------- | ----------- |
| Returns   | `Alert` | \$this      |

### `asSuccess()`

Marks the alert as a success alert.

| Parameter | Type    | Description |
| --------- | ------- | ----------- |
| Returns   | `Alert` | \$this      |

### `asTip()`

Marks the alert as a tip alert. This should be used very sparingly, if at all. For instance, in the entire application, it is **only** used natively in the Email Notification templates, to advise the site builder of what variables are available to the template without having to look in the documentation.

| Parameter | Type    | Description |
| --------- | ------- | ----------- |
| Returns   | `Alert` | \$this      |

TIP: **New in version 4.1.0**

### `asWarning()`

Marks the alert as a warning alert.

| Parameter | Type    | Description |
| --------- | ------- | ----------- |
| Returns   | `Alert` | \$this      |

### `withTitle($title)`

Sets the title of the alert.

| Parameter | Type     | Description            |
| --------- | -------- | ---------------------- |
| \$title   | `String` | The title of the alert |
| Returns   | `Alert`  | \$this                 |

### `addToBody($item, $class = NULL, $xss_filter = TRUE)`

Adds content to the body of the alert.

| Parameter | Type           | Description                                                         |
| --------- | -------------- | ------------------------------------------------------------------- |
| \$item    | `String|array` | The item to display. If it's an array it will be rendred as a list. |
| \$class   | `String`       | An optional CSS class to add to the item                            |
| \$xss_filter| `Bool`       | Whether to apply XSS filtering to the body of alert. If you need to display external link in alert and you are not outputting any unfiltered user-provided content, you can set this to `false`, otherwise we recommend skipping it. |
| Returns   | `Alert`        | \$this                                                              |

### `addSeparator()`

Adds a separator to the body of the alert.

| Parameter | Type    | Description |
| --------- | ------- | ----------- |
| Returns   | `Alert` | \$this      |

### `setSubAlert($alert)`

Adds an alert to the alert.

| Parameter | Type     | Description                      |
| --------- | -------- | -------------------------------- |
| \$alert   | `String` | An alert to render in this alert |
| Returns   | `Alert`  | \$this                           |

### `canClose()`

Allows the alert to be closed by rendering a close icon.

| Parameter | Type    | Description |
| --------- | ------- | ----------- |
| Returns   | `Alert` | \$this      |

### `cannotClose()`

Does not render a close icon in the alert.

| Parameter | Type    | Description |
| --------- | ------- | ----------- |
| Returns   | `Alert` | \$this      |

### `render()`

Renders the alert to HTML

| Parameter | Type     | Description                     |
| --------- | -------- | ------------------------------- |
| Returns   | `String` | The rendered HTML of the alert. |

### `defer()`

Defers rendering and displaying of the alert until the next control panel request.

| Parameter | Type    | Description |
| --------- | ------- | ----------- |
| Returns   | `Alert` | \$this      |

### `now()`

Saves the alert to be rendered and displayed during this request.

| Parameter | Type    | Description |
| --------- | ------- | ----------- |
| Returns   | `Alert` | \$this      |
