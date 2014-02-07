Template Routes
===============

By default Templates are accessed by their name and Template Group using
this URL structure::

	http://example.com/index.php/template_group/template

Template routes allow you to override this default behavior by allowing
you to assign URL segments to variables and apply rules to them.

Usage
-----

You can set the route for a template using the Access section of the
Template Manager. To see an overview of your site's routes use the 
Template Route Manager.

Template Route
~~~~~~~~~~~~~~

This route determines the URLs that will match your template. The
format is as follows::

	/segment/{variable}/{variable:rule}/{variable:rule0|rule1[arg]}

Once you set a Template Route you can access the template by the
URL you set. You can still access the template from the default
group/template URL, but the segment variables will not be available.

This is a URL segment with no rules, you can use any alpha-numeric
string for variable::

	{variable}

A segment can have multiple rules applied to it. Rules allow you to
limit the URLs that will match your template route. The format for
using rules looks like this::

	{variable:rule0|rule1|rule2[arg0, arg1, ...]|...}

Rules are separated by a "|" and if a rule has arguments they are
set in brackets and separated by commas if there are more than one.

Here is an example of a full Template Route::

	/name/{first_name:alpha}/{last_name:alpha}/{suffix:regex[(i|v|x)+]}

This will match URLs such as::

	/member/Enrico/Fermi/III

Template Routes override the default behaviour of URLs, Meaning you
must add a segment for pagination and a segment for categories if you
wish to use them in your routed templates. There are predefined rules for 
matching both. Here is an example::

    /blog/{section:category}/{page:pagination}

For this set up to work, "Require All Segments" must be set to no.
With the above route and segments set to optional the following
URLs will match::

    /blog

    /blog/C10

    /blog/P20

    /blog/C10/P20


Sometimes you may wish to use category titles instead of category IDs, 
you can use a Template Route to accomplish this::

    /blog/category/{section:alpha_dash}/{page:pagination}

Rules
^^^^^

::

	alpha_dash

Matches alphabetic characters, 0 through 9, underscore, and dash.

::

	alpha_numeric

Matches alphabetic character and 0 through 9.

::

	alpha

Matches only alphabetic characters.

::

	base64

Matches base64 encoding; Alphabetic characters, 0 through 9, "/", "+",
and "=".

::

	category

Matches EE style category segments (e.g. C10).

::

	integer

Matches positive and negative integers.

::

	max_length[n]

Matches a maximum of n characters. 

::

	min_length[n]

Matches a minimum of n characters.

::

	natural

Matches only natural numbers [0, +inf)

::

	numeric

Matches all number types.

::

	pagination

Matches an EE style pagination segment (e.g. P20).

::

	regex[regular_expression]

Matches an arbitrary regular expression.

.. note:: Regular expression matches are performed case insensitively

Require all Segments
~~~~~~~~~~~~~~~~~~~~

If set to "yes" all segments defined in your Template Route must
be contained in a URL in order for it to match. For example in this
Template Route::

	/name/{first_name}/{last_name}/{suffix}

If "Require all Segments" is set to "No" (the default) then all of the
following URLs will match::

	/name/Enrico/Fermi/III

	/name/Enrico/Fermi

	/name/Enrico

	/name

Otherwise if all segments are required only the first URL will match.


Segment variables and Paths
---------------------------

The segment variables define in your Template Routes can be used in
your template using the following pattern::

	{segment:name}

Paths for templates that have assigned Template routes can be generated
in your templates as follows. Supposing your Template Route is defined
as::

	/name/{first_name}/{last_name}/{suffix}

Then in your templates you can generate a path to that template using::

	{path="template_group/template" first_name"Enrico" last_name="Fermi"}


Template Route Manager
----------------------

This provides an overview of your site's URL structure, for more info
see the control panel documentation.
