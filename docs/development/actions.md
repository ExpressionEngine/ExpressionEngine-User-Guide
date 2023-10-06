<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Actions

[TOC]

## Overview
Actions in ExpressionEngine are URL endpoints that are reached with the `ACT` query parameter. An example of this might be `http://myamazingsite.com/?ACT=43` where 43 is the ID given to an action registered in the `exp_actions` database table. These actions are tied to methods in an add-on which can be used to accept input from forms or run some sort of other functionality defined in the add-on. 

NOTE:Before adding an action to your add-on, you need to already have an add-on in place. See [Building An Add-On: Getting Started](development/addon-development-overview.md#getting-started) for how to generate the starter files for your add-on.

## Creating An Amazing Action
To generate an action we use the CLI to add the action to our existing add-on named "Amazing Add-on".

```
php system/ee/eecli.php make:action
```

Follow the prompts to add an action file to your add-on.


This will create an `Actions` folder inside our add-on's folder where will build out the code we want to run when a user hits our `ACT` URL. Inside our `Actions` folder the CLI will create a file with the same name as the method we defined when creating our action.

```
amazing_add_on
 ┣ Actions
 ┃ ┗ [MethodName].php
 ┗...
```

We also notice that a migration is created in our `database/migrations` folder. This migration is ran when your add-on is installed or uninstalled to tell ExpressionEngine what actions we needed added or removed with our add-on. 

```
//database/migrations/[timestamp]_[mirgrationname].php
<?php

use ExpressionEngine\Service\Migration\Migration;

class CreateactionamazingaztionforaddonamazingAddOn extends Migration
{
    /**
     * Execute the migration
     * @return void
     */
    public function up()
    {
        ee('Model')->make('Action', [
            'class' => 'Amazing_add_on',
            'method' => 'AmazingAztion',
            'csrf_exempt' => false,
        ])->save();
    }

    /**
     * Rollback the migration
     * @return void
     */
    public function down()
    {
        ee('Model')->get('Action')
            ->filter('class', 'Amazing_add_on')
            ->filter('method', 'AmazingAztion')
            ->delete();
    }
}
```

Actions are not available for use until they have been added to the `exp_actions` database table. Actions have the following schema in the database:

| action_id | class          | method         |csrf_exempt |
|-----------|----------------|----------------|------------|
|        41 | Amazing_add_on | ExampleAction  |          0 |

If you want your action to be accessible immediately, you can either run the migration that was created by the CLI or set a flag in the CLI when creating the add-on.

### Run Migration To Activate
After creating your action using the CLI run `$ php system/ee/eecli.php migrate`. When asked for the location, type in the name of your add-on. This will run all migrations that have not been ran for your add-on including entering the action into `exp_actions`.


### Setting Flag To Activate On Creation
On creation of an action, you can also specify to add it to the database after the CLI creates it. You can do this with the `--install` or `-i` flag by running your `make:action` command like so: `$ php system/ee/eecli.php make:action --install`.



## Anatomy of An Action

Once we've added an action to our add-on, an `Actions` folder is created for us. The CLI will generate a class and respective file for us based on the action name we passed to the CLI when creating our action. In this case we added an action named  "ExampleAction" to Amazing Add-on.

```
php system/ee/eecli.php make:action
What is the action name? ExampleAction
What add-on is the action being added to? amazing_add_on
Action created successfully!
```

```
amazing_add_on
 ┣ Actions
 ┃ ┗ ExampleAction.php
 ┗...
```


### class [ActionName]

Inside `/Actions/ExampleAction.php` we see the following code generated for us:

```
<?php

namespace ExpressionengineDeveloper\AmazingAddon\Actions;

use ExpressionEngine\Service\Addon\Controllers\Action\AbstractRoute;

class ExampleAction extends AbstractRoute
{
    public function process()
    {
    }
}
```

As we can see, the CLI has correctly created a new class using our action's name in PascalCase as the class name.

Inside of our class is the `process()` method. Anything we want to happen when a user reaches our action should be placed inside this `process()` function.

## The `exp_actions` Database Table
ExpressionEngine's `exp_actions` table is used to provide URL endpoints connected with actions in the core and in add-ons.

The `exp_actions` table is comprised of 4 columns:

| Column Name    | Data Type   | Description                                                  |
|----------------|-------------|--------------------------------------------------------------|
|action_id       | int(4)      | Action ID given to our action                                |
|class           | varchar(50) | A class name based on our add-on's name                      |
|method          | varchar(50) | Method in our add-on that is ran when this action is executed|
|csrf_exempt     | tinyint(1)  | Is this endpoint csrf exempt or not                          |


## Cross Site Request Forgery(CSRF) Exemption

WARN:**Security Alert:**Setting your action to CSRF Exempt, also makes this endpoint less secure though as you are allowing outside connections to your application.

For security reasons, actions are protected by [Cross Site Request Forgery(CSRF)](/development/guidelines/security.md#cross-site-request-forgery). If you want users to be able to reach this endpoint from outside your site (e.g. using cURL to from another domain or application to reach this endpoint and expect data to be returned ) then you will most likely need to make your action CSRF exempt. 

- To make your action immediately CSRF exempt, update the `csrf_exempt` value in the `exp_actions` table to be a value of `1`.   
- To ensure your action is CSRF exempt for future installations, update the corresponding migration by setting the `csrf_exempt` property to `true`:
```
...
public function up()
{
    ee('Model')->make('Action', [
        'class' => 'Amazing_add_on',
        'method' => 'AmazingAztion',
        'csrf_exempt' => true,
    ])->save();
}
...
```
- To set an action as CSRF exempt on creation, use the `--csrf_exempt` or `-c` flag in the CLI: 

```
$ php system/ee/eecli.php make:action --csrf_exempt
```



## Do Something - Build An Action

Let's do something with our action to demonstrate how this would work. 

### Form Data
In this example we want to insert a row into our database when a user submits a form. 

For this example we'll use a really basic form that would be found in our template which uses our action's endpoint as the action for the form. We know our action's ID from the `exp_actions` table and we're just going to collect the user's first name and last name. We'll then take that information and store it in our database. For the purpose of this example, we'll insert this into a custom table we've added to ExpressionEngine which just has columns `ID`, `first_name`, `last_name`.


Create our action:
```
$ php system/ee/eecli.php make:action --install
What is the action name? ExampleAction
What add-on is the action being added to? [amazing_add_on,...]: amazing_add_on
```

This creates our required files.   

Now we had some functionality to our action which will add the first and last name submitted from a form to our custom database table.

Our action's code (`Actions/ExampleAction.php`):

```
<?php

namespace ExpressionengineDeveloper\AmazingAddOn\Actions;

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

Our template code:

```
<form method="post" action="/?ACT=41">

    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">

</form>

```


**A note about action IDs.** For the example above, we looked up the action ID in the database. However, the action ID of your method may be different in your database than someone else as the IDs are auto-incremented by the database on insertion. Therefore, when dynamically creating the form with a custom template tag, it's always best practice to fetch your action ID for use in a template by using the [`fetch_action_id()`](/development/legacy/libraries/cp.md#fetch_action_idclass-method) method from the `CP Class` library.

We would do this in our add-on's template tag with something like this:

```
$aid = ee()->cp->fetch_action_id(`Amazing_add_on`, `ExampleAction`);
```


### Return Data

In this next example we are just creating an endpoint which will be reachable from servers outside of our domain. We are going to expect the application to use cURL or similar library to post an ID to our endpoint. Upon receiving the request our action will return the name of the entry matching the ID if it exists.

Create our action:
```
$ php system/ee/eecli.php make:action --install
What is the action name? ExampleAction
What add-on is the action being added to? [amazing_add_on,...]: amazing_add_on
```

Our action code:

```
<?php

namespace ExpressionengineDeveloper\AmazingAddOn\Actions;

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
curl --location --request POST 'https://anamzingwebsite.test/?ACT=41' --form 'id="1"'
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
This is because of the [`csrf_exempt` value](#cross-site-request-forgerycsrf-exemption) mentioned above. To fix this we can go into the `exp_actions` table of our database and update the `csrf_exempt` column to `1`. 

Now when I send that same request, I simply get the entry title I requested:

The response after disabling CSRF protection:

```
...
The Entry You Requested
...
```

