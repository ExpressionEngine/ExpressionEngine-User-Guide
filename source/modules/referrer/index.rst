Referrer Module Tags
====================

ExpressionEngine enables you track referrers with the Referrer Module.

A referrer is the URL that led a someone to your site. For example, if
the URL to your site appears as a link at your friend's site, when
someone clicks the link, your friend's URL will show up in your referrer
page. Tracking referrers allows you to see how people are finding your
website.

To access the Referrer Module backed functions, go to the Modules >
Referrer page in your Control Panel.

To globally disable referrer tracking, as well as set the maximum number
of referrers to keep, visit the Admin > System Preferences > Referrer
Preferences page in your Control Panel.

To display your referrers information use the following code in one of
your templates::

	<table border="0" width="100%" cellpadding="6" cellspacing="1">     <tr>         <th>Date</th>         <th>From</th>         <th>IP Address</th>         <th>To</th>     </tr>      {exp:referrer limit="50" popup="yes"}     <tr>         <td>{ref_date format="%m/%d/%Y"}</td>         <td>{ref_from}</td>         <td>{ref_ip}</td>         <td>{ref_to}</td>     </tr>     {/exp:referrer}  </table>

**Note:** You enclose from the opening <tr> to the closing </tr> since
that is the portion that gets repeated for each referrer.

Blacklist and Whitelist
~~~~~~~~~~~~~~~~~~~~~~~

ExpressionEngine maintains an editable Blacklist so that you can keep
certain IP addresses, URLs, or even User Agents from being counted in
your referrals as well as a Whitelist that will automatically let
matches through. You may access this through the Blacklist/Whitelist
Module in the `Modules <../../cp/add-ons/module_manager.html>`_ area.

Parameters
----------


limit=
~~~~~~

::

	limit="50"

The number of results you want to see

popup=
~~~~~~

::

	popup="yes"

This parameter makes the link to the referring site open in a new
window.

Variables
---------


ref\_agent
~~~~~~~~~~

::

	{ref_agent}

The user agent that made the referral to the site. For most cases, the
"user agent" is simply a web browser that visited your site. The
{ref\_agent} variable outputs the full user agent string recorded by
ExpressionEngine. It might look something like::

	Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0)

Which is the common user agent string for Internet Explorer 5.5 running
on a Windows 2000 machine.

ref\_agent\_short
~~~~~~~~~~~~~~~~~

::

	{ref_agent_short}

A shortened version of the user agent that made the referral to the
site.It might look something like::

	Mozilla/5.0

ref\_date
~~~~~~~~~

::

	{ref_date format="%m/%d/%Y"}

The date on which the referral was made.

ref\_from
~~~~~~~~~

::

	{ref_from}

The URL of the referring site.

ref\_ip
~~~~~~~

::

	{ref_ip}

The IP address of the referring site.

ref\_to
~~~~~~~

::

	{ref_to}

The URL of the page they arrived from.

switch=
~~~~~~~

::

	{switch="option_one|option_two}

This variable permits you to alternate between any two values as the
entries are displayed. The first entry will use "option\_one", the
second will use "option\_two", the third "option\_one", and so on.

The most straightforward use for this would be to alternate colors. It
could be used like so::

	{exp:referrer limit="50" popup="yes"}     <tr class="{switch="one|two"}">         <td><div>{ref_from}</div></td>         <td><div>{ref_to}</div></td>     </tr>     {/exp:referrer}

The entries would then alternate between <tr class="one"> and <tr
class="two">.

Multiple instances of the {switch=} tag may be used and the system will
intelligently keep track of each one.
