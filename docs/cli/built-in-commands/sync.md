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

This command has no options

### Example:

`php eecli.php sync:file-usage`
