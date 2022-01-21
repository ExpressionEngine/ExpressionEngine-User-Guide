<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Stopwords

[TOC]

Words whose meaning don't help on processing or search are called **stopwords** and they are filtered out from the search by ExpressionEngine.

In case you need to change the list, because you disagree with the used words or they don't matchthe requirements of your language, you can save a copy of the default list from [`system\ee\ExpressionEngine\Config\stopwords.php`](https://github.com/ExpressionEngine/ExpressionEngine/blob/6.dev/system/ee/ExpressionEngine/Config/stopwords.php) to `data\system\user\config\stopwords.php`.


```php
<?php
/**
 * This source file is part of the open source project
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2021, Packet Tide, LLC (https://www.packettide.com)
 * @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
 */

/**
 * ExpressionEngine Stop Words
 *
 * This file contains an array of words that the search functions in EE will
 * ignore in order to a) reduce load, and b) generate better results.
 */

// $ignore =
return array(
    'a',
    'about',
    'an',
    'and',
    'are',
    'as',
    'at',
    'be',
    'by',
    'but',
    'from',
    'how',
    'i',
    'in',
    'is',
    'it',
    'of',
    'on',
    'or',
    'that',
    'the',
    'this',
    'to',
    'was',
    'we',
    'what',
    'when',
    'where',
    'which',
    'with'	// no comma after last item
);

// EOF
```
