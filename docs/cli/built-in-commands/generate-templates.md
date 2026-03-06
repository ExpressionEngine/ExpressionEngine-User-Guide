# `generate:templates`

Template Generator -- Creates templates based on the existing data structure.

Using pre-defined stubs provided by ExpressionEngine or add-ons, this command can generate templates, preview output, or return template metadata.

## Syntax

`php eecli.php generate:templates [generator] [--options] [--json] [--code]`

## Options list:

```
    --list
    -l
        List available template generators

    --show
    -s
        Show template content without writing files

    --code
    -c
        Output only generated template code

    --json
    -j
        Output JSON metadata for the selected generator
```

## Examples:

List available generators:

`php eecli.php generate:templates --list`

Preview templates without writing files:

`php eecli.php generate:templates <generator> --show`

Output generator metadata as JSON:

`php eecli.php generate:templates <generator> --json`
