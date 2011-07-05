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

**Note:** By default, all entries and comments are assigned to this
formatting option.

Auto BR
-------

This Auto BR feature simply converts each line break into an HTML <br />
tag.

This feature can be found in the PUBLISH page of the Control Panel.
Youll see a menu below each entry field with this option. You can also
configure your Comment Preferences so that any comments will be
formatted this way.

Convert High ASCII to Entities
------------------------------

Due to the inherent limitations of the web only Low-ASCII characters can
be shown reliably in web browsers. Low-ASCII values are the basic
characters, numbers, and standard punctuation on your computer keyboard.

If your text contains High-ASCII values, like accented characters, or if
you copy your text from **Microsoft Word**, which uses High-ASCII values
for quotes and other characters, then you run the risk that some
characters will not be displayed correctly on your web pages.

Furthermore, depending on a number of factors related to your server's
character encoding support, when you submit High-ASCII values into your
database they might not be recognized properly for storage.

ExpressionEngine's Convert High ASCII to Entities feature will
automatically convert these high-ASCII characters into their appropriate
HTML character entity so that any web browser can display them
correctly. For instance, the © character will be converted into its HTML
entity (&#169;), which any web browser, regardless of its character
encoding, will correctly display as a copyright symbol.

**To enable this feature go to the following page in your Control
Panel:**

Admin > Channel Management > Global Channel Preferences

Once enabled, whenever you submit new entries they will be processed.

**Note:** The conversion happens when you submit entries, **not** at run
time, so you'll need to edit/re-save any entries containing High-ASCII
values for this feature to work.
