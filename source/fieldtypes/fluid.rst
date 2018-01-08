#####
Fluid
#####

A Fluid field is a collection of fields.  A Fluid field can contain any native field type except another Fluid field.  The fields assigned to the Fluid field can then be used multiple times in the same entry when creating/editing the entry.  The author also has control over the order of the fields.

Fluid fields give the author control over the structure of their content, while ensuring the final output uses the correct design elements.  All that is done without the author worrying about markup or html.  They simply add content to the fields, and template can wrap each field in the proper markup.

*************
Field Options
*************

Custom Fields
=============

Select all fields that you want available in your fluid field on the publish page.  All native fieldtypes except another fluid field are available.

************
Publish Page
************

Add
===

A fluid field is initially displayed as a simple dropdown 'Add', populated with the field names assigned to the fluid field.  When you choose a field from the dropdown, it adds it to the page, maintaing all of the field's settings, instructions and requirements.

Fields can be used more than once and in any order.  They can be re-ordered within the fluid field by dragging up or down.

The frontend will output the various field contents in the order specified in the entry.


*************
Template Tags
*************

Fluid field content is ouput using variable pairs.  An outer variable pair using the Fluid field's shortname wraps all content.  Within that wrapper variable pair, each field can be output using a prefixed variable pair and the ``{content}`` variable.  Within the prefixed variable pair, the ``{content}`` variable is used in place of the field's shortname.

For example, if you have a Fluid field ``fluid_content`` with a text field ``fluid_text`` your template code may look like this::

  {fluid_content}

    {fluid_content:fluid_text}
      {content}
    {/fluid_content:fluid_text}

  {/fluid_content}


Only content inside the prefixed tag pair ``{fluid_content:fluid_text}{/fluid_content:fluid_text}`` will be displayed.  The text field is output by the ``{content}``.

The prefixed tag pair is a looping tag pair.  You can have more than one ``fluid_text`` field for the entry, it's entirely at the entry author's discretion.  The author also determines the order of the field output.


Displaying a Pair variable
==========================

Fields that use a variable pair to output content work like they would outside of a Fluid field, with the the ``{content}`` variable taking the place of the field shortname.

In this example, the Fluid field has short name ``news_content`` with a file field ``hero_image``.  The template code to output a modified image would look like::

  {news_content}

    {news_content:hero_image}
      {content}
        <img src="{url:med}" height="{height:med}">
      {/content}
    {/news_content:hero_image}

  {/news_content}


Displaying Multiple Fields
==========================

Fluid fields are most useful when multiple fields may be included in the presentation.  For example, you want to give your client the flexibility to add content in a number of styles.  There's a text field ``{full_text}``, a grid field ``{img_card}`` to hold a varying number of small images with descriptive text, a relationship field ``{featured_entry}`` where they can set a featured article.

A fluid field can handle the output of all of those fields, as many as they add, respecting the order they specify when publishing.::

  {fluid_field}

    {fluid_field:full_text}
      <div class="text">
        {content}
      </div>
    {/fluid_field:full_text}

    {fluid_field:img_card}
      {content}
        <div class="card">
          <img src="{content:grid_image_column}">
          {content:grid_text_column}
        </div>
      {/content}
    {/fluid_field:img_card}

    {fluid_field:featured_entry}
      <div class="feature">
        {content status="open|Featured" }
          {if content:count == 1}Featured!{/if}
          {content:title}
          {content:hero_image}
            <img src="{url:med}">
          {/content:hero_image}
        {/content}
      </div>
    {/fluid_field:featured_entry}

  {/fluid_field}


Fluid Field Notes
=================

- The ```{if no_results}``` tag is not valid within the prefixed variable pairs.
- Count variables available in some variable pairs (grid and relationship) restart at 1 each loop.  So the total_results for a relationship tag pair would refer to the total number of relationships for that specific instance of the relationship field.
- All native fields aside from a Fluid field can be included in a Fluid field.

Field Examples
==============

