Consent Requests
================

.. contents::
	:local:
	:depth: 1

Introduction
------------


*************************
Consent Requests Form Tag
*************************

  {exp:consent_requests:form consent_short_name="ee_cookies"}

        <h2>{title}</h2>

        {request}
        Accepted: <input type="checkbox" name="{consent_short_name}" value="y" {if consent_granted}checked{/if} />

    <input type="submit" name="submit" value="Submit" />

  {/exp:consent_requests:form}

Parameters
==========

.. contents::
  :local:


consent_id=
-----------

  consent_id="3"

You can hard code the consent requests by specifying a consent request ID. You may also specify multiple consent requests by separating them with the pipe character:

::

  consent_id="13|42|147" Or use "not" to exclude entries::

  consent_id="not 45|534|807"

consent_short_name
------------------

::

  consent_short_name="ee_cookies"

You can hard code the consent requests by specifying a consent request short name. You may  specify multiple requests by separating them with the pipe character:

::

  consent_short_name="ee_cookies|ee_tos"

Or use "not" to exclude entries::

  consent_short_name="not twitter_app"


form_class=
-----------

::

  form_class="consent_form"

Specify the CSS class.


form_id=
--------

::

  form_id="consent_form"

Specify the CSS id.


json=
-----

::

  json="yes"

Output your results in JSON format, instead of performing a redirect.


return=
-------

::

  return="site/consent"

Specify a path to redirect the user to after submission. If not specified, they will be returned to the current page.


Single variables
================

The consent requests tag pair loops through consents pulled back by the tag. It's an easy way to output all consent data, including whether consent is currently given or denied.

The following variables are available within the tag pair:


consent_id
----------

The ID number of the consent.


::

  {consent_id}


consent_granted_date
--------------------

::

  {consent_granted_date format="%Y %m %d"}

If consent was granted to the request, this will show the date the consent was granted. See :doc:`Date Variable Formatting
</templates/date_variable_formatting>` for more information.

consent_short_name
------------------

The short name of the consent.


::

  {consent_short_name}


consent_creation_date
---------------------

The date the consent was created.


::

  {consent_creation_date format="%Y %m %d"}

The date the request was created. See :doc:`Date Variable Formatting
</templates/date_variable_formatting>` for more information.


consent_edit_date
-----------------

  {consent_edit_date format="%Y %m %d"}

The date the consent request was last edited. See :doc:`Date Variable Formatting
</templates/date_variable_formatting>` for more information.


consent_title
-------------

The title of the consent request.


::

  {consent_title}


consent_version_id
------------------

The version_id of the consent request.


::

  {version_id}


request
-------

The description of the consent request.


::

  {request}





Conditional Tags
================


consent_granted
---------------

A boolean conditional that returns ``TRUE`` or ``FALSE``.  Returns ``TRUE`` if the user has granted permission to the consent request, ``FALSE`` otherwise.

::

	{if consent_granted}
	    Set that cookie!
	{/if}



Examples
========

Simple Bulk Consent Form
-------------------------

::

  {exp:consent_requests:form}

    <h1>{title}</h1>

        <label class="checkbox">Granted:
          <input type="radio" name="{consent_short_name}" value="y" {if consent_granted}checked{/if}>
        </label>
        <label class="checkbox">Denied
          <input type="radio" name="{consent_short_name}" value="n" {if ! consent_granted}checked{/if}>
        </label>

    <input type="submit" name="submit" value="Submit" />

  {/exp:consent_requests:form}


AJAX-driven Consent Form
------------------------

::


	<html>
		<head>

    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="//code.jquery.com/jquery-3.2.1.min.js"></script>

    <!--using the jQuery Form plugin http://jquery.malsup.com/form/-->
    <script src="/js/jquery.form.js" type="text/javascript"></script>
			<script type="text/javascript">
				$(document).ready(function(){
					$('#consentForm').ajaxForm({
						dataType: 'json',
						success: function(data) {
							if (data.success) {
								alert('Cookies will now be set for this site.')
							} else {
								alert('Failed with the following errors: '+data.errors.join(', '));
							}
						}
					});
				});
			</script>
		</head>
		<body>
    {exp:consent_requests:form consent_short_name="ee_cookies" json="yes" form_id="consentForm"}
      <input type="hidden" name="ee_cookie" value="y">
      <input type="submit" name="submit" value="Allow Cookies" />
    {/exp:consent_requests:form}
		</body>
	</html>






