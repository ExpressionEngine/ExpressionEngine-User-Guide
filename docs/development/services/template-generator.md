<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Template Generator Service

The Template Generators feature automates the creation of structured templates for rapid development. The `TemplateGenerator` Service is responsible for registering and creating template generators.

[TOC]

## Template Generator Anatomy

Template Generators were created to help users accelerate the process of building templates.  If you have an Add-on that provides template tags or fieldtypes, it may also be beneficial to include a template generator.

In its simplest form, a template generator is a PHP class file that extends
`ExpressionEngine\Service\TemplateGenerator\AbstractTemplateGenerator`. This file must be placed in a `TemplateGenerators` folder within your add-ons. The name you give your generator should also be used as the class name and the file name.

Template generators need to be registered in your `addon.setup.php` file, under a
`templateGenerators` array that should contain a list of your generator names e.g.

```php
<?php

return array(
    'author' => 'ExpressionEngine',
    'author_url' => 'https://expressionengine.com/',
    'name' => 'Channel',
    'description' => '',
    'version' => '2.1.0',
    'namespace' => 'ExpressionEngine\Addons\Channel',
    'settings_exist' => true,
    'templateGenerators' => array(
        'Entries',
    )
);
```

When properly defined, your template generator will be available to select as long as your add-on is currently installed.  We do not display generators for uninstalled add-ons to avoid confusion.

The generator can be accessed through a dropdown when using the Control Panel or by its key when using the CLI.  The generator key consists of the add-on name and generator name separated with a colon. For example, the Entries Generator provided by our Channel add-on has a key of `channel:entries`.

Each generator is required to have a `$name` protected property which is the name of the generator that will be displayed to the user.

The generator needs to provide a list of templates that it can generate. This is done by declaring a `$templates` protected property that is an associative array of template names and their description (saved as template notes). E.g.

```php
protected $templates = [
    'index' => 'Listing for all entries',
    'entry' => 'Entry detail page',
];
```

If you would like to specify a template type other than HTML you can do so with a more verbose syntax where an array is passed as the value with a `description` and `type` for each template:

```php
protected $templates = [
    'feed' => ['name' => 'RSS feed for all entries', 'type' => 'feed'],
    'sitemap' => ['name' => 'XML sitemap for all entries', 'type' => 'xml'],
];
```