.. contents::
  :local:
  :depth: 1

.. _fluid-field-multi:

Checkbox and Multi Select Fields
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For checkbox and multiselect single variables::

  {my_fluid_field}
    {my_fluid_field:my_checkbox}
      {content}
    {/my_fluid_field:my_checkbox}
  {/my_fluid_field}

This would output a comma-separated list of the checkbox labels.

For checkbox and multiselect variable pairs::

 {my_fluid_field}
   {my_fluid_field:my_checkbox}
     {content}
      Value: {item}<br>
      Value: {item:value}<br>
      Label: {item:label}<br>
    {/content}
   {/my_fluid_field:my_checkbox}
 {/my_fluid_field}


.. _fluid-field-date:

Date Fields
~~~~~~~~~~~

::

  {my_fluid_field}
    {my_fluid_field:my_date}
      {content format="%F %d %Y"}
    {/my_fluid_field:my_date}
  {/my_fluid_field}

.. _fluid-field-email:

Email Address Fields
~~~~~~~~~~~~~~~~~~~~

::

  {my_fluid_field}
    {my_fluid_field:my_email}
      {content:mailto title="Email about their dog" subject="Question about your dog" encode="no"}
    {/my_fluid_field:my_email}
  {/my_fluid_field}

.. _fluid-field-file:

File Fields
~~~~~~~~~~~

A file field variable pair::

  {my_fluid_field}
    {fluid_field:my_image}
      {content}
        Extension: {extension}
        Upload date: {upload_date format="%Y %m %d"}
        URL: {url}
        Custom med thumbnail url: {url:med}
      {/content}
    {/fluid_field:my_image}
  {/my_fluid_field}

Single variable file field::

  {my_fluid_field}
    {my_fluid_field:my_image}
      link: {content wrap="link"}
      URL: {content}
      URL 'med' image thumb: {content:med}
    {/my_fluid_field:my_image}
  {/my_fluid_field}

.. _fluid-field-grid:

Grid Fields
~~~~~~~~~~~

::

  {my_fluid_field}
    {my_fluid_field:my_grid}
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
    {/my_fluid_field:my_grid}
  {/my_fluid_field}


.. _fluid-field-select:

Radio and Select Fields
~~~~~~~~~~~~~~~~~~~~~~~

Radio and single select fields use single variables::

  {my_fluid_field}
    {my_fluid_field:my_radio}
        Value = {content}
        {if content == 'no'}Nope!{/if}
      {/my_fluid_field:my_radio}
  {/my_fluid_field}

.. _fluid-field-relationship:

Relationship Fields
~~~~~~~~~~~~~~~~~~~

::

  {my_fluid_field}
    {my_fluid_field:my_relationship}
      {content status="open"}
        {if content:count == 1}<h3>Relationships ({content:total_results})</h3>{/if}

        Related entry title: {content:title}
        Related entry file field, med custom image size: {content:my_file:med wrap="image"}

        Related field in the related child entry:
        {content:my_related_field_in_child_entry}
          {content:cmy_related_field_in_child_entry:title}
        {/content:my_related_field_in_child_entry}
      {/content}
    {/my_fluid_field:my_relationship}
  {/my_fluid_field}

.. _fluid-field-text:

RTF Text and Textare Fields
~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

  {my_fluid_field}
    {my_fluid_field:my_textarea}
      {content}
    {/my_fluid_field:my_textarea}
  {/my_fluid_field}

.. _fluid-field-toggle:

Toggle Fields
~~~~~~~~~~~~~

::

  {my_fluid_field}
    {my_fluid_field:my_toggle}
      {if content}YES there is a toggle value!{/if}
    {/my_fluid_field:my_toggle}
  {/my_fluid_field}


.. _fluid-field-url:

URL Fields
~~~~~~~~~~

::

  {my_fluid_field}
    {my_fluid_field:my_url}
      <a href="{content}">Your Link</a>
    {/my_fluid_field:my_url}
  {/my_fluid_field}
