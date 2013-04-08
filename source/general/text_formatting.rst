Text Formatting
===============

ExpressionEngine has a number of text formatting options that enable you
to control how text is rendered within your channel entries and
comments.

Auto XHTML
----------

The purpose of the *Auto XHTML* option is to make your content
semantically and typographically correct. This feature does the
following:

-  Double Line Breaks are wrapped in paragraph tags: <p>*content..*</p>
-  Single Line Breaks are turned into <br /> tags.
-  Double quotes are converted to curly double quotes: "this" becomes
   “this”
-  Single quotes are converted to curly single quotes: Joe's becomes
   Joe’s
-  Double dashes are converted to em-dashes: This -- text becomes
   this—text.
-  Three periods are converted to ellipsis: This... becomes this…

In addition, the Auto XHTML feature intelligently handles text
containing block level elements, like <div>, <blockquote>, etc. so that
they are not wrapped in paragraph tags. Further, elements within <pre>
tags are exempt from the paragraph conversion.

The Auto XHTML Feature can be found in the PUBLISH page of the Control
Panel. You'll see a menu below each entry field with this option. You
can also configure your Comment Preferences so that any comments will be
formatted this way.

.. note:: By default, all entries and comments are assigned to this
	formatting option.

Auto BR
-------

This Auto BR feature simply converts each line break into an HTML <br />
tag.

This feature can be found in the PUBLISH page of the Control Panel.
Youll see a menu below each entry field with this option. You can also
configure your Comment Preferences so that any comments will be
formatted this way.

None
------------------------------

ExpressionEngine will use your text exactly as you have entered it.
