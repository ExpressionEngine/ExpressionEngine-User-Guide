Cookie Consent Module Control Panel
===================================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Add-Ons --> Modules --> Cookie Consent`

CP Login Checkbox Display
-------------------------

Once the Cookie Consent Module is installed, login to both the frontend and
the backend of the site will require explicit consent to set cookies. This
consent is indicated by the existence of a cookie named cookies_allowed.  
If no means of setting the cookie is provided by the site design, administrators 
may be unable to login to the control panel.  The module provides a setting to 
automatically add a cookie consent checkbox to the control panel screen.

By default, the module is set to add this checkbox, allowing administrators 
uninterrupted access to the control panel.  If a more elaborate modification 
to the backend login is desired, this setting can be turned off and a custom 
theme page added.  If you need to add links to a privacy policy or include a 
detailed description of the cookies used on the site, a custom theme page will 
be a better permanent option.   

Cookie Delete Behavior
----------------------

The control panel also provides you with the option to delete all domain cookies 
when cookie consent has not been granted.  By default, ExpressionEngine deletes 
only cookies with an EE cookie prefix when attempting to set a cookie without 
consent being granted.


.. toctree::
	:glob:
	:titlesonly:
	:hidden: