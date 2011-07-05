Tag Introduction
================

ExpressionEngine Tags enable you to bring your templates to life,
displaying dynamic information.

Tags let you integrate Modules and Plugins into your pages
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ExpressionEngine comes with nearly 20 modules (channel modules,
commenting module, etc.), as well as dozens of available plugins.
Modules provide most of EE's core features, and plugins provide small
enhancements.

Each module and plugin has its own **tags** that enable you use its
features within your pages, so understanding Tags is a critical
component of learning the system.

**Important Concept:** Every ExpressionEngine Tag has a corresponding
Module or Plugin that it is designed to generate content from.

**Note:** The `Modules and Tags <../index.html#modules_doc>`_ section of
the user guide has detailed information regarding every tag associated
with each module. When you are ready to begin designing your own
templates you will reference that section of the user guide the most.

Anatomy of a Tag
----------------

A typical ExpressionEngine tag is surrounded by "curly braces" and looks
like this::

	{exp:channel:channel_name}

Tag Segments
~~~~~~~~~~~~

A tag typically has 3 segments. The segments in the above example are:

exp : channel : channel\_name

The first segment, exp, tells ExpressionEngine that this is a tag. The
second part, channel, is the Module that the tag belongs to. The third
part, channel\_name, is the specific function from within the module
that you are using.

The above tag tells ExpressionEngine to invoke the Channel Name function
from the Channel Module.

Most tags have three segments, although occasionally in the case of
plugins, some will only have two.

Two Types of Tags
-----------------

There are two kinds of tags: single tags and tag pairs.

Single Tags
~~~~~~~~~~~

Single tags are designed to return a single piece of information. **A
single tag does not have a closing tag.**

This is a single tag::

	{exp:channel:channel_name}

Tag Pairs
~~~~~~~~~

Tag pairs are designed to return multiple pieces of information. Tag
pairs have both an *opening* and *closing* component. This is a tag
pair::

	{exp:channel:entries}  Entry content  {/exp:channel:entries}

The above tag tells ExpressionEngine to invoke the Entries function from
the Channel Module. You'll use this tag a lot in your templates.

Variables
---------

Tag pairs usually contain variables between the tags. A variable look
like this::

	{title}

A variable represents a piece of information. This variable, for
instance, might show the title of a channel entry. Variables are used
like this within tag pairs::

	{exp:channel:entries}  <h1>{title}</h1>  <p>{body}</p>  <div class="author">Posted by {author}</div>  {/exp:channel:entries}

Parameters
----------

Most tags can have parameters. Parameters modify the behavior of a tag,
letting you control exactly what a tag displays.

Parameters are placed inside the opening tag, like this::

	{exp:channel:entries parameter="value"}

A typical tag with multiple parameters might look like this::

	{exp:channel:entries channel="news"     orderby="date"        limit="10"}

The above tag will show 10 channel entries written in the "news"
channel. They will be displayed in descending order.

Parameters give you the flexibility to tailor the output of each tag in
a multitude of ways. Instead of choosing from several ready-made tags
that do slight variations of a similar function, you can use the same
tag in a variety of different ways by altering the parameters.

The Next Step
-------------

Guess what? You now know nearly everything there is to know about tags!
Take a moment to browse your Control Panel Templates to see if you can
identify tags and their components.

Then, in the `Modules and Tags <../index.html#modules_doc>`_ section of
the user guide you'll find information on every tag available in
ExpressionEngine. By adding these tags to your templates you bring your
pages to life with dynamic information.

Next: `Summary <summary.html>`_
===============================

