File Entries Tag
================

The File Entries tag allows you to display files and their associated
meta-data on the frontend through the use of standard ExpressionEngine
tags.

Here is a simple example of a possible usage of this tag::

	{exp:file:entries limit="20" paginate="both" directory_id="3"} <p><b>{title}</b> - {custom_field_one} posted: {entry_date format='%h:%i %A'}</p> {categories} {category_image} -  <a href="{path='about/test'}">{category_name}</a> {/categories}<br>  {if medium_file_url} <p> <a href="{id_path='gallery/comments'}"><img src="{medium_file_url}" width="{medium_width}" height="{medium_height}" alt="{title}" title="{title}" /></a>  </p> {/if}  {caption}  {/exp:file:entries}

Parameters
----------

The File Entries tag has a number of `parameters <parameters.html>`_
that can be used to control what the tag displays.

Variables
---------

Inside of the tag you can use a number of variables to display different
information such as file title, date, caption, etc. There are three
types of variables:

-  `Conditional Variables <variables.html#conditionals>`_
-  `Single Variables <variables.html#single_variables>`_
-  `Variable Pairs <variable_pairs.html>`_

Pagination
----------

The File module supports `File
Pagination <../channel/pagination_page.html>`_.
