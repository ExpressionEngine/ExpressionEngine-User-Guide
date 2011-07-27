Embedding Templates within Other Templates
==========================================

Any template can be embedded within another template using the "embed"
variable::

	{embed="template_group/template"}

Where "template\_group" is the name of the group and "template" is the
name of the template. For example::

	{embed="site/header"}

You **must** include both the template group and the template name in
the embedded tag.

By default, you cannot use embeds inside of Forum templates. See `Other
Features <http://expressionengine.com/user_guide/modules/forum/other_features.html>`_
for instructions on running the forums through regular templates.

Embed Variables for the Embedded Template
-----------------------------------------

In the {embed=""} tag you can also specify parameters that will be used
as variables in the embedded page. For example, if you specifiy a
parameter of dog\_name="Shadow"::

	{embed="site/header" dog_name="Shadow"}

Then in the site/header template, you can have a variable called
{embed:dog\_name}, which will be replaced with the value of "Shadow"::

	<h2>My dog's name is {embed:dog_name}</h2>

Since {embed=""} tags are processed after all of the other tags of the
original template are processed, this means you can set these parameters
with other variables too::

	{exp:channel:entries channel="default_site" limit="1"}
		{embed="site/export" the_id="{entry_id}"}
	{/exp:channel:entries}

You may also use embed variables in conditionals::

	{if embed:dog_name == "Shadow"}
		My dog's name is {embed:dog_name}.
	{if:else}
		{embed:dog_name} will never be as cool as Shadow.
	{/if}

How to choose between an Embedded Template and a Snippet
--------------------------------------------------------

Since `Snippets <globals/snippets.html>`_ can also contain tags,
variables, and PHP, the question often arises: which do I choose? If
your content meets one of the following criteria, use an Embedded
template.

-  You need Embed Variables.
-  You need separate PHP parsing preferences from the template this code
   is being added to.
-  You need separate caching preferences from the template this code is
   being added to.
-  You need separate template Access control from the template this code
   is being added to.
-  You need to also be able to access this template on its own directly
   via the URL.
-  You need to edit this content using the flat-file template system.
-  You need to more discretely control which users are allowed to modify
   this content.

In all other cases, Snippets are typically the better solution, as the
above features do come with a minor associated cost in terms of resource
usage. Choose the right tool for the right task!

Notes
-----

-  You can nest embedded templates as deeply as you want. In other
   words, you can put a template within another template, within yet
   another one. **However**: You **can not** put a template within
   itself or you'll cause a run-away loop. You also **can not** put an
   "upstream" template inside of a "downstream" one. For example: You
   have two templates: "outer" and "content". You put "content" inside
   of "outer". You therefore can not put "outer" inside of "content".
-  PHP settings for each Template are honored on a per-Template basis,
   which means that you can embed a Template that has PHP enabled into
   another Template which does **not** have PHP enabled.
-  A template is fully rendered before any embedded templates are
   processed and included, which means you cannot break up tags between
   different templates and embed them in pieces.
-  If you are using the Multiple Site Manager, you can embed templates
   from one site into another site. Details can be found here: `Multiple
   Site Manager Variables and
   Parameters <../cp/sites/code.html#embedding>`_

