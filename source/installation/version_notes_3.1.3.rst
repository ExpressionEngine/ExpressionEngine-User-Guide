.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

#######################
Version Notes for 3.1.3
#######################

With 3.1.3 we made a small but significant change to forum and member themes.
Starting with this version both the forum and member themes that ship with
ExpressionEngine can be found in ``themes/ee``. However, we give preference to
themes found in ``themes/user``. If you want to customize one of the themes,
simply copy it from ``themes/ee`` to ``themes/user`` and make your changes.

.. warning:: If you have customized member templates copy them to your ``themes/user/member`` folder prior to updating to 3.1.3. If you do not put customized themes in ``themes/user`` you may lose your customizations when you update your site.

For example, if you want to modify the default member themes copy
``themes/ee/member/default`` to ``themes/user/member/default``. Now whenever
you edit a member template inside the Template Manager it will edit the
corresponding file in ``themes/user/member/default``!

.. note:: If you have not customized any of the forum themes you may safely delete ``themes/user/forum``.