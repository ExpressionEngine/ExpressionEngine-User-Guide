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

In order to build our documents, you will need to have Docker installed.

Installing Docker
=================

Download and install the Docker dmg, available `here <https://docs.docker.com/docker-for-mac/install/#download-docker-for-mac>`_.

Have DJ or Kevin add you to the dockerhub container image (as it's private).


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
fork issue this command ::

	eetools make

If you want to rebuild all files instead of just the changed ones, use ::

	eetools make -c

Note, on MAMP you may get a `eetools: command not found`, as your shell maybe isn’t looking in the current working directory. Just use `./eetools` instead.

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
