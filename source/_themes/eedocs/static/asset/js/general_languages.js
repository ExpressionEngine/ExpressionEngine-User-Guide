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
var reposPromise = jQuery.getJSON('https://api.github.com/users/EllisLab/repos?callback=?');

// Processing needs to wait on the page
$(document).ready(function() {
	var reLanguage = new RegExp('^EE-Language-'),
		placeholder = $('.github-language-repos'),
		listTemplate;

	// compile a template from the placeholder item
	listTemplate = _.template(
		'<% $u.each(repos, function(r) { %>' + 
		placeholder
			.html()
			.replace(/href="[^"]+"/, 'href="<%= r.html_url %>"')
			.replace(/>[^<>]+<\/a>/, '><%= r.langName %></a>') + 
		'<% }); %>'
	);

	// and now we wait ...
	reposPromise.success(function(res) {
		// res.data - response data
		// res.meta - rate limit information

		// filter out the language repos
		// while we're at it we'll add a short name
		var languages = _.filter(res.data, function(el) {
			el.langName = el.name.replace(reLanguage, '');
			return reLanguage.test(el.name);
		});

		placeholder.html(
			listTemplate({ repos: languages })
		);

	});
});

})($u); // sphinx hijacks _ for localization, but it aliases underscore on $u