# Add-on Generator

Set of CLI commands that allows scaffloding add-on files.

TIP: Read the [Add-on Development Overview](development/addon-development-overview.md) to learn about the files your add-on will need.

[TOC]

## `make:addon`

Generates add-on files that are bare necessity and places those in `system/user/addons` directory.

### Options list:

The first (unnamed) parameter is the add-on name.

Other options are:

    --version=<value>
    -v <value>
        Version of the add-on

    --description=<value>
    -d <value>
        Description of the add-on

    --author=<value>
    -a <value>
        Author of the add-on

    --author-url=<value>
    -u <value>
        Author url of the add-on

### Examples:

#### Interactive example

    $ php system/ee/eecli.php make:addon
    Let's build your add-on!
    What is the name of your add-on? Amazing Add-On
    Add-on description? [Amazing Add-on description] This add-on does amazing things!
    Add-on version? [1.0.0]1.0.0
    Add-on author? ExpressionEngine Developer
    Add-on author URL? www.expressionengine.com
    Let's build!
    Your add-on has been created successfully!

#### One-line example

`php ../../system/ee/eecli.php make:addon "My Example Addon" -v 0.1.0 -d "Some good description" -a "ExpressionEngine" -u https://expressionengine.com`


## `make:action`

Action Generator -- Creates a new action for an add-on

### Options list:

The first (unnamed) parameter is the action name.

The other options are

    --addon=<value>
    -a <value>
        Folder for third-party add-on you want to add action to

### Examples:

#### Generating an action:

`php eecli.php make:action MyNewAction --addon=my_existing_addon`



## `make:command`

Command Generator -- Creates a new CLI command for an add-on

### Options list:

The first (unnamed) parameter is the command name.

The other options are

    --addon=<value>
    -a <value>
        Folder for third-party add-on you want to add command to

    --description=<value>
    -d <value>
        Description of command

    --signature=<value>
    -s <value>
        Signature for command (i.e. make:magic)

### Examples:

#### Generating a command:

`php eecli.php make:command "Awesome CLI Command" --addon=my_example_addon --description='This command is awesome' --signature='my_addon:awesome-example'`



## `make:cp-route`

This interactively generates a control panel route in an existing third-party addon

### Options list:

The first (unnamed) parameter is the route name.

The other options are

    --addon=<value>
    -a <value>
        Folder for third-party add-on you want to add Mcp Route to.

### Examples:

` php eecli.php make:cp-route MyNewRoute --addon=my_existing_addon`



## `make:extension-hook`

Extension Hook Generator -- Implements an EE extension hook in an add-on

### Options list:

The first (unnamed) parameter is the extension hook name.

The other options are

    --addon=<value>
    -a <value>
        Folder for third-party add-on you want to add extension hook to

### Examples:

#### Implementing the sessions_start extension hook:

`php eecli.php make:extension-hook sessions_start --addon=my_existing_addon`



## `make:fieldtype`

Fieldtype Generator -- This interactively generates a fieldtype in an existing third-party addon

### Options list:

The first (unnamed) parameter is the fieldtype name.

The other options are

    --addon=<value>
    -a <value>
        Folder for third-party add-on you want to add fieldtype to

### Examples:

#### Generating a fieldtype:

`php eecli.php make:fieldtype MyNewFieldtype --addon=my_existing_addon`



## `make:jump`

Jumps File Generator -- Generates a jump menu file for a given third-party add-on.

### Options list:

    --addon=<value>
    -a <value>
        Folder for third-party add-on you want to add fieldtype to

### Examples:

#### Generating a fieldtype:

`php eecli.php make:jump --addon=my_existing_addon`


## `make:migration`

Make migration -- Creates a new migration

Check out our video tutorial on making migrations!
<div class="video-wrapper">
<iframe src="https://www.youtube.com/embed/4yVgKr9oKto?vq=HD1080" width="1920" height="1080" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> 
</div>

### Options list:

    --name=<value>
    -n <value>
        Name of migration

    --table=<value>
    -t <value>
        Table name

    --status=<value>
    -s <value>
        Status name

    --location=<value>
    -l <value>
        Migration location. Current options are ExpressionEngine or shortname of an add-on that is currently installed. Defaults to ExpressionEngine.

    --create
    -c
        Specify command is a create command

    --update
    -u
        Specify command is an update command

### Examples:

#### Generating a create table migration:

`php eecli.php make:migration --location=my_addon --name create_myaddon_table --create --table=addon_data`

#### Generating an update table migration:

`php eecli.php make:migration --location=my_addon --name add_field_to_myaddon_table --update --table=addon_data`



## `make:model`

Model Generator -- Creates a new model for an add-on

Check out our video tutorial on generating a model!
<div class="video-wrapper">
<iframe src="https://www.youtube.com/embed/PXKGoTyu0IU?vq=HD1080" width="1920" height="1080" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>

### Options list:

The first (unnamed) parameter is the model name.

The other options are

    --addon=<value>
    -a <value>
        Folder for third-party add-on you want to add model to

### Examples:

#### Generating a model for an add-on:

`php eecli.php make:model MyAwesomeModel --addon=my_existing_addon`



## `make:prolet`

Prolet Generator -- Creates a new prolet for an add-on

### Options list:

The first (unnamed) parameter is the prolet name.

The other options are

    --addon=<value>
    -a <value>
        Folder for third-party add-on you want to add prolet to

    --description=<value>
    -d <value>
        Description of prolet

    --has-widget
    -w
        Create a widget for the add-on after generating the prolet (optional)

    --widget-name=<value>
    -n <value>
        Name of widget


### Examples:

#### Generating a prolet:

`php eecli.php make:prolet MyNewProlet --addon=my_addon --description="This is my prolet description"`



## `make:sidebar`

Creates a control panel sidebar for an add-on

### Options list:

    --addon=<value>
    -a <value>
        Folder for third-party add-on you want to add sidebar to.

### Examples:

`php eecli.php make:sidebar --addon=my_existing_addon`



## `make:template-tag`

Tag Generator -- Creates a new template tag for an add-on

### Options list:

The first (unnamed) parameter is the template tag name.

The other options are

    --addon=<value>
    -a <value>
        Folder for third-party add-on you want to add tag to

### Examples:

#### Generating a new tag:

`php eecli.php make:template-tag MyNewTag --addon=my_existing_addon`


## `make:widget`

Widget Generator -- Creates a new CP Dashboard Widget for an add-on

### Options list:

The first (unnamed) parameter is the widget name.

The other options are

    --addon=<value>
    -a <value>
        Folder for third-party add-on you want to add the widget to

## Examples:

### Generating a widget:

`php eecli.php make:widget MyNewWidget --addon=my_existing_addon`
