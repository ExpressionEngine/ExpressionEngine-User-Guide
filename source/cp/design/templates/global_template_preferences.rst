Global Template Preferences
===========================

Control Panel Location: Design > Templates > Global Preferences
|Global Template Preferences|
This section of the Control Panel allows you to define global
preferences which globally affect all Templates.

Strict URLs
~~~~~~~~~~~

This setting determines whether or not ExpressionEngine allows Templates
from your default Template Group to be directly accessed in the first
URL segment. Enabling Strict URLs requires that the first URL segment be
a valid Template Group only, or a 404 page is shown.

If you wish to extend this to the second segment, requiring a valid
template, then in your "index" template of your Template Group(s) that
you wish to do this, you can take advantage of the `{redirect=} global
variable <../../../templates/globals/single_variables.html#var_redirect>`_
like so::

	{if segment_2 != ''}   {redirect="404"} {/if}

Our official recommendation is that users **enable** Strict URLs, as
doing so makes the path to your content more precise, allows more
relevant 404 pages, and does not allow your content to be shown with
variances in the URL structure. However, for legacy reasons, Strict URLs
are disabled by default.

404 Page
~~~~~~~~

This determines which template should be displayed when someone tries to
access an invalid URL. If you choose "None", a standard 404 message and
server header will be shown.

Please note that ExpressionEngine **only** validates the first two
segments of your URLs when determining whether to show a 404 page, since
these segments will correlate to a Template Group and Template name
(which represent your site's "pages"). Anything beyond the first two
segments can not be used to show a 404 page (with one notable exception,
using the
`require\_entry= <../../../modules/channel/parameters.html#par_req_entry>`_
parameter).

For an explanation regarding how ExpressionEngine interprets your URLs,
please see `ExpressionEngine URLs <../../../general/urls.html>`_ page.

Save Template Revisions
~~~~~~~~~~~~~~~~~~~~~~~

If this preference is set to "Yes", then any changes you make to one of
your `Templates <edit_template.html>`_ will be saved. This allows you to
keep a record of all changes made so that you can easily revert back to
an earlier version of a Template if you need to do so.

Maximum Number of Revisions to Keep
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The maximum number of revisions that should be kept for **each**
template. For example, if you set this to 5, only the most recent 5
revisions will be saved for any given template. This setting helps
ensure that your database does not get too large due to storing Template
revisions.

Allow Templates to be Saved as Files?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This determines whether your Templates are saved out to a flat text file
when you save them. See the `Flat File
Templates <../../../templates/flat_file_templates.html>`_ section for
specific information.

Basepath to Template File Directory
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This is the *server path* to the folder you have created to hold the
Template files. It is important that you use the server path for the
preference and not a URL. A server path often looks similar to:

/home/usr/domain.com/http\_docs/system/expressionengine/template\_files/

Server paths will vary from server to server, so you should contact your
Host or server admin if you are unsure of what your setting should be.

See the `Flat File
Templates <../../../templates/flat_file_templates.html>`_ section for
more information.

.. |Global Template Preferences| image:: ../../../images/global_template_preferences.png
