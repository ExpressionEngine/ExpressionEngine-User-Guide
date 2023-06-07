<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# HTTP Header

[TOC]

The HTTP Header plugin allows you to set HTTP headers in your templates.

### Example Usage

This is a single tag that will set a 410 "Gone" status on the request.

```ee
{exp:http_header status="410"}
```

## Parameters

Here are the available parameters:

| Parameter                          | Corresponding HTTP Header / Instructions|
|----------------------------------- |---------------------------------------- |
|access_control_allow_credentials=   |Access-Control-Allow-Credentials|
|access_control_allow_headers=       |Access-Control-Allow-Headers|
|access_control_allow_methods=       |Access-Control-Allow-Methods|
|access_control_allow_origin=        |Access-Control-Allow-Origin|
|access_control_expose_headers=      |Access-Control-Expose-Headers|
|access_control_max_age=             |Access-Control-Max-Age|
|alt_svc=                            |Alt-Svc|
|cache_control=                      |Cache-Control|
|charset=                            |charset to use with the content_type parameter.|
|content_disposition=                |Content-Disposition - You can manually write out the full header value (i.e. attachment; filename="example.txt"), or just use a value of "attachmenet" and use the filename= parameter.|
|content_encoding=                   |Content-Encoding|
|content_language=                   |Content-Language|
|content_length=                     |Content-Length|
|content_location=                   |Content-Location|
|content_md5=                        |Content-MD5|
|content_range=                      |Content-Range|
|content_type=                       |Content-Type - You can manually write out the full header value (i.e. text/html; charset=UTF-8) or you can simply specify the type and use the charset= parameter.|
|etag=                               |ETag|
|expires=                            |Expires - You can use relative date such as "+1 day";|
|filename=                           |When content_disposition is set to `attachment`, this sets the filename.|
|last_modified=                      |Last-Modified - You can use relative date such as "+1 day";|
|link=                               |Link|
|location=                           |Location|
|permissions_policy=                 |Permissions-Policy|
|pragma=                             |Pragma|
|refresh=                            |Refresh - You can manually write out the full header value (i.e. 5; url=https://example.com/), or just set the refresh value in seconds and use the url= parameter.|
|retry_after=                        |Retry-After - You can either specify a number of seconds or use relative dates (i.e. "+90 mins").|
|status=                             |Status|
|tk=                                 |Tk|
|url=                                |URL to use in the refresh parameter.|
|vary=                               |Vary|
|via=                                |Via|
|warning=                            |Warning|
|x_content_duration=                 |X-Content-Duration|
|x_content_type_options=             |X-Content-Type-Options|
|x_frame_options=                    |X-Frame-Options|
|x_ua_compatible=                    |X-UA-Compatible|


NOTE: **Note:** The plugin can only be used in templates that are not being cached.