###################################
ExpressionEngine Reactor User Guide
###################################

The private user guide repository for the ExpressionEngine Reactor project.

******************
Setup Instructions
******************

The ExpressionEngine user guide uses Sphinx to manage the documentation and
output it to various formats.  Pages are written in human-readable
`ReStructured Text <http://sphinx.pocoo.org/rest.html>`_ format.

Prerequisites
=============

Sphinx requires Python, which is already installed if you are running OS X.
You can confirm in a Terminal window by executing the ``python`` command
without any parameters.  It should load up and tell you which version you have
installed.  If you're not on 2.7+, go ahead and install 2.7.2 from
http://python.org/download/releases/2.7.2/

Installation
============

1. Install `easy_install <http://peak.telecommunity.com/DevCenter/EasyInstall#installing-easy-install>`_
2. ``easy_install sphinx``
3. ``easy_install sphinxcontrib-phpdomain``
4. Install the EE Lexer which allows EE syntax highlighting in code examples (see *eelexer/README*)
5. ``git clone git@github.com:EllisLab/ExpressionEngine-Reactor-User-Guide.git``
6. ``cd ExpressionEngine-Reactor-User-Guide``
7. ``git checkout develop``
8. ``make html``

Editing and Creating Documentation
==================================

All of the source files exist under *source/* and is where you will add new
documentation or modify existing documentation.  We recommend working from
feature branches and making pull requests to the *develop* branch of this repo.

So where's the HTML?
====================

Obviously, the HTML documentation is what we care most about, as it is the
primary documentation that our users encounter.  Since revisions to the built
files are not of value, they are not under source control.  This also allows
you to regenerate as necessary if you want to "preview" your work.  Generating
the HTML is very simple.  From the root directory of your user guide repo
fork issue the command you used at the end of the installation instructions::

	make html

You will see it do a whiz-bang compilation, at which point the fully rendered
user guide and images will be in *build/html/*.  After the HTML has been built,
each successive build will only rebuild files that have changed, saving
considerable time.  If for any reason you want to "reset" your build files,
simply delete the *build* folder's contents and rebuild.

***************
Style Guideline
***************

Please refer to style_guide.rst for samples and ReST convention standards used
in EllisLab user guides.  Please note that standard ReST renders will not be
able to parse all of the directives, as many are specific to Sphinx.