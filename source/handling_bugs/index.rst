Handling Bugs
=============

This is a quick guide on how to submit a bug report and an overview of
what we do with bugs once they're submitted.


Suspect a Bug?
--------------

First thing's first: make sure it's a bug. If you're not sure, or if you
don't yet have clear steps to reproduce the bug, head over to the
`Technical Support
Forum <http://ellislab.com/forums/viewforum/105/>`_ to work
through it with the Technical Support Specialists. Technical support is
**not** provided through the bug tracker, and if we're unable to
reproduce the bug using the information provided in your bug report, it
may be rejected as a bug and you will be referred back to the forums.

For security related bugs, you should email a report to
`developers@ellislab.com <mailto:developers@ellislab.com>`_ and you will
receive a reply back within one working day.

-  Update your ExpressionEngine installation with the latest bug fix and
   security update.
   
   *For example, if you're running EE 2.2, update your installation to
   the latest 2.2.x update available.*

-  Check that your preferences have been set correctly, and look for
   typos.
-  :elsupport:`Check the bug tracker </bugs>` to see if this specific 
   bug has already been submitted.
-  Make sure you can reproduce the bug in a separate, fresh installation
   of ExpressionEngine running the latest update for your version.
   
   *This will also help you narrow down the exact conditions necessary
   to produce the bug, so take good notes. This is information that will
   be vital in your bug report.*

If your preferences are set correctly, the bug report doesn't already
exist in the bug tracker, and you're able to consistently reproduce the
bug, it's time to submit a bug report.

Submitting a Bug Report
-----------------------

We take bugs seriously, so it's important that bug reports are clearly
explained and provide steps to consistently reproduce the bug in
question. Our community is a huge part of what makes ExpressionEngine
great, and bug reports from members of our community can go a long way
in making ExpressionEngine even better.

Visit the bug tracker to :elsupport:`report the bug </bugs/submit>`, and
take note of the following fields when filling out the bug report form:

#. **Short Description**: Make sure it's clear and concise so others
   scanning the bug tracker can easily find your bug if they're
   experiencing the same issue.
#. **Bug Details**

   -  Tell us what you expected to happen that didn't. For example, "I
      thought doing this task would produce this result."
   -  Then explain what actually happened. "But instead, this other
      thing happened."
   -  Be sure to include any error messages.
   -  If the bug's effects are visible on a live site, please include a
      URL where those effects can be observed.
   -  Most importantly, include the steps our developers must take to
      reproduce your bug. **Remember: if we can't reproduce it, we won't
      be able to fix it!**

#. **Bug Type**: Carefully categorize the bug so that your bug report
   can be easily found by our developers and other community members
   through searches and filtering.
#. **Version**: Choose the specific version of your EE installation.
   Remember, you should've already applied the latest bug fix and
   security update while troubleshooting this bug.
#. **Severity** Choose one of the four main levels of severity based on
   the following guidelines:

   -  **Trivial**
      Aesthetic bugs, errors in JS that are not mission-critical,
      spelling errors, errors in the User Guide, PHP errors after the
      upgrade user survey.
   -  **Minor**
      Errors that aren't merely aesthetic, but can be worked around
      until a fix is available. E.g. JS error when using control + arrow
      keys, slow CP on certain pages, etc.
   -  **Major**
      MySQL or PHP errors or a break in core functionality that
      interrupts usage but would only rarely occur and would likely
      affect only a small portion of the EE community.
   -  **Critical**
      Any bug where security is compromised. Any MySQL or PHP error or
      a break in core functionality that interrupts usage and would be
      an issue that most users are experiencing. The impact on the EE
      community from this single bug should be pretty widespread.

   Within those main levels of severity, you can further fine-tune the
   severity by choosing *low*, *medium*, and *high*. If you're not sure,
   just choose *medium*.
#. **Forum Support Thread**: If you've already worked through this with
   the Technical Support Specialists in the support forum, enter that
   URL here so we can reference the thread for more information.

What to Expect After Submitting a Bug Report
--------------------------------------------

Our goal is to respond to all bug reports within two business days of
posting time. The bug's severity may also be adjusted at that time. When
you enter a bug report, it will go in with a status of 'New'. Once a
staff members has evaluated the bug, the status will be changed to one
of the following options:

-  **Confirmed:** The bug has been replicated and turned over to the
   development team to address.
-  **In Progress:** The development team is actively working on a fix.
-  **Unconfirmed:** We are unable to replicate the bug. In such cases, a
   comment will be made to the bug report asking for more details in
   order to try and replicate the error.
-  **Not a Bug:** While the behavior may not be desireable, the software
   is working as expected. Often times an issue designated 'Not a bug'
   would be better submitted as a feature request.
-  **Duplicate:** A bug report already exists for this issue and a
   comment should be made linking you to the existing issue.
-  **External:** The cause of the problem lies outside of
   ExpressionEngine's code (such as a third party add-on or a pinger
   server that is inaccessible).
-  **Fixed for Next Release:** The bug has been fixed and the fix will
   be in the next release. Where possible, a comment will walk you
   through adding a temporary fix to your own code.
-  **Directed to Support:** The bug cannot be replicated and given the
   behavior it is unlikely that a bug exists. However, the Tech Support
   Specialists on the forum can provide you with help in accomplishing
   your overarching goal.

When a change is made to the bug's status, a comment will also be added
to the bug report, enabling you to receive email notifications of the
bug's progress.

Security and Critical bugs should be fixed within 1 week of the initial
response. Depending on how the severity and scope of the bug, a public
upgrade may be deemed necessary. In such a case, our target is 2 weeks
until release. If a public release is not deemed necessary, every effort
will be made to get provide a temporary patch until the fix is made
public, which should be no more than 1 month after the initial response.

Major bug fixes should be released to the public within 1 month of the
initial response, while Minor and Trivial bugs should be included in a
public release no more than 2 months after the initial response.

For all bugs, a short term fix will be provided in the bug comments if
that is feasible.

Hotfixes
--------

