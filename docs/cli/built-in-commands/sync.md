# Data Synchronization

## `sync:conditional-fields`

Sync Conditional Field Logic -- Checks each channel entry to see if its connditional logic is correct. If it is not, it updates the conditional logic and saves the entry.

### Options list:

```
    --channel_id=<value>
    -c <value>
        Channel ID to sync. Defaults to all channels

    --verbose
    -v
        Verbose

    --clear
    -x
        Clear
```

### Examples:

#### Sync all conditional fields:

`php eecli.php sync:conditional-fields`

#### Sync conditional fields for channel_id 1 in verbose mode:

`php eecli.php sync:conditional-fields --channel_id=1 -v`



## `sync:file-usage`

Running this command will convert saved file information from `{filedir_X}filename.ext` format to `{file:XX:url}` format and update information on where each file is being used.

### Options list:

    --site_id=<value>
    -s <value>
        Site ID. Skip this parameter to reindex content on all sites

### Example:

`php eecli.php sync:file-usage`


## `sync:reindex`

The searchable content might become stale if you have recently changed properties of some fields. Reindexing will re-populate the data used by complex fields in search and Entry Manager.

### Options list:

This command has no options

### Example:

#### Reindex content for Site 1 only

`php eecli.php sync:reindex --site_id=1`
`php eecli.php sync:reindex -s 1`

#### Reindex content for all sites

`php eecli.php sync:reindex`