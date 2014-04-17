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
:doc:`/cp/design/templates/template_route_manager`.

The :doc:`/cp/design/templates/template_route_manager` lists your
Template Routes in the order they are processed when matching a URL.
You can drag and drop your Template Routes in the Route Manager to set
a custom parse order.

Setting a custom parse order can be useful in situations where you have
potentialy ambiguous routes. For example, suppose you want to construct
a URL pattern for an event calendar where you want to be able to show
events by an event type or for a particular date. In this example we
want to have the following URLs::

  /events/bank-holidays

  /events/04-30-2014

Each URL should point to its own template, one for showing a listing
of events by date, and one for showing a listing by event type. We could
use the following routes to match::

  /events/{type:alpha_dash}

  /events/{date:regex[(\d{2}-\d{2}-\d{4})]}

An issue arises if ExpressionEngine parses your routes in the above order
when trying to match a URL. If we try to visit a URL with a date, like
in our second URL, ExpressionEngine will try matching against the route
with the alpha_dash rule first. Since our date rule is a subset of
alpha_dash, the alpha_dash rule will always match our date URLs before
ExpressionEngine can route them to the correct template. By simply
changing the parse order in the Template Route Manager so that the date
route is first, ExpressionEngine will match the date URLs to the right
template.

.. important:: Template Routes overrides the default behavior of URLs,
   if you wish to use a Channel Entries Tag in your template you must
   manually provide segments for any parameters that are normally set
   in the URL. You must provide a segment for pagination, categories,
   and entry titles if you wish to use those in your Channel Entries
   Tag. Additionally, be careful when using dynamic="yes" with Template
   Routes, this can cause issues if your route does not have an
   appropriate segment set.

Template Route
~~~~~~~~~~~~~~

This route determines the URLs that will match your template. The
format is as follows::

  /segment/{variable}/{variable:rule}/{variable:rule0|rule1[arg]}

Once you set a Template Route you can access the template by the URL you
set. You can still access the template from the default group/template
URL, but the template route variables such as ``{segment:variable}``
will not be available in your template.

This is a URL segment with no rules, you can use any alpha-numeric
string for variable::

  {variable}

A segment can have multiple rules applied to it. Rules allow you to
limit the URLs that will match your template route. The format for using
rules looks like this::

  {variable:rule0|rule1|rule2[arg0, arg1, ...]|...}

Rules are separated by a ``|`` and if a rule has arguments they are set
in brackets and separated by commas if there are more than one.

Here is an example of a full Template Route::

  /name/{first_name:alpha}/{last_name:alpha}/{suffix:regex[(i|v|x)+]}

This will match URLs such as::

  /member/Enrico/Fermi/III

Template Routes has built in rules for handling pagination and
categories::

  /blog/{section:category}/{page:pagination}

For this set up to work, "Require All Segments" must be set to no. With
the above route and segments set to optional the following URLs will
match::

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

.. note:: Base64 allows slashes, so if you use this rule make sure you
   only use it on the trailing URL segment, otherwise it can cause
   issues with matching URLs.

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

  regex[(regular_expression)]

Matches an arbitrary regular expression. Your regular expression must
be inside a named capturing group, for example::

  regex[([0-9]{3})]

.. note:: Regular expression matches are performed case insensitively

Require all Segments
~~~~~~~~~~~~~~~~~~~~

If set to "yes" all segments defined in your Template Route must be
contained in a URL in order for it to match. For example in this
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

The segment variables define in your Template Routes can be used in your
template using the following pattern::

  {segment:name}

Paths for templates that have assigned Template routes can be generated
in your templates as follows. Supposing your Template Route is defined
as::

  /name/{first_name}/{last_name}/{suffix}

Then in your templates you can generate a path to that template using::

  {route="template_group/template" first_name"Enrico" last_name="Fermi"}

The route variable requires the template group and template name. You
can optionally provide values for your defined route segments, you must
use the same variable defined in your route.


Template Route Manager
----------------------

This provides an overview of your site's URL structure, for more info
see :doc:`the control panel documentation
</cp/design/templates/template_route_manager>`.
