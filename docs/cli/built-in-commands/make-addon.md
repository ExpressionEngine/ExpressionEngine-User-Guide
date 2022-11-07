# make:addon

Addon Generator -- Creates a new add-on

Check out our video tutorial generating an add-on!
<div class="video-wrapper">
<iframe src="https://www.youtube.com/embed/I5rZ322RSJk?vq=HD1080" width="1920" height="1080" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>

## Options list:

```
    --extension
    --ext
        Create an extension

    --plugin
    --pi
        Create a plugin

    --fieldtype
    --ft
        Create a fieldtype

    --module
    --mod
        Create a module

    --typography
    -t
        Should use plugin typography

    --has-settings=<value>
    -e <value>
        Add-on has settings (yes/no)

    --compatibility-mode
    -p
        Generate add-on that is compatible with ExpressionEngine versions lower than 7.2.0 and lower than 6.4.0

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

    --services=<value> [--services=<value> [...]]
    -s <value> [-s <value> [...]]
        Services to create. Multi-pass option.

    --models=<value> [--models=<value> [...]]
    -m <value> [-m <value> [...]]
        Models to create. Multi-pass option.

    --commands=<value> [--commands=<value> [...]]
    -c <value> [-c <value> [...]]
        Commands to create. Multi-pass option.

    --consents=<value> [--consents=<value> [...]]
    -n <value> [-n <value> [...]]
        Consents. Multi-pass option.

    --cookies=<value> [--cookies=<value> [...]]
    -k <value> [-k <value> [...]]
        Cookies to create, with a colon separating name and value (i.e. name:value). Multi-pass option.

    --hooks=<value> [--hooks=<value> [...]]
    -o <value> [-o <value> [...]]
        Hooks in use. Multi-pass option.

```

## Examples:

### Generating an extension:

`php eecli.php make:addon example_extension --ext --description "Description of addon" --version="1.0.0" --author="Joe Shmoe" --author-url='www.example.com' --has-settings='yes' --hooks=cp_custom_menu`

### Generating a module:

`php eecli.php make:addon my_awesome_mod --mod --description "Description of addon" --version="1.0.0" --author="Joe Shmoe" --author-url='www.example.com' --has-settings='yes'`

### Generating a module in compatibility mode:

`php eecli.php make:addon my_awesome_mod --mod --description "Description of addon" --version="1.0.0" --author="Joe Shmoe" --author-url='www.example.com' --has-settings='yes' --compatibility-mode`

