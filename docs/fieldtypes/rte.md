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

## Field features

### @-mentions

If you have Pages module (or third-party add-ons with compatible functionality) installed you can use `@`-mentions to quickly insert links to site pages.

Type `@` and then continue typing entry title and you will be offered selection of matching pages altogether with their channel names, from which you can pick the one that you need and your typed input will be replaced with the selected entry title being linked to proper page URL.
![](_images/rte-at-mentions.png)

If you need the text to appear with the `@` sign exactly as typed, you can select the bottom option for this.


## Template Tag

**`{rte_field}`**

The formatted field content can displayed in templates using field name (`rte_field` in this example) as a variable.

In addition to this, the following modifiers are available:

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

## Text-only mode
If you pass the parameter `text_only="yes"` to RTE template tags, all HTML tags will be removed from the content, leaving only the text.

    {rte_field text_only="yes"}

If you just want to remove the images, but leave the rest of the HTML markup in place, you can pass `remove_images="yes"` instead.

    {rte_field remove_images="yes"}

## Images-only mode
If you pass the parameter `images_only="yes"` to RTE template tags, everything but the images will be removed from the content.

    {rte_field images_only="yes"}
If you want to have complete control over the HTML output, use a tag pair:

    <ul>
        {rte_field images_only="yes"}
            <li><img src="{src}" width="{width}" height="{height}" alt="{alt}" /></li>
        {/rte_field}
    </ul>
### Images-only tag parameters
The following parameters are available to help customize the images-only output:

- `images_only` Must be set to “yes” to enable images-only mode.
- `delimiter` Overrides the delimiter used to separate images when using a single tag. (Set to “&lt;br /&gt;” by default.)
- `offset` Skips the first X images.
- `limit` Limits the number of images to display.

### Images-only variable tags
The following variable tags are available within the tag pair:

- `{width}` The width of the image, whether it was specified in the style or width HTML attributes (if the former, “px” will be removed).
- `{height}` The height of the image, whether it was specified in the style or height HTML attributes (if the former, “px” will be removed).
- Attribute tags (`{src}`, `{alt}`, `{title}`, etc.) The value of the corresponding HTML attribute.
- Style tags (`{style:float}`, etc.) The value of the corresponding inline CSS style.
