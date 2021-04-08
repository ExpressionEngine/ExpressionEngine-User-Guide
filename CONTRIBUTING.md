# Contributing to the ExpressionEngine Documentation

Good documentation is the foundation of good software and your contributions can help make good documentation great.

If you're an ExpressionEngine user, then you have something to add. There is always room for more examples, clarifications, corrections and updates. Jump in and make a pull request or give us a heads up by reporting an issues.

## Contributing to the Documentation

All of the source files exist under `docs/` and is where you will add new documentation or modify existing documentation. We recommend working from feature branches and making pull requests to the `#.dev` branch of this repo (See Branches below).

Suggesting a change is easy and there is no way you'll mess up the public repo.

Start by [forking the repository](https://help.github.com/articles/fork-a-repo), the new branch you create is the one you'll do your work in.

Once you have your new branch, confirm you're actually in it! If you haven't already, make sure you've read though the [style guide](#style-guide). Then make your changes [inside of your feature branch](https://help.github.com/articles/fork-a-repo).

Push your changes to your fork of the repository, and when you're done, [send us a pull request](https://help.github.com/articles/using-pull-requests).

We'll take a look at your pull request, make sure everything looks alright, ask for any needed changes, and then merge it into the main code.

### Branches

| Branch | Purpose |
| ------ | ------- |
| #.x | Currently released and published version.
| #.dev | Updates for the next version of ExpressionEngine (current version is the default branch). Does not exist for previous versions. |
** replace `#` with the current version of ExpressionEngine or version you wish to target.

Recommended branch names are namespaced and unique, e.g.:

- `feature/my-feature-slug`
- `bug/bug-description-slug`

If you wish to make an update for the currently published version of the docs. Branch off of `#.x`, then submit PR against `#.x` AND `#.dev` if this is for the current version of the docs. 


## Style Guide

Please read the [style guide](https://docs.expressionengine.com/latest/style-guide.html) for samples and convention standards used in the ExpressionEngine user guide.

## Reporting Issues

Want to help but a little daunted by the idea of making a pull request? We still want to hear from you. You can report errors in the documentation as [issues in the github repo](https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/issues).  Just remember, the more detailed the report, the more likely someone will be able to make improvements.
