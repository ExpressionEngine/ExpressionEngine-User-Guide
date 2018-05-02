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

  {exp:consent_requests:form consent_id="5|7"}

        <h2>{title}</h2>

        {request}
        Accepted: <input type="checkbox" name="{consent_name}" value="y" {if consent_granted}checked{/if} />

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

consent_name
------------

::

  consent_name="ee_cookies"

You can hard code the consent requests by specifying a consent request short name. You may  specify multiple requests by separating them with the pipe character:

::

  consent_names="ee_cookies|ee_tos"

Or use "not" to exclude entries::

  consent_names="not twitter_app"


consent_type=
-------------

::

  consent_type=

I am fuzzy on this one!!!!!!!!!!!!!!!!!!!!!!!!!!


id=
---

::

  id="consent_form"

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


site_id
-------

::

  site_id="1"



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

consent_name
------------

The short name of the consent.


::

  {consent_name}


creation_date
-------------

The date the consent was created.


::

  {creation_date format="%Y %m %d"}

The date the request was created. See :doc:`Date Variable Formatting
</templates/date_variable_formatting>` for more information.


edit_date
---------

  {edit_date format="%Y %m %d"}

The date the consent request was last edited. See :doc:`Date Variable Formatting
</templates/date_variable_formatting>` for more information.


request
-------

The description of the consent request.


::

  {request}


title
-----

The consent title.


::

  {title}


version_id
----------

The version_id of the consent request.


::

  {version_id}



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

::

  {exp:consent_requests:form}

    {title}

        <label class="checkbox">Granted:
          <input type="radio" name="{consent_name}" value="y" {if consent_granted}checked{/if}>
        </label>
        <label class="checkbox">Denied
          <input type="radio" name="{consent_name}" value="n" {if ! consent_granted}checked{/if}>
        </label>

    <input type="submit" name="submit" value="Submit" />

  {/exp:consent_requests:form}







