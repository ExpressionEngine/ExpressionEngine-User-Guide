Bugs and Security Reports
=========================

.. contents::
   :local:

This is a quick guide on how to submit a bug report and an overview of
what we do with bugs once they're submitted, as well as how to report
security issues with ExpressionEngine.

Submitting a Bug Report
-----------------------

You can submit bug reports in the :elsupport:`ExpressionEngine Bug
Tracker </bugs>`. Tips and guidelines are updated periodically on the
:elsupport:`bug submission page </bugs/submit>`. If your bug is security
related, please see the `Security Reporting Guidelines`_. Some common
best practices for reporting bugs are:

- Make sure this is a bug. The best way to do this is to review the
  appropriate section of the User Guide, check your preferences, and
  look for typos. We strongly suggest you submit a :elsupport:`support ticket </>`
  if there is any doubt that this is a bug and not a user or server error.
- Check the list of :elsupport:`recently reported bugs </bugs>` and/or
  perform a bug search to see if its already been reported.
- Tell us what you expected to happen that didn't. For example,
  "I thought doing this task would produce this result."
- Then explain what actually happened. "But instead, something else happened."
- Be sure to include *the exact wording* of any error messages.
- If possible provide a URI where the bug can be reviewed.


Bug Tracker Statuses
~~~~~~~~~~~~~~~~~~~~

When you enter a bug report, it will go in with a status of 'New'.
Once a staff members has evaluated the bug, the status will be changed
to one of the following options:

-  **Accepted:** The bug has been confirmed and will be addressed by
   our engineers.
-  **Duplicate:** A bug report already exists for this issue and a
   link will be provided to the existing issue.
-  **Clarification Requested:** We are unable to duplicate the bug as
   reported, and need additional information to determine if it is a
   bug or some other issue.
-  **Fixed is in Upcoming Release:** The bug has been fixed and the fix
   will be in the next release. Where possible, a solution will walk you
   through adding a temporary fix to your own installation.
-  **Bug Fixed:** The bug has been fixed in the publicly released
   software.
-  **See Comments:** The reported issue may not be a bug, or may be an
   issue with an external application or service. Where possible, we
   will try to explain how to solve the reported problem.

Security Reporting Guidelines
-----------------------------

We take security issues very seriously, and encourage responsible
reporting with a high priority on making security fixes or patches
available rapidly, prior to any public disclosure of the vulnerability.
We find this is the best balance of giving security issues the attention
they rightly deserve, and protecting end users and site visitors from
malicious individuals and script kiddies.

All software has vulnerabilities, but when we work together with developers
and researchers, we can all help make the Internet a safer and better
place. We love to acknowledge researchers who make valid security reports
and work with us, and while we do not have a bounty program, sometimes
will donate software or swag for being classy.

If you have a security issue to report, you can let us know at
`team@ellislab.com <mailto:team@ellislab.com?subject=Security%20Vulnerability>`_
or if you prefer at `HackerOne <https://hackerone.com>`_.

What are Security Issues?
~~~~~~~~~~~~~~~~~~~~~~~~~

When we speak about security related bugs, we are most interested in:

- `Cross-site Scripting (XSS) <http://en.wikipedia.org/wiki/Cross-site_Scripting>`_
- `Cross-site Request Forgery (CSRF) <http://en.wikipedia.org/wiki/Cross-site_request_forgery>`_
- `Privilege Escalation <http://en.wikipedia.org/wiki/Privilege_escalation>`_
- `Session Hijacking <http://en.wikipedia.org/wiki/Session_hijacking>`_
- `Arbitrary Code Execution <http://en.wikipedia.org/wiki/Arbitrary_code_execution>`_

Making Good Security Reports
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We don't have rigid guidelines for what a security bug report should
include, as we want to minimize barriers—ultimately we just want to
receive the information. That said, the best security reports not only
describe the vulnerability, but include a proof of concept as well as
how it might be exploited in a realistic situation. Bonus points for
including your recommended solution.

On the converse, security reports that are merely the output of
penetration testing software are generally not only unhelpful, but
typically contain false-positives as the software cannot grasp the
context or implications of a piece of code that checks off one of the
items on the vendor's preset list of vulnerabilities.

Since our team only speaks English all security reports must be made in
English, and communication will be in that language.

Reporting and Disclosure
~~~~~~~~~~~~~~~~~~~~~~~~

Once you have reported the security issue, a number of steps will be
taken to assess and address the reported issue prior to disclosure.

- The report will be triaged within 48 hours to determine if the issue
  is a legitimate security issue. Issues reported on weekends or U.S.
  holidays may take 72–96 hours to be triaged.
- Immediately after being triaged, an engineer will be assigned as the
  owner of the issue and will contact you regarding your report.
- If confirmed, the engineer will set to work on resolving the issue,
  providing the reporter with a patch to test the prospective fix.
- We try to have all security issues fixed within two weeks of being
  triaged, often much more quickly. All valid security reports have a
  high priority, but will be addressed in a relative priority based on:

  - Whether a known exploit is in the wild
  - The severity of the exploit
  - The likelihood of user impact
  - Complexity of the issue

- In any case, the engineer assigned to the issue will maintain regular
  contact with the reporter throughout the process, at minimum once per
  week.
- The security bug fix will typically be included in the next software release.
  Depending on the priority conditions above and how distance the next
  planned release is, we may issue a release and/or patch that only
  addresses the reported security bug.
- We disclose in our application :doc:`Change Log </about/changelog>` that a security
  bug has been fixed, and what type. We do not disclose the steps or
  circumstances to reproduce the bug.
- Releases are posted to our :ellislab:`blog </blog>`, and for users who have
  left the default feature enabled, receive notification when logged in
  to their control panel.
- Public disclosure of a security bug prior to resolution makes our
  engineers and customers quite unhappy, and will not be met with gratitude.


