Moblog Email Template
=====================

This page describes the syntax you can use in the Moblog Template
setting in the Control Panel Modules > `Moblog <index.html>`_ section.
What this does is define how the information you submit in your email is
handled. This setting is only used for moblogs of the "channel" type.

A simple example::

	{images} <img src="{file}" width="{width}" height="{height}" alt="pic" /> {/images}  {text}

A more complicated example::

	{field name="body" format="xhtml"} {text} {/field}  {field name="body_image" format="none"} {images} <img src="{file}" width="{width}" height="{height}" alt="pic" /> {/images} {/field}

Variables
---------


audio
~~~~~

::

	{audio} <p>Listen to the <a href="{file}">audio</a>!</p> {/audio}

This tag pair allows you to specify how to process an audio file that's
attached to the email. The {file} variable inside the tag pair will
contain the URL to the uploaded audio file.

field
~~~~~

::

	{field name="extended" format="xhtml"} {text} {/field}

This tag pair allows you to specify into which field you would like the
contents placed. If you do not specify a field with this variable then
the contents will be placed in the default field specified in the
Control Panel. This field has two parameters:

#. **name=** the "short name" of the field in which you want the
   contents placed.
#. **format=** the type of formatting you would like applied to the
   field contents: none, <br />, or xhtml.

You may only specify a field that is of the "textarea" type here. You
cannot specify "text input" or "drop-down list" fields.

file
~~~~

::

	{audio} <p>Listen to the <a href="{file}">audio</a>!</p> {/audio}

This variable will be replaced by the URL to the uploaded file.

files
~~~~~

::

	{files match="movie|files"} <p>View the <a href="{file}">presentation</a>.</p> {/files}

This tag pair allows you to specify how to process a standard file
that's attached to the email. The {file} variable inside the tag pair
will contain the URL to the uploaded file.

This tag pair is special in that it has the match= parameter that can be
used to determine which types of files will be affected. The options
are:

-  **all**: all types of files will be matched
-  **audio**: files matching the "audio" supported format
-  **files**: files matching the "files" supported formats
-  **images**: files matching the "images" supported formats
-  **movie**: files matching the "movie" supported formats

Multiple format types may be specified by separating them with the pipe
character::

	{files match="audio|files"}

height
~~~~~~

::

	<img src="{file}" width="{width}" height="{height}" alt="pic" />

The height (in pixels) of the uploaded image.

images
~~~~~~

::

	{images} <img src="{file}" width="{width}" height="{height}" alt="pic" /> {/images}

This tag pair allows you to specify how to process an image file that's
attached to the email. The {file} variable inside the tag pair will
contain the URL to the uploaded image file.

movie
~~~~~

::

	{movie} <p>Watch our new <a href="{file}">movie</a> now.</p> {/movie}

This tag pair allows you to specify how to process an movie file that's
attached to the email. The {file} variable inside the tag pair will
contain the URL to the uploaded movie file.

text
~~~~

::

	{field name="extended" format="xhtml"} {text} {/field}

The text content of the email. Typically this will be a description of
the attached file.

thumbnail
~~~~~~~~~

::

	{images} <img src="{thumbnail}" width="{thumb_width}" height="{thumb_height}" alt="thumbnail image" /> {/images}

The URL to an automatically-generated thumbnail version of the attached
image.

thumb\_height
~~~~~~~~~~~~~

::

	{images} <img src="{thumbnail}" width="{thumb_width}" height="{thumb_height}" alt="thumbnail image" /> {/images}

The height (in pixels) of the automatically-generated thumbnail version
of the attached image.

thumb\_width
~~~~~~~~~~~~

::

	{images} <img src="{thumbnail}" width="{thumb_width}" height="{thumb_height}" alt="thumbnail image" /> {/images}

The width (in pixels) of the automatically-generated thumbnail version
of the attached image.

width
~~~~~

::

	<img src="{file}" width="{width}" height="{height}" alt="pic" />

The width (in pixels) of the uploaded image.
