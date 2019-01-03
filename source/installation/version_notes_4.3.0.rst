.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

#######################
Version Notes for 4.3.0
#######################

.. contents::
   :local:
   :depth: 1

===========================================================================
Custom member field data will be cleared by default on member anonymization
===========================================================================

ExpressionEngine 4.3 includes a tool to anonymize a member by removing everything considered to be personally-identifiable information. By default, ExpressionEngine will consider data in custom member fields to be personally-identifiable information, and thus will remove the data in them for any member who requests to be anonymized. But if any custom member fields do not fall under this classification, you can edit the field to toggle the **Exclude from Anonymization Actions?** setting for the field, and the field's contents will remain after anonymization has taken place.
