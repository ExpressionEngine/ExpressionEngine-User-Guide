<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Template Manager

**Control Panel Location: `Developer > Templates`**

[TOC]

The Template Manager allows you to create, edit and delete Template Groups and Templates. Clicking a particular Template Group name will reveal that Group so that you can work with it.

![](_images/cp-template-manager.png)

## Create Template

**Control Panel Location: `Developer > Templates > Create New Template`**

This section of the Control Panel allows you to create a new template within a template group.

New template settings:

- **Name** -- The name of the Template. This must be a single word with no spaces. You may use the letters a-z, the numbers 0-9, and the underscore and hyphen/dash characters. You should refrain from creating all-numeric Template names as they can cause confusion with Entry IDs used in URLs.
- **Type** -- Here you may specify the type of Template:
  - **Webpage**: This is the most common type of Template. Unless you specifically need one of the other two types you should use this one.
  - **CSS**: This type is used for Stylesheets. It tells ExpressionEngine to serve the Template as "text/css" MIME type. Further, the Template will _not_ be parsed for EE Tags like normal. The Template is served "as-is".
  - **RSS Page**: Used for RSS and Atom syndication feeds. It tells ExpressionEngine to serve the Template as "text/xml" MIME type.
  - **JavaScript**: Used for outputting JavaScript code. It tells ExpressionEngine to send "text/javascript" MIME type server headers when being viewed.
  - **Static**: Used for static content. Absolutely no ExpressionEngine tags or PHP code will be rendered in this type of template. Useful for HTML design elements embedded in other templates.
  - **XML**: Used for outputting XML pages with EE. It tells ExpressionEngine to send "text/xml" MIME type server headers when being viewed.
- **Duplicate existing template?** -- You may choose one of your existing Templates to duplicate its contents.

## Edit Template

**Control Panel Location: `Developer > Templates > Edit`**

This section of the Control Panel allows you to edit a templates contents and settings.

Clicking on a line number will select the whole line.

This page has the following tabs:

[TOC=3]

### Edit

The content of the Template.

### Notes

The Template Notes tab enables you to save notes and information about your template. This information is available only in this page.

### Settings

- **Template Name** -- The name of the Template. This must be a single word with no spaces. You may use the letters a-z, the numbers 0-9, and the underscore and hyphen/dash characters. You should refrain from creating all-numeric Template names as they can cause confusion with Entry IDs used in URLs.
- **Type** -- Here you may specify the type of Template:
  - **Webpage**: This is the most common type of Template. Unless you specifically need one of the other two types you should use this one.
  - **CSS**: This type is used for Stylesheets. It tells ExpressionEngine to serve the Template as "text/css" MIME type. Further, the Template will _not_ be parsed for EE Tags like normal. The Template is served "as-is".
  - **RSS Page**: Used for RSS and Atom syndication feeds. It tells ExpressionEngine to serve the Template as "text/xml" MIME type.
  - **JavaScript**: Used for outputting JavaScript code. It tells ExpressionEngine to send "text/javascript" MIME type server headers when being viewed.
  - **Static**: Used for static content. Absolutely no ExpressionEngine tags or PHP code will be rendered in this type of template. Useful for HTML design elements embedded in other templates.
  - **XML**: Used for outputting XML pages with EE. It tells ExpressionEngine to send "text/xml" MIME type server headers when being viewed.
