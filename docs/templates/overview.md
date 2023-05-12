<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Template Overview

[TOC]

## What is a Template?

Templates can be considered as a single page of your site, but they're much more than that. In ExpressionEngine, a template can be any of the following:

- An entire webpage of your site.
- A sub-section of your site, like a header or footer.
- A page that can output a variety of information types (RSS, CSS, HTML, XML, etc.)

Because a Template is just a container that outputs information, you can create Templates for any type of data you need to present (RSS, CSS, HTML, XML, etc.).

Templates can also be a smaller component of your page. Through the use of the [Embed Tag](templates/embedding.md) you can insert a Template into another Template.

### How They Work

Templates are organized into Template Groups. A Template Group is analogous to a folder on your server.

In ExpressionEngine, a URL always contains the following structure, which allows a Template Group and a specific Template to be shown:

```md
https://example.com/template_group/template
```

In addition to HTML and other markup, templates usually contain [ExpressionEngine Tags](templates/language.md), which allows information to be served dynamically.

## Creating & Editing Templates

Templates can be created and edited in the `Developer -> Templates` area of your Control Panel.

![Templates List](_images/templates-list.png)

You start off by creating template group. When creating, you will have options to duplicate existing group with all templates in it. You are also able to select the roles that will have editing permissions for templates in this group.

Then, create individual templates. You can duplicate existing template, or create blank one. If necessary, change the template type from "Webpage" to the type that you need (RSS Page, CSS, JavaScript, Static, XML)

Existing templates can be edited with built-in editor, which provides intelligent syntax highlighting.

TIP: **Tip:** The font size in template editor can be adjusted with a [configuration override](general/system-configuration-overrides.md#codemirror_fontsize).

You can also edit template preferences and set front-end access permissions for it.

![Template Editor](_images/template-edit.png)

## Saving templates as files

Templates are always saved into database, however they can also be saved as files by setting [system configuration override](general/system-configuration-overrides.md#save_tmpl_files)in `system/user/config/config.php`:
```php
$config['save_tmpl_files'] = 'y';
```
ExpressionEngine, by default, saves Template Groups, Templates, Global Variable, and Template Partials as regular folders and files on your server. The directory structure would be similar to shown below

```
|-- system
|   |-- user
|   |   |-- templates
|   |   |   |-- _global_partials
|   |   |   |   |-- _header.html
|   |   |   |   |-- _footer.html
|   |   |   |-- _global_variables
|   |   |   |   |-- logo.html
|   |   |   |-- default_site
|   |   |   |   |-- _partials
|   |   |   |   |   |-- sidebar.html
|   |   |   |   |-- _variables
|   |   |   |   |   |-- address.html
|   |   |   |   |-- blog.group
|   |   |   |   |   |-- entry.html
|   |   |   |   |   |-- feed.xml
|   |   |   |   |   |-- index.html
|   |   |   |   |-- home.group
|   |   |   |   |   |-- contact.html
|   |   |   |   |   |-- about.html
|   |   |   |   |   |-- index.html
|   |   |   |   |-- styles.group
|   |   |   |   |   |-- contact.css
|   |   |   |   |   |-- index.css
|   |   |   |-- second_msm_site
|   |   |   |   |-- _partials
|   |   |   |   |   |-- sidebar.html
|   |   |   |   |-- _variables
|   |   |   |   |   |-- address.html
|   |   |   |   |-- home.group
|   |   |   |   |   |-- about.html
|   |   |   |   |   |-- index.html
```

This allows you to use your preferred text editor to edit Templates and then FTP the changes to the server.

`default_site` and `second_msm_site` are the site short names if you're running [Multiple Site Manager](msm/overview.md). If you have just one site, `default_site` is going to be the only one you need.

`_partials` folder will be holding your [template partials](templates/partials.md) for the site, and `_global_partials` will be holding partials that are shared through all MSM sites.

`_variables` folder will be holding your [template variables](templates/variable.md) for the site, and `_global_variables` will be holding variables that are shared through all MSM sites.

These are the naming rules that ExpressionEngine applies to these resources:

- Template Group folder names must end with _.group_ and the preceding name must be URL safe (contain only letters, numbers, dashes, underscores and dots).
- Template Files must be in an appropriately named group folder. They must end with an approved extension and must be URL safe. Approved extensions and the associated template type they will result in are:
  - _.html_ creates a 'webpage' template type
  - _.feed_ creates an 'rss' template type
  - _.css_ creates a 'css' template type
  - _.js_ creates a 'js' template type
  - _.xml_ creates an 'xml' template type
- Template group names (not including the .group) and template names (not including the .extension) are limited to 50 characters. Anything longer than that will be truncated by the database and fail to match the file.

Having several templates with same name but different extensions is not supported.

The existing templates are syncronized with the files as soon as any site page is accessed. However if you created new template or new template group on file system, you need to visit `Developer -> Templates` section of Control Panel in order to have them created in database.

## Hidden Templates

Sometimes it is undesirable to allow access to a template via a URL. For instance, a template that you only use as an [embedded template](templates/embedding.md) would likely be an incomplete HTML document, and you wouldn't want visitors to be able to view that template by itself.

"Hidden" templates are just that: templates that cannot be accessed from a URL, but can be used as embedded templates. To make a template "hidden", give it a name preceded by an underscore, e.g. `_my_hidden_template`.

When someone attempts to access a hidden template via a URL, one of two things will occur. If you have specified a 404 template in your [Template Settings](control-panel/settings/template.md), then the 404 template will be displayed, with 404 headers. If you have not specified a 404 template, then the index template of the requested template group will be displayed.

### Changing the Hidden Template Indicator

By default, a template is hidden when an underscore prefixes the template name, but this can be changed with a configuration variable set in `system/user/config/config.php`:

```php
$config['hidden_template_indicator'] = '.';
```

## Hit Counters

Every time a template is accessed, a counter is incremented. To display the number of hits, put the following variable in any template:

    {hits}

The hit count for each template can be manually altered in the template's preferences under `Developer --> Templates`.

## PHP in Templates

NOTE: **Important:** Enabling PHP in a template enables anyone with editing rights for that template to become a de-facto Super Admin since they can execute any PHP they want in that template, including PHP that can reveal information about your system, PHP that can delete data from your database, etc. Exercise extreme caution before enabling this option if you permit others to edit your templates.
Additionally, PHP code in templates will operate slower than same code wrapped in plugin or module function.

ExpressionEngine allows you to place [PHP](https://www.php.net/) code within your Templates so that it can be executed, allowing more dynamic capability with your content.

In order for this feature to be available, it needs to be enabled by adding 
```php
    $config['allow_php'] = 'y';
```
to your `config.php` file.

NOTE: **Important:** When upgrading from an earlier version of ExpressionEngine to v6, the `allow_php` config override will automatically be set to 'y' if templates already exists that have PHP enabled.

To enable PHP in particular template, set the *Allow PHP?* setting to Yes. Because PHP is a per-template setting, you can embed a Template that has PHP *enabled* into another Template which does *not* have PHP enabled.

### PHP Parsing Stage

There are two choices for when PHP gets parsed:

- **Input** -- PHP will be parsed *before* template tags get rendered. Parsing PHP on Input will allow you to do things such as:

      {exp:channel:entries limit="<?php echo $limit; ?>"}

      <?php
      if ($show_list) {
          echo "{exp:channel:entries limit='50'}";
      }
- **Output** -- PHP will be parsed *after* the template tags are rendered. This will allow you to use PHP to affect the "rendered Template".

You can read more about template parsing order here: [Template Engine](templates/engine.md).
