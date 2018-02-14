Multi Site Login
================

If you have multiple sites, you may prefer that when a user logs into one site, they are logged into all sites.

In order for multi site login to work, all of the sites must use **cookies only** to hold the session data on the frontend.  In :menuselection:`Settings --> Security and Privacy`: make sure the **Website Session type** is set to **Cookies only** for each site you want to include.

If your sites are in separate subfolders (``http://example.com/site2/index.php``) or separate subdomains (``http://site2.example.com/index.php``) you can simply set the cookie domain for each site to the top level domain.

In the case of ``http://example.com/site2/index.php`` or ``http://site2.example.com/index.php`` type URLs, the cookie domain should be **.example.com**.

Logging in on any of the URLs would result in cookies that can be read on any subfolder or subdomain of the example.com URL.

However, cookies for one domain cannot be set from a different domain. If your sites use different domains, you'll need to use the multi_login_sites :doc:`configuration override </general/system_configuration_overrides>` . Add the following to your system/user/config/config.php file, modified according to the domain names used by your sites::

$config['multi_login_sites'] = "http://www.example.com/|http://www.sitetwo.com/|http://www.sitethree.com/";

Now when a user logs into the frontend of one of the sites, the login routine will invisibly loop through each URL in the configuration, redirecting to that site, setting the appropriate cookies, and then cycling through to the next site.  Once the user has been logged into all of the sites, they'll end up back on the starting URL.  The login redirects will be virtually unnoticable.






