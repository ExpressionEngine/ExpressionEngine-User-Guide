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

# URL Helper

The URL Helper file contains functions that assist in working with URLs. This helper is loaded using the following code:

    ee()->load->helper('url');

## Available Functions

[TOC=3]

### `cp_url($path[, $qs = ''])`

Create a CP Path

WARN: Deprecated since version 3.0.0: Use [CP/URL Service](development/services/url.md) instead.

### `site_url([$uri = ''[, $protocol = NULL]])`

| Parameter  | Type     | Description                      |
| ---------- | -------- | -------------------------------- |
| \$uri      | `String` | URI string                       |
| \$protocol | `String` | Protocol, e.g. 'http' or 'https' |
| Returns    | `String` | Site URL                         |

Returns your site URL, as specified in your config file. The index.php file (or whatever you have set as your site **index_page** in your config file) will be added to the URL, as will any URI segments you pass to the function.

You are encouraged to use this function any time you need to generate a local URL so that your pages become more portable in the event your URL changes.

Segments can be optionally passed to the function as a string. Here is a string example:

    echo site_url('/news/local/123');

The above example would return something like: `https://example.com/news/local/123`

This function is an alias for `EE_Config::site_url()`.

### `base_url($uri = '', $protocol = NULL)`

| Parameter  | Type     | Description                      |
| ---------- | -------- | -------------------------------- |
| \$uri      | `String` | URI string                       |
| \$protocol | `String` | Protocol, e.g. 'http' or 'https' |
| Returns    | `String` | Base URL                         |

Returns your site base URL, as specified in your config file. Example:

    echo base_url();

This function returns the same thing as `site_url()`, without the _index_page_  being appended.

### `current_url()`

| Parameter | Type     | Description     |
| --------- | -------- | --------------- |
| Returns   | `String` | The current URL |

Returns the full URL (including segments) of the page being currently viewed.

NOTE: **Note:** Calling this function is the same as doing this: `site_url(uri_string());`

### `uri_string()`

| Parameter | Type     | Description   |
| --------- | -------- | ------------- |
| Returns   | `String` | An URI string |

Returns the URI segments of any page that contains this function. For example, if your URL was this:

    https://some-site.com/blog/comments/123

The function would return:

    blog/comments/123

This function is an alias for `EE_Config::uri_string()`.

### `index_page()`

| Parameter | Type    | Description        |
| --------- | ------- | ------------------ |
| Returns   | `Mixed` | 'index_page' value |

Returns your site **index_page**, as specified in your config file. Example:

    echo index_page();

### `anchor($uri = '', $title = '', $attributes = '')`

| Parameter    | Type     | Description                 |
| ------------ | -------- | --------------------------- |
| \$uri        | `String` | URI string                  |
| \$title      | `String` | Anchor title                |
| \$attributes | `Mixed`  | HTML attributes             |
| Returns      | `String` | HTML hyperlink (anchor tag) |

Creates a standard HTML anchor link based on your local site URL.

The first parameter can contain any segments you wish appended to the URL. As with the `site_url()` function above, segments can be a string or an array.

