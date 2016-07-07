#######################
Version Notes for 3.3.4
#######################

An `.htaccess` file was added to the themes folder in order to allow font resources to be downloaded and used across domains and subdomains in environments that support it.  Without such access, UI image elements in the control panel may be missing when viewed using certain URLs.

When you update, be certain to copy over the .htaccess file from the new themes folder to your current themes folder.
