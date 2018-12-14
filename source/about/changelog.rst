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

Version 5.0.2
-------------

Release Date: December 13, 2018

- Optimized the member delete routine's heir assignments.
- Fixed a bug where a PHP error may appear when the CP homepage newsfeed cannot be fetched.
- Fixed a bug where extension hooks may run during a one-click upgrade.
- Fixed a bug (`#18 <https://github.com/ExpressionEngine/ExpressionEngine/pull/18>`__) where a supplied class was not added to "select" fields in the shared form view.
- Fixed a potential malformed query issue (`#24 <https://github.com/ExpressionEngine/ExpressionEngine/pull/24>`__) in the relationships_query hook.
- Fixed a potential PHP error (`#21 <https://github.com/ExpressionEngine/ExpressionEngine/issues/21>`__) when saving option-type Grid columns.
- Fixed a bug (`#20 <https://github.com/ExpressionEngine/ExpressionEngine/issues/20>`__) where the installer checks if the user theme directory is writable even when not installing the default theme.
- Fixed a bug (`#13 <https://github.com/ExpressionEngine/ExpressionEngine/issues/13>`__) where ``{if fluid_field}`` conditionals would not work as expected.
- Fixed a bug (`#14 <https://github.com/ExpressionEngine/ExpressionEngine/issues/14>`__) where entries would fail to save when a Toggle field was hidden and MySQL was in strict mode.
- Fixed a bug (`#22 <https://github.com/ExpressionEngine/ExpressionEngine/issues/22>`__) where the JavaScript-based URL title generation did not match the PHP version.
- Fixed a bug (`#37 <https://github.com/ExpressionEngine/ExpressionEngine/issues/37>`__) where Channel settings could not be saved if the default Channel Form author didn't exist.
- Fixed a bug (`#36 <https://github.com/ExpressionEngine/ExpressionEngine/issues/36>`__) where deleting multiple statuses would not reset the confirmation modal button state.
- Fixed a bug (`#29 <https://github.com/ExpressionEngine/ExpressionEngine/issues/29>`__) where curly-braced quantifiers could not be used in regular expression conditionals.
- Fixed a bug (`#41 <https://github.com/ExpressionEngine/ExpressionEngine/issues/41>`__) where text formatting buttons would not appear in Channel Form.
- Fixed a bug (`#42 <https://github.com/ExpressionEngine/ExpressionEngine/issues/42>`__) where the ``rte_toolset_id=`` parameter in Channel Form wouldn't work.
- Fixed a bug (`#31 <https://github.com/ExpressionEngine/ExpressionEngine/issues/31>`__) where the Model service could not eager-load third-party inverse relationships.
- Fixed a bug (`#11 <https://github.com/ExpressionEngine/ExpressionEngine/pull/11>`__) where HasAndBelongstoMany relationships wouldn't work properly.
- Fixed a bug in the installer where a MySQL error could occur in update 4.0.1 if the layout model was used.

Version 5.0.1
-------------

Release Date: November 18, 2018

- Fixed a bug (`#5 <https://github.com/ExpressionEngine/ExpressionEngine/issues/5>`__) where non-repo downloads could not install or update via admin.php.

Version 5.0.0
-------------

Release Date: November 16, 2018

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

