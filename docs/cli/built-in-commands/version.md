# `version`

Shows the current ExpressionEngine version and system information.

TIP: If you would like to check version information programmatically, see the Config Service documentation.

## php eecli.php version

### Options list:

```
    --format=<value>
    -f <value>
        Output format: simple, or json

    --field=<value>
    -e <value>
        Output only a specific field: version, build, or php_version
```

## Examples:

### Showing version information:

The following commands will show ExpressionEngine version information in simple format (default):

`php eecli.php version`

`php eecli.php version --format=simple`

`php eecli.php version -f simple`

### Output in JSON format:

`php eecli.php version --format=json`

`php eecli.php version -f json`

### Getting specific field values:

`php eecli.php version --field=version`

`php eecli.php version -e build`

`php eecli.php version --field=php_version`

---

ExpressionEngine 7 Docs
©2002–2025 Packet Tide,LLC. Edit this page
