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

# Libraries

[TOC]

All of the available libraries are located in your `system/ee/legacy/libraries/` directory. In most cases, to use one of these classes involves initializing it within a [controller](development/legacy/controllers.md) using the following initialization method:

    ee()->load->library('class_name');

Where 'class_name' is the name of the class you want to invoke. For example, to load the [Form Validation Library](development/legacy/libraries/form-validation.md) you would do this:

    ee()->load->library('form_validation');

Once initialized you can use it as indicated in the user guide page corresponding to that class.

Additionally, multiple libraries can be loaded at the same time by passing an array of libraries to the load method.

Example:

    ee()->load->library(array('email', 'table'));

## Creating Your Own Libraries

Please read the section of the user guide that discusses how to [create your own libraries](development/legacy/libraries/creating-libraries.md).

## Available Libraries

- [Benchmarking Class](development/legacy/libraries/benchmark.md)
- [Cache Class](development/legacy/libraries/cache.md)
- [Config Class](development/legacy/libraries/config.md)
- [CP Class](development/legacy/libraries/cp.md)
- [Creating Libraries](development/legacy/libraries/creating-libraries.md)
- [Database Class](development/legacy/libraries/database.md)
- [Email Class](development/legacy/libraries/email.md)
- [File Uploading Class](development/legacy/libraries/file-uploading.md)
- [Form Validation Class](development/legacy/libraries/form-validation.md)
- [Functions Class](development/legacy/libraries/functions.md)
- [Image Manipulation Class](development/legacy/libraries/image-lib.md)
- [Input Class](development/legacy/libraries/input.md)
- [Javascript Class](development/legacy/libraries/javascript.md)
- [Language Class](development/legacy/libraries/language.md)
- [Layout Class](development/legacy/libraries/layout.md)
- [Loader Class](development/legacy/libraries/loader.md)
- [Localize Class](development/legacy/libraries/localization.md)
- [Logger Class](development/legacy/libraries/logger.md)
- [Mime Type Class](development/legacy/libraries/mime-type.md)
- [Output Class](development/legacy/libraries/output.md)
- [Pagination Class](development/legacy/libraries/pagination.md)
- [RSS Parser Class](development/legacy/libraries/rss-parser.md)
- [Security Class](development/legacy/libraries/security.md)
- [Session Class](development/legacy/libraries/session.md)
- [Table Class](development/legacy/libraries/table.md)
- [Template Class](development/legacy/libraries/template.md)
- [Typography Class](development/legacy/libraries/typography.md)
- [URI Class](development/legacy/libraries/uri.md)
- [XML Parser Class](development/legacy/libraries/xmlparser.md)
