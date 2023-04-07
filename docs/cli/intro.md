# Command Line Inferface (CLI)

The Command Line Inferface (CLI) allows a user to run system and user-generated commands in the terminal. The CLI has access to all of the ExpressionEngine resources, and can be used to update the system, clear caches, and much more.

By default the CLI is located `system/ee/eecli.php` . 

![EE CLI](_images/6-1_cli.png)

- [Basic Usage](cli/usage.md)
- Built In Commands
    - [Clear Cache](cli/built-in-commands/cache-clear.md)
    - [List](cli/built-in-commands/list.md)
    - Make
        - [make:action - Creates a new action for an add-on](cli/built-in-commands/make-action.md)
        - [make:addon - Creates a new add-on](development/addon-development-overview.md)
        - [make:command - Creates a new CLI command for an add-on](cli/built-in-commands/make-command.md)
        - [make:extension-hook - Implements an EE extension hook in an add-on](cli/built-in-commands/make-extension-hook.md)
        - [make:migration - Creates a new migration](cli/built-in-commands/make-migration.md)
        - [make:model - Creates a new model for an add-on](cli/built-in-commands/make-model.md)
        - [make:prolet - Creates a new prolet for an add-on](cli/built-in-commands/make-prolet.md)
        - [make:tag - Creates a new tag for an add-on](cli/built-in-commands/make-tag.md)
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
    - [Update ExpressionEngine](cli/built-in-commands/update.md)
- [Creating a Command](cli/creating-a-command.md)
- [Defining Input](cli/defining-input.md)
- [Displaying Output](cli/displaying-output.md)
