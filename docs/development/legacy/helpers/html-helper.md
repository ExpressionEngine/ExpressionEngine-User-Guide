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

# HTML Helper

The HTML Helper file contains functions that assist in working with HTML. This helper is loaded using the following code:

    ee()->load->helper('html');

## Available Functions

[TOC=3]

### `heading([$data = ''[, $h = '1'[, $attributes = '']]])`

| Parameter    | Type     | Description      |
| ------------ | -------- | ---------------- |
| \$data       | `String` | Content          |
| \$h          | `String` | Heading level    |
| \$attributes | `Array`  | HTML attributes  |
| Returns      | `String` | HTML heading tag |

Lets you create HTML heading tags. The first parameter will contain the data, the second the size of the heading. Example:

    echo heading('Welcome!', 3);

The above would produce: &lt;h3&gt;Welcome!&lt;/h3&gt;

Additionally, in order to add attributes to the heading tag such as HTML classes, ids or inline styles, a third parameter is available:

    echo heading('Welcome!', 3, 'class="pink"')

The above code produces:

    <h3 class="pink">Welcome!<h3>

### `img([$src = ''[, $index_page = FALSE[, $attributes = '']]])`

| Parameter    | Type     | Description                                   |
| ------------ | -------- | --------------------------------------------- |
| \$src        | `String` | Image source data                             |
| \$index_page | `Bool`   | Whether to treat \$src as a routed URI string |
| \$attributes | `Array`  | HTML attributes                               |
| Returns      | `String` | HTML image tag                                |

Lets you create HTML `<img />` tags. The first parameter contains the image source. Example:

    echo img('images/picture.jpg'); // gives <img src="https://site.com/images/picture.jpg" />

There is an optional second parameter that is a `TRUE`/`FALSE` value that specifics if the `src` should have the page specified by `$config['index_page']` added to the address it creates. Presumably, this would be if you were using a media controller:

    echo img('images/picture.jpg', TRUE); // gives <img src="https://site.com/index.php/images/picture.jpg" alt="" />

Additionally, an associative array can be passed to the `img()` function for complete control over all attributes and values. If an `alt` attribute is not provided, CodeIgniter will generate an empty string.

Example:

    $image_properties = array(
        'src'   => 'images/picture.jpg',
        'alt'   => 'Me, demonstrating how to eat 4 slices of pizza at one time',
        'class' => 'post_images',
        'width' => '200',
        'height'=> '200',
        'title' => 'That was quite a night',
        'rel'   => 'lightbox'
    );

    img($image_properties);
    // <img src="https://site.com/index.php/images/picture.jpg" alt="Me, demonstrating how to eat 4 slices of pizza at one time" class="post_images" width="200" height="200" title="That was quite a night" rel="lightbox" />

### `link_tag([$href = ''[, $rel = 'stylesheet'[, $type = 'text/css'[, $title = ''[, $media = ''[, $index_page = FALSE]]]]]])`

| Parameter    | Type     | Description                                   |
| ------------ | -------- | --------------------------------------------- |
| \$href       | `String` | What are we linking to                        |
| \$rel        | `String` | Relation type                                 |
| \$type       | `String` | Type of the related document                  |
| \$title      | `String` | Link title                                    |
| \$media      | `String` | Media type                                    |
| \$index_page | `Bool`   | Whether to treat \$src as a routed URI string |
| Returns      | `String` | HTML link tag                                 |

Lets you create HTML `<link />` tags. This is useful for stylesheet links, as well as other links. The parameters are `href`, with optional `rel`, `type`, `title`, `media` and `index_page`.

`index_page` is a boolean value that specifies if the `href` should have the page specified by `$config['index_page']` added to the address it creates.

Example:

    echo link_tag('css/mystyles.css');
    // gives <link href="https://site.com/css/mystyles.css" rel="stylesheet" type="text/css" />

Further examples:

    echo link_tag('favicon.ico', 'shortcut icon', 'image/ico');
    // <link href="https://site.com/favicon.ico" rel="shortcut icon" type="image/ico" />

    echo link_tag('feed', 'alternate', 'application/rss+xml', 'My RSS Feed');
    // <link href="https://site.com/feed" rel="alternate" type="application/rss+xml" title="My RSS Feed" />

Additionally, an associative array can be passed to the `link()` function for complete control over all attributes and values:

    $link = array(
        'href'  => 'css/printer.css',
        'rel'   => 'stylesheet',
        'type'  => 'text/css',
        'media' => 'print'
    );

    echo link_tag($link);
    // <link href="https://site.com/css/printer.css" rel="stylesheet" type="text/css" media="print" />

### `ul($list[, $attributes = ''])`

| Parameter    | Type     | Description                   |
| ------------ | -------- | ----------------------------- |
| \$list       | `Array`  | List entries                  |
| \$attributes | `Array`  | HTML attributes               |
| Returns      | `String` | HTML-formatted unordered list |

Permits you to generate ordered or unordered HTML lists from simple or multi-dimensional arrays. Example:

    $list = array(
        'red',
        'blue',
        'green',
        'yellow'
    );

    $attributes = array(
        'class' => 'boldlist',
        'id'    => 'mylist'
    );

    echo ul($list, $attributes);

The above code will produce this:

    <ul class="boldlist" id="mylist">
        <li>red</li>
        <li>blue</li>
        <li>green</li>
        <li>yellow</li>
    </ul>

