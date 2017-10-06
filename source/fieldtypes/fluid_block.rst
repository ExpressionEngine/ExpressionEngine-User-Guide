###########
Fluid Block
###########

A fluid block is a collection of fields that can be used at the author's discretion when creating or editing an entry.  The fields in the fluid block can be used multiple times in an entry and the order of the fields specified during publication.  Fluid blocks give the author control over the layout of various page elements without the need for markup while ensuring the output doesn't break out of the design.

*************
Template Tags
*************

Fluid block content is ouput using variable pairs.  An outer variable pair using the fluid block field's shortname wraps all content.  Within that wrapper variable pair, each field in the block can be output using a prefixed variable pair and the ``{content}`` variable.  Within the prefixed variable pair, the ``{content}`` variable is used in place of the field's shortname.

For example, if you have a fluid block ``fluid_content`` with a text field ``fluid_text`` your template code may look like this::

  {fluid_content}

    {fluid_content:fluid_text}
      {content}
    {/fluid_content:fluid_text}

  {/fluid_content}


Only content inside the prefixed tag pair ``{fluid_content:fluid_text}{/fluid_content:fluid_text}`` will be displayed.  The text field is output by the ``{content}``.

The prefixed tag pair is a looping tag pair.  You can have more than one ``fluid_text`` field for the entry, it's entirely at the entry author's discretion.  The author also determines the order of the field output.


Displaying a Pair variable
==========================

Fields that use a variable pair to output content work like they would outside of a fluid block, with the the ``{content}`` variable taking the place of the field shortname.

In this example, the fluid block has short name ``page_content_block`` with a file field ``hero_image``.  The template code to output a modified image would look like::

  {page_content_block}

    {page_content_block:hero_image}

    {content}
      <img src="{url:med}" height="{height:med}">
    {/content}

    {/page_content_block:hero_image}

  {/page_content_block}


Displaying Multiple Fields
==========================

Fluid fields are most useful when multiple fields may be included in the presentation.  For example, you want to give your client the flexibility to add content in a number of styles.  There's a text field ``{full_text}``, a grid field ``{img_card}`` to hold a varying number of small images with descriptive text, a relationship field ``{featured_entry}`` where they can set a featured article.

A fluid field can handle the output of all of those fields, as many as they add, respecting the order they specify when publishing.::

  {fluid_block}
	{fluid_block:full_text}
		<div class="text">
			{content}
		</div>
	{/fluid_block:full_text}
    {fluid_block:img_card}
      <div class="card">
        <img src="{content:grid_image_colum}">
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

- The ```{if no_results}``` tag is not valid within the prefixed variable pairs.
- Count variables available in some variable pairs (grid and relationship) restart at 1 each loop.  So the total_results for a relationship tag pair would refer to the total number of relationships for that specific instance of the relationship field.
- All native fields aside from a fluid block field can be included in a fluid block.

Field Examples
==============

.. contents::
  :local:
  :depth: 1

.. _fluid-block-multi:

Checkbox and Multi Select Fields
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For checkbox and multiselect single variables::

  {my_fluid_block}
    {my_fluid_block:my_checkbox}
		{content}
    {/my_fluid_block:my_checkbox}
  {/my_fluid_block}

This would output a comma-separated list of the checkbox labels.

For checkbox and multiselect variable pairs::

 {my_fluid_block}
   {my_fluid_block:my_checkbox}
	{content}
      Value: {item}<br>
      Value: {item:value}<br>
      Label: {item:label}<br>
	{content}
   {/my_fluid_block:my_checkbox}
 {/my_fluid_block}


.. _fluid-block-date:

Date Fields
~~~~~~~~~~~

::

  {my_fluid_block}
    {my_fluid_block:my_date}
		{content format="%F %d %Y"}
    {/my_fluid_block:my_date}
  {/my_fluid_block}

.. _fluid-block-email:

Email Address Fields
~~~~~~~~~~~~~~~~~~~~

::

  {my_fluid_block}
    {my_fluid_block:my_email}
		{content:mailto title="Email about their dog" subject="Question about your dog" encode="no"}
    {/my_fluid_block:my_email}
  {/my_fluid_block}

.. _fluid-block-file:

File Fields
~~~~~~~~~~~

A file field variable pair::

  {my_fluid_block}
    {fluid_block:my_image}
      {content}
	  	Extension: {extension}
		Upload date: {upload_date format="%Y %m %d"}
		URL: {url}
		Custom med thumbnail url: {url:med}
      {/content}
    {/fluid_block:my_image}
  {/my_fluid_block}

Single variable file field::

  {my_fluid_block}
    {my_fluid_block:my_image}
      link: {content wrap="link"}
	  URL: {content}
	  URL 'med' image thumb: {content:med}
    {/my_fluid_block:my_image}
  {/my_fluid_block}

.. _fluid-block-grid:

Grid Fields
~~~~~~~~~~~

::

  {my_fluid_block}
    {my_fluid_block:my_grid}
		{content}
			{if content:count == 1}<h3>Grid total rows: {content:total_rows}{/if}
			Date field: {content:my_grid format="%Y %m"}
			Toggle: {if content:my_toggle}YES there is a toggle value!{/if}

			File field pair:
			{content:my_file}
				Upload date: {upload_date format="%Y %m %d"}
				Custom med thumbnail url: {url:med}
			{/content:my_file}

			Relationship field pair:
			{content:my_relationship}
				{if content:my_relationship:count == 1}<h3>Relationship {content:my_relationship:total_results}){/if}
				{content:my_relationship:title}<br>
				{/content:my_relationship}
		{/content}
    {/my_fluid_block:my_grid}
  {/my_fluid_block}


.. _fluid-block-select:

Radio and Select Fields
~~~~~~~~~~~~~~~~~~~~~~~

Radio and single select fields use single variables::

  {my_fluid_block}
    {my_fluid_block:my_radio}
		{content}
		Value = {content}
		{if content == 'no'}Nope!{/if}
    {/my_fluid_block:my_radio}
  {/my_fluid_block}

.. _fluid-block-relationship:

Relationship Fields
~~~~~~~~~~~~~~~~~~~

::

  {my_fluid_block}
	{my_fluid_block:my_relationship}
		{content}
			{if content:count == 1}<h3>Relationships ({content:total_results})</h3>{/if}

			Related entry title: {content:title}
			Related entry file field, med custom image size: {content:my_file:med wrap="image"}

			Related field in the related child entry:
			{content:my_related_field_in_child_entry}
				{content:cmy_related_field_in_child_entry:title}
			{/content:my_related_field_in_child_entry}
		{/content}
	{/my_fluid_block:my_relationship}
  {/my_fluid_block}

.. _fluid-block-text:

RTF Text and Textare Fields
~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

  {my_fluid_block}
    {my_fluid_block:my_textarea}
		{content}
    {/my_fluid_block:my_textarea}
  {/my_fluid_block}

.. _fluid-block-toggle:

Toggle Fields
~~~~~~~~~~~~~

::

  {my_fluid_block}
    {my_fluid_block:my_toggle}
		{if content}YES there is a toggle value!{/if}
    {/my_fluid_block:my_toggle}
  {/my_fluid_block}



.. _fluid-block-url:

URL Fields
~~~~~~~~~~

::

  {my_fluid_block}
    {my_fluid_block:my_url}
		<a href="{content}">Your Link</a>
    {/my_fluid_block:my_url}
  {/my_fluid_block}


