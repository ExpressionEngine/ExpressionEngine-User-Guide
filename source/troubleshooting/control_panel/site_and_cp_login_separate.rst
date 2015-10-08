Logging into the front-end does not cause a login to the Control Panel
======================================================================

Troubleshooting
---------------

ExpressionEngine can use two pieces of information to control login
sessions: cookies and a PHP "session". With the default EE settings,
Control Panel access uses both cookies and sessions. User logins (i.e.
logins on the regular, non-Control Panel, site) only use cookies.

So, when logging in through the regular site a cookie is set for the
login. Then when visiting then go to the Control Panel EE notes that the
correct cookie is set; however the PHP session is not set. So EE
displays the login in order to have the session set.

To login to both at once, navigate to :menuselection:`Settings --> Security &
Privacy` and change the **Control Panel Session Type** and **User Session
Type** to *Cookies only*. After doing that, all logins will automatically be
logged in to both the Control Panel and front-end at the same time. It should
be mentioned, however, that requiring PHP sessions to access the Control Panel
adds an additional layer of security and the site administrator should assess
whether to remove that added security layer by only requiring cookies.


