# `sync:reindex`

The searchable content in your site may become stale after changing properties of some fields. Running the `sync:reindex` command will ensure fresh data is used by complex fields in the Entry Manager and search contexts.

## Options list:

```
    --site_id=<value>
    -s <value>
        Site ID. Skip this parameter to re-index content on all sites
```

## Examples:

### Re-index content for all sites

`php eecli.php sync:reindex`

### Re-index content for Site ID 1 only

`php eecli.php sync:reindex --site_id=1`
`php eecli.php sync:reindex -s 1`