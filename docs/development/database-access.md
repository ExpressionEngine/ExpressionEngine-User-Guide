<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->


## Database Access

ExpressionEngine makes it easy to access your database using the [Model Service](development/services/model.md). You can also execute SQL statements by using the legacy [Database Driver](development/legacy/database/index.md):

    $member = ee('Model')->get('Member')->first();

Let's use a real example to show how you might use this.

We will use the Member model to show a list of members. For this we will create a plugin called `pi.memberlist.php`. The tag syntax will be this:

    {exp:memberlist}

Here is the class syntax:

    class Memberlist
    {
        public $return_data = '';

        public function __construct()
        {
            $members = ee('Model')->get('Member')->all();

            foreach($members as $member)
            {
                $this->return_data .= $member->screen_name."<br>";
            }
        }
    }