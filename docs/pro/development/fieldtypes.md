<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2021, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Pro features for fieldtypes

Most of fieldtypes will work with ExpressionEngine Pro's [Front-end content management](pro/frontend.md) out-of-the-box.

However there are some parameters that can be set in `ft.` to improve intergation.

### Disabling front-end edit link 

    public $disable_frontedit = true;

Setting `$disable_frontedit` to `true` will make the field not frontend-editable and the edit links will never appear.

### Field editing window size

    public $size = 'large';

By default, all fields are being opened for front-end editing in the pop-up window of same size. However if you need larger or smaller window, that can be specified in fieldtype file.

The available options are:
 - large
 - small
 - footer
