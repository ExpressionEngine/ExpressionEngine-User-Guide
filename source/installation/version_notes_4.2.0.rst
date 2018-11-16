.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

#######################
Version Notes for 4.2.0
#######################

.. contents::
   :local:
   :depth: 1

================================================================
Developers: ``comment_entries_tagdata`` hook is going away in v5
================================================================

The legacy ``comment_entries_tagdata`` extension hook is no longer necessary due to modernization of the Comment Module's code and variable parsing. In v5 this hook will be removed. If you are using this extension hook you can **make the changes now** so compatibility will not be an issue moving forward.

For instance, rather than modifying the tagdata for every comment, you can use the ``comment_entries_query_result`` hook to make your own variables available to the native tag (or even destructively modify the native variables). This way, all tagdata manipulation occurs in the template, where it has greater visibility and maintainability, and the behavior is obvious.
