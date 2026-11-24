# update

Update -- Updates ExpressionEngine

## Options list:

```
    --rollback
        Roll back an interrupted update using the recovery files.

    --complete
        Retry the final steps of an update after the new version was installed.

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

Use [Troubleshooting Automatic Updates](troubleshooting/general.md#troubleshooting-automatic-updates) to choose between completing an update and rolling it back.
