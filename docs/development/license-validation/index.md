<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2024, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# License Validation

[TOC]

License validation is a feature designed to ensure that users of add-ons purchased through our platform comply with licensing agreements. It serves to remind users to purchase a license if they have forgotten to do so, facilitates add-on license renewal, and provides recommendations for license purchases to users who do not have one.

## Benefits
 - Reminder for License Purchase: Users who mistakenly forget to buy a license are notified through the control panel, prompting them to purchase a valid license. We also recommend licenses to users in their accounts on expressionengine.com if applicable.
 - Renewal Add-On Sales: Developers can create renewal add-on sales to keep add-on licenses up-to-date, ensuring continued support and updates.

## Application Process
Third-party developers selling add-ons on our platform can enable license validation through their accounts on expressionengine.com. The following outlines the steps for enabling license validation:

 - Log in to your account on expressionengine.com.

 - Navigate to the "Manage Add-Ons" section.

 - Under the "Your Add-Ons" section, click on "Apply to enable license validation" for the desired add-on.

## Terms and Conditions
Before enabling license validation for an add-on, developers are required to agree to the following terms:

 - Import Existing Sales: Developers must import all existing sales that occurred outside of expressionengine.com. This ensures that users who purchased the add-on elsewhere can validate their licenses. Failure to import all licenses may result in users seeing the add-on as "unlicensed" in their control panel. Existing sales can be imported by emailing a CSV to us, or through our [license import API.](development/license-validation/importing-licenses.md)

 - Customer Notification: Developers must send an email to their customers informing them of the requirement to tie their licenses to an ExpressionEngine site on expressionengine.com. Users must log in to their accounts and attach their add-on purchases to a site license in the "Licenses" section. Failure to attach the license may result in the add-on appearing as "unlicensed" in their control panel.

 - Frontend Disruption: License validation must not be used in a manner that disrupts the frontend of a website. Any visible impact on the frontend resulting from license validation is deemed inappropriate and against the agreed-upon use.

## Approval Process

Once the application for license validation is submitted, it will be reviewed by our team. The request may be approved or denied based on adherence to the outlined terms and conditions.

By adhering to the application process and terms outlined above, developers can enable license validation for their add-ons, ensuring compliance with licensing agreements and providing a seamless experience for users.

## Add-on Changes
Third-party add-ons don't need any changes to their code to participate in license validation; the ExpressionEngine core handles it! If you wish to go beyond the default core measures, you can check your add-on licenses status through the [add-on service](/development/services/addon.md#checkcachedlicenseresponse). 
