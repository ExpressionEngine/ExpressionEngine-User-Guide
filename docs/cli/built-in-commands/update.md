# update

Update -- Updates ExpressionEngine

## Options list:

```
    --rollback
        Rollback last update

    --verbose
    -v
        Verbose output

    --microapp
        Run as microapp

    --step=<value>
        command_update_option_step:

    --no-bootstrap
        Runs with no bootstrap

    --force-addon-upgrades
        Automatically runs all addon updaters at end of update (advanced)

    -y
        Skip all confirmations. Don't do this.
```

## Examples:

`php eecli.php update --verbose`

## Related: `update:db`

Use [`update:db`](cli/built-in-commands/update-db.md) when you need to run only database update steps.

- `update` updates files and database.
- `update:db` updates only the database steps.
