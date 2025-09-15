# `fieldtypes:list`

Lists all available fieldtypes provided by installed and bundled add-ons.

TIP: If you would like to create custom fieldtypes, see the Fieldtype Development documentation.

## php eecli.php fieldtypes:list

### Options list:

```
    --format=<value>
    -f <value>
        Output format: table, json, or csv

    --installed
    -i
        Show only fieldtypes from installed add-ons

    --addon=<value>
    -a <value>
        Filter by add-on short name(s), comma-separated

    --short=<value>
    -s <value>
        Filter by fieldtype short name(s), comma-separated
```

## Examples:

### Listing all fieldtypes:

The following commands will list all available fieldtypes in table format (default):

`php eecli.php fieldtypes:list`

`php eecli.php fieldtypes:list --format=table`

`php eecli.php fieldtypes:list -f table`

### Listing only installed fieldtypes:

`php eecli.php fieldtypes:list --installed`

`php eecli.php fieldtypes:list -i`

### Filtering by add-on:

`php eecli.php fieldtypes:list --addon=pro_search`

`php eecli.php fieldtypes:list -a channel_files,structure`

### Filtering by fieldtype short name:

`php eecli.php fieldtypes:list --short=text`

`php eecli.php fieldtypes:list -s textarea,select,radio`

### Output in JSON format:

`php eecli.php fieldtypes:list --format=json`

`php eecli.php fieldtypes:list -f json`

### Output in CSV format:

`php eecli.php fieldtypes:list --format=csv`

`php eecli.php fieldtypes:list -f csv`

### Combining filters:

You can combine multiple filters to narrow down your results:

`php eecli.php fieldtypes:list --installed --addon=pro_search --format=json`

`php eecli.php fieldtypes:list -i -s text,textarea -f table`
