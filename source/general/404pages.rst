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
first segment. Thus, **the error can only be triggered by a Template Group
name that doesn't exist**.
