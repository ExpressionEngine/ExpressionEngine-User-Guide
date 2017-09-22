******************
Variable Modifiers
******************

Most template variables can be modified for common formatting and output needs. For instance, making user-submitted content safe for use in a `<meta>` tag attribute, limiting to a certain number of characters, displaying currency, or as JSON to create structured data for :abbr:`SEO (search engine optimization)`. These modifiers apply to:

- All Channel Fields
- :doc:`globals/url_segments`
- :ref:`Embed Variables <embed_variables>`
- :ref:`layout_variables`
- :doc:`Template Route Variables </urls/template_routes>`
- :doc:`globals/single_variables`
- User-defined :doc:`globals/template_variable`
- All add-ons that use native APIs for parsing variables in templates

Available variable modifiers:

.. contents::
  :local:
  :depth: 1

.. note:: Some add-ons and components may have modifiers not listed here. For instance the :doc:`File Fieldtype </fieldtypes/file>` has its own file information-related modifiers. The modifiers listed here are just those universally available.

.. highlight:: html

:attr_safe
**********

Makes content safe for use in an HTML attribute. It strips HTML tags, encodes special HTML characters, and can optionally limit the length of the content.

::

  <meta name="description" content="{seo_descrip:attr_safe limit='150'}">

:Parameters:

  - **double_encode=** (default: 'no') Whether or not to double encode already-encoded entities, e.g. should ``&quot;`` become ``&amp;quot;``?
  - **end_char=** (default: ``&#8230;``) character to append when a limit terminates the string
  - **limit=** number of characters to limit to (retains whole words)
  - **unicode_punctuation=** (default: 'yes') Whether HTML entities for ’, ‘, ”, “, —, …, or non-breaking spaces should be decoded to the normal unicode characters.

