# `fields:list`

Lists all channel fields in the system with their details in various formats.

TIP: If you would like to create or manage channel fields programmatically, see the ChannelField Model documentation.

## php eecli.php fields:list

### Options list:

```
    --site=<value>
    -s <value>
        Site ID to list fields for

    --format=<value>
    -f <value>
        Output format: table, json, or csv

    --type=<value>
    -t <value>
        Filter by field type (e.g., text, textarea, select)

    --group=<value>
    -g <value>
        Filter by field group name or short name

    --channel_id=<value>
    -c <value>
        Filter by channel ID

    --field_id=<value>
    -i <value>
        Filter by specific field ID
```

## Examples:

### Listing all fields:

The following commands will list all channel fields in table format (default):

`php eecli.php fields:list`

`php eecli.php fields:list --format=table`

`php eecli.php fields:list -f table`

### Listing fields for a specific site:

`php eecli.php fields:list --site=1`

`php eecli.php fields:list -s 1`

### Filtering by field type:

`php eecli.php fields:list --type=text`

`php eecli.php fields:list -t textarea`

### Filtering by field group:

`php eecli.php fields:list --group="Blog Fields"`

`php eecli.php fields:list -g blog_fields`

### Filtering by channel ID:

`php eecli.php fields:list --channel_id=5`

`php eecli.php fields:list -c 5`

### Filtering by field ID:

`php eecli.php fields:list --field_id=10`

`php eecli.php fields:list -i 10`

### Output in JSON format:

`php eecli.php fields:list --format=json`

`php eecli.php fields:list -f json`

### Output in CSV format:

`php eecli.php fields:list --format=csv`

`php eecli.php fields:list -f csv`

### Combining filters:

You can combine multiple filters to narrow down your results:

`php eecli.php fields:list --site=1 --type=text --format=json`

`php eecli.php fields:list -s 1 -t select -g blog_fields -f table`