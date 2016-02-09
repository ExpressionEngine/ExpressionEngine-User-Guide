Missing Glyphicon Icon UI Elements
==================================

Glyphicon icon UI elements are not loading. Your browser may have logged console errors indicating "Bad URI or cross-site access not allowed".

Problem
-------

For security reasons, many modern browsers do not allow font resources to be downloaded and used from domains other than their origin. This can be so strict that it even affects subdomains. So if your :doc:`Themes directory URL </cp/settings/urls>` is set to ``example.com/themes/``, but you are accessing your control panel from ``www.example.com`` or ``anotherdomain.com``, the browser may prevent the Glyphicons from being loaded.

Solution
--------

You can use a canonical redirect to `remove or force www <https://yoast.com/how-to-remove-www-from-your-url-with-mod_rewrite/>`__ if that is your only issue (and is a good idea in any case).

But to ensure that these resources are available regardless of what domain you are running your control panel from, you can add the following to your ``.htaccess`` file:

.. code-block:: apache

  <FilesMatch "\.(ttf|otf|eot|woff)$">
    <IfModule mod_headers.c>
      Header set Access-Control-Allow-Origin "*"
    </IfModule>
  </FilesMatch>
