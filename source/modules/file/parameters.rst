Parameters
----------


category=
~~~~~~~~~

::

	category="2"

Categories are specified by ID number (the ID number of each
`category <../../cp/admin/content_admin/category_edit.html>`_ is
displayed in the Control Panel). The reason we use the ID is because
categories can be called anything (with spaces, quotes, etc.), and also
renamed. It would be much more difficult to have to update the tag
parameters every time you updated a category name. Further, you can have
multiple categories with the same name either in different Category
Groups or in different parts of the hierarchy within the same Category
Group.

And as with some of the other parameters, you can stack categories to
get entries with any of those categories::

	category="2|45|4|9"

Or use "not" to exclude categories

::

	category="not 4|5|7"

**Note:** When you use the category="3\|4" parameter (not excluding),
you are implicitly telling ExpressionEngine to only deal with entries
that have been assigned one or more categories. If you have entries that
haven't been categorized then they will be ignored and not included in
the results. However, if you are using exclusion (category="not 3\|4"),
then you will be shown all entries without those categories *including*
those without any categories assigned. To change this behavior when
excluding categories use the
`uncategorized\_entries="" <parameters.html#par_uncategorized_entries>`_
parameter.

**Note:** Using this parameter will automatically cause ExpressionEngine
to *ignore* any category information specified via the URL. For
instance, if you are on a "category page" (e.g. a "/C13/" segment in the
URL) that will be completely ignored in favor of whatever you have
specified via the parameter.

category\_group=
~~~~~~~~~~~~~~~~

::

	category_group="2"

Category Groups are specified by ID number (the ID number of each
`category
group <../../cp/admin/content_admin/category_management.html>`_ is
displayed in the Control Panel). The reason we use the ID is because
category groups can be called anything (with spaces, quotes, etc.), and
also renamed. It would be much more difficult to have to update the tag
parameters every time you updated a category name.

And as with some of the other parameters, you can stack category groups::

	category_group="1|2|4"

Or use "not" to exclude categories

::

	category_group="not 2"

**Note:** Using this parameter will automatically cause ExpressionEngine
to *ignore* any category information specified via the URL. For
instance, if you are on a "category page" (e.g. a "/C13/" segment in the
URL) that will be completely ignored in favor of whatever you have
specified via the parameter.

directory\_id=
~~~~~~~~~~~~~~

::

	directory_id="3"

From which `file upload
directory <../../cp/content/files/file_upload_preferences.html>`_ to
show the files (will show files from any directory if none is
specified). Additionally, you can use the pipe character to separate
multiple directories::

	directory_id="1|2|3"

Or you can add the word "not" (with a space after it) to exclude
directories::

	directory_id="not 1|2|3"

disable=
~~~~~~~~

::

	disable="categories"

The disable= parameter allows you to turn off aspects of the tag that
you might not be using in order to improve performance. The channel tag
is designed to fetch a lot of information by default: Categories,
channel fields, member data, etc. Depending on how you use the tag, some
of this data may not be needed. Through the use of the "disable"
parameter you can turn off aspects of the tag in order to make it more
lightweight.

The syntax for the disable parameter is this: disable="ITEM YOU WANT TO
DISABLE". The following items can be turned off:

-  categories
-  pagination

**Note:** If you disable categories, category fields will automatically
be disabled.

You may specify multiple items to disable by separating them with the
pipe character::

	disable="categories|member_data"

The best approach is to examine the data you are showing in each
instance of the tag. If there is a type of data you are not utilizing,
turn it off.

dynamic=
~~~~~~~~

::

	dynamic="no"

The file display engine sets some parameters dynamically, based on what
is in the URL. There are times, however, where you do not want the
parameters affected by what the URL contains. To override the dynamic
nature of the file tag, use dynamic="no".

file\_id=
~~~~~~~~~

::

	file_id="22"

You can hard code the file entries tag to show specific files. You may
also specify multiple files by separating them with the pipe character.
This parameter takes precedence over any entry specified in the url.

limit=
~~~~~~

::

	limit="30"

Allows you to limit the number of files. The limit will default to 100
if a value is not specified. If you are using
:doc:`pagination <../channel/pagination_page>` then this
will determine the number of files shown per page.

orderby=
~~~~~~~~

::

	orderby="date"

The "order" parameter sets the display order of the files. Setting
options for this parameter include:

-  orderby="date"
-  orderby="random"

paginate=
~~~~~~~~~

::

	paginate="top" ``paginate="bottom"`` ``paginate="both"``

This parameter is for use with entry
:doc:`pagination <../channel/pagination_page>` and determines where the
pagination code will appear for your files:

#. **top**: The navigation text and links will appear *above* your list
   of files.
#. **bottom**: The navigation text and links will appear *below* your
   list of files.
#. **both**: The navigation text and links will appear both above and
   below your list of files.

If no parameter is specified, the navigation block will default to the
"bottom" behavior.

paginate\_base=
~~~~~~~~~~~~~~~

::

	paginate_base="site/index"

This tells ExpressionEngine to override the normal
:doc:`pagination <../channel/pagination_page>` link locations and point
instead to the explicitly stated template group and template.

relaxed\_categories=
~~~~~~~~~~~~~~~~~~~~

::

	relaxed_categories="yes"

This parameter allows you to use the category indicator in your URLs
with an entries tag specifying multiple channels that do **not** share
category groups.

sort=
~~~~~

::

	sort="asc" ``sort="desc"``

The sort order can be "asc" (ascending order or "oldest item first" for
dates) or "desc" (descending order or "newest item first" for dates). If
you do not use a sort order the default is desc.
