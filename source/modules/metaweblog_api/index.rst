Metaweblog API & Movable Type API Module
========================================

The Metaweblog API (Application Programming Interface) is an interface
or "protocol" that will allow other programs to interact with the
backend of your publishing system remotely. In practical terms, this
would allow you to post an entry to a Metaweblog API-compatible site
from an external program.

ExpressionEngine supports the Metaweblog API as well as an extension to
it known as the Movable Type API. It is important to understand that the
Metaweblog API was originally written without support for comments, with
only one entry field. Thus, it is very limited by its own nature in what
it can do. The Movable Type API is slightly more flexible in that it
supports up to four entry fields.


The Control Panel
-----------------

The Metaweblog API Control Panel is accessed via Modules > Metaweblog
API in your Control Panel. Here, you can set up configurations for use
with the Metaweblog API.

The main page will list all of your existing configurations (including
the default one) including the URL used for connecting to that
configuration with your Metaweblog API compatible program.

The configuration settings are primarily for when an entry is sent from
ExpressionEngine to the Metaweblog API compatible program. These
settings are available because different programs and users might want
flexibility in how their entries are sent out. The following settings
are available for each configuration.

Configuration Name
~~~~~~~~~~~~~~~~~~

The name for your configuration, which is listed in the main table.

Text Formatting Preference
~~~~~~~~~~~~~~~~~~~~~~~~~~

With this preference set to "Yes", ExpressionEngine will render out all
BBCode and file directories contained within your entries before sending
the content to your program.

Entry Status
~~~~~~~~~~~~

Choose the Entry Status for all entries submitted using this
Configuration. If you choose the 'Do Not Set Status' option, then
whatever the Client sends for status (open or closed) will be accepted.

Channel Field Group
~~~~~~~~~~~~~~~~~~~

Here you choose the Field Group to use for this Configuration. This
choice determines which fields are available for selection in the
following preferences.

Excerpt Field
~~~~~~~~~~~~~

Here you determine which field from your Field Group corresponds to the
"Excerpt Field" in your Metaweblog API-compatible program. Only
"textarea" type fields are available for selection. This field is only
available when using the Movable Type API.

Content Field
~~~~~~~~~~~~~

Here you determine which field from your Field Group corresponds to the
"Content Field" in your Metaweblog API-compatible program. Only
"textarea" type fields are available for selection.

More Field
~~~~~~~~~~

Here you determine which field from your Field Group corresponds to the
"More Field" in your Metaweblog API-compatible program. Only "textarea"
type fields are available for selection. This field is only available
when using the Movable Type API.

Keywords Field
~~~~~~~~~~~~~~

Here you determine which field from your Field Group corresponds to the
"Keywords Field" in your Metaweblog API-compatible program. Only
"textarea" type fields are available for selection. This field is only
available when using the Movable Type API.

Upload Directory for File Uploading
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If your Metaweblog API-compatible program allows you to upload files,
you may specify into which directory you want files uploaded. Your
choices are determined by what you have set up under Admin > File Upload
Preferences. If you do not wish to allow uploads via the Metaweblog API,
select "None".

When using an upload directory with the MetaWeblog API, make sure to use
absolute paths.

In addition, in order to be able to upload files, the user sending the
files via the Metaweblog API must have permission to upload to that
directory. See Admin > File Upload Preferences.

Many Metaweblog API-compatible programs do not support this file upload
feature. Further, if you wish to upload large files (anything over about
1MB) you would be better off using standard FTP to do so.

Connecting with a Metaweblog API Compatible Program
---------------------------------------------------

In general, you will use the URL provided on the Metaweblog API main
screen for your configuration to connect with your Metaweblog API
compatible program. Below is information specific to some common
programs.

Ecto
~~~~

To connect with Ecto, you will need the URL provided for your
configuration as well as your member login information.

Using this information, Ecto will contact the API server to determine if
that user is valid and what channels they are permitted to access. It
then contacts the API Server and downloads recent entries for all of
those channels. Ecto does not provide a method for specifying a
particular channel, thus you will receive all channels for which your
user has access.

MarsEdit
~~~~~~~~

To connect with MarsEdit, you will need the URL provided for your
configuration, your member login information, and a channel ID. MarsEdit
does not automatically detect all of the channels you have access to
like Ecto, so you will have to make sure to specify which channel you
wish to use with the Channel ID.

When setting up your channel/connection in MarsEdit:

-  Select "Movable Type" as the type of Software since ExpressionEngine
   supports the Movable Type API.
-  In the "RPC URL" setting, put in the URL for your Configuration found
   in the Metaweblog API Module Control Panel.
-  Fill in your channel's ID number.

