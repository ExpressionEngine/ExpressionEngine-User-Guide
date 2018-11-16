.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

PHP and EE Tags are not parsed in the Stylesheet
================================================

When including PHP and CSS tags in the stylesheet they are not parsed by
the template parser.

Parsing PHP and EE Tags in the Stylesheet
-----------------------------------------

When using ExpressionEngine to link to stylesheets, the typical way to
do this is by using the standard {stylesheet='channel/channel\_css'}
type syntax. When EE uses the {stylesheet=} tag, two special things
happen:

-  The stylesheet content is sent with the "text/css" header in order to
   tell the browser that the content is a stylesheet. This is necessary
   on some browsers such as Mozilla since the stylesheet is not a
   standard file with a .css extension.
-  ExpressionEngine skips over most of the Template engine and simply
   serves the stylesheet content in a "raw" form. This is done to make
   the stylesheet be served as quickly as possible and with the least
   server overhead possible. It also means that PHP and EE tags are not
   parsed in the Template.

If parsing PHP and EE tags is a requirement then there are two options:

-  use the {path=channel/channel\_css} syntax to link to the stylesheet.
   That variable will cause EE to parse the Template as normal. However,
   the stylesheet will [em]not[/em] be sent with the "text/css" header
   and thus could cause problems in some browsers.
-  Use the stylesheet as normal and link to it normally with the
   {stylesheet=} syntax. For the styles that require PHP or EE tags
   simply place those in the <head> of your regular pages/Templates and
   enclose the styles in <style> tags like normal. With this method the
   dynamic styles are embedded in the regular pages but still link to
   the external stylesheet for the majority of the CSS.


