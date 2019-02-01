---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# IP Address Service

The IP Address service contains methods for performing actions on IP Addresses. Example call:

    $ip_address = ee('IpAddress')->anonymize($ip_address);

## IP Address Service Methods

### `anonymize($address)`

Anonymizes an IPv4 or IPv6 IP Address by using a subnet mask of `255.255.255.0` or `ffff:ffff:ffff:ffff:0000:0000:0000:0000` respectively. Useful for when you need to remove the specificity of an IP address but still retain general geographic information.

| Parameter | Type     | Description                                                            |
| --------- | -------- | ---------------------------------------------------------------------- |
| \$address | `String` | IP address that must be anonymized                                     |
| Returns   | `String` | The anonymized IP address. Returns an empty string when the IP address |
