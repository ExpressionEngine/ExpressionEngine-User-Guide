<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Template Generators

[TOC]

ExpressionEngine provides a set of template generators that allow you to quickly scaffold templates based on your existing data structures (channels, custom fields, etc.). The template generators are available through both the Control Panel and the Command Line Interface (CLI). The generated templates will demonstrate the most common ways of accessing the data. Additionally, the templates have a settings option to also include comments and links to the field's documentation.

## Control Panel Usage

Before you can use the template generators you will need to set up your channels and custom fields. Once this is done you can navigate to `Developer > Templates > Template Generator`.

![ExpressionEngine Control Panel Template Generator](_images/cp-template-generators.png)

Select the generator that you want along with any available options and then type in a name for the template group that will be created.

Upon successful generation of new templates, you will be brought to the Template Group page so that you may view and modify any of the generated files.

## Command Line Usage

You can also generate templates using [ExpressionEngine's Command Line Interface (CLI)](/cli/usage.md). The main CLI command to access all template generators in the system is: `php system/ee/eecli.php generate:templates`.

To get the list of available template generators, pass the `--list` option to the command:

```bash
php system/ee/eecli.php generate:templates --list
```

To run a specific template generator, pass its full name as the first argument to the command:

```bash
php system/ee/eecli.php generate:templates channel:entries
```

Each template generator can be configured with the following options while some may offer additional input.

`--template_group="blog"` - The name of the template group which will contain the new templates. Required

`--template_engine=twig` - When using [Coilpack](https://expressionengine.github.io/coilpack-docs/) multiple template engines are available. This option lets you specify which template engine to use for template generation. The default is native.

`--site_id=1` - With MSM you may generate templates for a specific site by referencing the Site ID. If your installation has only one site this can be omitted.

`--templates="all"` - Specify "all" (default) to generate all templates provided by the generator, or specify a comma-separated list of template names that you want. For example: `--templates="index,single"` will only generate the `index` and `single` templates.

`--show` - When this parameter is specified the template content will be displayed but no templates will be created.

## Available Template Generators

### Channel Entries

The Channel Entries generator creates several templates to list and render entries for the specified channels.

**Options**:

- Channel (Required): Select one or more channels that you want to use in templates

**CLI Usage**:

```bash
php system/ee/eecli.php generate:templates channel:entries --template_group=news --templates=all --channel=news
```

### Channel Form

The Channel Form generator creates a template utilizing Channel Form tags for a customizable publishing experience.

**Options**:

- Channel (Required): Select the channel that you want to use in templates

**CLI Usage**:

```bash
php system/ee/eecli.php generate:templates channel:form --template_group=artists --channel=artists
```

### Member Management

The Member Management generator creates a series of templates to help you get started building a custom member experience.

**CLI Usage**:

```bash
php system/ee/eecli.php generate:templates member:profile --template_group=members
```

## Developer Documentation

To learn more about having an Add-on integrate with Template Generators check out the [Template Generator Service](development/services/template-generator.md).
