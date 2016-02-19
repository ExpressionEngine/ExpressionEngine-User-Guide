===
URL
===

URL is a field type for storing URLs. This field type is validated for the content author, so that only fully formed and valid URLs are allowed. The site builder can determine which URL schemes are allowed. URLs are entity encoded so that they may be used directly in links and other HTML attributes, e.g.::

  <a href="{your_url_field}">Your Link</a>

*************
Field Options
*************

Allowed URL Schemes
===================

Which URL Schemes the content author is allowed to use in this URL field. Available options are:

- ``http://``
- ``http://``
- ``//`` (domain-relative URLs)
- ``ftp://``
- ``sftp://``
- ``ssh://``

URL Scheme Placeholder
======================

The placeholder text for the field that will give a cue to content authors as to the type of content that belongs in this field. Available options are identical to the "Allowed URL Schemes" above. Rendered example:

.. raw:: html

  <input placeholder="https://" style="width:50%">
