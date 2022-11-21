---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Add Settings To Your Add-On

[TOC]

If you have ever used some of the add-ons that ship with ExpressionEngine such as Block and Allow or Pro Search, you will notice those add-ons have settings and configuration pages associated with them in the Control Panel. You add this functionality to your add-on using Control Panel files, also known as `Mcp` files. Whenever you add settings to your add-on using the CLI, an `Mcp` and `views` folder is automatically created for you, opening the door to creating your own Control Panel settings and pages.

## Generate Your Settings Pages

Add settings to your add-on using the `make:settings`.

```
php system/ee/eeclip.php make:settings
```

Follow the prompts to add settings to your add-on.

This will create an `mcp[addon_name].php` file in your add-on along with a `Mcp` and `views` folder.

Inside of the `Mcp` folder, you will see that the CLI has created your first control panel page with `Mcp/index.php`. This page is accessible via The Add-On Manager -> [Add-On Name] or via the `/admin.php?/cp/addons/settings/[add-on-name]` URL.


## Your First Control Panel Page
When you first add settings to your add-on an `Mcp` folder along with an `Mcp/Index.php` starter file is created. The starter file will look something like this:

```
<?php

namespace ExpressionengineDeveloper\AmazingAddOn\Mcp;

use ExpressionEngine\Service\Addon\Controllers\Mcp\AbstractRoute;

class Index extends AbstractRoute
{
    /**
     * @var string
     */
    protected $route_path = 'index';

    /**
     * @var string
     */
    protected $cp_page_title = 'home';

    /**
     * @param false $id
     * @return AbstractRoute
     */
    public function process($id = false)
    {
        $this->addBreadcrumb('index', 'Home');

        $variables = [
            'name' => 'Matt',
            'color' => 'Green'
        ];

        $this->setBody('McpIndex', $variables);

        return $this;
    }
}
```

Let's disect the starter file:

