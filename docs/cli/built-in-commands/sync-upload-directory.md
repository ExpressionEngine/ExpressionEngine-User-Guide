# `sync:upload-directory`

This command synchronizes the file records in the database with the files stored in a given upload directory. This functionality is also available through the [File Manager](control-panel/file-manager/synchronizing.md).

## Options list:

```
    --upload-id=<value>
    -u <value>
        Upload Directory ID. If not provided, list of Upload Directories with corresponding IDs will be shown to choose from

    --manipulations=<value>
    -m <value>
        Image manipulations to regenerate. Comma separated list of manipulation IDs. Use 'all' to regenerate all manipulations. If not provided, a list of available manipulations with corresponding IDs will be shown to choose from
```

## Example:

`php eecli.php sync:upload-directory --upload-id=6 --manipulations=all`