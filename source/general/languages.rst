Language Packs
==============

Language packs will change the language used in the Control Panel, in messages
to the user, and for the dates and times presented to the user. Each language
pack contains the translations for a base installation of ExpressionEngine, and,
if available, translations for the Discussion Forum module and the Multiple Site
Manager module.

.. note:: These language packs do **not** automatically translate the
   content of your site.

.. note:: Since these language packs are contributed by the members of the 
   community, we are not responsible for the accuracy of the translations. If 
   something looks wrong to you, we recommend you :ref:`send us a pull request on GitHub <contributing_to_language_packs>` with the corrected translation.

Downloading Language Packs
--------------------------

Download any of the available language packs from the GitHub repositories. You
may want to check the repository's tags for translations that are compatible
with different versions of ExpressionEngine.

.. Heads up: general_languages.js relies on .github-languag-repos! See notes there.

.. rst-class:: github-language-repos

 - `GitHub Repositories <https://github.com/EllisLab>`_

Installing a Language Pack
--------------------------

Unzip the downloaded language pack, and you'll find a folder with the language
name and translation files inside.

Take that folder and upload it to ``system/expressionengine/language/`` on your
server. (Use the ``english`` folder that's already there as a reference.)

Setting the Default Language
----------------------------

Set the default language for your Control Panel and website under
:menuselection:`Admin --> General Configuration`. This will be the language
displayed to visitors and users who have not customized their own settings.

Users may customize their own account in one of two locations. First, if the
user has access to the Control Panel then they may customize their preferred
language under :menuselection:`My Account --> Localization Settings`. For
regular users of a site, they will simply access their Member Profile and then
select Localization Settings. Users who have customized their settings and are
logged in will see user messages, dates, and the Control Panel in their chosen
language.

.. _contributing_to_language_packs:

Contributing
------------

All of our language packs are hosted as repositories on `GitHub
<https://github.com/EllisLab>`__. Depending on the language, some of the
language packs have downloads for both EE 1.x and 2.x, and you can find them by checking both the branches and tags. For each language pack, we tag the
repository with the latest known compatible version of ExpressionEngine, so
you'll see tags like ``2.4.0`` and ``1.6.8``. We also create a ``1.x`` branch in
the event the language pack supports both 2.x and 1.x. If there are only tags
for 1.x versions and there is no ``1.x`` branch, then that language only
supports 1.x.

If you want to contribute to a language pack, find the language pack you
want to modify, `fork the repository
<https://help.github.com/articles/fork-a-repo>`_, make sure you’re
working from the correct branch, work on your changes `inside of a
feature branch <https://help.github.com/articles/fork-a-repo>`_, push
your changes to your fork of the repository, and `send us a pull request
<https://help.github.com/articles/using-pull-requests>`_. Then, we’ll
take a look at your pull request, make sure everything looks alright,
and merge it in.

(The :doc:`/cp/tools/utilities/translation_utility` can help create new a
language pack or update an existing one.)

If you want to provide us with a translation we don't already have, the best way
is to `email <mailto:team@ellislab.com>`__ us a zip file containing the language
pack so we can make sure it fits in with the rest. After that, any time you want
to make adjustments you can just follow the steps above to send us a pull
request.
