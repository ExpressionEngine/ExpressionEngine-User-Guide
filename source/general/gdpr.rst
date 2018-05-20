*************************
GDPR and ExpressionEngine
*************************

ExpressionEngine has tools to make compliance with regulations like the |gdpr| easy to comply with. :abbr:`GDPR (General Data Protection Regulation)`  (General Data Protection Regulation) has four main prongs: consent, record of processing, portability, and right to be forgotten.

.. contents::
  :local:
  :depth: 2

Consent, Consent, Consent
=========================

The biggest and most important aspect of :abbr:`GDPR (General Data Protection Regulation)` is gaining user consent for processing their Personally Identifiable Information (:abbr:`PII (Personally Identifiable Information)`), letting them easily withdraw consent, and only processing :abbr:`PII (Personally Identifiable Information)` that the user has consented to. ExpessionEngine makes it easy to gain and manage user consent for any activity you can possibly imagine.

Cookies
-------

For your website, the first thing that likely pops in your mind is cookies. ExpressionEngine has a small set of cookies that do not contain any :abbr:`PII (Personally Identifiable Information)` that are **strictly necessary** for the website to function properly. These cookies cannot be disabled except by the user with their browser settings, and if they choose to do so, some basic website features will not work (such as submitting forms, logging in, etc.).

<include first-party strictly necessary cookies table>

Other cookies are divided into three categories to let the user manage consent for these activities. You can use the :doc:`/add-ons/consent/index` to manage the Consents, and :doc:`/templates/globals/consent` to test consents in your templates.

Functionality
~~~~~~~~~~~~~

These cookies help personalize content and functionality, including remembering changes a user has made to parts of the website that they can customize. These cookies typically do not contain any :abbr:`PII (Personally Identifiable Information)` and simply make the website friendlier to use.

<include first-party functionality cookies table>

Performance
~~~~~~~~~~~

These cookies are used to collect information about visits to your website, like Google Analytics. ExpressionEngine has **no native Performance cookies** and it is your responsibility to manage consent and the setting of these cookies. Consent for Performance Cookies should be aggregated, and therefore anonymous, containing no :abbr:`PII (Personally Identifiable Information)`.

Targeting Cookies
~~~~~~~~~~~~~~~~~

Targeting cookies are the only kind that should be used in storing and transmitting :abbr:`PII (Personally Identifiable Information)`. The information is :abbr:`PII (Personally Identifiable Information)` and often shared with a third-party service and enable profiles to be gathered, sometimes across many web sites. ExpressionEngine has **no native Targeting cookies**. This consent should be granted if you are using any third-party marketing cookies, or are sending :abbr:`PII (Personally Identifiable Information)` to services like Google Analytics that would _normally_ not include :abbr:`PII (Personally Identifiable Information)`.

Consent for Anything!
---------------------

Add-ons may also have consent requests, and you can also make any Consent Requests you need. Some common examples might be a "Terms of Service" consent, or permission to use member's email addresses for marketing purposes. To create any consent you can imagine, visit the Consents Settings. Then simply use the :doc:`/add-ons/consent/index` tags to manage user consent and :doc:`/templates/globals/consent` in your templates to act upon them.

Records, Auditing
=================

ExpressionEngine records an audit log of all consents granted or withdrawn by a user. This is maintained indefinitely. If you ever need to prove or report an individual's granting or withdrawl of consent, just visit your :doc:`/cp/logs/consent`.

Data Portability
================

ExpressionEngine's simple templating and flexible tags have always made data portability a menial task. You can simply construct a template to output any data you desire, in any format you want (HTML, XML, CSV, etc.). Since every ExpressionEngine site is different, and your content is wholly under your control, it is your responsibility to build any such templates—should you need them—to easily export data for visitors.

Right to be Forgotten
=====================

ExpressionEngine gives you two options as a site administrator to handle a user's request to be forgotten. The first is quick and simple: **delete them!** 🚮

However, there are circumstances where you need to retain **content** or other records, while satisfying the user's request to be forgotten. For example, if you are engaged in e-commerce, your sales records may need to be retained, while eliminating any PII for the user who made the purchase. In this and other situations where the data the user supplied is no longer needed for its original purpose, but content or administrative records need to be retained, you can **Anonymize** the member's record.

Anonymization gets rid of any PII for the member record, but under the hood maintains the database connections necessary for member-dependent records to continue to be accessible. To anonymize a member's record, visit the Member's profile in the control panel, and click "Anonymize Member Record".
