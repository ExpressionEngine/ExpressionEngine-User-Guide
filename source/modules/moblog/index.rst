Moblog Module
=============

The Moblog, or "mobile blogging", Module allows you to submit channel
entries to ExpressionEngine via email. Emails may contain images or
other attachments.

Moblogging is popular among people with camera-enabled cellphones since
it allows them to email photos, which appear as entries on their site.
It can also be used with regular email just as easily.

The basic concept is this: You send an email containing the text of your
entry along with a file or image attachment to a specific email address
you've set up as your Moblog account. ExpressionEngine will then check
that email account looking for any Moblog messages, which will be
submitted to your site based on your set-up preferences.

The Moblog Module is a bit different from other Modules in that there
are several separate parts to it.

#. The `Moblog Control Panel <control_panel/index.html>`_ is where
   you'll set up your Moblog preferences and account details.
#. The `Sending a Moblog Email <email_contents.html>`_ page shows you
   how to send content to your site.
#. The `Check Moblog Tag <check_moblog.html>`_ allows ExpressionEngine
   to look for your Moblog content automatically.

Supported Attachment Formats
----------------------------

By default, ExpressionEngine's Moblog Module supports a large number of
formats. If needed, you can also edit the available formats at the top
of the system/modules/moblog/mod.moblog.php file.

-  **Images**: bmp, gif, jpe, jpeg, jpg, pdf, png, tif, tiff
-  **Files**: doc, xls, zip, tar, tgz, swf, sit, php, txt, html, asp,
   js, rtf
-  **Movies**: 3gp, mov, mpg, avi, movie
-  **Audio**: mid, midi, mp2, mp3, aac, mp4, aif, aiff, aifc, ram, rm,
   rpm, wav, ra, rv, wav

**Note**: Be aware that many email services have limits on the size of
file attachments you can include with an email. This could limit how you
can send some files, particularly movies and audio files, which tend to
be large. Further, the files have to be uploaded by the system when it
checks the moblog, so extremely large files can cause a server time-out.
Also, please be aware that every cell phone manufacturer formats their
messages and attachments a little differently. If you are having trouble
submitting content with your particular phone or email program it could
be that the formatting is not properly recognized by ExpressionEngine.
We are constantly adding support for new phones, so please contact
ExpressionEngine support to make us aware of your particular situation.

.. toctree::
	:glob:
	:titlesonly:
	:hidden:
	
	*
	control_panel/index