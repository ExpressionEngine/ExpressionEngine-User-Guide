Create/Edit Upload Directory
============================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Files --> New/Edit`

.. Overview

Here you can create and edit upload directories, changing the URL and path of the files, along with restricting the types, the default modal view, the maximum file size, image height and width, and image manipulations.

.. Screenshot (optional)

.. Permissions

Permission Restrictions
-----------------------

* File upload directories: Create Upload Directories
* File upload directories: Edit Upload Directories
* File upload directories: Delete Upload Directories

Fields
------

.. contents::
  :local:
  :depth: 1

.. Each Field

Name
~~~~

This is the descriptive name of the upload destination. It is a **required**
field and must be unique, but spaces are allowed. This name will appear when
uploading files via the PUBLISH page.

Upload directory
~~~~~~~~~~~~~~~~

.. note:: We recommend using the default base URL variable ``{base_url}`` defined in :doc:`URL and Path Settings </cp/settings/urls>` in your directory URLS.

The **full URL** to the new destination. For example::

     {base_url}/images/uploads/

Upload path
~~~~~~~~~~~

.. note:: We recommend using the default base path variable ``{base_path}`` defined in :doc:`URL and Path Settings </cp/settings/urls>` in your directory paths.

The **full server path** (not a URL) to the upload folder for
this destination.  For example::

	{base_path}/images/uploads/

If you are not sure how to determine your server path please contact
your hosting company.

Allowed file types?
~~~~~~~~~~~~~~~~~~~

This preference will determine how the system handles the uploaded
files. You have two choices for this preference:

#. **Images only**: With this preference set, the system will only allow
   image files of the type GIF, JPG, JPEG, or PNG.
#. **All file types**: This option will allow you to upload files of any
   type to the system. **Be careful** with this setting since it could
   be possible for someone to upload a malicious file.

.. note:: Only file types that are specified in ExpressionEngine's Mime
	Type file are allowed to be uploaded. The Mime Type file can be found at:
	``system/ee/legacy/config/mimes.php``.

	If you are uploading something
	uncommon and run into problems you may need to add the mime type for
	your file to the whitelist in the configuration file found at:
	``system/user/config/config.php``. See :ref:`MIME whitelist<overrides-mime-whitelist-additions>`
	and :ref:`Mime member exception whitelist <overrides-mime-whitelist-member-exception>` for available options.


Default modal view?
~~~~~~~~~~~~~~~~~~~

Default view for this upload directory in the file picker modal.

File size
~~~~~~~~~

You can optionally set a maximum allowed size for uploaded file. Leave
the setting blank if you do not wish to impose a limit. The size is
defined in kilobytes.

.. note:: Servers usually also have built-in limits on the amount of
	data that can be uploaded via PHP at one time. The default value for
	this in PHP is 2 MB. If you have a need to upload very large files,
	then you should contact your Host or server admin and talk to them
	about any size limits they have in place.

Image width
~~~~~~~~~~~

You can optionally set the maximum allowed width for uploaded images,
images over this setting will be automatically resized. both this
setting and the maximum height setting blank if you do not with to
impose a limit. The size is defined in pixels. This option only applies
to uploaded images and not other file types.

.. note:: If either the maximum height or maximum width is set and the
	other left blank, images that exceed the specified setting will
	still be resized, using the specified setting as the master
	dimension.

Image height
~~~~~~~~~~~~

You can optionally set the maximum allowed height for uploaded images, images
over this setting will be automatically resized. Leave both this setting and
the maximum width setting blank if you do not with to impose a limit. The size
is defined in pixels. This option only applies to uploaded images and not other
file types.

.. _image_manipulations:

Constrain or Crop
~~~~~~~~~~~~~~~~~

This area allows you to specify one or more alternate versions
of an image that automatically get created when the original
image is uploaded. A manipulation can include a resized version,
a :doc:`watermark </cp/files/watermarks/index>`, or both.

The resize type will determine whether the image is constrained
(resized) or cropped to the specified dimensions. If only height
or width is specified, the thumbnails will be created using that
as the master dimension. For example, setting the height to 200 and
leaving the width blank will result in an image that is no higher
than 200 pixels, with the width resized proportionately. Setting
both the height and the width to 200 would result in an image
that is no higher or wider than 200 pixels.

You can refer to a particular Image Manipulation in your templates
via a File Field's :ref:`single variable tag <image_manipulation_single>`
or its :ref:`variable pair tag <image_manipulation_pair>`.

Short Name
^^^^^^^^^^

Short name of this manipulation

Type
^^^^

Type of manipulation

Width
^^^^^

Final width of image

Height
^^^^^^

Final height of image

Watermark
^^^^^^^^^

Add a watermark

Allowed member groups
~~~~~~~~~~~~~~~~~~~~~

This setting allows you to specify which member groups have permission to
upload files to this file upload destination. By default, only the "Members"
group and any user-created member groups are listed. Super Admins can always
upload files.

Allowed category groups
~~~~~~~~~~~~~~~~~~~~~~~

Files may be assigned to specific categories, just like entries are.  Here you
can specify which category groups you want to make available to files in this upload directory. Images can be displayed by category using the doc:`File Module
</add-ons/file/index>`.
