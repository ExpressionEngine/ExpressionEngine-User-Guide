Throttling Control and 404 Pages
================================

ExpressionEngine has a Throttling feature that permits you to limit the
number of page requests by a single IP address within a given time
interval. This feature is intended to help control *Denial of Service*
attacks, where your pages are maliciously loaded repeatedly (usually
through the use of automated scripts) in an effort to cause undue load
to your web server.

Note: A server-wide DOS attack preventative is beyond the scope of what
ExpressionEngine can do, but EE's Throttling feature can help keep your
particular site from being as susceptible.

Throttling Preferences
----------------------

The preferences in the Throttling page enable you to set various
parameters to control the threshold at which the feature kicks in, and
the action that should be taken when the threshold is exceeded. Since
the throttling check happens very early on during ExpressionEngine's
system initialization it can deal with DOS attacks before server
resources are unduly used.

The setting is located at: :menuselection:`Admin --> Security and Privacy --> Throttling Preferences`

404 Pages
---------

In addition to the Throttling feature, ExpressionEngine allows you to
specify a particular Template to display in cases where the requested
page does not exist.

The setting is located at: :menuselection:`Design --> Templates --> Global Preferences`

**Note:** The setting is a site-wide preference.

It is important to note that there are limitations when it comes to what
will trigger this "404" type Template to display. **ExpressionEngine
will only display the 404 Template if the requested Template Group in
the URL does not exist**.

Due to the dynamic nature of EE's URL structure, there is no guarantee
about exactly what any particular URL segment represents beyond the
first segment. Thus, the error can only be triggered by a Template Group
name that doesn't exist.
