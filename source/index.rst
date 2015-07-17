#############################################
ExpressionEngine Developer Preview User Guide
#############################################

.. note:: The Developer Preview is a work in progress, we have a lot left to do! Please excuse the ongoing construction and dust as we continue to work on ExpressionEngine itself as well as reorganizating and rewriting much of the documentation.

Welcome to the ExpressionEngine Developer Preview User Guide.

Currently the table of contents on the left will only take you to areas that are relevant to your goals for the Developer Preview, namely the Add-on Developer section of the User Guide. The objective is to answer the following questions for you:

- What are the over-arching things I need to know?
- What's new, what's deprecated, and what's gone?
- What steps do I need to take to convert my existing add-ons?

Full reference API documentation auto-generated from our docblocks is coming soon.

Installation steps are essentially unchanged from 2.0, though we've simplified the installer itself quite a bit. Simply unzip the package, place it in a local vhost directory of your choice, and point your browser at `/system/` or `/admin.php`.

If you have questions or feedback, don't hesitate to drop a thread into the :ellislab:`Developer Preview Forums <forums/viewforum/128/>` or the private `Developer Preview Slack group <https://eedevpreview.slack.com/>`_.

Known Issues
============

- Updating from 2.0 currently is incomplete, work with fresh installs only.
- MSM will no longer offer to duplicate a site.
- Forum module themes are not yet implemented
- In-app documentation for native add-ons is incomplete
- Control panel interfaces for some native add-ons are incomplete
- Deleting categories or other models with recursive relationships does not work
- Entry and comment count on the homepage is inaccurate
- Channel Entry revisions is not yet implemented
- Publish Tab validation is not yet implemented
- This documentation is incomplete
- ...including this list


.. toctree::
  :glob:
  :hidden:
  :titlesonly:

  development/index

  about/index
  about/license
  about/changelog
  installation/index
  cp/index
  general/index
  how_to/index
  intro/index
  bugs_and_security_reports/index
  add-ons/index
  operations/index
  optimization/index
  monitoring/index
  security/index
  templates/index
  troubleshooting/index
  urls/index
  development/index
