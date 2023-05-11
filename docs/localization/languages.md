<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Language Packs

[TOC]

Language packs will change the language used in the Control Panel, in messages to the user, and for the dates and times presented to the user. Each language pack contains the translations for a base installation of ExpressionEngine, and, if available, translations for the Discussion Forum module and the Multiple Site Manager module.

NOTE: **Note:** These language packs do **not** automatically translate the content of your site.

NOTE: **Note:** Since these language packs are contributed by the members of the community, we are not responsible for the accuracy of the translations. If something looks wrong to you, we recommend you [send us a pull request on GitHub](#contributing) with the corrected translation.

## Downloading Language Packs

Download any of the available language packs from the GitHub repositories. You may want to check the repository's tags for translations that are compatible with different versions of ExpressionEngine.

github-language-repos

- [GitHub Repositories](https://github.com/EllisLab)

## Installing a Language Pack

Unzip the downloaded language pack, and you'll find a folder with the language name and translation files inside.

Take that folder and upload it to `system/user/language/` on your server.

## Setting the Default Language

Set the default language for your Control Panel and website under `Settings --> General Settings`. This will be the language displayed to visitors and users who have not customized their own settings.

Users may customize their own account in one of two locations. First, if the user has access to the Control Panel then they may customize their preferred language under `Profile --> Personal Settings`. For regular users of a site, they will simply access their Member Profile and then select Localization Settings. Users who have customized their settings and are logged in will see user messages, dates, and the Control Panel in their chosen language.

## Contributing

All of our language packs are hosted as repositories on [GitHub](https://github.com/EllisLab). Depending on the language, some of the language packs have downloads for multiple versions of ExpressionEngine, and you can find them by checking both the branches and tags. For each language pack, we tag the repository with the latest known compatible version of ExpressionEngine, so you'll see tags like `2.4.0` and `1.6.8`. We also create a `1.x` branch in the event the language pack supports both 2.x and 1.x. If there are only tags for 1.x versions and there is no `1.x` branch, then that language only supports 1.x.

If you want to contribute to a language pack, find the language pack you want to modify, [fork the repository](https://help.github.com/articles/fork-a-repo), make sure you're working from the correct branch, work on your changes [inside of a feature branch](https://help.github.com/articles/fork-a-repo), push your changes to your fork of the repository, and [send us a pull request](https://help.github.com/articles/using-pull-requests). Then, we'll take a look at your pull request, make sure everything looks alright, and merge it in.

(The [Language Files](control-panel/utilities/translation.md#language-files) can help create new a language pack or update an existing one.)

If you want to provide us with a translation we don't already have, the best way is to [email](mailto:team@ellislab.com) us a zip file containing the language pack so we can make sure it fits in with the rest. After that, any time you want to make adjustments you can just follow the steps above to send us a pull request.
