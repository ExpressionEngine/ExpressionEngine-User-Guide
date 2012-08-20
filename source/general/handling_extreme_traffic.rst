Handling Extreme Traffic with ExpressionEngine
==============================================

**Notice:** This info is intended for Server Admins when dealing with
high-volume traffic spikes or as a permanent solution for radically high
volume sites.


These ExpressionEngine features will help Server Admins decrease server
resource usage and keep an ExpressionEngine installation running
smoothly in the event of a traffic spike or as a way of dealing with the
day-to-day reality of radically high-volume sites.

Database Activity
-----------------

ExpressionEngine uses the default MySQL storage engine as specified by
the MySQL server when it is installed, which in nearly every case will
be MyISAM. This is an appropriate choice since ExpressionEngine is
primarily a read-heavy application, hosts are typically much more
familiar with tuning the server for that storage engine, and using
different storage engines for different tables requires greater resource
usage and more nuanced server management than most administrators will
typically allow.

MyISAM requires MySQL to establish a file lock to update a table. In
normal operation, this is perfectly fine. However, during extreme
traffic events, there are a few tracking features of ExpressionEngine
that update certain tables on every page load, resulting in a queue of
locked tables as MySQL tries to keep up. These can be disabled in your
Control Panel `Tracking
Preferences <../cp/admin/tracking_preferences.html>`_. If
you are unable to access your site due to the traffic, you or your
server administrator can manually override these features in your
config.php file as follows:

config.php Extreme Traffic Overrides
------------------------------------

::

	$config['enable_online_user_tracking']
	
(y/n) - Corresponds to `Enable Online User Tracking? <../cp/admin/tracking_preferences.html#enable_online_user_tracking>`_

::

	$config['enable_hit_tracking']

(y/n) - Corresponds to `Enable Template Hit Tracking? <../cp/admin/tracking_preferences.html#enable_hit_tracking>`_

::
	
	$config['enable_entry_view_tracking']

(y/n) - Corresponds to `Enable Channel Entry View Tracking? <../cp/admin/tracking_preferences.html#enable_entry_view_tracking>`_

::

	$config['log_referrers']

(y/n) - Corresponds to `Enable Referrer Logging? <../cp/admin/tracking_preferences.html#log_referrers>`_

::

	$config['dynamic_tracking_disabling']

(numeric) - Corresponds to `Suspend ALL tracking when number of online visitors exceeds: <../cp/admin/tracking_preferences.html#dynamic_tracking_disabling>`_

::

	$config['disable_all_tracking']

(y/n) - Emergency config.php only preference which when set to 'y' will disable all of the above. This is useful for server administrators who need a way to respond immediately to table locks during a traffic spike to keep the site running smoothly.

If you have public facing ExpressionEngine-generated forms, you may also
find it beneficial to disable the :doc:`Secure Forms <spam_protection>`
feature, though be aware that that hinders ExpressionEngine's ability to
help prevent CSRF and spam attacks on your site. Or you may temporarily
remove the forms or move them to a less popular URL (such as off of the
index page) to mitigate the additional database use.

Lastly, if you have a membership based site and have a sudden and
tremendous influx of traffic of members who have not visited your site
in a number of hours, the update of their last activity may cause a
table lock. If you find this to be the case, you can have the server
administrator run the following query after killing the locks, to delay
the individual updates for members until a later time, perhaps when
traffic is less tense. The example below pushes this off for another 20
hours (72000 seconds). 

::

	UPDATE exp_members SET last_activity = (UNIX_TIMESTAMP() + 72000)


Disk I/O
--------

ExpressionEngine's caching mechanisms can help reduce database load in
most situations. However if your site is hosted on an environment using
NAS/SAN storage for single or load-balanced web servers, `Query
Caching <caching.html#query_caching>`_ and `Dynamic Channel Query
Caching <caching.html#dynamic_channel_query_caching>`_ in most cases
should **not be used**. Doing so could be doubling up on caching efforts
and inadvertently negate any caching benefits (or perhaps even worsen
server resource usage) due to the increased disk activity.

`Tag <caching.html#tag_caching>`_ and `Template
Caching <caching.html#template_caching>`_ on such environments should be
minimal unless experienced review of your templates has been performed
with the assistance of the `Template Debugging
utility <../cp/admin/output_and_debugging_preferences.html>`_,
and revealed resource intensive tags or templates that are greatly
improved after enabling the respective caching mechanism.

Likewise, `saving templates as
files <http://expressionengine.com/user_guide/templates/flat_file_templates.html>`_
can marginally increase disk i/o as each template must be retrieved from
disk in addition to the standard database query responsible for managing
your template's meta data (access, PHP parsing, template type, etc.).
