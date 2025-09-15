# `channels:list`

Lists all channels in the system with their details in various formats.

TIP: If you would like to create or manage channels programmatically, see the Channel Model documentation.

## php eecli.php channels:list

### Options list:

```
    --site=<value>
    -s <value>
        Site ID to list channels for

    --format=<value>
    -f <value>
        Output format: table, json, or csv

    --channel_id=<value>
    -c <value>
        Filter by specific channel ID
```

## Examples:

### Listing all channels:

The following commands will list all channels in table format (default):

`php eecli.php channels:list`

`php eecli.php channels:list --format=table`

`php eecli.php channels:list -f table`

### Listing channels for a specific site:

`php eecli.php channels:list --site=1`

`php eecli.php channels:list -s 1`

### Filtering by channel ID:

`php eecli.php channels:list --channel_id=5`

`php eecli.php channels:list -c 5`

### Output in JSON format:

`php eecli.php channels:list --format=json`

`php eecli.php channels:list -f json`

### Output in CSV format:

`php eecli.php channels:list --format=csv`

`php eecli.php channels:list -f csv`

### Combining filters:

You can combine multiple filters to narrow down your results:

`php eecli.php channels:list --site=1 --format=json`

`php eecli.php channels:list -s 1 -c 5 -f table`