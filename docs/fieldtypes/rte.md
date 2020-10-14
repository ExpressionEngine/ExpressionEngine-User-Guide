<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Rich Text Editor Fieldtype

The Rich Text Editor is like a word processor that allows you to create richly-formatted content without writing any HTML. For example, you can create links, insert images, create bulleted or numbered lists, and a whole lot more.

You can find out more about general RTE configuration by reading the [Rich Text Editor add-ons documentation](/add-ons/rte.md).

## Field Options

When creating or modifying RTE field, the following field settings are available.

- **Editor Configuration** - pre-created tool set to use for this field. 
- **Defer CKEditor initialization?** - turning this on will initialize the field's editing feature only when it will be focused
- **Column type in database** - database column type to hold your data. TEXT (64Kb) is usually good for an article. If your field content is rather a book, select MEDIUMTEXT (16Mb)

## Template Tag

**`{rte_field}`**

The formatted field content can displayed in templates using field name (`rte_field` in this example) as a variable.


In addition to this, the following are available:

**`{rte_field:excerpt}`**

If your field has a “Read More” separator, this returns your RTE field contents up until that point. Otherwise it will return the full contents of your RTE field.

**`{rte_field:has_excerpt}`**

For use in conditionals. Returns “y” if your RTE field has a “Read More” separator within it.

    {rte_field:excerpt}

    {if rte_field:has_excerpt=='y'}
        <a href="{path='blog/full-posts/{url_title}'}">Read more...</a>
    {/if}

**`{rte_field:extended}`**

If your field has a “Read More” separator, this returns the remaining portion of your RTE field contents after that point. Otherwise it won’t return anything.

    {rte_field:excerpt}

    <div class="extended">
        {rte_field:extended}
    </div>