- **Enable Caching?** -- This determines whether or not Template Caching is enabled for the Template. This is used together with the following preference.
- **Refresh Interval** -- If the previous preference is enabled, then this specifies how long (in minutes) the Template cache should active. The next time the Template is requested after the time interval has expired, a new cache will be created.
- **Allow PHP?** -- Here you specify whether or not the Template will parse PHP expressions. If the preference is set to "no", then any PHP in the Template will be output as plain text.
- **PHP Parsing Stage** -- If the previous preference is enabled, this sets whether PHP is parsed on "input" or "output" in the Template. See [Using PHP in Templates](templates/overview.md#php-in-templates) for more information.
- **Hit Counter** -- If you wish to manually revise the hit counter for a Template you may do so.

### Access

- **Allowed member roles** -- Choose which member roles are allowed to access the template.
- **No access redirect** -- Page to redirect users without permissions to. If a template is selected the user does not have access to, the 404 page will be displayed instead.
- **Enable HTTP Authentication?** -- When set to enable, users with permissions will have to login to view this template.

NOTE: **Note:** If you are running PHP-FPM / FastCGI, you will probably need to add this to your `.htaccess` so the server makes the necessary environment variables available to PHP & ExpressionEngine.

    SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1

or:

    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

- **Template route override** -- Overrides the ExpressionEngine standard group/template routing.
- **Require all segments?** -- When set to yes, all segments must be present in the request URI.

## Template Routes

**Control Panel Location: `Developer > Templates > Template Routes`**

The Template Route Manager shows all templates that are assigned a template route and allows you to add, edit and manage your Template Routes.

Routes are listed in the order that the Template Router will match your templates.

Routes have the following settings:

- **Template** -- The template to apply the route to.
- **Route** -- This route determines the URLs that will match your template. For more info see: [Template Routes](templates/routes.md)

         /segment/{variable}/{variable:rule}/{variable:rule0|rule1[arg]}

- **Require all Segments?** If set to "yes" all segments defined in your Template Route must be contained in a URL in order for it to match. If set to "no" and static variables are used in the route, all variables will still be required in order for the URL to match the route. For example, `/add/{url_title:alpha_dash}` will not match the URL /add. It requires a third segment to match. In order to use static variables and not require all variables, use a regular expression match in place of a static variable. In the example above, replace the static variable `add` with a regular expression match. The resulting route would look like:

        /{seg1:regex[(add)]}/{url_title:alpha_dash}

## Email Templates

**Control Panel Location: `Developer > Templates > Email`**

This section of the Control Panel is for the various "notification" emails that are sent by the system. For example, when someone registers at your site, account activation instructions are emailed to them. The formatting of the email is controlled in one of the Message Pages.

## Forum Templates

**Control Panel Location: `Developer > Templates > Forums`**

The ExpressionEngine Forums make use of "themes" to determine how they are displayed. The Forum Module comes with a "default" theme, which is located in your installation under themes/forum_themes/.

In order to edit the Templates inside the Control Panel, set the theme folders and files to be writable. See [File Permissions](troubleshooting/general.md#file-permissions) for details.

If you plan to make changes to your theme, we recommend that you make a copy of the themes/forum_themes/default/ directory, name it something else, and make your changes to that one. You can easily switch themes simply by choosing a new one under Default Preferences.

For anyone creating their own theme or modifying one, the original "PSD" version of the "ExpressionEngine Forums" graphic [is available for download](https://expressionengine.com/asset/file/forum_logo_psd.zip).

## Member Profile Templates

NOTE: **Note:** The Member Profile Templates are legacy as of ExpressionEngine 6. If you have to use them, it is required to set `legacy_member_templates` [config override](member/profile-templates.md).

**Control Panel Location: `Developer > Templates > Members`**

The public profile area has its own set of templates which can be edited to change the look. You'll find the templates located at:

    themes/ee/member/default/

A good strategy is to make a copy of the entire **default** templates folder, then edit your copy so you can leave the **default** files intact. Save your new copy to:

    themes/user/member/custom_theme_name/

You can set your new copy as the site default under `Settings --> Members`

NOTE: **Note:** When building your member profile templates, consider that any external links will pass along referrer data. This can cause security problems if someone clicks on an external link from a secure page. For example, if a user clicks an external link from the password reset page, the external site _could_ use the password reset link from the referrer data to gain access to a user's account.

You can strip everything but the base URL by linking to `{path=""}?URL=<your url>`.

## System Message Templates

NOTE: **Note:** As of ExpressionEngine 6, it is possible to use standard templates for custom system messages. Please find the details in [Custom System Messages](control-panel/template-manager.md#custom-system-messages) section below.

**Control Panel Location: `Developer > Templates > Messages`**

This section of the Control Panel is for managing the system message templates, such as the Site Offline template and the User Messages template.

In the [General Settings](control-panel/settings/general.md) section of the Control Panel you can specify whether or not your site is "Live". If the site is not live then people will be presented with a message when they try to access your page. This can be useful if you are performing maintenance or other such things. This Message Page allows you to define the page that will be shown to people when your site is not "Live".

Users often receive messages after performing actions in ExpressionEngine: logging in, submitting a form, etc. In addition, they may sometimes be shown error messages. You can determine how the page looks that displays these messages.

## Custom System Messages

It is possible to display custom system messages to users by using standard ExpressionEngine templates.

In order to do this, you simply need to create a `system_messages` template group, and create a template named `generic` within the group.

At the bare minimum, it is required to have following variables in that template:

- **`{heading}`** - message heading
- **`{content}`** - message text
- **`{link}`** - formatted link provided with the message

It is also recommended to have the following:
- **`{title}`** - page title
- **`{meta_refresh}`** - meta tag containing refresh/redirect information
- **`{charset}`** - charset

Additionally, the template may contain any other ExpressionEngine tags.

**Sample System Message Template:**

    <html>
    <head>
        <title>{title} | {site_name}</title>
        <meta http-equiv='content-type' content='text/html; charset={charset}' />
        {meta_refresh}
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    </head>
    <body>
    <div class="flex items-center justify-center h-screen" >
        <div class="max-w-md rounded overflow-hidden shadow-lg ">

            <div class="px-6 py-4 bg-gray-100">
                <div class="font-bold text-xl mb-2">{heading}</div>
                    <div class="text-gray-700 text-base">

                    {content}

                    <p class="text-indigo-500">{link}</p>

                    <p>... or read our latest blog post {exp:channel:entries channel="blog" limit="1" dynamic="no" disable="custom_fields"}<a class="text-indigo-500" href="{path=blog/{url_title}}">{title}</a>{/exp:channel:entries}</p>
                </div>
            </div>
            <div class="px-6 pt-4 pb-2 bg-gray-100">
                <span class="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#EE6</span>
                <span class="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#new-features</span>
            </div>
        </div>
    </div>
    </body>
    </html>




## Template Partials

**Control Panel Location: `Developer > Templates > Template Partials`**

In this section of the Control Panel you can create and edit [Template Partials](templates/partials.md).

## Template Variables

**Control Panel Location: `Developer > Templates > Template Variables`**

In this section of the Control Panel you can define custom data that you would like to be available globally in any Template. This is in addition to the standard [Global Template Variables](templates/globals/single-variables.md) that are already available.

You could create a Global Variable for any number of purposes. One idea would be for a piece of copyright text that would be included on every page. By making it a Global Variable you can change it in one place and immediately see the effects everywhere.

Global Variables can contain text, HTML, javascript, etc. but cannot contain PHP code or ExpressionEngine tags that you wish to have parsed.

## Create/Edit Template Group

**Control Panel Location: `Developer > Templates > New/Edit`**

Tip: Custom Ordering Template Groups
<div class="video-wrapper">
<iframe src="https://www.youtube.com/embed/9SExELl2AX0?" title="Custom Ordering ExpressionEngine Template Groups" width="1920" height="1080" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>

This section of the Control Panel allows you to create or edit a template group.

## Template Generators

**Control Panel Location: `Developer > Templates > Template Generator`**

This section of the Control Panel allows you to automatically create the basic tag framework for a variety of modules, including channels, navigation, member tags, etc. using [Template Generators](templates/generators.md).

## Export Templates

**Control Panel Location: `Developer > Templates > Export`**

![Export All Templates icon](/_images/export_templates.png) Clicking the Export All Templates Icon will download all templates, partials, and variables as a compressed *.zip archive.
