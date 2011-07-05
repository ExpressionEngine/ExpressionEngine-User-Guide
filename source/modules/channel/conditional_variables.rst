Channel Entries - Conditional Variables
=======================================

Conditional variables allow you to add scripting to your standard
`variables <variables.html>`_ in order to more precisely control your
content.

**Note:** A more complete explanation of conditional control structures
and operators can be found in the `Global
Conditionals <../../templates/globals/conditionals.html>`_ page. Please
refer to that section for more info.

Here is an example that tests for the "summary field" being not empty

::

	{if summary != ""}
	    The summary is not empty!
	{/if}

An alternate, shorthand syntax can accomplish the same thing

::

	{if summary}
	    The summary is not empty!
	{/if}

If only the variable name is in the conditional statement it tests for
"not empty".

Available Conditionals
----------------------

Many of the single variables can be used in a conditional. You may
always use the short name of one of your custom entry fields in a
conditional. In addition, there are several unique conditionals.


if allow\_comments
~~~~~~~~~~~~~~~~~~

::

	{if allow_comments} content {/if}

This special conditional lets you conditionally display content if the
current entry is set to allow comments. This conditional will return
FALSE if commenting has expired. ::

	{if allow_comments}  ({comment_total}) <a href="{comment_path='channel/comments'}">Comments</a> •  {/if}

Or you can display content if commenting is disabled::

	{if allow_comments == FALSE} content {/if}

if avatar
~~~~~~~~~

::

	{if avatar} content {/if}

This special conditional lets you conditionally display content if the
current entry's author has an avatar image specified. ::

	{if avatar} <img src="{avatar_url}" width="{avatar_image_width}" height="{avatar_image_height}" alt="{author}'s avatar" /> {/if}

if category\_request
~~~~~~~~~~~~~~~~~~~~

::

	{if category_request} content {/if}

This special conditional lets you conditionally display content if the
current tag is being displayed based on a category specified in the URL.
For instance, if the URL being viewed were
http://example.com/index.php/channel/archives/C13/ that could trigger
this conditional.

if count
~~~~~~~~

::

	{if count > 5} content {/if}

This conditional allows you to test against which number entry is being
displayed. You could use this to apply different styles to the first
entry or have the last 5 entries out of 10 be formatted differently.

if forum\_topic
~~~~~~~~~~~~~~~

::

	{if forum_topic} content {/if}

You may use this conditional for displaying content when a forum topic
has been associated with a channel entry. That option is only available
if the Discussion Forum Module is installed. It will typically be used
like so::

	{if forum_topic} <a href="{path='forums/viewthread'}/{forum_topic_id}">Discuss this in our forums</a> {/if}

if no\_results
~~~~~~~~~~~~~~

::

	{if no_results} content {/if}

You may use this conditional for displaying a message in the case when
no entries are returned. The contents inside of the conditional will be
displayed in cases where there are no results returned for the tag. 

::

	{if no_results}  <p>There are no entries available.</p>  {/if}

Further, you may specify that another Template be shown in a case when
there are no results. In order to do that, you must use the redirect=
variable

::

	{if no_results} {redirect="channel/noresult"} {/if}

Lastly, if you want to simply display your 404 page (with 404 headers)
when no entries are returned, simply use "404" as the template name. 

::

	{if no_results} {redirect="404"} {/if}

if not\_category\_request
~~~~~~~~~~~~~~~~~~~~~~~~~

::

	{if not_category_request} content {/if}

This special conditional lets you conditionally display content if the
current tag is *not* being displayed based on a category specified in
the URL. For instance, if the URL being viewed were
http://example.com/index.php/channel/archives/C13/ that would not
trigger this conditional.

if not\_forum\_topic
~~~~~~~~~~~~~~~~~~~~

::

	{if not_forum_topic} content {/if}

You may use this conditional for displaying content when *no* forum
topic has been associated with a channel entry. That option is only
available if the Discussion Forum Module is installed. It will typically
be used like so::

	{if not_forum_topic} There is no forum discussion available. {/if}

if photo
~~~~~~~~

::

	{if photo} content {/if}

This special conditional lets you conditionally display content if the
current entry's author has a photo image specified. ::

	{if photo} <img src="{photo_url}" width="{photo_image_width}" height="{photo_image_height}" alt="{author}'s photo" /> {/if}

if signature\_image
~~~~~~~~~~~~~~~~~~~

::

	{if signature_image} content {/if}

This special conditional lets you conditionally display content if the
current entry's author has a signature image specified. ::

	{if signature_image} <img src="{signature_image_url}" width="{signature_image_width}" height="{signature_image_height}" alt="{author}'s signature" /> {/if}

if sticky
~~~~~~~~~

::

	{if sticky == 'y'} content {/if}

You may test whether an entry is set to be "sticky". You may also test
whether it is not "sticky". ::

	{if sticky == 'n'} content {/if}

Examples:
~~~~~~~~~

To test for the member group being "4"::

	{if group_id == "4"}  This author, {author}, is in group 4  {/if}

To test for 10 or more comments::

	{if comment_total >= "10"}  Look out!  Hot topic!!  {/if}

Multiple Conditions
-------------------

You can nest conditional statements in order to create more complicated
restrictions. ::

	{if summary != ""} {if username =="fred"}  Hey Fred!  Look at this summary.  {/if} {/if}

or

::

	{if comment_total == 0}  No one has posted yet!  Come on guys!  {/if}

Please remember that we use the PHP convention of double equals signs
for equivalence::

	{if comment_total == 10}

Doing the following is **not** allowed: {if comment\_total = 10}

Special Conditionals
--------------------

You may also, of course, use the `global
conditional <../../templates/globals/conditionals.html>`_ variables to
test for logged in/out status as well as other things. If you want to
show something **only** to users who are logged in::

	{if logged_in}  stuff...  {/if}

Or **not** logged in::

	{if logged_out}  stuff...  {/if}

**Note:** Use of {if logged\_in} and {if logged\_out} inside a Channel
Entries tag on a cached template will not display properly. The logged
in state of the user whose visit prompts the cache to be written will
permanently affect the information displayed to all visitors.
