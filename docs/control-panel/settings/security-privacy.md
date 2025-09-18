<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Security & Privacy

**Control Panel Location: `Settings > Security & Privacy`**

This section of the Control Panel allows you to define the basic security-related settings for your website. These are security settings that apply throughout the website/system.

## Settings

### CP session type

This determines how sessions are handled for the Control Panel. You may use cookies, session IDs, or a combination. The available options are:

- **Cookies and session ID**: Both cookies and URL session ID parameters are used to track the admin user. This is the most secure setting since it relies on two individual cookies and a URL session ID.
- **Cookies only**: Only cookies are used to track the admin user. When this setting is used a "remember me" checkbox will appear next to the Control Panel login page, enabling users to stay permanently logged in.
- **Session ID only**: Only URL session IDs are used to track the admin user. This option should only be used if your desktop computer prevents you from accepting cookies in the event you are behind a firewall or due to some other technical issue.

### Website Session type

This determines how sessions are handled for the front-end of the site. You may use cookies, session IDs, or a combination. The available options are:

- **Cookies and session ID**: Both cookies and URL session ID parameters are used to track the user throughout their visit.
- **Cookies only**: Only cookies are used to track the user throughout their visit. This is the default setting, and generally the best option since it prevents URLs from showing session IDs.
- **Session ID only**: Only URL session IDs are used to track the user throughout their visit.

### Share analytics with the ExpressionEngine Development Team?

PacketTide asks users to help improve ExpressionEngine by providing analytics, diagnostic, and usage information to the ExpressionEngine Development Team.

When this setting is on, the following information is occasionally collected:

- Site domain
- ExpressionEngine version
- PHP version
- MySQL version
- List of installed add-ons

You can opt out at any time by turning this setting off.

### Enable the Command Line Interface

Allows the CLI to be disabled or enabled globally.

## Cookie Settings

### Domain

Optionally specify a domain the cookie is available to. By default, the exact hostname of the requested page is set as the cookie domain. For example, if the page at `https://www.example.com/blog/an-entry-title` is loaded and the cookie domain is left blank in ExpressionEngine's configuration, the browser will use `www.example.com` as the cookie domain. The browser will only make these cookies available when the page's hostname is _exactly_ `www.example.com`.

If the cookie domain is explicitly specified, however, the browser will make the cookie available whenever the requested page's hostname _contains_ the cookie domain. For example, setting the cookie domain to `.example.com` will ensure the cookie is shared whenever the requested page's hostname includes `example.com`, `www.example.com`, `admin.example.com`, `blog.example.com`, and so on.

If you're running multiple subdomains on a single ExpressionEngine installation and want member sessions to be valid across all subdomains, you should explicitly set the cookie domain.

NOTE: **Note:** There's an important difference between `example.com` and `.example.com`. When the cookie domain begins with a dot, browsers match any hostname that _includes_ the cookie domain. Without the dot prefix, browsers are looking for an exact hostname match in the URL, which means cookies will not be available to subdomains. A cookie set by PHP with an explicitly specified cookie domain will always include the dot prefix, whether or not one is included in this ExpressionEngine setting. For clarity's sake, the examples here include a leading dot when the cookie domain is being explicitly set.

NOTE: **Note:** Browsers will not save cookies if the specified cookie domain isn't included in the request's hostname. In other words, a site can only set cookies for `.example.com` if its hostname actually includes `example.com`.

### Path

Optionally specify a cookie path. When a cookie path is set, the browser will only share cookies with ExpressionEngine when the beginning of the URL path matches the cookie path. For example, if the cookie path is set to `/blog/`, a cookie for the domain `example.com` will only be sent by the browser if the URL begins with `https://example.com/blog/`. This can be useful if you have ExpressionEngine installed in a sub-directory and want to ensure that only that particular installation has access to the cookies it sets.

### Prefix

Specify a prefix for the cookie name set by ExpressionEngine. This protects against collisions from separate ExpressionEngine installations on the same cookie domain.

### Send cookies over HTTP only?

When enabled, cookies will not be accessible through JavaScript.

### Send cookies securely?

When enabled, cookies will only be transmitted over a secure HTTPS connection.

