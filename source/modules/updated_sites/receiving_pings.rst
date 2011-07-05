Receiving Pings
===============

You must perform several steps before you can start receiving pings:

#. Install the module in the Modules section of your ExpressionEngine
   Control Panel.
#. Go into the Module's Control Panel, located at Modules > Updated
   Sites, and edit the Default configuration.
#. In the configuration there is a field called Sites Allowed to Ping,
   which allows you to specify a list of URLs that your site will accept
   pings from. You need only include part of the URL of the site pinging
   you, so if you want to accept pings from all channels at
   channelspot.com, you can simply enter 'channelspot.com' into this
   field.
#. After saving your configuration, you will see a URL in the module's
   main menu. This is the Ping URL for this configuration. Give this URL
   to people you will allow pings from. They will put this URL into
   their Ping Server preferences for their software. If they are using
   ExpressionEngine they can add your ping URL to their My Account >
   Ping Servers page.

**Note:** You can have multiple configurations if you want to allow
different groups to ping your site.

Pruning Pings
-------------

In your ping configuration you'll find a preference for the maximum
number of pings to save. This allows the pings stored to be pruned every
so often to keep database size down.

Editing Pings
-------------

In the list of configuration in the module's CP there will be a link
called View Pings. Click on this link to see the pings stored for this
configuration. You can see the information received from this ping and
when the ping was received. You may also deleted any unwanted pings.