### `protected $route_path = 'index';`
`$route_path` defines the URL path that the Control Panel will use to direct users to this page.

 For example: `protected $route_path = 'index';` defines this page is accessed via `addons/[addon_name]/settings/index` or `addons/settings` since `index` is typically removed from the URLs.

 You can also define a path with more segements with something like `protected $route_path = 'amazing_add_on/configurations';` defines that this page is accessed via `addons/amazing_add_on/configurations` (assuming our add-on's name is Amazing Add-On).


### `protected $cp_page_title = 'home';` (OR MAYBE DOES NOTHING :shrug:)
`$cp_page_title` defines what is rendered in the `<title>` tag in the browser.

### `public function process($id = false)`
The `process()` function, similar to other functionality in your add-on, is the meat of your `Mcp` file. This is where you will render views, add sidebars, and add any nessecary logic.

## Adding Content To You Page

Now that you have a page in the Control Panel that users can access, let's look at how to output what you want users to see. There are three main areas to a Control Panel page where you will be outputting information to:

- Breadcrumb
- Sidebar
- Toolbar
- Main Body

![Add-on Breadcrumbs](_images/addon-mcp.png)

### Breadcrumbs
Located at the top of the Control Panel screen, breadcrumbs help users easily know where they are in the Control Panel and navigate your add-on's settings quickly.

![Add-on Breadcrumbs](_images/addon_breadcrumbs.png)

To add a breadcrumb for your current MCP page, simply use `$this->addBreadcrumb()`. 

In the starter MCP file created for you by the CLI you will already see `$this->addBreadcrumb('index', 'Home');`. This will add a breadcrumb similar to the one in the screen shot above (`Add-Ons -> [Add-On Name] -> Home`).

If you needed to add more levels to your breadcrumbs you can chain them together as such:

```
        $this->addBreadcrumb('amazing_add_on', 'Settings')
            ->addBreadcrumb('amazing_add_on/configuration', 'Configuration');
```

This would add a breadcrumb that would look like `Add-Ons -> [Add-On Name] -> Settings -> Configuration`

### Sidebar
TBD

### Toolbar

The toolbar is a series of icons located in the top right of your add-on settings page. Many add-ons use this area for quick links to settings or other areas of their add-on settings.

![Add-on Toolbar](_images/addon_toolbar.png)

We can add items to the Toolbar by passing an array into `ee()->view->header`.

```
$header['toolbar_items'] = array(
    'settings' => array(
        'href'  => ee('CP/URL','addons/settings/amazing_add_on'),
        'title' => 'settings'
    ),
    'user ' => array(
        'href'  => ee('CP/URL','addons/settings/amazing_add_on/user_settings'),
        'title' => 'Users'
    ),
    'export ' => array(
        'href'  => ee('CP/URL','addons/settings/amazing_add_on/export'),
        'title' => 'Export Data'
    )
);

ee()->view->header = $header;
```

The icon used in the toolbar for each link corresponds to each elements name. Available icons are `add`,`author`,`cart`,`category`,`caution`,`changes`,`channel`,`close`,`columns`,`dashboard`,`date`,`delete`,`export`,`files`,`filters`,`folder`,`gift`,`home`,`invisible`,`issue`,`locked`,`logout`,`members`,`missing`,`nested`,`offline`,`primary`,`remove`,`reorder`,`settings`,`status`,`success`,`sync`,`tabbed`,`tip`,`tools`,`user`,`view`,`visible`,`export`,`settings`.

### Main Body
Probably the most important part of your add-on's control panel page is the main body.

![Add-on Main body](_images/addon-main-body.png)

There are two ways to output to the main body of your add-on's control page.
- HTML String
- Using Views


#### HTML String
If you would just like to output a string of HTML for you control panel page, then you would just do something like this inside the 

```
 public function process($id = false)
    {
      $this->addBreadcrumb('index', 'Home');

      $html = "<h2>Welcome to my add-on</h2><p>This is an amazing add-on that does amazing things!"

      $this->setBody($html);

      return $this;
    }

```
This would produce a page looking like this:

![simple MCP page](_images/add-on-html-string.png)

If you would like to make this page more dynamic or include additional functionality, then you need to explore using [Views](#views).

#### Views

When your add-on was created via the CLI a `views` folder was also created in your add-on's folder. Inside of there a file was also created, `views/McpIndex.php`. By deafult this control panel page is already using the [View service](/development/services/view.md) by calling `$this->setView()`. 

```
$variables = [
    'name' => 'Matt',
    'color' => 'Green'
];

$this->setView('McpIndex', $variables);
```

As we can see here, the Mcp file here is passing two arguments to `$this->setView()`:
- `McpIndex` is the name of the corresponding view to use (references `views/McpIndex.php`)
- `$variables` is an array of variables that will be available to the view.

Now let's look at the view itself, found at `views/McpIndex.php`.

```
<?php

echo "<h2>Time to make magic</h2>";

if (isset($name)) {
    echo "<p>Name: " . $name . "</p>";
}

if (isset($color)) {
    echo "<p>Color: " . $color . "</p>";
}
```

Notice the variables `$name` and `$color` correspond to the `$variables` array passed to the view in the Mcp file.


This renders as such:

![add-on rendered with view](_images/add-on-simple-view.png)


Taking this a bit further, we can use the [`CP\Form` service](development/services/cp-form.md).

We'll start by using the `CP\Form` service in a method which will return our `$form` array.

```
private function getForm()
{
  $form = ee('CP/Form');
  $form->asTab();
  $form->asFileUpload();
  $field_group = $form->getGroup('header 1');
  $field_set = $field_group->getFieldSet('first_name');
  $field_set->getField('first_name', 'text')
            ->setDisabled(true)
            ->setValue('Eric');
  
  return $form->toArray();
}
```

Now, let's add that to our Mcp file and be sure to call the `getForm()` method

```
public function process($id = false)
{

  // set the breadcrumb
  $this->addBreadcrumb('index', 'Home');

  // call our getForm() method to get
  // out array
  $form = $this->getForm();

  $variables = [];

  $this->setBody('McpIndex', $variables);

  return $this;
}

private function getForm()
{
  $form = ee('CP/Form');
  $form->asTab();
  $form->asFileUpload();
  $field_group = $form->getGroup('header 1');
  $field_set = $field_group->getFieldSet('first_name');
  $field_set->getField('first_name', 'text')
            ->setDisabled(true)
            ->setValue('Eric');
  
  return $form->toArray();
}
```

Inside of `views/McpIndex.php` well use the View service to render our `$form` array as the main body of our control panel page.

```
if (isset($form)) {
    echo ee('View')->make('ee:_shared/form')->render($form);
}
```

You're add-on will now have a control panel page with a form as seen in this screenshot:

![add-on with form](_images/add-on-view.png)

TIP: This is only the begining of what you can do with forms in the Control Panel. Read more in the docs on the [`CP\Form` service](development/services/cp-form.md)() to understand what else is possible.

TIP: **{ee:u}** Learn more about the [CP\Form service on ExpressionEngine University](https://u.expressionengine.com/article/ultra-double-secret-manual-shared-form-part-four).


## Adding More Pages

Often your add-on will need more than one page in the Control Panel. The CLI makes this simple.

Start with:

```
php system/ee/eecli.php make:mcp
```

This adds a new file to your `Mcp` folder which will act similar to the Index page we discussed above.






## Javascript

ExpressionEngine includes both its own JavaScript library as well as the [The jQuery](https://jquery.com/) JavaScript library, enabling developers to easily include JavaScript enhancements. It is worth noting some 'best practices' when using JavaScript in your control panel:

- Loading jQuery plugins:

      ee()->cp->add_js_script(array('plugin' => 'dataTables'));

- Outputting JavaScript to the browser:

      ee()->javascript->output();

- After defining any JavaScript output, you must compile in order to display it:

      ee()->javascript->compile();

## Working with Forms

While creating forms for the backend is fairly routine, there are several differences/additions worth noting:

- The [Form Validation library](development/legacy/libraries/form-validation.md) is available, but the best means of checking submitted form data and returning in-line errors is to either use [Model Validation](development/services/model.md#validation) or the [Validation Service](development/services/validation.md).
- After form submission, you will generally want to output a success (or failure) message using the [CP/Alert Service](development/services/alert.md).

## Outputting Pages

There are two ways to output content to the screen. For very simple pages, you may want to simply return the desired output in a string. Any string that the method returns is placed inside the cp page's content container. With all but the simplest of output, the use of View files will be the preferred method for handling your markup and presentation.

## View Files

While you aren't required to use views to create your backend pages, they are the most modular and easy to read, modify, and edit approach to building control panel pages. A view is simply an html page, or snippet of a page, with some minimal php used to output variables. The variables are passed to the view in an array when you make it:

    return ee('View')->make('module_name:index')->render($vars);

This would return the index.php view page, located in a `views` folder. The view file is passed an array with all of the variables used by the view, and those variables are simple 'plugged into' the html. See the [View Service](development/services/view.md) for more details.

It is recommended that in view pages only, you use the [PHP's alternate syntax](development/guidelines/view-php-syntax.md) in your views, as it makes them easier to read and limits the amount of php. If this is not supported by your server, ExpressionEngine will automatically rewrite the tags.

## The Core Module File (mod.module_name.php)

The Core Module file is used for outputting content via Templates and doing any processing that is required by both the Control Panel and any module tags contained in a template. It includes a class with a name that matches the package (the first letter of the class name must be capitalized). There is one required class variable, \$return_data, which will contain the module's outputted content and is retrieved by the Template parser after the module is done processing.

The tag structure of a module follows the same rules as the [Plugins API](development/plugins.md):

    {exp:module_name:method}
