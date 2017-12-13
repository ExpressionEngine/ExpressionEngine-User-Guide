return=
-------

::

  return="email/thanks"

This parameter lets you specify a path (or full URL) where the user should be directed
after the form is submitted. Upon submission, the user is presented with
a standard "thank you" message and a link. If this parameter is **not**
used, then the link will point to the page they were on prior to
arriving at the email form. ::

  return="email/thanks"

If used with the redirect="none" parameter, the link text can be
specified by adding the pipe character and the desired link text. If you
are specifying only the link text, then you must precede it by the pipe
character::

  return="about|Return to About Page"

::

  return="|Return to the Site"
