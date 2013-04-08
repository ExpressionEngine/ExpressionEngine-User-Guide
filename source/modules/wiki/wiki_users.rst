Wiki Users
==========

The Wiki Module recognizes three types of people accessing the wiki:

#. `Visitors <#visitors>`_
#. `Users <#users>`_
#. `Administrators <#admins>`_

Visitors
--------

Visitors are people who view your wiki and are not logged into your
ExpressionEngine site. They can view and search the wiki but they cannot
add, edit, or delete articles.

Visitors are also people who visit your wiki and are logged into your
ExpressionEngine site but **are not** in a Member Group that is
specified as wiki `Users <#users>`_ or `Admins <#admins>`_.

.. note:: The Wiki Module does not allow anonymous visitors to
	contribute to the wiki.

Users
-----

A User is a person who is logged into your ExpressionEngine site and
belongs to a **Member Group** that is allowed to *use* the wiki. You can
specify which Member Groups are users from the :doc:`Wiki Control
Panel <wiki_cp>`.

Users can add and edit articles and categories in the wiki using :doc:`Wiki
Syntax <wiki_syntax>`.

Administrators
--------------

.. note:: A Super Admin is always a Wiki Admin.

A Administrator (admin) has all the **User** privileges plus they can
**Moderate**, **Lock**, **Rename** articles, and **Delete** articles and
categories.

Moderate Article
~~~~~~~~~~~~~~~~

In a article's Edit Screen you can select to **moderate** an article.
This means that **Users** can edit the article, but the edits will not
appear on the live wiki until they are approved by a wiki admin.

In the :doc:`Wiki Control Panel <wiki_cp>` you can have the Wiki email
specified admins of changes to moderated articles. Admins can then
approve or reject those changes from the email. You can also view
changes to the wiki by clicking on the *Recent Changes* link in the
sidebar.

Lock Article
~~~~~~~~~~~~

In a article's Edit Screen you can select to **Lock** an article.
Locking an article means that only wiki admins can edit, delete, or
unlock it.

Rename Article
~~~~~~~~~~~~~~

In a article's Edit screen you can rename the article/page to something
more appropriate then what the user specified.

Delete Article
~~~~~~~~~~~~~~

In a article's Edit screen you can delete the article by checking the
"Delete" box.

Delete Category
~~~~~~~~~~~~~~~

Admins can delete a category from a Category's page. To do this click on
the **Categories** link to display a list of all your categories. Now
click the category you wish to delete. This will take you to the
Category's page. Now click the **Edit** link. In the title area you'll
see "Editing Category:Name of the category". Now check the "Delete
Category" option and click update to delete the category.

.. note:: Deleting a category will not delete any articles that have
	been assigned to the category. Deleting the category will not remove
	the category code in an article.


