BBCode Reference
================

ExpressionEngine supports the use of "BBCode" within your entries.
BBCode is a sort of simple syntax that you can use to format your
entries with bold text, links, and more. It is very similar (in many
cases identical) to the codes used on many popular forum packages.

BBCode can be used in your entry fields when you create an entry or when
you leave a comment. It cannot normally be used in a Template.

**Security Note:** Whenever BBCode is used, even if your settings Allow
All HTML, the BBCode is run through various security checks to prevent
malicious people from posting naughty HTML or code through them.

URLs and Linking
----------------

::

	[url]http://example.com/[/url]

``[url=http://example.com/]my site[/url]``

You can easily create links with custom text or simply with the URL
itself as the link.

Email Links
-----------

::

	[email]you@example.com[/email]

``[email=you@example.com]click here to email[/email]``

As with URLs, you can also format email addresses. These BBCode tags
will automatically encode the email address to make it more difficult
for "spam bots" to retrieve it.

Images
------

::

	[img]http://example.com/pic.jpg[/img]

You can easily display an image.

Apply CSS Classes
-----------------

::

	[style=class_name]your content[/style]

You may apply a CSS class to a piece of content. This code will produce
HTML like this: 

::

    <span class="class_name">your content</span>

Font Sizes And Colors
---------------------

::

	[size=4]Hey look at this![/size]

You can specify font sizes as 1 through 6. 1 is the smallest and 6 is
the largest. 

::

	[color=green]Some green text[/color]

You may also specify a color for the text. Further, these BBCodes can be
nested. 

::

	[size=4][color=green]some larger green text[/color][/size]

Bold, Strong, Em And Italic
---------------------------

::

    [b]some bold text[/b]  [strong]some strong text[/strong]

    [em]some em text[/em]  [i]some italic text[/i]

Bold, strong, em and italic text is simple to add.

Describing Updates and Modifications (Del and Ins)
--------------------------------------------------

::

	I had [del]146[/del] [ins]147[/ins] glasses of melonade.

**Renders:** I had [STRIKEOUT:146] 147 glasses of melonade.

Most browsers render <del> with a line through the center of it, and
<ins> underlined. They are used together to describe updates and
modifications to documents.

Quoting
-------

::

	[quote]Some text. blah, blah, blah...[/quote]

You can surround text written by someone else which you'd like to
"quote". These tags will be replaced with <blockquote> HTML tags.

Pre-Formatted Text
------------------

::

	[pre]Some pre-formatted text...[/pre]

``[code]Some pre-formatted text...[/code]``

You can submit pre-formatted text such as script examples. These will be
replaced with <pre> </pre> HTML tags. Whitespace and line wrapping will
be preserved as you input it. Note that very long lines will **not**
automatically be wrapped and thus these could affect your site layout.
