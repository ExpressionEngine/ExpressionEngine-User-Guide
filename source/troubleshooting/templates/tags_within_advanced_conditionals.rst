Tags within Conditionals
========================

When using an opening tag within a conditional, additional conditions
do not affect output.

Conditionals and Tags
---------------------

When using ExpressionEngine tags within Conditionals the entire tag
block must be contained within the conditional. Conditionals *cannot*
be used to specify different opening tags with shared markup for the
rest of the tag block.

**Right:** ::

	{if segment_3 == "foo"}
		{exp:channel:entries channel="default_site"}
			<h2>{title}</h2>
		{/exp:channel:entries}
	{if:else}
		{exp:channel:entries channel="another_channel" category="not 6|7"}
			<h2>{title</h2>
		{/exp:channel:entries}
	{/if}

**Wrong:** ::

	{if segment_3 == "foo"}
		{exp:channel:entries channel="default_site"}
	{if:else}
		{exp:channel:entries channel="another_channel" category="not 6|7"}
	{/if}
			<h2>{title}</h2>
		{/exp:channel:entries}
