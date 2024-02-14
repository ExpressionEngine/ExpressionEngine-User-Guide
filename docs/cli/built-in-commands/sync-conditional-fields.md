# sync:conditional-fields

Sync Conditional Field Logic -- Checks each channel entry to see if its conditional logic is correct. If it is not, it updates the conditional logic and saves the entry.

## Options list:

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

## Examples:

### Sync all conditional fields:

`php eecli.php sync:conditional-fields`

### Sync conditional fields for channel_id 1 in verbose mode:

`php eecli.php sync:conditional-fields --channel_id=1 -v`
