<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2022, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Additional Config Files

In addition to `config.php` ExpressionEngine has a number of other configuration files that are being used by [Config Service](development/services/config.md)

As a general rule, the values provided in those config files (located in `system/ee/ExpressionEngine/Config` folder) are good for most sites, however there might be cases where certain setup would need to override some of the values.

In order to do that, simply copy the corresponding file to `system/user/config` folder and change or add the values that are needed. There is no need to keep the full copy of config file, just keep the properties that need to be changed and remove the ones that you are fine with - the default values will be used for those.

[TOC=4]

#### CAPTCHA Word Dictionary

`captcha.php`

The list of the words that are being used to generate [CAPTCHA](security/captchas.md). If you need to expand this list, add extra words to your custom config in  `system/user/config/captcha.php`

#### Foreign Characters

`foreign_chars.php`

This file contains an array of foreign characters for transliteration conversion used by the Text helper (example would be generating URL Titles for entries).

#### HTML Form Attributes

`valid_form_attributes.php`

Valid HTML attributes that might be passed via EE template tag parameters to the `form` tag when creating forms with `ee()->functions->form_declaration()`. Additionally, `data-` and `aria-` attributes can be used.

#### Allowed Mime Types

`mimes.php`

These are the mime types that are allowed to be uploaded using the upload class. For security reasons the list is kept as small as possible.  If you need to upload types that are not in the list you can add them.

The mime types are grouped by file type. You can add the allowed mime types directly or you can add new file types containing miltiple mimes.

#### 'Remember me' expiration

`remember.php`

This file holds the duration of user session when 'remember me' checkbox is checked on login.

#### Routes

`routes.php`

This file lets you re-map URI requests to specific controller functions.

We generally recommend using [Template Routes](templates/routes.md) and not modify this file, unless you know you need to.

#### Stop Words

`stopwords.php`

This file contains an array of words that the search functions in EE will ignore in order to a) reduce load, and b) generate better results.
