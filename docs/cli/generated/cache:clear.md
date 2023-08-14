SUMMARY
    Clear Cache -- This allows for EE caches to be cleared.

    Available options:
    'all': Clear all caches
    'page': Clear template caches
    'tag': Clear tag caches
    'db': Clear database caches

USAGE
    Clear Cache php eecli.php cache:clear --type=tag | php eecli.php cache:clear -t tag

DESCRIPTION
    Clears all ExpressionEngine caches

OPTIONS
    --type=<value>
    -t <value>
        Type of cache to clear (default: all)

