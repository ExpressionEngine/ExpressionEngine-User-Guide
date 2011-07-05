Getting Started with the Wiki
=============================

A wiki is "a type of website that allows users to easily add, remove, or
otherwise edit all content, very quickly and easily... The term wiki is
a shortened form of 'wiki wiki' which is from the native language of
Hawaii (Hawaiian), where it is commonly used as an adjective to denote
something 'quick' or 'fast' (Hawaiian dictionary)"
(`Wikipedia <http://en.wikipedia.org/wiki/Wiki>`_).

For example, a "cookbook wiki" would be a website where you could easily
add your own recipes, edit existing recipes, and help organize the
recipes using categories. You'd do all of this with simple markup called
**wiki syntax** (we'll get to that shortly). Together you and the
community would maintain this online recipe collection to help bring
more deliciousness to everyone's meals.

The ExpressionEngine Wiki Module is a powerful wiki that integrates
seamlessly with ExpressionEngine.

Edit, Create, Organize
----------------------

Editing existing articles (content), creating new articles, and
organizing articles into categories are the three main tasks you'll do
on any wiki website.


Edit an Article
~~~~~~~~~~~~~~~

To edit an article click on the **edit link**. (On the default
ExpressionEngine Wiki the **edit link** is in the upper right.) This
puts the article in "edit mode" which lets you edit the content right
there on the web page. In Edit mode, simple text formatting such as
*emphasis*, **strong emphasis**, [STRIKEOUT:delete], and insert are
handled by BBCode, an easy-to-remember method of styling text. When you
are done editing just click on **update** and your edits are instantly
published.

BBCode Basics
^^^^^^^^^^^^^

**Note:** BBCode is just the default text-formatting option. Your wiki
admin may have selected a different text-formatting style such as
**Textile** or **Markdown** or prefer the use of standard **xhtml**. If
BBCode doesn't work, please contact your wiki admin for text-formatting
help.

BBCode works by surrounding the text you want to style with a bracketed
tag. For example, if you want to make some text have **strong emphasis**
you'd do this::

	This text is not bold. [strong]This text is has stronger emphasis[/strong]. You may also [b]make text bold[/b].

Which would display like this after editing::

	This text is not bold. This text is has stronger emphasis. You may also make text bold.

Adding *emphasized* or *italic* text works the same way. For example,
this::

	[em]This text is emphasized[/em]. [i]This text is italicized[/i].

Would display like this after editing::

	This text is emphasized. This text is italicized.

You can do a lot more with BBCode. Just see the `BBCode
Reference <../../general/BBCode.html>`_ section for details.

Create an Article
~~~~~~~~~~~~~~~~~

Creating an article in a wiki is as simple as finding something that
doesn't exist. A wiki assumes that whenever someone searches for an
article and no results are found or clicks on a link to an article that
doesn't exist, that someone will want to create that information for the
community. Sound strange? Let's go back to the Cookbook wiki example to
explain.

A set of breakfast recipes is not complete without an inspired Peanut
Butter Sandwich. You have such a recipe. To add this recipe, the first
thing you would do is use the **Create or Find a Page** search tool in
the sidebar to see if someone already added a recipe with the same
title. You search for **Peanut Butter Sandwich**. The wiki checks all
existing articles and comes up empty. The wiki then gives you the
opportunity to create an article titled **Peanut Butter Sandwich** by
clicking the **Edit** link. Once you click edit, the article is
instantly created and you can share your gooey peanut butter masterpiece
with the world.

While editing your Peanut Butter Sandwich recipe you remember that
nothing goes with such a delicacy better than a mug of your special hot
chocolate. The easiest way to create an article for your hot chocolate
recipe is to create a link for it using **wiki syntax**, a markup very
similar to BBCode. But instead of using a single bracket, you'll use
double brackets. To create a link for your hot chocolate recipe you'd do
something like this::

	A mug of [[hot chocolate]] goes great with this sandwich.

Which would display this::

	A mug of hot chocolate goes great with this sandwich.

When you click the **hot chocolate** link, the wiki discovers that the
article doesn't exist and then gives you the opportunity to create it by
clicking the edit link. If the hot chocolate article already existed
then this method would automatically link to it.

You can do a lot more with **Wiki Syntax**, please see the `Wiki
Syntax <wiki_syntax.html>`_ section for details.

Organizing Articles with Categories
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Assigning an article to a category is easily accomplished with **wiki
syntax**. For example, to add your Peanut Butter Sandwich to the
**sandwiches** category you would click on the **edit link** to enter
the article's edit mode and add the following anywhere in the article::

	[[Category:Sandwiches]]

This would automatically assign the article to the **Sandwiches**
category. If the category doesn't exist, the wiki will create it
automatically. To add multiple categories just add an additional
category like so::

	[[Category:Sandwiches]] [[Category:Peanut Butter]]

This would assign the article to the **Sandwiches** and **Peanut
Butter** categories. And finally, you can add sub-categories. For
example, let's say you want to create a "breakfast" sub-category for the
main (also called "parent") **Sandwiches** category. The following would
do that::

	[[Category:Sandwiches::Breakfast]]

Now the article is assigned to the **Sandwiches** parent category and
the **Breakfast** sub-category.

You can do a lot more with **Wiki Syntax**, please see the `Wiki
Syntax <wiki_syntax.html>`_ section for details.


