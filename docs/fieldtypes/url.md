<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# URL Fieldtype

URL is a fieldtype for storing URLs. This fieldtype is validated for the content author, so that only fully-formed and valid URLs are allowed. The site builder can determine which URL schemes are allowed. URLs are entity-encoded so that they may be used directly in links and other HTML attributes, e.g.:

    <a href="{your_url_field}">Your Link</a>

![url field](_images/field_url.png)

## Field Options

### Allowed URL Schemes

Which URL Schemes the content author is allowed to use in this URL field. Available options are:

- `http://`
- `https://`
- `//` ([protocol-relative URLs](https://en.wikipedia.org/wiki/Wikipedia:Protocol-relative_URL))
- `mailto:`
- `ftp://`
- `sftp://`
- `ssh://`
- `tel://`

### URL Scheme Placeholder

The placeholder text for the field that will give a cue to content authors as to the type of content that belongs in this field. Available options are identical to the "Allowed URL Schemes" above. Rendered example:

<input placeholder="https://" style="width:50%">
