# Command Line Interface (CLI)

The Command Line Interface (CLI) allows a user to run system and user-generated commands in the terminal. The CLI has access to all of the ExpressionEngine resources, and can be used to update the system, clear caches, and much more.

By default the CLI is located `system/ee/eecli.php` .

![EE CLI](_images/6-1_cli.png)

- [Basic Usage](cli/usage.md)
- Built In Commands
    - Add-ons
        - [addons:list](cli/built-in-commands/addons.md) - List Add-ons
        - [addons:install](cli/built-in-commands/addons.md) - Install Add-on
        - [addons:update](cli/built-in-commands/addons.md) - Update Add-on
        - [addons:uninstall](cli/built-in-commands/addons.md) - Uninstall Add-on
    - [backup:database](cli/built-in-commands/backup-database.md) - Backup Database
    - [cache:clear](cli/built-in-commands/cache-clear.md) - Clear Cache
    - [channels:list](cli/built-in-commands/channels-list.md) - List Channels
    - Config
        - [config:config](cli/built-in-commands/config-management.md) - Update Config Values
        - [config:env](cli/built-in-commands/config-management.md) - Update Env Values
    - [fields:list](cli/built-in-commands/fields-list.md) - List Fields
    - [fieldtypes:list](cli/built-in-commands/fieldtypes-list.md) - List Fieldtypes
    - Generate
        - [generate:templates](cli/built-in-commands/generate-templates.md) - Generate Templates
    - [list](cli/built-in-commands/list.md) - List Commands
    - Make
        - [make:action](cli/built-in-commands/make-action.md) - Create Action
        - [make:addon](cli/built-in-commands/make-addon.md) - Create Add-on
        - [make:command](cli/built-in-commands/make-command.md) - Create CLI Command
        - [make:cp-route](cli/built-in-commands/make-cp-route.md) - Create Control Panel Route
        - [make:extension-hook](cli/built-in-commands/make-extension-hook.md) - Create Extension Hook
        - [make:fieldtype](cli/built-in-commands/make-fieldtype.md) - Create Fieldtype
        - [make:jump](cli/built-in-commands/make-jump.md) - Create Jump Menu File
        - [make:migration](cli/built-in-commands/make-migration.md) - Create Migration
        - [make:model](cli/built-in-commands/make-model.md) - Create Model
        - [make:prolet](cli/built-in-commands/make-prolet.md) - Create Prolet
        - [make:service](cli/built-in-commands/make-service.md) - Create Service
        - [make:sidebar](cli/built-in-commands/make-sidebar.md) - Create Sidebar
        - [make:template-tag](cli/built-in-commands/make-template-tag.md) - Create Template Tag
        - [make:widget](cli/built-in-commands/make-widget.md) - Create Widget
    - Migrate
        - [migrate](cli/built-in-commands/migrate.md) - Run Migrations
        - [migrate:addon](cli/built-in-commands/migrate.md) - Run Add-on Migrations
        - [migrate:all](cli/built-in-commands/migrate.md) - Run All Migrations
        - [migrate:core](cli/built-in-commands/migrate.md) - Run Core Migrations
        - [migrate:reset](cli/built-in-commands/migrate.md) - Reset Migrations
        - [migrate:rollback](cli/built-in-commands/migrate.md) - Rollback Migration Group
    - Sync
        - [sync:conditional-fields](cli/built-in-commands/sync-conditional-fields.md) - Sync Conditional Fields
        - [sync:file-usage](cli/built-in-commands/sync-file-usage.md) - Sync File Usage
        - [sync:reindex](cli/built-in-commands/sync-reindex.md) - Sync Search Index Content
        - [sync:upload-directory](cli/built-in-commands/sync-upload-directory.md) - Sync Upload Directory
    - Update
        - [update](cli/built-in-commands/update.md) - Update ExpressionEngine
        - [update:prepare](cli/built-in-commands/update-prepare.md) - Prepare Update
        - [update:run-hook](cli/built-in-commands/update-run-hook.md) - Run Update Hook
    - [version](cli/built-in-commands/version.md) - Show Version Details
- [Creating a Command](cli/creating-a-command.md)
- [Defining Input](cli/defining-input.md)
- [Displaying Output](cli/displaying-output.md)
