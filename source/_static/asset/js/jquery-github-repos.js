/**
 * jQuery plugin to pull repositories from the Github api.
 *
 * This script is loaded on the pages that use github data and converts the
 * existing single item list that just links to Github into a full list of
 * all repositories. You can optionally filter them down to a specific subset.
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

var reposPromise = jQuery.getJSON('https://api.github.com/users/EllisLab/repos?per_page=100&callback=?');

$.fn.githubRepositories = function(callback) {

	return $(this).each(function() {

		var placeholder = $(this),
			listTemplate;

		// compile an underscore template from the placeholder item
		listTemplate = _.template(
			'<% $u.each(repos, function(r) { %>' +
			placeholder
				.html()
				.replace(/href="[^"]+"/, 'href="<%= r.html_url %>/releases"')
				.replace(/>[^<>]+<\/a>/, '><%= r.repoName %></a>') +
			'<% }); %>'
		);

		// ready to handle the promise when it resolves
		reposPromise.success(function(res) {
			// res.data - response data
			// res.meta - rate limit information

			var data = callback(res.data);

			placeholder.html(
				listTemplate({ repos: data })
			);
		});

	});
};

// Processing needs to wait on the dom
$(document).ready(function() {

	// for the homepage
	$('.github-addon-repos').githubRepositories(function(repos) {

		var isAddonRepo = function(el) { return el.description.indexOf('ExpressionEngine Add-on') != -1; },
			repoName = function(el) { return (el.repoName = el.name.replace(/-/g, ' '), el); };

		// Grab all the repos that have 'ExpressionEngine Add-on' in their description

		return _.filter(
			repos,
			_.compose(isAddonRepo, repoName)
		);
	});


	// for the general/languages.rst page
	$('.github-language-repos').githubRepositories(function(repos) {

		var ignoreLanguages = ['English', 'Hebrew'],
			reLanguage = new RegExp('^EE-Language-');

		var isLangRepo = function(el) { return reLanguage.test(el.name); },
			isIgnored = function(el) { return _.include(ignoreLanguages, el.repoName) },
			langName = function(el) { return (el.repoName = el.name.replace(reLanguage, ''), el); };

		// filter out the language repos we want to show
		// and while we're at it, add a clean name for display

		return _.reject(
			_.filter(repos, isLangRepo),
			_.compose(isIgnored, langName)
		);

	});

});

})($u); // sphinx hijacks _ for localization, but it aliases underscore on $u