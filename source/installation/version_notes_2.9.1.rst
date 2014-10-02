Update Notes for Version 2.9.1
==============================

New Relic Users
---------------

As of 2.9.1, the version number will no longer be included in your Application
name in your New Relic dashboard. Previously ExpressionEngine would append
the version number so that the dataset for each version was in its own container,
isolating performance issues. In anticipation of support of deployments
via New Relic's PHP API, ExpressionEngine no longer includes the version number,
so that data will remain in a single Application container.

If you prefer to keep the old behavior, please enable the :ref:`overrides-newrelic-include-version-number`
config override in your ``system/expressionengine/config/config.php`` file.