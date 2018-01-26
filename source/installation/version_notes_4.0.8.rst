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


