.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

ExpressionEngine v5 Change Log
==============================

.. contents::
   :local:
   :depth: 1

Version 5.0.0
-------------

Release Date: November 15, 2018

- **Free Open-Source Software!** 👐🤝🤗

  + **Licensing** 👩‍⚖️📜

    - FOSS is boss! ExpressionEngine is now free open-source software!
    - Licensed with the permissive :expressionengine:`Apache License, Version 2.0 </license>`.

  + **Application Changes** 🛠

    - ExpressionEngine now requires PHP 5.6+.
    - The ExpressionEngine news feed on the control panel homepage is now opt-in.
    - Sharing of diagnostic and usage data to expressionengine.com is now opt-in.
    - Removed license checks and restrictions from the Site Manager. You can haz All The Sites!
    - Removed the license page from the control panel.
    - Removed license validation.
    - Removed "Core" version feature restrictions.

- **Bug Fixes** 💃🐛

  + Fixed a rendering bug and potential XSS issue.
  + Fixed a bug where in rare circumstances, a relationship tag was left unparsed.
  + Fixed a bug where a Channel entries tag with a categories parameter could generate errors when the tag returned no entries.

- **Developers** 💻

  + Development is now taking place in public `on GitHub <https://github.com/ExpressionEngine/ExpressionEngine>`_. Get involved!
  + Removed unused Javascript plugins:

