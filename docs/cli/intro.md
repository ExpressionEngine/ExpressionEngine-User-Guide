# Command Line Interface (CLI)

The Command Line Interface (CLI) allows a user to run system and user-generated commands in the terminal. The CLI has access to all of the ExpressionEngine resources, and can be used to update the system, clear caches, and much more.

By default the CLI is located `system/ee/eecli.php` .

![EE CLI](_images/6-1_cli.png)

- [Basic Usage](cli/usage.md)
- Built In Commands
    - Add-ons
        - [addons:list - Lists all add-ons](cli/built-in-commands/addons.md)
        - [addons:install - Installs an add-on](cli/built-in-commands/addons.md)
        - [addons:update - Updates an add-on](cli/built-in-commands/addons.md)
        - [addons:uninstall - Uninstalls an add-on](cli/built-in-commands/addons.md)
    - [backup:database - Backup database](cli/built-in-commands/backup-database.md)
    - [Clear Cache](cli/built-in-commands/cache-clear.md)
    - [channels:list - List channels](cli/built-in-commands/channels-list.md)
    - Config
        - [config:config - Update config.php values](cli/built-in-commands/config-management.md)
        - [config:env - Update .env.php values](cli/built-in-commands/config-management.md)
    - [fields:list - List fields](cli/built-in-commands/fields-list.md)
    - [fieldtypes:list - List fieldtypes](cli/built-in-commands/fieldtypes-list.md)
    - Generate
        - [generate:templates - Generate templates](cli/built-in-commands/generate-templates.md)
    - [List](cli/built-in-commands/list.md)
    - Make
        - [make:action - Creates a new action for an add-on](cli/built-in-commands/make-action.md)
        - [make:addon - Creates a new add-on](cli/built-in-commands/make-addon.md)
        - [make:command - Creates a new CLI command for an add-on](cli/built-in-commands/make-command.md)
        - [make:cp-route - Creates a control panel route for an add-on](cli/built-in-commands/make-cp-route.md)
        - [make:extension-hook - Implements an EE extension hook in an add-on](cli/built-in-commands/make-extension-hook.md)
        - [make:fieldtype - Creates a fieldtype for an add-on](cli/built-in-commands/make-fieldtype.md)
        - [make:jump - Creates jump menu file for an add-on](cli/built-in-commands/make-jump.md)
        - [make:migration - Creates a new migration](cli/built-in-commands/make-migration.md)
        - [make:model - Creates a new model for an add-on](cli/built-in-commands/make-model.md)
        - [make:prolet - Creates a new prolet for an add-on](cli/built-in-commands/make-prolet.md)
        - [make:service - Creates a new service for an add-on](cli/built-in-commands/make-service.md)
        - [make:sidebar - Creates a sidebar for an add-on](cli/built-in-commands/make-sidebar.md)
        - [make:template-tag - Creates a new template tag for an add-on](cli/built-in-commands/make-template-tag.md)
        - [make:widget - Generates widgets for existing add-ons](cli/built-in-commands/make-widget.md)
    - Migrate
        - [migrate - Runs specified migrations (all, core, or add-ons)](cli/built-in-commands/migrate.md)
        - [migrate:addon - Runs add-on migrations](cli/built-in-commands/migrate.md)
        - [migrate:all - Runs core migrations, then each add-on's migrations](cli/built-in-commands/migrate.md)
        - [migrate:core - Runs core migrations](cli/built-in-commands/migrate.md)
        - [migrate:reset - Rolls back all migrations](cli/built-in-commands/migrate.md)
        - [migrate:rollback - Rolls back most recent migration group](cli/built-in-commands/migrate.md)
    - Sync
        - [sync:conditional-fields - Sync channel entry conditional logic](cli/built-in-commands/sync-conditional-fields.md)
        - [sync:file-usage - Sync files usage](cli/built-in-commands/sync-file-usage.md)		
        - [sync:reindex - Sync content used in search indexes](cli/built-in-commands/sync-reindex.md)
        - [sync:upload-directory - Sync files in an upload directory](cli/built-in-commands/sync-upload-directory.md)
    - Update
        - [update - Update ExpressionEngine](cli/built-in-commands/update.md)
        - [update:prepare - Prepare site files for update](cli/built-in-commands/update-prepare.md)
        - [update:run-hook - Run update hooks from upgrade config](cli/built-in-commands/update-run-hook.md)
    - [version - Show version details](cli/built-in-commands/version.md)
- [Creating a Command](cli/creating-a-command.md)
- [Defining Input](cli/defining-input.md)
- [Displaying Output](cli/displaying-output.md)
