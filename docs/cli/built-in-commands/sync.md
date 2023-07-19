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


## `sync:upload-directory`

This command allows you to synchronize the file records in the database with the files stored in a given upload directory. This functionality is also available in [File Manager](control-panel/file-manager/synchronizing.md).

### Options list:

    --upload-id=<value>
    -u <value>
        Upload Directory ID. If not provided, list of Upload Directories with corresponding IDs will be shown to choose from

    --manipulations=<value>
    -m <value>
        Image manipulations to regenerate. Comma separated list of manipulation IDs. Use \'all\' to regenerate all manipulations. If not provided, list of available manipulations with corresponding IDs will be shown to choose from

### Example:

`php eecli.php sync:upload-directory --upload-id=6 --manipulations=all`