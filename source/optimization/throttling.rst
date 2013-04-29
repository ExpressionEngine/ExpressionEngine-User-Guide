Throttling Control
================================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Security and Privacy --> Throttling Preferences`

ExpressionEngine has a Throttling feature that permits you to limit the
number of page requests by a single IP address within a given time
interval. This feature is intended to help control *Denial of Service*
attacks, where your pages are maliciously loaded repeatedly (usually
through the use of automated scripts) in an effort to cause undue load
to your web server.

Note: A server-wide DOS attack preventative is beyond the scope of what
ExpressionEngine can do, but EE's Throttling feature can help keep your
particular site from being as susceptible.

.. _throttle-prefs-label:

Throttling Preferences
----------------------

The preferences in the Throttling page enable you to set various
parameters to control the threshold at which the feature kicks in, and
the action that should be taken when the threshold is exceeded. Since
the throttling check happens very early on during ExpressionEngine's
system initialization it can deal with DOS attacks before server
resources are unduly used.
