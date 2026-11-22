# `update:db`

Update Database -- Runs ExpressionEngine database updates only

Use this command when your ExpressionEngine files are already in place and you only need to run database update steps.

## Syntax

`php eecli.php update:db`

## Options list:

```
    --rollback
        Rollback last database update

    --verbose
    -v
        Verbose output

    -y
        Skip all confirmations. Advanced use only.

    --skip-cleanup
        Skip cleanup steps after update

    --to-version=<value>
        Target database version to upgrade to

    --from-version=<value>
        Starting database version to upgrade from
```

## Examples:

`php eecli.php update:db`

`php eecli.php update:db --from-version=7.5.0 --to-version=7.5.3 -y`

`php eecli.php update:db --rollback -y`

## Operational caveats

- `--to-version` cannot be greater than your installed app version.
- If your database is already at or above the target version, the command exits without running updates.
- If `--from-version` does not match the detected database version, the command prints a warning before continuing.
- When running against a local installer payload, `EE_INSTALL_MODE` must be set to `TRUE` in `.env.php`.

## Rollback notes

- Rollback requires a backup SQL file at `system/user/cache/ee_update/database.sql`.
- If that backup file does not exist, rollback cannot run.
