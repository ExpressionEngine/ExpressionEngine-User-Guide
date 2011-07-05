SafeCracker Module
==================

SafeCracker makes it possible to add and edit entries from outside of
the Control Panel using a Stand-Alone Entry Form (SAEF). Thank you to
`Barrett Newton <http://barrettnewton.com/>`_ for developing SafeCracker
and working with EllisLab to provide it to the ExpressionEngine
community.

Key Features
------------

-  Allows guest (logged out) users to use the entry form, with optional
   CAPTCHA support.
-  Edit existing entries, and only edit the fields you need. Fields not
   in your form will be left intact.
-  Adds or edits entries based on the presence of an entry\_id and/or
   url\_title.
-  Allows use of the entry\_id or url\_title in your return URL, so that
   you may redirect to the entry that was just created. Useful for
   multi-page forms.
-  Specify a default status, or set forms to override default statuses.
-  Specify different return URLs for different member groups by the
   group\_id. Send visitors to one page, and admins to another.
-  Server-side form validation using the `CodeIgniter Form Validation
   class <http://codeigniter.com/user_guide/libraries/form_validation.html>`_.
-  Handles AJAX requests and can output responses in JSON.
-  Includes an optional `SafeCracker File <usage.html#file_fieldtype>`_
   fieldtype.

Installing SafeCracker
----------------------

SafeCracker is not installed by default. To install it:

#. Visit Add-ons > Modules
#. Click the Install link for SafeCracker
#. Confirm that you also want to install the Extension component by
   selecting Install and clicking Submit.

**NOTE:** You'll want to ensure that you are allowing extensions if you
install the Extension component.

Using SafeCracker
-----------------

-  `First Steps <usage.html#first_steps>`_
-  `Form Inputs <usage.html#form_inputs>`_
-  `Parameters <usage.html#parameters>`_
-  `Variables <usage.html#variables>`_
-  `Form Validation <usage.html#form_validation>`_
-  `Allowing Guests to Post Entries <usage.html#guests>`_
-  `Settings <usage.html#settings>`_
-  `SafeCracker File Fieldtype <usage.html#file_fieldtype>`_
-  `Examples <usage.html#examples>`_

Development
-----------

-  `Getting your custom fieldtype to work with
   SafeCracker <development.html#section_getting_it_to_work>`_
-  `Extension Hooks <development.html#section_hooks>`_

.. toctree::
	:glob:
	:titlesonly:
	:hidden:
	
	*