Here is a more complex example, using a multi-dimensional array:

    $attributes = array(
        'class' => 'boldlist',
        'id'    => 'mylist'
    );

    $list = array(
        'colors'  => array(
            'red',
            'blue',
            'green'
        ),
        'shapes'  => array(
            'round',
            'square',
            'circles' => array(
                'ellipse',
                'oval',
                'sphere'
            )
        ),
        'moods'  => array(
            'happy',
            'upset' => array(
                'defeated' => array(
                    'dejected',
                    'disheartened',
                    'depressed'
                ),
                'annoyed',
                'cross',
                'angry'
            )
        )
    );

    echo ul($list, $attributes);

The above code will produce this:

    <ul class="boldlist" id="mylist">
        <li>colors
            <ul>
                <li>red</li>
                <li>blue</li>
                <li>green</li>
            </ul>
        </li>
        <li>shapes
            <ul>
                <li>round</li>
                <li>square</li>
                <li>circles
                    <ul>
                        <li>ellipse</li>
                        <li>oval</li>
                        <li>sphere</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>moods
            <ul>
                <li>happy</li>
                <li>upset
                    <ul>
                        <li>defeated
                            <ul>
                                <li>dejected</li>
                                <li>disheartened</li>
                                <li>depressed</li>
                            </ul>
                        </li>
                        <li>annoyed</li>
                        <li>cross</li>
                        <li>angry</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>

### `ol($list, $attributes = '')`

| Parameter    | Type     | Description                 |
| ------------ | -------- | --------------------------- |
| \$list       | `Array`  | List entries                |
| \$attributes | `Array`  | HTML attributes             |
| Returns      | `String` | HTML-formatted ordered list |

Identical to `ul()`, only it produces the `<ol>` tag for ordered lists instead of `<ul>`.

### `meta([$name = ''[, $content = ''[, $type = 'name'[, $newline = "n"]]]])`

| Parameter | Type     | Description       |
| --------- | -------- | ----------------- |
| \$name    | `String` | Meta name         |
| \$content | `String` | Meta content      |
| \$type    | `String` | Meta type         |
| \$newline | `String` | Newline character |
| Returns   | `String` | HTML meta tag     |

Helps you generate meta tags. You can pass strings to the function, or simple arrays, or multidimensional ones.

Examples:

    echo meta('description', 'My Great site');
    // Generates:  <meta name="description" content="My Great Site" />

    echo meta('Content-type', 'text/html; charset=utf-8', 'equiv');
    // Note the third parameter.  Can be "equiv" or "name"
    // Generates:  <meta http-equiv="Content-type" content="text/html; charset=utf-8" />

    echo meta(array('name' => 'robots', 'content' => 'no-cache'));
    // Generates:  <meta name="robots" content="no-cache" />

    $meta = array(
        array(
            'name' => 'robots',
            'content' => 'no-cache'
        ),
        array(
            'name' => 'description',
            'content' => 'My Great Site'
        ),
        array(
            'name' => 'keywords',
            'content' => 'love, passion, intrigue, deception'
        ),
        array(
            'name' => 'robots',
            'content' => 'no-cache'
        ),
        array(
            'name' => 'Content-type',
            'content' => 'text/html; charset=utf-8', 'type' => 'equiv'
        )
    );

    echo meta($meta);
    // Generates:
    // <meta name="robots" content="no-cache" />
    // <meta name="description" content="My Great Site" />
    // <meta name="keywords" content="love, passion, intrigue, deception" />
    // <meta name="robots" content="no-cache" />
    // <meta http-equiv="Content-type" content="text/html; charset=utf-8" />

### `doctype([$type = 'xhtml1-strict'])`

| Parameter | Type     | Description      |
| --------- | -------- | ---------------- |
| \$type    | `String` | Doctype name     |
| Returns   | `String` | HTML DocType tag |

Helps you generate document type declarations, or DTD's. XHTML 1.0 Strict is used by default, but many doctypes are available.

Example:

    echo doctype(); // <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

    echo doctype('html4-trans'); // <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "https://www.w3.org/TR/html4/strict.dtd">

The following is a list of doctype choices.

| Document type          | Option        | Result                                                                                                                      |
| ---------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| XHTML 1.1              | xhtml11       | `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "https://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">`                         |
| XHTML 1.0 Strict       | xhtml1-strict | `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">`             |
| XHTML 1.0 Transitional | xhtml1-trans  | `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">` |
| XHTML 1.0 Frameset     | xhtml1-frame  | `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">`         |
| HTML 5                 | html5         | `<!DOCTYPE html>`                                                                                                           |
| HTML 4 Strict          | html4-strict  | `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "https://www.w3.org/TR/html4/strict.dtd">`                                |
| HTML 4 Transitional    | html4-trans   | `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "https://www.w3.org/TR/html4/loose.dtd">`                    |
| HTML 4 Frameset        | html4-frame   | `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "https://www.w3.org/TR/html4/frameset.dtd">`                     |

### `br([$count = 1])`

Generates line break tags (`<br />`) based on the number you submit.

WARN: Deprecated since version 3.2.0: Use the native `str_repeat()` in combination with `<br />` instead.

### `nbs([$num = 1])`

Generates non-breaking spaces (`&nbsp;`) based on the number you submit.

WARN: Deprecated since version 3.2.0: Use the native `str_repeat()` in combination with `&nbsp;` instead.
