***********************************
ExpressionEngine 3.0 Plugin Changes
***********************************

.. highlight:: php

Plugins have changed in two ways. First, the ``$plugin_info`` array is no
longer needed and will be ignored by 3.0. All that data is now pulled from the
:doc:```addon.setup.php`` file </development/addon_setup_php_file>`. Second,
plugins must be installed via the Add-On Manager before they can be used.
