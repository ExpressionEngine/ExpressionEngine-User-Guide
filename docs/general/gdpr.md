<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# GDPR and ExpressionEngine

[TOC]

ExpressionEngine has tools to make compliance with regulations like the easy to comply with. GDPR (General Data Protection Regulation) has four main prongs: consent, record of processing, portability, and right to be forgotten. ExpressionEngine makes it easy to comply with these regulations, with infinite flexibility to also accommodate any regional or internal data privacy policies as well.

## Consent, Consent, Consent

The biggest and most important aspect of GDPR is gaining user consent for processing their PII (Personally Identifiable Information), letting them easily withdraw consent, and only processing PII that the user has consented to. ExpressionEngine makes it easy to gain and manage user consent for any activity you can possibly imagine.

### Cookies

For your website, the first thing that likely pops in your mind is cookies. ExpressionEngine has a small set of cookies that do not contain any PII that are **strictly necessary** for the website to function properly. These cookies cannot be disabled except by the user with their browser settings, and if they choose to do so, some basic website features will not work (such as submitting forms, logging in, etc.).

Other cookies are divided into three categories to let the user manage consent for these activities. You can use the [Consent module](add-ons/consent.md) to manage the Consents, and [Consent Variables](templates/globals/consent.md) to test consents in your templates.

#### Functionality

These cookies help personalize content and functionality, including remembering changes a user has made to parts of the website that they can customize. These cookies do not contain any PII and simply make the website friendlier to use and add functionality without requiring registration.

#### Performance

These cookies are used to collect information about visits to your website, like Google Analytics. ExpressionEngine has **no native Performance cookies** and it is your responsibility to manage consent and the setting of these cookies. Consent for Performance Cookies should be aggregated, and therefore anonymous, containing no PII.

#### Targeting Cookies

Targeting cookies are the only kind that should be used in storing and transmitting PII. The information is PII and often shared with a third-party service and enable profiles to be gathered, sometimes across many web sites. ExpressionEngine has **no native Targeting cookies**. This consent should be granted if you are using any third-party marketing cookies, or are sending PII to services like Google Analytics that would _normally_ not include PII.

TIP: **Tip:** Checkout our comprehensive guide to [Cookies](general/cookies.md) for more details.

### Consent for Anything!

Add-ons may also have consent requests, and you can also make any Consent Requests you need. Some common examples might be a "Terms of Service" consent, or permission to use member's email addresses for marketing purposes. To create any consent you can imagine, visit the Consents Settings. Then simply use the [Consent](add-ons/consent.md) tags to manage user consent and [Consent Variables](templates/globals/consent.md) in your templates to act upon them.

## Records, Auditing

ExpressionEngine records an audit log of all consents granted or withdrawn by a user. This is maintained indefinitely. If you ever need to prove or report an individual's granting or withdrawl of consent, just visit your [Consent Logs](control-panel/system-logs.md#consent-logs).

## Data Portability

ExpressionEngine's simple templating and flexible tags have always made data portability a menial task. You can simply construct a template to output any data you desire, in any format you want (HTML, XML, CSV, etc.). Since every ExpressionEngine site is different, and your content is wholly under your control, it is your responsibility to build any such templates—should you need them—to easily export data for visitors.

## Right to be Forgotten

ExpressionEngine gives you two options as a site administrator to handle a user's request to be forgotten. The first is quick and simple: **delete them!**

However, there are circumstances where you need to retain **content** or other records, while satisfying the user's request to be forgotten. For example, if you are engaged in e-commerce, your sales records may need to be retained, while eliminating any PII for the user who made the purchase. In this and other situations where the data the user supplied is no longer needed for its original purpose, but content or administrative records need to be retained, you can **Anonymize** the member's record.

Anonymization gets rid of any PII for the member record, but under the hood maintains the database connections necessary for member-dependent records to continue to be accessible. To anonymize a member's record, visit the Member's profile in the control panel, and click "Anonymize Member Record".
