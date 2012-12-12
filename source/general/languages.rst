Language Packs
==============

ExpressionEngine offers the ability to easily add support for multiple
languages through the use of Language Packs. These Language Packs will
alter the language used in the Control Panel, in messages to the user,
and for the dates and times presented to the user. Language Packs are
contributed by regular users for the use of other users.

**Note:** These Language Packs do **not** automatically translate the
content of your site.

Obtaining Language Packs
------------------------

You may download any of the available Language Packs from the
EllisLab Github repository:

- `Github <https://github.com>`_

Installing a Language Pack
--------------------------

Once you have downloaded a Language Pack, simply unzip the file onto
your computer. The contents of the Pack should automatically be unzipped
into a folder named after the language.

Take that folder and upload it to your server under the
system/expressionengine/language/ folder. Each language that you wish to
offer should be in its own sub-folder under
system/expressionengine/language/.

Using Different Languages
-------------------------

You may set the default language for your Control Panel and website
under :menuselection:`Admin --> General Configuration`. This will be the
language displayed to visitors and users who have not customized their
own settings.

Users may customize their own account in one of two locations. First, if
the user has access to the Control Panel then they may customize their
preferred language under :menuselection:`My Account --> Localization
Settings`. For regular users of a site, they will simply access their
Member Profile and then select Localization Settings. Users who have
customized their settings and are logged in will see user messages,
dates, and the Control Panel in their chosen language.

Updating Language Packs for New EE Versions
-------------------------------------------

You may follow the :doc:`updating language
packs </cp/tools/utilities/translation_utility>` instructions to
update an existing Language Pack to a newer version of EE.


.. raw:: html

	<script>

	(function(_) {

	var reLanguage = new RegExp('^EE-Language-'),
		listPlaceholder = $('#obtaining-language-packs ul'),
		listTemplate;

	// compile a template from the placeholder list
	listTemplate = _.template(
		listPlaceholder
			.html()
			.replace('<li>', '<% $u.each(repos, function(r) { %> <li>')
			.replace('</li>','</li> <% }); %>')
			.replace(/href="[^"]+"/, 'href="<%= r.url %>"')
			.replace(/>[^<>]+<\/a>/, '><%= r.langName %></a>')
	);


	jQuery.getJSON('https://api.github.com/users/EllisLab/repos?callback=?', function(res) {

		// filter out the language repos
		var languages = _.filter(res.data, function(el) {
			el.langName = el.name.replace(reLanguage, '');
			return reLanguage.test(el.name);
		});

		listPlaceholder.html(
			listTemplate({ repos: languages })
		);

	});

	})($u); // sphinx rewrites _ to $u and uses _ for localization
		
	</script>