NOTE: **Note:** If you are building links that are internal do not include the base URL (https://...). This will be added automatically from the information specified in your config file. Include only the URI segments you wish appended to the URL.

The second segment is the text you would like the link to say. If you leave it blank, the URL will be used.

The third parameter can contain a list of attributes you would like added to the link. The attributes can be a simple string or an associative array.

Here are some examples:

    echo anchor('news/local/123', 'My News', 'title="News title"');
    // Prints: <a href="https://example.com/news/local/123" title="News title">My News</a>

    echo anchor('news/local/123', 'My News', array('title' => 'The best news!'));
    // Prints: <a href="https://example.com/news/local/123" title="The best news!">My News</a>

    echo anchor('', 'Click here');
    // Prints: <a href="https://example.com">Click Here</a>

### `anchor_popup($uri = '', $title = '', $attributes = FALSE)`

| Parameter    | Type     | Description      |
| ------------ | -------- | ---------------- |
| \$uri        | `String` | URI string       |
| \$title      | `String` | Anchor title     |
| \$attributes | `Mixed`  | HTML attributes  |
| Returns      | `String` | Pop-up hyperlink |

Nearly identical to the `anchor()` function except that it opens the URL in a new window. You can specify JavaScript window attributes in the third parameter to control how the window is opened. If the third parameter is not set it will simply open a new window with your own browser settings.

Here is an example with attributes:

    $atts = array(
        'width'       => 800,
        'height'      => 600,
        'scrollbars'  => 'yes',
        'status'      => 'yes',
        'resizable'   => 'yes',
        'screenx'     => 0,
        'screeny'     => 0,
        'window_name' => '_blank'
    );

    echo anchor_popup('news/local/123', 'Click Me!', $atts);

NOTE: **Note:** The above attributes are the function defaults so you only need to set the ones that are different from what you need. If you want the function to use all of its defaults simply pass an empty array in the third parameter: `echo anchor_popup('news/local/123', 'Click Me!', array());`

NOTE: **Note:** The `window_name` is not really an attribute, but an argument to the JavaScript [window.open()](https://www.w3schools.com/jsref/met_win_open.asp) method, which accepts either a window name or a window target.

NOTE: **Note:** Any other attribute than the listed above will be parsed as an HTML attribute to the anchor tag.

### `mailto($email, $title = '', $attributes = '')`

| Parameter    | Type     | Description           |
| ------------ | -------- | --------------------- |
| \$email      | `String` | E-mail address        |
| \$title      | `String` | Anchor title          |
| \$attributes | `Mixed`  | HTML attributes       |
| Returns      | `String` | A "mail to" hyperlink |

Creates a standard HTML e-mail link. Usage example:

    echo mailto('me@my-site.com', 'Click Here to Contact Me');

As with the `anchor()` tab above, you can set attributes using the third parameter:

    $attributes = array('title' => 'Mail me');
    echo mailto('me@my-site.com', 'Contact Me', $attributes);

### `safe_mailto($email, $title = '', $attributes = '')`

| Parameter    | Type     | Description                     |
| ------------ | -------- | ------------------------------- |
| \$email      | `String` | E-mail address                  |
| \$title      | `String` | Anchor title                    |
| \$attributes | `Mixed`  | HTML attributes                 |
| Returns      | `String` | A spam-safe "mail to" hyperlink |

Identical to the `mailto()` function except it writes an obfuscated version of the `mailto` tag using ordinal numbers written with JavaScript to help prevent the e-mail address from being harvested by spam bots.

### `auto_link($str, $type = 'both', $popup = FALSE)`

| Parameter | Type     | Description                          |
| --------- | -------- | ------------------------------------ |
| \$str     | `String` | Input string                         |
| \$type    | `String` | Link type ('email', 'url' or 'both') |
| \$popup   | `Bool`   | Whether to create popup links        |
| Returns   | `String` | Linkified string                     |

Automatically turns URLs and e-mail addresses contained in a string into links. Example:

    $string = auto_link($string);

The second parameter determines whether URLs and e-mails are converted or just one or the other. Default behavior is both if the parameter is not specified. E-mail links are encoded as `safe_mailto()` as shown above.

Converts only URLs:

    $string = auto_link($string, 'url');

Converts only e-mail addresses:

    $string = auto_link($string, 'email');

The third parameter determines whether links are shown in a new window. The value can be TRUE or FALSE (boolean):

    $string = auto_link($string, 'both', TRUE);

### `url_title($str, $separator = '-', $lowercase = FALSE)`

WARN: Deprecated since version 4.0.0: Use [Text Formatter](development/services/format/text.md) `urlSlug()` method instead.

### `prep_url($str = '')`

WARN: Deprecated since version 4.2.0: Use [Text Formatter](development/services/format/text.md) `url()` method instead.

### `redirect($uri = '', $method = 'auto', $code = NULL)`

| Parameter | Type     | Description                                       |
| --------- | -------- | ------------------------------------------------- |
| \$uri     | `String` | URI string                                        |
| \$method  | `String` | Redirect method ('auto', 'location' or 'refresh') |
| \$code    | `String` | HTTP Response code (usually 302 or 303)           |
| Returns   | `Void`   |                                                   |

Does a "header redirect" to the URI specified. If you specify the full site URL that link will be built, but for local links simply providing the URI segments to the controller you want to direct to will create the link. The function will build the URL based on your config file values.

The optional second parameter allows you to force a particular redirection method. The available methods are `auto`, `location` and `refresh`, with location being faster but less reliable on IIS servers. The default is `auto`, which will attempt to intelligently choose the method based on the server environment.

The optional third parameter allows you to send a specific HTTP Response Code - this could be used for example to create 301 redirects for search engine purposes. The default Response Code is 302. The third parameter is _only_ available with `location` redirects, and not `refresh`. Examples:

    if ($logged_in == FALSE)
    {      
        redirect('/login/form/');
    }

    // with 301 redirect
    redirect('/article/13', 'location', 301);

NOTE: **Note:** In order for this function to work it must be used before anything is outputted to the browser since it utilizes server headers.

NOTE: **Note:** For very fine grained control over headers, you should use the `EE_Output::set_header()` method.

NOTE: **Note:** When the `location` method is used, an HTTP status code of 303 will _automatically_ be selected when the page is currently accessed via POST and HTTP/1.1 is used.

NOTE: **Important:** This function will terminate script execution.
