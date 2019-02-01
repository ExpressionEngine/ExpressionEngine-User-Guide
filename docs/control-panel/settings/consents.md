<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Consents

**Control Panel Location: `Settings > Consent Requests`**

[TOC]

## User Consent Requests

Custom consent requests can be created for any site need. These requests are displayed for users just as native consents are and users may manage their consent through the [consent module](add-ons/consent.md) just like native consents.

### Create New

This will take you to the consent request [create form](#createedit-consents).

### New version

This will take you to the [edit form](#createedit-consents). If you edit an existing consent request, it creates a new version and stores the old version. Creating a new version nullifies all prior user consents and no users will have consented to the new version, regardless of whether they consented to an earlier version of the consent request.

### Versions

Opens a modal with all versions of the selected consent request and the date each version was created. Selecting a version will show the consent title, name and request description.

## Application Consent Requests

ExpressionEngine creates native consent requests for several standard categories of cookies. Third party add-ons may also programmatically create consent requests upon installation or update. These consent requests cannot be deleted and the consent names are not editable. However, the titles and descriptions may be updated.

### New version

This will take you to the [edit form](#createedit-consents). If you edit an existing consent request, it creates a new version and stores the old version. Creating a new version nullifies all prior user consents and no users will have consented to the new version, regardless of whether they consented to an earlier version of the consent request.

### Versions

Opens a modal with all versions of the selected consent request and the date each version was created. Selecting a version will show the consent title, name and request description.

## Create/Edit Consents

**Control Panel Location: `Settings > Consents`**

This section of the Control Panel allows you to create and edit custom consent requests and edit the title and content of programmatically generated consents.

NOTE: **Note:** Editing a consent creates a new consent request and nullifies all prior user consents to the request, regardless of whether they consented to an earlier version of the request.

### Fields

#### Consent Title

The title of the consent request. For example, 'Terms of Service'.

#### Consent Name

The short name of the consent request, used in the [consent module](add-ons/consent.md) tags. For example, 'tos'.

#### Request

A description of the consent being requested. In the case of a Terms of Service consent request, this would be the complete terms consent is being requested for.
