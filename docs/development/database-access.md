<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Accessing the Database
You may often want to query or update your database from within your add-on. This can be done using the [Model Service](development/services/model.md) or you can execute SQL statements by using the  [Database Driver](development/legacy/database/index.md) and its [Active Record](https://docs.expressionengine.com/latest/development/legacy/database/active-record.html) class. 

Each approach has its own strengths, and you can use either depending on the specific needs of your code.

Let's use a real example to show how you might access data using both methods:

We will use the Member model to show a list of members. For this we will add a template tag called `memberlist` to our add-on named "Amazing Add-On". The tag syntax will be this:

    {exp:amazing_add_on:memberlist}


Here is the class syntax using the Model Service:

```
namespace ExpressionengineDeveloper\AmazingAddOn\Module\Tags;

use ExpressionEngine\Service\Addon\Controllers\Tag\AbstractRoute;

class Memberlist extends AbstractRoute
{
    public $return_data = '';

    // Example tag: {exp:amazing_add_on:memberlist}
    public function process()
    {
        $members = ee('Model')->get('Member')->all();

        foreach($members as $member)
        {
            $this->return_data .= $member->screen_name."<br>";
        }

        return $this->return_data;
    }
}
```

Here is the class syntax using the Database Driver's Active Record class, which provides more portability, cleaner code, and default secuirity enhancementsa versus raw queries:

```
namespace ExpressionengineDeveloper\AmazingAddOn\Module\Tags;

use ExpressionEngine\Service\Addon\Controllers\Tag\AbstractRoute;

class Memberlist extends AbstractRoute
{
    public $return_data = '';

    // Example tag: {exp:amazing_add_on:memberlist}
    public function process()
    {

        ee()->db->select('screen_name');
        $query = ee()->db->get('members');

        if ($query->num_rows() > 0)
        {
            foreach ($query->result() as $row)
            {
                $this->return_data .= $row->screen_name."<br>";
            }
        }

        return $this->return_data;
    }
}
```

Both of these examples would produce a list similar to below:

```
admin
Moss
Jen
Roy
Douglas
Richmond
```

The Database driver shines when pulling back raw data from specific sources quickly or making targeted inserts and updates.  Models provide consistency and easy access to complex data. Use both as needed for fast, clean, secure interaction with the database.

This is only the beginning of how you can interact with the database through your add-on. Explore the [Model Service](development/services/model.md) and the legacy [Database Driver](development/legacy/database/index.md) to learn how to add more power to your add-on.