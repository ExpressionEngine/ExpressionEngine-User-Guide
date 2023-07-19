# Command Line Interface (CLI)

The Command Line Interface (CLI) allows a user to run system and user-generated commands in the terminal. The CLI has access to all of the ExpressionEngine resources, and can be used to update the system, clear caches, and much more.

By default the CLI is located `system/ee/eecli.php` . 

![EE CLI](_images/6-1_cli.png)

- [Basic Usage](cli/usage.md)
- Built In Commands
    - Addons
        - [addons:install](cli/built-in-commands/addons.md#addonsinstall) - Installs add-on and all its components
        - [addons:list](cli/built-in-commands/addons.md#addonslist) - List the add-ons
        - [addons:uninstall](cli/built-in-commands/addons.md#addonsuninstall) - Uninstalls add-on and all its components
        - [addons:update](cli/built-in-commands/addons.md#addonsupdate) - Updates an add-on to the latest version
    - Backup
        - [backup:database](cli/built-in-commands/backup-database.md) - Backup the database
    - Cache
        - [cache:clear](cli/built-in-commands/cache-clear.md) - Clears all ExpressionEngine caches
    - Config
        - [config:config](cli/built-in-commands/config-management.md#configconfig) - Updates config values in config.php file
        - [config:env](cli/built-in-commands/config-management.md#configenv) - Updates env values in .env.php file
    - List
        - [list](cli/built-in-commands/list.md) - Lists available commands
    - Make
        - [make:addon](cli/built-in-commands/make-addon.md#makeaddon) - Creates a new add-on
        - [make:action](cli/built-in-commands/make-addon.md#makeaction) - Creates a new action for an add-on
        - [make:command](cli/built-in-commands/make-addon.md#makecommand) - Creates a new CLI command for an add-on
        - [make:cp-route](cli/built-in-commands/make-addon.md#makecp-route) - Generates a control panel route for a given third-party add-on*
        - [make:extension-hook](cli/built-in-commands/make-addon.md#makeextension-hook) - Implements an EE extension hook in an add-on
        - [make:fieldtype](cli/built-in-commands/make-addon.md#makefieldtype) - Generates a fieldtype for a given third-party add-on*
        - [make:jump](cli/built-in-commands/make-addon.md#makejump) - Generates a jump menu file for a given third-party add-on*
        - [make:migration](cli/built-in-commands/make-addon.md#makemigration) - Creates a new migration for an add-on
        - [make:model](cli/built-in-commands/make-addon.md#makemodel) - Creates a new model for an add-on
        - [make:prolet](cli/built-in-commands/make-addon.md#makeprolet) - Creates a new prolet for an add-on
        - [make:sidebar](cli/built-in-commands/make-addon.md#makesidebar) - Creates a control panel sidebar for an add-on
        - [make:template-tag](cli/built-in-commands/make-addon.md#maketemplate-tag) - Creates a new template tag for an add-on
        - [make:widget](cli/built-in-commands/make-addon.md#makewidget) - Generates widgets for existing add-ons
    - Migrate
        - [migrate](cli/built-in-commands/migrate.md) - Runs specified migrations (all, core, or add-ons)
        - [migrate:all](cli/built-in-commands/migrate.md) - Runs core migrations, then each add-on's migrations
        - [migrate:addon](cli/built-in-commands/migrate.md) - Runs add-on migrations
        - [migrate:core](cli/built-in-commands/migrate.md) - Runs core migrations
        - [migrate:reset](cli/built-in-commands/migrate.md) - Rolls back all migrations
        - [migrate:rollback](cli/built-in-commands/migrate.md) - Rolls back most recent migration group
    - Sync
        - [sync:conditional-fields](cli/built-in-commands/sync.md#syncconditional-fields) - Sync channel entry conditional logic
        - [sync:file-usage](cli/built-in-commands/sync.md#syncfile-usage) - Syncs the file usage for all files
        - [sync:upload-directory](cli/built-in-commands/sync.md#syncupload-directory) - Synchronize upload directory
    - Update ExpressionEngine
        - [update](cli/built-in-commands/update.md) Updates ExpressionEngine
        - [update:prepare](cli/built-in-commands/update.md) Prepare a site to be upgraded using these files
        - [update:run-hook](cli/built-in-commands/update.md) Runs update hooks from your upgrade.config.php file
- [Creating a Command](cli/creating-a-command.md)
- [Defining Input](cli/defining-input.md)
- [Displaying Output](cli/displaying-output.md)