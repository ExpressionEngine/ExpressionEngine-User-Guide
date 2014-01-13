##############################
Update Notes for Version 2.7.4
##############################

*********************************************************
New Variable Available in Forgotten Password Instructions
*********************************************************

The ``{username}`` variable can now be used in the :ref:`Forgotten
Password Instructions <email-notification-templates>` email template,
and installations that have this particular template unmodified from the
default are updated automatically by the update wizard. If you have
customized the this email template, you may want to reference the new
default for a suggestion on how to incorporate the new variable into
your template::

	{name},

	To reset your password, please go to the following page:

	{reset_url}

	Then log in with your username: {username}

	If you do not wish to reset your password, ignore this message. It will expire in 24 hours.

	{site_name}
	{site_url}


:ref:`Return to Update Page <update_cleanup>`
