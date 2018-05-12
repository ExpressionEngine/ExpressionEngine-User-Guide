#######
Consent
#######

.. contents::
	:local:
	:depth: 1

************
Introduction
************

The Consent module allows you to build tools to allow visitors to manage their consent. In conjunction with :ref:`consent_variables`, you can build rich sites that respect activity that a visitor has consented.

For example, consenting to use of certain cookies, of using their information for marketing purposes, and so on. These tags enable you to ensure that a visitor is freely giving their consent, for specific granular purposes, to inform them of the nature of what they are consenting to, to actively and unambiguously indicate their consent, and to see and manage (grant or withdraw) their consent to individual items.

.. tip: These tags can help you build nearly any tool you need to obtain and manage consent for processing personal data, such as is required by the |gdpr|.

************
Consent Form
************

.. contents::
  :local:
  :depth: 1

Consent Forms allow the visitor to grant or withdraw consent to one or more Consent Requests::

  {exp:consent:form consent='ee:cookies'}

        <h2>{consent_title}</h2>

        {consent_request}

        Accepted: <input type="checkbox" name="{consent_short_name}" value="y" {if consent_granted}checked{/if} />

    <input type="submit" name="submit" value="Submit" />

  {/exp:consent:form}

Parameters
==========

.. contents::
  :local:

consent=
--------

::

  consent='ee:cookies'

You can specify consent requests by their short name. You may specify multiple requests by separating them with the pipe character:

::

  consent='ee:cookies|ee:tos'

Or use "not" to exclude entries::

  consent='not twitter_app'

consent_id=
-----------

  consent_id='3'

You can specify consent requests by their IDs as well. You may also specify multiple consent requests by separating them with the pipe character:

::

  consent_id='13|42|147'

Or use "not" to exclude entries::

  consent_id='not 45|534|807'

form_class=
-----------

::

  form_class='consent_form'

Specify the HTML ``class=`` attribute.

form_id=
--------

::

  form_id='consent_form'

Specify the HTML ``id=`` attribute.

json=
-----

::

  json='yes'

Return the results in JSON format, instead of performing a redirect. Used for Ajax consent forms.

return=
-------

::

  return='site/consent'

Specify a path to redirect the user to after submission. If not specified, they will be returned to the current page.

Variables
=========

.. contents::
  :local:
  :depth: 1

consent_creation_date
---------------------

The date the consent was created.

::

  {consent_creation_date format='%Y %m %d'}

The date the request was created. See :doc:`Date Variable Formatting </templates/date_variable_formatting>` for more information.

consent_edit_date
-----------------

  {consent_edit_date format='%Y %m %d'}

The date the consent request was last edited. See :doc:`Date Variable Formatting </templates/date_variable_formatting>` for more information.

consent_granted
---------------

A boolean variable for conditionals that returns ``TRUE`` or ``FALSE``.  Returns ``TRUE`` if the user has granted permission to the consent request, ``FALSE`` otherwise.

::

  {if consent_granted}
      Set that cookie!
  {/if}

consent_granted_date
--------------------

::

  {consent_granted_date format='%Y %m %d'}

If consent was granted to the request, this will show the date the consent was granted. See :doc:`Date Variable Formatting </templates/date_variable_formatting>` for more information.

consent_id
----------

The ID number of the consent.

::

  {consent_id}

consent_request
---------------

The description of the consent request.

::

  {consent_request}

consent_short_name
------------------

The short name of the consent.

::

  {consent_short_name}

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

Examples
========

Simple Bulk Consent Form
-------------------------

::

  {exp:consent:form}
    <fieldset>
      <legend>{consent_title}</legend>
      <label>
        <input type="radio" name="{consent_short_name}" value="y" {if consent_granted}checked{/if}>
        Grant Consent
      </label>
      <label>
        <input type="radio" name="{consent_short_name}" value="n" {if ! consent_granted}checked{/if}>
        Withdraw Consent
      </label>
    </fieldset>

    <fieldset>
      <input type="submit" name="submit" value="Submit" />
    </fieldset>
  {/exp:consent:form}

AJAX-Driven Consent Form
------------------------

::

  <html>
    <head>
      <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    </head>
    <body>
      {exp:consent:form consent='ee:cookies' json='yes' form_id='cookieConsentForm'}
        <h1>{consent_title}</h1>
        {consent_request}
        <input type="hidden" name="{consent_short_name}" value="y">
        <input type="submit" name="submit" value="Allow" />
      {/exp:consent:form}

      <script src="//code.jquery.com/jquery-3.2.1.min.js"></script>

      <!--using the jQuery Form plugin http://jquery.malsup.com/form/-->
      <script src="/js/jquery.form.js" type="text/javascript"></script>

      <script type="text/javascript">
        $(document).ready(function(){
          $('#cookieConsentForm').ajaxForm({
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
    </body>
  </html>
