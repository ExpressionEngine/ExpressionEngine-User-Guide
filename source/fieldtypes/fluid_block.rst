###########
Fluid Block
###########

A fluid block is a collection of fields that can be used at the author's discretion when creating or editing an entry.  The fields in the fluid block can be used multiple times in an entry and the order of the fields specified during publication.  Fluid blocks give the author the control over the layout of various page elements without the need for markup while ensuring the output doesn't break out of the design.

**************
Field Settings
**************

*************
Template Tags
*************

Fluid block content is ouput using variable pairs.  An outer variable pair using the fluid block field's shortname wraps all content.  Within that wrapper variable pair, each field in the block can be output using a prefixed variable pair and the ``{content}`` variable.  The ``{content}`` variable works just like the field's variable or variable pair would outside of a fluid fuild.

For example, if you have a fluid block ``fluid_content`` with a text field ``fluid_text`` your template code may look like this::

  {fluid_content}

    {fluid_content:fluid_text}
      {content}
    {/fluid_content:fluid_text}

  {/fluid_content}


Only content inside the prefixed tag pair ``{fluid_content:fluid_text}{/fluid_content:fluid_text}`` will be displayed.  The text field is output by the ``{content}``.  This is a looping tag pair, you can have more than one ``fluid_text`` field for the entry, it's entirely at the entry author's discretion.  The author also determines the order of the field output.


Displaying a Pair variable
==========================

Fields that use a variable pair to output content work like they would outside of a fluid block, with the the ``{content}``variable taking the place of the field shortname.

In this example, the fluid block has short name ``page_content_block`` with a file field ``hero_image``.  The template code to output a modified image would look like::

  {page_content_block}

    {page_content_block:hero_image}

    {content}
      <img src="{url:med}" height="{height:med}" ?
    {/content}

    {/page_content_block:hero_image}

  {/page_content_block}


Displaying Multiple Fields
==========================

Fluid fields are most useful when multiple fields may be included in the presentation.  For example, you want to give your client the flexibility to add content in a number of styles.  There's a text field ``{full_text}``, a grid field ``{img_card}`` to hold a varying number of small images with descriptive text, a relationship field ``{featured_entry}`` where they can set a featured article.

A fluid field can handle the output of all of those fields, as many as they add, respecting the order they specify when publishing::

  {fluid_block}

    {fluid_block:full_text}
	  <div class="text"
      {content}
	  </duv>
    {/fluid_block:full_text}

    {fluid_block:img_card}
      <div class="card">
        <img src="{content:grid_image_colum}" >
        {content:grid_text_colum}
      </div>
    {/fluid_block:img_card}


    {fluid_block:featured_entry}
      <div class="feature">
        {content status="open|Featured" }
		  {if content:count == 1}Featured!{/if}
          {content:title}
          {content:hero_image}
            <img src="{url:med}">
          {/content:hero_image}
        {/content}
      </div>
    {/fluid_block:featured_entry}

  {/fluid_block}

Fluid Block Notes
=================

- The no_results tag does not work  within variable pairs such as relationships
- Count variables available in some pairs such as grid and relationship variables restart at 0 each loop.  So the total_results for a relationship tag pair would refer to the total number of relationships for that specific instance of the relationship field.

Fluid Block Compatibility
=========================






