/**
 * Script to pull language repository names from the Github api.
 *
 * This script is loaded on the language page and converts the existing single
 * item list that just links to Github into a full list of all translation
 * repositories.
 *
 * This works by simply assuming that the github link is a single version of
 * what we want to duplicate. So the .github-language-repos does not need to
 * be a list. Its contents will be cloned and the link replaced. By using an
 * existing html element as a template we should be protected against both a
 * potential api failure as well as future design changes.
 *
 */
 (function(_) {

// Kick off the request right away, holding on to the deferred object.

var ignoreLanguages = ['English', 'Hebrew'],
	reposPromise = jQuery.getJSON('https://api.github.com/users/EllisLab/repos?callback=?');

// Processing needs to wait on the dom
$(document).ready(function() {

	var reLanguage = new RegExp('^EE-Language-'),
		placeholder = $('.github-language-repos'),
		listTemplate;

	// compile an underscore template from the placeholder item
	listTemplate = _.template(
		'<% $u.each(repos, function(r) { %>' + 
		placeholder
			.html()
			.replace(/href="[^"]+"/, 'href="<%= r.html_url %>"')
			.replace(/>[^<>]+<\/a>/, '><%= r.langName %></a>') + 
		'<% }); %>'
	);

	// ready to handle the promise when it resolves
	reposPromise.success(function(res) {
		// res.data - response data
		// res.meta - rate limit information

		var isLangRepo = function(el) { return reLanguage.test(el.name); },
			isIgnored = function(el) { return _.include(ignoreLanguages, el.langName) },
			langName = function(el) { return (el.langName = el.name.replace(reLanguage, ''), el); };

		// filter out the language repos we want to show
		// and while we're at it, add a clean name for display

		var languages = _.reject(
			_.filter(res.data, isLangRepo),
			_.compose(isIgnored, langName)
		);

		placeholder.html(
			listTemplate({ repos: languages })
		);

	});

});

})($u); // sphinx hijacks _ for localization, but it aliases underscore on $u