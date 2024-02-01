## Displaying Output

### Displaying Info

You can use `$this->info()` and `$this->error()` for displaying data. The error call will die upon output.

Standard output can be created using `$this->output->outln`

### Displaying Error

Similar to the `info()` function, you can use `$this->error()` for displaying errors that occurred. The error call will die upon output, and no further code will be executed.

### Formatting Output

On POSIX terminals, <<markup>> strings will change the display characteristics. Note that these are not HTML tags; they will be converted into terminal control codes, and do not get "closed". You can place as many space-separated markup codes between the double angle-brackets as you like.

** Any time you are using a formatting modifier, make sure that you close it out with `<<reset>>`. If you don't, your terminal will stay that way until you close it.

```
// BAD
$this->output->outln('<<blink>>ALL text will blink forever.');
$this->output->outln('Blinking and I dont want to.');

// GOOD
$this->output->outln('<<blink>>This text will blink and other will not.<<reset>>');
$this->output->outln('Not blinking and thats good.');
```

#### Available Styling
```
reset       reset display to defaults

black       black text
red         red text
green       green text
yellow      yellow text
blue        blue text
magenta     magenta (purple) text
cyan        cyan (light blue) text
white       white text

blackbg     black background
redbg       red background
greenbg     green background
yellowbg    yellow background
bluebg      blue background
magentabg   magenta (purple) background
cyanbg      cyan (light blue) background
whitebg     white background

bold        bold in the current text and background colors
dim         dim in the current text and background colors
ul          underline in the current text and background colors
blink       blinking in the current text and background colors
reverse     reverse the current text and background colors
```
