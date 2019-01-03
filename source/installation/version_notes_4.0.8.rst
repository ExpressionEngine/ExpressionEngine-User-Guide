.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

#######################
Version Notes for 4.0.8
#######################

.. contents::
   :local:
   :depth: 1

=========================================================
BBCode is no longer parsed if formatting is set to `none`
=========================================================

:doc:`BBCode </general/bbcode>` is no longer parsed if a field's :doc:`text formatting </general/text_formatting>` is set to `none`.

If you have formatting set to `none` `[b]` will no longer render as `<b>` but will appear exactly as entered.  In order to parse BBCode, a format other than `none` should be selected.  If this poses any problems, please contact `support@expressionengine.com <mailto:support@expressionengine.com>`_


