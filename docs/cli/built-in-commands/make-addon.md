# `make:addon`

Generates required add-on files in the `system/user/addons` directory.

TIP: Read the [Add-on Development Overview](development/addon-development-overview.md) to learn more about creating an add-on.

## Options list:

The first (unnamed) parameter is the add-on name.

Other options are:
```
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
```
## Examples:

### Interactive example
```
    $ php system/ee/eecli.php make:addon
    Let's build your add-on!
    What is the name of your add-on? Amazing Add-On
    Add-on description? [Amazing Add-on description] This add-on does amazing things!
    Add-on version? [1.0.0]1.0.0
    Add-on author? ExpressionEngine Developer
    Add-on author URL? www.expressionengine.com
    Let's build!
    Your add-on has been created successfully!
```

### One-line example

`php ../../system/ee/eecli.php make:addon "My Example Addon" -v 0.1.0 -d "Some good description" -a "ExpressionEngine" -u https://expressionengine.com`