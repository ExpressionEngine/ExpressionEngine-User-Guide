# Defining Input

Your command that extends the `Cli` class can get all input on the CLI as well.

### Options

#### Creating Options

Options are created in the `$commandOptions` variable in your class.

##### Option Syntax

```
'a',        // short flag -a, parameter is not allowed
'b:',       // short flag -b, parameter is required
'c::',      // short flag -c, parameter is optional
'foo',      // long option --foo, parameter is not allowed
'bar:',     // long option --bar, parameter is required
'baz::',    // long option --baz, parameter is optional
'g*::',     // short flag -g, parameter is optional, multi-pass
```

Options can also be aliased by comma separating the appropriate params in the key of your command pair

```
public $commandOptions = [
    'verbose,v'    => 'Both --verbose and -v will have the same result',
];
```

#### Get Option Values

The `Cli` class automatically parses all defined options in your command. These are automatically loaded when your command is initialized, and can be accessed by the `option` 

### Arguments

The entirety of the command line input can be accessed in the `$this->arguments` variable in your class.

```
print_r($this->arguments);

// Returns
// Array
// (
//     [0] => make:extension
//     [1] => AwesomeExtension
// )
// => true
```

### Interactive Input

Command input can be retrieved using `$this->ask()`:
```
$name = $this->ask("What's your name?");
```

Simple boolean confirmation can be retrieved using `$this->confirm()` and will respond to truthy answers (1, yes, y):
```
$answer = $this->confirm("Are you liking these questions?");
```