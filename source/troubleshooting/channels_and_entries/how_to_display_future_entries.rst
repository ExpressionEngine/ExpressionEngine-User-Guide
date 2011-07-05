How to display future entries
=============================

Future entries are not shown by default.

Troubleshooting
---------------

By default, ExpressionEngine will not include entries whose entry date
lies in the future. This behavior can be modified using the
`show\_future\_entries="yes"
parameter <../../modules/channel/parameters.html#par_show_future_entries>`_::

	{exp:channel:entries channel="foobar" show_future_entries="yes"}
