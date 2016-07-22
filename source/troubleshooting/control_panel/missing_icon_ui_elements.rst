Missing Icon UI Elements
========================

Icon UI elements in the control panel are not loading. Your browser may have logged console errors indicating "Bad URI or cross-site access not allowed".

Problem
-------

For security reasons, many modern browsers do not allow font resources to be downloaded and used from domains other than their origin. This can be so strict that it even affects subdomains. So if your :doc:`Themes directory URL </cp/settings/urls>` is set to ``example.com/themes/``, but you are accessing your control panel from ``www.example.com`` or ``anotherdomain.com``, the browser may prevent the icons from being loaded.

Solution
--------

ExpressionEngine ships with an ``.htaccess`` file in the themes folder that should loosen these restrictions on Apache servers that support the mod_headers module.

If your environment does not support mod_headers, contact your host and ask how to enable Cross-Origin Resource Sharing.

If the missing icons are only an issue when accessing the control panel using www vs without www, then another option is to use a canonical redirect to `remove or force www <https://yoast.com/how-to-remove-www-from-your-url-with-mod_rewrite/>`__ (this is a good idea in any case).
