<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Actions

## Overview
Actions in ExpressionEngine are URL endpoints which are typicall reached with the `ACT` query parameter. An example of this might be `http://myamazingsite.com/?ACT=43` where 43 is the ID given to an action registered in the `exp_actions` database table. These actions are tied to methods in an add-on which can be used to accept input from forms or run some sort of other functionality defined in the add-on. 

## How To Build An Amazing Add-on?
To generate an action we use the CLI to add the action to our exisiting add-on named "Amazing Add-on".

```
php system/ee/eecli.php make:action
```

Follow the prompts to add an action file to your add-on.


This will create an `Actions` folder inside our `Module` folder where will build out the code we want to run when a user hits our `ACT` URL. Inside our `Actions` folder the CLI will create a file with the same name as the method we defined when creating our action.

```
amazing_addon
 ┣ Module
 ┃ ┣ Actions
 ┃ ┃ ┗ [MethodName].php
 ┗...
```

We also notice that an `$actions` array is added to our `upd` file. This array will be used when your add-on is installed or uninstalled to tell ExpressionEngine what actions we needed added or removed with our add-on. 

```
//upd.amazing_addon.php
...
    public $actions = [
        [
            'class' => 'Amazing_add_on',
            'method' => '[MethodName]'
        ]
    ];
...
```

In the database, our action has also been added to the `exp_actions` table.

| action_id | class          | method         |csrf_exempt |
|-----------|----------------|----------------|------------|
|        41 | Amazing_add_on | ExampleAction  |          0 |


## AddonName\Module\Actions

Once we've added an action to our add-on, an `Actions` folder is created inside our add-on's `Module` folder. The CLI will generate a class and respective file for us based on the method name we passed to the CLI when creating our action. In this case we added an action with a method named  "ExampleAction" to Amazing Add-on.

```
php system/ee/eecli.php make:action
What is the action name? ExampleAction
What add-on is the action being added to? demo_addon
Action created successfully!
```

```
amazing_addon
 ┣ Module
 ┃ ┣ Actions
 ┃ ┃ ┗ ExampleAction.php
 ┗...
```


### class [MethodName]

Inside `Module/Actions/ExampleAction.php` we see the following code generated for us:

```
<?php

namespace ExpressionengineDeveloper\DemoAddon\Module\Actions;

use ExpressionEngine\Service\Addon\Controllers\Action\AbstractRoute;

class ExampleAction extends AbstractRoute
{
    public function process()
    {
    }
}
```

As we can see, the CLI has correctly created a new class using our method's name in PascalCase as the name.

Inside of our class is the `process()` method. Anything we want to happen when a user reaches our action should be placed inside this `process()` function.

### `exp_actions`
ExpressionEngine's `exp_actions` table is used to provide URL endpoints connected with actions in the core and in add-ons.

The `exp_actions` table is comprised of 4 columns:

| Column Name    | Data Type   | Description                                                  |
|----------------|-------------|--------------------------------------------------------------|
|action_id       | int(4)      | Action ID given to our action                                |
|class           | varchar(50) | A class name based on our add-on's name                      |
|method          | varchar(50) | Method in our add-on that is ran when this action is executed|
|csrf_exempt     | tinyint(1)  | Is this endpoint csrf exempt or not                          |

NOTE: If you want users to be able to reach this endpoint from outside your site (e.g. using cURL to from another domain or application to reach this endpoint and expect data to be returned ) then you will most likely need to set `csrf_exempt` to a value of `1`. Doing so, also makes this endpoint less secure though as you are allowing outside connections to your application.


For our Amazing Add-on, we added an action with a method named ExampleAction. This was inserted into the `exp_actions` table as seen here:

| action_id | class          | method         |csrf_exempt |
|-----------|----------------|----------------|------------|
|        41 | Amazing_add_on | ExampleAction  |          0 |


## Do Something

Let's do something with our action to demonstrate how this would work. 

### Form Data
In this example we want to insert a row into our database when a user submits a form. 

For this example we'll use a really basic form that would be found in our template which uses our action's endpoint as the action for the form. We know our action's ID from the `exp_actions` table and we're just going to collect the user's first name and last name. We'll then take that information and store it in our database. For the purpose of this example, we'll insert this into a custom table we've added to ExpressionEngien which just has columns `ID`, `first_name`, `last_name`.

In our template:

```
<form method="post" action="/?ACT=41">

    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">

</form>

```

Our action code:

```
<?php

namespace ExpressionengineDeveloper\DemoAddon\Module\Actions;

use ExpressionEngine\Service\Addon\Controllers\Action\AbstractRoute;

class ExampleAction extends AbstractRoute
{
    public function process()
    {
        // we'll use the post() method from the core's
        // Input Class to grab our POST data and put
        // that in our $data array

        $data = array(
            'first_name' => ee()->input->post('fname'),
            'last_name' => ee()->input->post('lname'),
        );

        ee()->db->insert('our_amazing_table', $data);

        return true;
        
    }
}
```

**A note about action IDs.** For the example above, we looked up the action ID in the database. However, the action ID of your method may be differnt in your database than someone's elses as the IDs are auto-incremented by the database on insertiton. Therefore, it's always best practice to fetch your action ID for use in a template by using the [`fetch_action_id()`](/development/legacy/libraries/cp.md#fetch_action_idclass-method) method from the `CP Class` library.

We would do this in our add-on with something like this:

```
$aid = ee()->cp->fetch_action_id(`Amazing_add_on`, `ExampleAction`);
```


### Return Data

In this next example we are just creating an endpoint which will be reachable from servers outside of our domain. We are going to expect the application to use cURL or similar libray to post an ID to our endpoint. Upon receiving the request our action will return the name of the entry matching the ID if it exists.

Our action code:

```
<?php

namespace ExpressionengineDeveloper\DemoAddon\Module\Actions;

use ExpressionEngine\Service\Addon\Controllers\Action\AbstractRoute;

class ExampleAction extends AbstractRoute
{
    public function process()
    {
        // we'll use the post() method from the core's
        // Input Class to grab our POST data and put
        // that in our $data array
        $entry_id = ee()->input->post('id');

        // here we're using the Channel Entry Model
        // to request the entry's title
        $entry = ee('Model')
                        ->get('ChannelEntry')
                        ->filter('entry_id', $entry_id)
                        ->first();


        if ($entry){
            $response = $entry->title;
        }else{
            $response = "No Matching Entry"
        }

        echo $response;
    }
}
```

However, when I attempt to reach this endpoint from another application I get an error returned.

The request:
```
curl --location --request POST 'https://anamzingwebsite.test/?ACT=41' \
--form 'id="1
"'
```

The response:

```
...
<div class="panel redirect">
    <div class="panel-heading">
        <h3>The following errors were encountered</h3>
    </div>
    <div class="panel-body">
        <ul><li>This form has expired. Please refresh and try again.</li></ul>
    </div>
</div>
...
```
This is because of the [`csrf_exempt` value](#exp_actions) mentioned above. To fix this we can go into the `exp_actions` table of our database and update the `csrf_exempt` column to `1`. However, to adjust for future installations we need to adjust the `$actions` array of our `upd` file. 

Here we are going to set the `csrf_exempt` value on installation of our add-on.
```
    public $actions = [
        [
            'class' => 'Demo_addon',
            'method' => 'Example_Action',
            'csrf_exempt` => true
        ]
    ];
```

Now when I send that same request, I simply get the entry title I requested.

WARN: **Warning:** Use caution when making an action csrf exempt. First ensure you really need to do so, then also provide some sort of key or validation to ensure the incoming request is not malicious.


