Performance Monitoring with New Relic
=====================================

ExpressionEngine supports deep application monitoring with `New Relic
<http://newrelic.com/>`_
out of the box. When New Relic is deployed on your server,
you will instantly have visibility into performance metrics such as [1]_:

* Individual page transaction performance
* Slow SQL queries
* Detailed Stack traces that can help diagnose specific pain points
  in both first and third-party code.
* Identifying transactions that are memory / resource hogs

This information can be used to help you make decisions on where to
focus your efforts when optimizing, whether it be making changes to
templates, implementation caching mechanisms, modifying your add-ons,
or even just knowing which developer to seek out for support.

.. [1] Availability of features may vary depending on your New Relic
   account.

Disabling New Relic's RUM JavaScript
------------------------------------

It may be desirable at times to disable New Relic's `Real User Monitoring
JavaScript <https://newrelic.com/docs/features/real-user-monitoring>`_
from being inserted into your web pages. Services that fetch your
web pages in order to import content for you (such as `Campaign Monitor
<http://campaignmonitor.com>`_ and `MailChimp <http://mailchimp.com>`_
for instance) may get hung up on the script tag that the New Relic
PHP extension inserts into your content.

To disable New Relic's RUM JavaScript from being inserted, navigate in
your control panel to:

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> System Administration --> Output and Debugging`

And disable the *Enable New Relic RUM JavaScript?* Preference.