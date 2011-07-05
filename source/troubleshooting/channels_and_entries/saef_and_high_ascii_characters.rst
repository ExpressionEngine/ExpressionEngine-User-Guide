The Stand-Alone Entry Form with high ASCII characters
=====================================================

Entries made via a Stand-Alone Entry Form have missing characters or
show question marks or similar symbols instead of the expected
characters.

Troubleshooting
---------------

Characters that fall outside of the set of 7-bit ASCII, like accented
characters, typographical quotes, etc. must be encoded properly. What's
more, this encoding needs to be declared correctly in your document.

While ExpressionEngine handles the complexity of this declaration for
the control panel, all templates, including all Stand-Alone Entry Forms,
should include a line like the following in the <head> section of your
document::

	<meta http-equiv="Content-Type" content="text/html; charset={charset}" />
