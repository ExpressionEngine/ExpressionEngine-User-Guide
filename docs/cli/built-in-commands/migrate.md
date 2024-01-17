# CLI Migrations

Generate, run and rollback migrations via the CLI.

TIP: If you would like to make your own migrations, see [make:migration](cli/built-in-commands/make-migration.md) for details on how to generate a migration.

Check out our video tutorial on running migrations and rolling back!
<div class="video-wrapper">
<iframe src="https://www.youtube.com/embed/iD0f6oVBd28?vq=HD1080" width="1920" height="1080" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>



[TOC]

## php eecli.php migrate:

### Options list:

```
    --steps=<value>
    -s <value>
        Specify the number of migrations to run

    --everything
    -e
        Run all migrations. Core runs first, all add-on migrations, one at a time.

    --all
        Run all migrations. Alias for --everything

    --core
    -c
        Run only core migrations. This excludes all add-on migrations.

    --addon=<value>
    -a <value>
        Run migration only for specified addon.

    --addons
        Run migration only for specified addon.
```



## Running all migrations:

The following commands will run all available migrations. They are aliases for each other.

`php eecli.php migrate --all`

`php eecli.php migrate --everything`

`php eecli.php migrate -e`

`php eecli.php migrate:all`


## Running only core migrations:

The following commands will run all core migrations. They are aliases for each other.

`php eecli.php migrate -c`

`php eecli.php migrate --core`

`php eecli.php migrate:core`

## Running only migrations for single addon:

`php eecli.php migrate -a my_addon`

`php eecli.php migrate:addon -a my_addon`

## Running only migrations for all addons:

`php eecli.php migrate --addons`

`php eecli.php migrate:addon --all`

## Rolling back one migration group:

`php eecli.php migrate:rollback`

## Rolling back three migration groups:

`php eecli.php migrate:rollback --steps=3`

## Rolling back all migration groups:

`php eecli.php migrate:reset`
