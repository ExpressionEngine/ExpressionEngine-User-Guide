<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Preload Text Replacements

ExpressionEngine allows you to assign text to be replaced prior to a template being parsed, to save time typing and editing certain bits of text that might get used multiple times. Preload Replacements act as a straight string replacement for use later _in the same_ template.

Assignment and replacement occurs instantly when the template is loaded, before any tags are parsed, and therefore may not be affected by the result of another tag's output.

## Creating and Using an Preload Replacements

The basic syntax for replacing text is this:

    {preload_replace:variable_name="replacement"}

In the above example, variable_name is the name of the template "variable" and replacement is the content that will be used to replace all occurrences of {variable_name} in the template.

### Example Usage

A common usage for preload replacements is to hold the Channel short name(s), to save you from repeatedly typing them into different tags within the same template.

    {preload_replace:channels="news|reviews"}

    {exp:channel:category_heading channel="{kanaallar}"}
        <h1>{category_name}</h1>
        {if category_description != ""}<p>{category_description}</p>{/if}
    {/exp:channel:category_heading}

    {exp:channel:entries channel="{kanallar}" limit="10"}
        <h2>{title}</h2>
        {body}
    {/exp:channel:entries}