Every template name in your list of templates must correspond to a [Template Stub](#template-stubs) file.

A generator can define a list of options that it supports. For instance, we require a channel name in the Channel Entries generator, so we declare the following:

```php
    protected $options = [
        'channel' => [
            'title' => 'channel',
            'desc' => 'channel_desc',
            'type' => 'checkbox',
            'required' => true,
            'choices' => 'getChannels',
        ],
    ];
```
The syntax of this array is similar to the one used by Shared Form View. The only difference is that for options of type 'checkbox', 'select' or 'radio' you can populate the `choices` array dynamically by providing a method name or callback that returns an array.

Each of the options can be validated using the [Validation service](https://docs.expressionengine.com/latest/development/services/validation.html). Specify the validation rules and define any necessary validation functions in the same class.

```php
    protected $_validation_rules = [
        'channel' => 'validateChannelExists'
    ];
```

A template generator must have a `getVariables()` method that returns an associative array of variables.  These will be passed to the View service when rendering the stubs. Here is a simple example of how this method might look:

```php
    public function getVariables(): array
    {
        return [
            'channel' = implode('|', $this->input->get('channel'))
        ];
    }
```

## Template Stubs

Templates are generated from a "stub" file, which is a PHP file parsed through the [View service](https://docs.expressionengine.com/latest/development/services/view.html).

Add-ons must store their stubs inside a `stubs` directory within the add-on's own folder. Within the `stubs`, the files are stored in a folder that should match the generator name. The stub file name needs to match the template name that will be created.

So for an `index` template to be created by the Channel Entries generator, the stub file must exist in `Addons/channel/stubs/entries/index.php`.

The Template Generator Service will search several directories in priority order until it finds a match for the specified stub.

- `system/user/stubs/{addon_name}/{generator_name}` - User override for specific generator stub
- `system/ee/ExpressionEngine/Addons/{addon_name}/stubs/{generator_name}` - (Core/First-Party) Addon's path for specific generator stub
- `system/user/addons/{addon_name}/stubs/{generator_name}` - (Third-Party) Addon's path for specific generator stub
- `system/user/stubs` - User override for generic stub
- `system/ee/templates/stubs` - System fallback for generic stub

This example illustrates the concrete paths that the Template Generator will search when looking for the Channel Module's Entries Generator:

- `system/user/stubs/channel/entries`
- `system/ee/ExpressionEngine/Addons/channel/stubs/entries`
- `system/user/stubs`
- `system/ee/templates/stubs`

In addition to searching these directories for a match, the Template Generator will also search for a stub file that matches the generated template's type and engine.  This will work in a manner of most specific to least specific.  For example, if a user requests to generate an XML template called `sitemap` then the Template Generator will search through the paths in order looking for a `sitemap.xml.php` stub and then a `sitemap.php` stub within each path until a match is found.  This allows you to customize the output for different template types.

When running in an environment that introduces additional template engines, this search is extended further to include variations for those engines.  We can continue the example above and request a Twig XML template called `sitemap`.  Again the Template Generator will look through each path for the following file names until a match is found `sitemap.xml.twig.php`, `sitemap.twig.php`, `sitemap.xml.php`, `sitemap.php`.

### Includes

A generator stub differs from traditional View files in the way it handles embedding other stubs. Usually with a view file, you would only need to prefix your included file  with the add-on name (e.g. `channel:`). But with generator stubs, you must use a combination of the add-on name and generator name (e.g. `channel:entries`) - something like `<?php $this->embed('channel:entries:_field_metadata', $vars)`. Embedding a stub for a fieldtype would still only require the add-on name as a prefix though since there is no generator involved (e.g. `$this->embed('grid:field', $vars)`).

The variables passed to a stub file include the options passed to the generator along with any variables created by the generator, so use the generator documentation and files for reference.


## Fieldtype Stubs

If the generator is utilizing fieldtypes, the template code is built from the stubs that are specific to the fieldtypes.

The stubs are required to be placed in `stubs` directory within fieldtype's own folder. Remember that they need to have `.php` extension and will be utilizing the View service.

The default name of the field stub is `field`. This can be overridden by setting `$stub` property in the fieldtype file, e.g.

```
class Example_ft extends EE_Fieldtype
{
    public $stub = 'example';
}
```

Fieldtype stubs for form inputs that will be used with `channel:form` generator need to follow the same naming rules but be placed in a `form` subdirectory (e.g. `system/user/addons/my_field/stubs/form/field.php`).

The approach for finding a Fieldtype stub is similar to how Template Generator stubs are discovered.  Directories are searched in priority order until a matching stub is found.  An example directory lookup order for the Grid fieldtype might look like this:

- `system/user/stubs/grid/field.php`
- `system/ee/ExpressionEngine/Addons/grid/stubs/field.php`
- `system/user/stubs/field.php`
- `system/ee/templates/stubs/field.php`

If the fieldtype does not provide any stubs, a generic `field.php` fallback is used. It is capable of determining whether the fieldtype is designed to work as a single tag or tag pair, but it cannot provide any specific variables to use within the tag pair.

## Fieldtype Generators

Some fieldtypes will return different variables depending on their settings. An example of this is the Grid fieldtype which supports different fieldtypes as columns.  In order to build a useful template the fieldtype stub will need a list of the field's columns. To get this list of columns and their properties we will need to create a fieldtype generator.

A fieldtype generator is a PHP class file that extends `ExpressionEngine\Service\TemplateGenerator\AbstractFieldTemplateGenerator`.
The file needs to be placed in `TemplateGenerators` folder within the add-on folder. The file name is arbitrary, but it needs to match the class name declared in the file.

Fieldtype generators need to be registered by assigning the generator class name to the  `templateGenerator` key in the `addon.setup.php` file within the `fieldtypes` array, e.g.

```php
<?php

return [
    ...
    'fieldtypes' => [
        'grid' => [
            'name' => 'Grid',
            'templateGenerator' => 'Grid',
            'compatibility' => 'grid'
        ]
    ],
    ...
];
```
### Fieldtype Generator Methods

**class `ExpressionEngine\Service\TemplateGenerator\AbstractFieldTemplateGenerator`**

The only method that the fieldtypes generator is required to have is `getVariables()`. Is is required to return the associative array of variables that will be passed to the View service when rendering the fieldtype stub.

The example fieldtype generator for the Grid fieldtype that provides a `$columns` variable to the stub file might look like this:

```php
<?php
namespace ExpressionEngine\Addons\Grid\TemplateGenerators;

use ExpressionEngine\Service\TemplateGenerator\AbstractFieldTemplateGenerator;
use ExpressionEngine\Service\TemplateGenerator\FieldTemplateGeneratorInterface;

class Grid extends AbstractFieldTemplateGenerator implements FieldTemplateGeneratorInterface
{
    public function getVariables(): array
    {
        $vars = [
            'columns' => []
        ];

        //get the list of columns for this field
        foreach ($this->field->GridColumns as $column) {
            $fieldtypeGenerator = ee('TemplateGenerator')->getFieldtype($column->col_type);

            $vars['columns']['grid_col_' . $column->col_id] = [
                'col_type' => $column->col_type,
                'col_name' => $column->col_name,
                'col_label' => $column->col_label,
                'field_type' => $column->col_type,
                'field_name' => $prefix . ':' . $column->col_name,
                'field_label' => $column->col_label,
                'stub' => $fieldtypeGenerator['stub'],
                'docs_url' => $fieldtypeGenerator['docs_url'],
                'is_tag_pair' => $fieldtypeGenerator['is_tag_pair'],
            ];
        }

        return $vars;
    }
}
```