NOTE: **Note:** Your site must use SSL everywhere for this to work.

### Require user consent to set cookies?

When enabled, only **strictly necessary cookies** will be set until the user consents to your site's cookie policy. See the [Consent module](add-ons/consent.md) documentation for more details.

### Allow members to change username?

As the name suggests, this setting determines whether or not members are allowed to change their own usernames after registration. (Members will always be able to change their own screen names.)

### Minimum username length

You may specify the minimum length required for a member username during new member registration. Specify the minimum number of characters required.

### Allow multiple logins?

Set whether an account can have multiple active sessions at one time.

NOTE: **Note:** This feature is incompatible with the "Cookies Only" session type.

### Require user agent and IP for login?

If this preference is set to "Yes", then users will not be able to log in unless their browser (or other access device) correctly supplies their IP address and User Agent (browser) information. Having this set to "Yes" can help prevent hackers from logging in using direct socket connections or from trying to access the system with a masked IP address.

### Enable password lock out?

When this preference is set to "Yes", the system will lock a member account if more than four invalid login attempts are made within a specified time period (see next setting). This preference is designed to deter hackers from using collision attacks to guess poorly chosen passwords. The account remains locked for the duration of the time period. Once the period expires it becomes unlocked.

### Password lock out interval

This setting is used together with the previous preference. Here you can determine, in minutes, the time interval over which more than four invalid login attempts will trigger a lockout. You may use decimals to indicate fractions of a minute: e.g. 1.5 equals one and a half minutes.

### Password security policy

This setting determines the strictness of your site's password policy. These checks are made when new accounts are created or when passwords are updated.

The supported options are:

 - `None`. No security password checks are made for general users.
 - `Basic`. (Default) Password should contain at least one uppercase character, one lowercase character, and one numeric character. Passwords that follow this basic formula are much more difficult to guess.
 - `Good`. Password should get security rank of 40 or more
 - `Strong`. Password should get security rank of 60 or more.

The password security rank is calculated using a complex algorithm. The rank will get the points for the total number of characters, usage of uppercase letters, lowercase letters, numbers and symbols. Additional points are given for using numbers or symbols in the middle of the password. At the same time, the points will be removed from the rank if the password is using letters only, or numbers only, or it has repeat characters, consecutive uppercase letters, consecutive lowercase letters, consecutive numbers, sequential letters (3+),  sequential numbers (3+),  sequential symbols (3+).

### Minimum password length

You may specify the minimum length required for a member password during new member registration. Specify the minimum number of characters required. It is common practice to require passwords at least eight (8) characters long.

### Allow dictionary words in passwords?

Set whether words commonly found in the dictionary can be used as passwords. Disabling will make "dictionary attacks" by hackers much more difficult.

NOTE: **Note:** In order to be able to use this setting you must have [a dictionary file](#dictionary-file) installed.

### Dictionary file

This is the filename of the dictionary file used for the previous preference. Download the [dictionary file](https://ellislab.com/asset/file/dictionary.zip), unzip, and upload the text file (`dictionary.txt`) to `system/user/config/`.

Enter only the filename of the file (`dictionary.txt`) in this field.

### Deny duplicate data?

This option prevents data submitted by users (such as comments) from being processed if it is an exact duplicate of data that already exists. This setting is designed to deter automated spam attacks as well as multiple accidental submissions.

### Require user agent and IP for posting?

Similar to the previous setting, when turned on, this setting requires IP address and user agent information to be supplied when submitting comments.

### Apply XSS filtering?

Checks all file uploads for code injection attempts before finalizing the upload. Superadmins are exempt from image XSS filtering.

### Strip Image Metadata?

This setting will remove all metadata from an image during upload, including GPS data. This requires the Imagick PHP extension.

### Enable Rank Denial to submitted links?

When enabled, all outgoing links are sent to a redirect page. This prevents spammers from [gaining page rank](https://support.google.com/webmasters/answer/96569?hl=en).

### Force redirect confirmation on submitted links?

When Enable Rank Denial is turned on, this setting will appear to enable forcing the showing of a confirmation screen when a submitted linked is clicked. This can prevent issues where a link looks like it leads to one place, but actually leads to another, and allows the user to confirm the URL is correct before they continue.
