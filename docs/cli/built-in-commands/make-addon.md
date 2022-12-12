# make:addon

Addon Generator -- Creates a new add-on

Check out our video tutorial generating an add-on!
<div class="video-wrapper">
<iframe src="https://www.youtube.com/embed/I5rZ322RSJk?vq=HD1080" width="1920" height="1080" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>

## Options list:

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

### Generating an add-on:

`php eecli.php make:addon amazing_add_on --description "Description of addon" --version="1.0.0" --author="Joe Shmoe" --author-url='www.example.com'`

TIP: For more information on using the `make:addon` command to create new add-on, reference [Getting Started](development/addon-development-overview.md#getting-started) in the Building An Add-On section of the docs.