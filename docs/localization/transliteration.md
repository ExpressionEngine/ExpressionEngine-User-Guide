<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Transliteration

[TOC]

Transliteration is the process of converting phonemes of one language to another language which isn't capable of reproducing it perfectly. For example, both **Beijing** and **Peking** are transliterations of **北京** by different rules.

ExpressionEngine uses a table of transliteration rules to convert characters from the Latin expanded alphabet into recognizable values used in URLs, located at `system\ee\ExpressionEngine\Config\foreign_chars.php`:

```php
return array(
    '223' => "ss", // ß
    '192' => "a", // À
    '193' => "a", // Á
    '194' => "a", // Â
    '195' => "a", // Ã
    '196' => "a", // Ä
    '224' => "a",
    '225' => "a",
    '226' => "a",
    '229' => "a",
    '227' => "ae", // ã
    '228' => "ae", // ä
    '230' => "ae", // æ
    '199' => "c", // Ç
    '231' => "c",
    '200' => "e",  // È
    '201' => "e",  // É
    '202' => "e",  // Ê
    '203' => "e",  // Ë
    '232' => "e",  // è
    '233' => "e",  // é
    '234' => "e",  // ê
    '235' => "e",  // ë
    '204' => "i",  // Ì
    '205' => "i",  // Í
    '206' => "i",  // Î
    '207' => "i",  // Ï
    '236' => "i",
    '237' => "i",
    '238' => "i",
    '239' => "i",
    '241' => "n",
    '242' => "o",
    '210' => "o", // Ò
    '211' => "o", // Ó
    '212' => "o", // Ô
    '213' => "o", // Õ
    '243' => "o",
    '244' => "o",
    '245' => "o",
    '246' => "oe", // ö
    '249' => "u",
    '217' => "u", // Ù
    '218' => "u", // Ú
    '219' => "u", // Û
    '220' => "u", // Ü
    '250' => "u",
    '251' => "u",
    '252' => "ue", // ü
    '255' => "y",
    '257' => "aa",
    '269' => "ch",
    '275' => "ee",
    '291' => "gj",
    '299' => "ii",
    '311' => "kj",
    '316' => "lj",
    '326' => "nj",
    '353' => "sh",
    '363' => "uu",
    '382' => "zh",
    '256' => "aa",
    '268' => "ch",
    '274' => "ee",
    '290' => "gj",
    '298' => "ii",
    '310' => "kj",
    '315' => "lj",
    '325' => "nj",
    '352' => "sh",
    '362' => "uu",
    '381' => "zh",
);
```

In case you need to customize the rules to match standards used of your country, create your own version at `system/user/config/foreign_chars.php`.
