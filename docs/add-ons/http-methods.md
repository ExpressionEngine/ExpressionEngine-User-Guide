<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# HTTP Methods

[TOC]

The HTTP Methods plugin allows you to get HTTP methods in your templates.

## get

Used to get a `$_GET` parameter in your template.

### Parameters

`name`: Name of the `GET` variable you would like. Returns false if not found.

### Example

{exp:http_methods:get name="my-var"}

## post

Used to get a `$_POST` parameter in your template.

### Parameters

`name`: Name of the `POST` variable you would like. Returns false if not found.

### Example

{exp:http_methods:post name="my-var"}

## get_post

Used to get a `$_POST` or `$_GET` parameter in your template.

### Parameters

`name`: Name of the `POST` or `$_GET` variable you would like. Returns false if not found.

### Example

{exp:http_methods:get_post name="my-var"}

## cookie

Used to get a cookie value in your template.

### Parameters

`name`: Name of the cookie you would like. Returns false if not found.

### Example

{exp:http_methods:cookie name="my-var"}

## ip_address

Used to get the IP address of the request in your template.

### Example

{exp:http_methods:ip_address}

## user_agent

Used to get the User Agent of the request in your template.

### Example

{exp:http_methods:user_agent}

## request_header

Used to get a request header value in your template.

### Parameters

`name`: Name of the header you would like. Returns false if not found.

### Example

{exp:http_methods:request_header name="accept"}