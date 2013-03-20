Wiki Syntax
===========

Wiki users create new pages, categories, links, and perform other
actions directly on the wiki using special syntax. Wikis traditionally
use double brackets for this syntax and the ExpressionEngine Wiki Module
does the same.

**Note:** The text formatting for your wiki is handled by whatever
formatting option you choose in the :doc:`Wiki Control
Panel <wiki_cp>`.


Create or Link to a Page
------------------------

::

	[[Page title]]

This creates a link to a wiki page with the specified title. If the page
does not exist, you can create it when you click the link.

For example, if you are writing an article on sandwiches and want to
link to or create a page specifically about peanut butter sandwiches you
could use the following syntax::

	Sandwiches are really great, especially [[Peanut Butter Sandwiches]].

This would link to a page title "Peanut Butter Sandwiches" or it would
allow you to create that page when the link is clicked.

Categories
----------

Create Single Category
~~~~~~~~~~~~~~~~~~~~~~

::

	[[Category:Category Name]]

Placing this syntax in a article assigns it to the specified category.
If the category does not exist, the category will be created.

For example, to assign an article about peanut butter and jelly
sandwiches to a "Sandwiches" category you would use this syntax::

	[[Category:Sandwiches]]

That will automatically assign the article to the Sandwiches category or
create it if it does not exist. It will also automatically create a link
that displays all articles in the "Sandwiches" category.

Create Nested Category
~~~~~~~~~~~~~~~~~~~~~~

::

	[[Category:Parent Category::Child Category]]

Placing this syntax in a article assigns it to the specified categories.
If one or both of the categories does not exist, they will be created.

For example, to assign an article about peanut butter and jelly
sandwiches to a "Sandwiches" category with a "Peanut Butter" subcategory
you would use this syntax::

	[[Category:Sandwiches::Peanut Butter]]

That will automatically assign the article to the "Sandwiches" parent
category and a "Peanut Butter" subcategory. If either category does not
exist it will be created.

Link to a Category Page
~~~~~~~~~~~~~~~~~~~~~~~

::

	[[:Category:Parent Category::Child Category]]

This will create a link to the category page (notice colon at the
beginning) that will display all the articles in the specified
categories. This does not create a category.

Namespaces
----------

.. todo:: Setup anchor for .html#namespaces

**Note:** Before you can use Namespaces on your wiki you must
:doc:`configure Namespaces in your Control Panel <wiki_cp>`.

Linking to or creating an article in a Namespace
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

	[[Namespace_label:Article title]]

Placing this syntax in an article creates a link to a article in the
specified namespace. If the article doesn't exist you will have the
option to create it. For example, if you had a namespace with the label
of *Spanish* and wanted to link to or create an article titled "The
Basics" in the *Spanish* namespace you would use this syntax in the
article you are linking from::

	[[Spanish:The Basics]]

That would create a link to the *The Basics* article in the *Spanish*
namespace or let you create that article if it didn't exist.

Assign an existing article to a Namespace
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To assign an existing article to a Namespace simply **edit** the article
and rename it with the following syntax::

	Namespace_Label:Article Title

For example, if you have an existing article titled "Advanced German"
and want to assign it to the *German* namespace simply click **edit**
and rename the article::

	German:Advanced German

Viewing articles in a Namespace
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. todo:: Setup anchor for .html#wiki_theme

The default theme has a dropdown menu that lets you view all the
articles in a namespace. Its located on the *Title List* page (on the
main menu). If you want to add a similar feature on your custom wiki
template please follow the :doc:`Wiki Theme Updates
</installation/version_notes_1.5>` example.

Linking to Image or Uploaded File
---------------------------------

**Note:** The wiki can automatically give you a file or image's code. On
the article Edit page click on *View 10 Most Recent File Uploads*. If
you need an older file click on *Uploaded Files* in the navigation and
then select file. You'll see the appropriate code to use to call that
file or image. ::

	[[File:filename.zip]]

Creates a link to a file page for an uploaded file. ::

	[[Image:image.jpg]]

This creates an <img> tag for an uploaded image.

Creating a Link with Alternate Display Text
-------------------------------------------

You can specify different text to display as the link for article,
Category, Namespace, and File links by separating the link from the
display text with a pipe ("\|") symbol. ::

	[[Page title | Display text]]

This creates a link to a wiki page with the specified title, and uses
the display text for the link.

For example, if you have an article titled "11 Herbs and Spices" and
wish to display the link as "secret ingredients", you could use the
following syntax::

	Fried chicken is tasty, but to make it really great, you need to learn the [[11 Herbs and Spices | secret ingredients]]!

Embedding Articles Within Articles
----------------------------------

::

	{embed="Namespace:Topic"}

Brings in the current revision of the article specified and puts it in
the article you are editing. If the topic does not exist, nothing is put
in.


