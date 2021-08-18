# php eecli.php cache:clear

Clear Cache -- This allows for EE caches to be cleared.

## Options list:

```
    --type=<value>
    -t <value>
        Type of cache to clear (default: all)

```

### Available cache types to be cleared:

 - all - Clear all caches
 - page - Clear template caches
 - tag - Clear tag caches
 - db - Clear database caches

## Examples:

To clear all caches, use `php eecli.php cache:clear --type=all`

To clear a specific cache, for example db cache, use `php eecli.php cache:clear --type=db`
