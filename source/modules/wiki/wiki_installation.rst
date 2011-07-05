Installing the Wiki Module
==========================

The Wiki Module is simple to install.

The Wiki Module requires ExpressionEngine and does not function with
versions of ExpressionEngine older than 1.4.2.

These instructions are **only** for first-time installations. **Do not
follow the instructions below if you need to *update* your wiki
installation.** Instead, follow the `Wiki Update <wiki_update.html>`_
instructions.

Step 1
------

Download the latest version of ExpressionEngine and follow the `Update
instructions <../../installation/update.html>`_.

Step 2
------

Inside the unzipped software, you will find a themes/wiki\_themes
directory. Upload this directory and everything inside it to your server
and place it in the themes directory. You should end up with it located
at themes/wiki\_themes/.

Step 3
------

Go into the Modules section of your ExpressionEngine Control Panel. At
the bottom of your list of modules should be the Wiki Module. Click
install.

Step 4
------

Click on **Wiki** to `create a wiki and configure the
preferences <wiki_cp.html>`_ in the Wiki Module Control Panel.

Step 5
------

Go into the Templates section of your ExpressionEngine Control Panel.
Create a Template Group specifically for your wiki and in the 'index'
template put the following tag::

	{exp:wiki base_path='Template_Group/index' wiki="wiki_short_name" theme="default"}

For example, lets say you created a Template Group for your wiki called
"wiki", your wiki's short name is also named "wiki," and you are using
the default theme. If that's the case your tag would look like this::

	{exp:wiki base_path='wiki/index' wiki="wiki" theme="default"}

Please see the `Wiki Tag <wiki_tag.html>`_ documentation for more
information.

**Note:** *Do NOT* use page caching in the template containing the Wiki
module tag.

Done!
-----

That's it! Point your browser to the 'wiki/index' template to view your
wiki.
