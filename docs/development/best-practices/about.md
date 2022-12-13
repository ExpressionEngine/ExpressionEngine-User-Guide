# New Best Practices

With the release of ExpressionEngine 7.2 we are modernizing how add-ons are constructed. New Add-on classes allow add-on developers to create their add-on methods using an abstracted object layer while keeping backwards compatibility intact. It covers Extensions, Modules (Action and Tags), and the Control Panel layers. It's very simple to implement (just inherit an object), while maintaining the legacy implementation in play. 

To implement, you simply set your add-on `mod.`, `ext.`, and/or `mcp.` files to inherit from a base object (depending on the implementation). Then create your actions, tags, extension hooks, and mcp routes in folders consistent with the supported naming convention. Tags go in the `Module/Tags` folder, Actions go in the `Module/Actions` folder, Extension hooks go in the `Extensions` folder, and Mcp routes go in the `Mcp` folder.

## Add-on File Examples

Here's a breakdown for how the add-on files would look for an Add-on named `Custom_addon`.

> Note that this works by using set or determined namespaces for a given Add-on. By default, this Controller implementation will use the add-on name to get the configured namespace within the add-on. For this example of `Custom_addon`, we are setting the namespace in the `addon.setup.php` file to be  `YourAddon`; all route namespaces are determined by that. 

### Module

The `mod` file would consist exclusively of the below. 

```php
<?php
use ExpressionEngine\Service\Addon\Module;

class Custom_addon extends Module
{
    protected $addon_name = 'custom_addon';
}
```

Once that's done, Tags and Actions can be created as their own files, and placed in the `Module/Tags` and `Module/Actions` folders. Those objects depend on what "type" (Tag or Action). Using the configured namespace for the Add-on, the Module routes would be looked for in `YourAddon\Module\Tags` and `YourAddon\Module\Action` respectively.

#### Template Tag 

For a template tag called as `{exp:custom_addon:test_template_tag}`, you would set up your Tag object like the below:

```php
<?php
namespace YourAddon\Module\Tags;

use ExpressionEngine\Service\Addon\Controllers\Tag\AbstractRoute;

class TestTemplateTag extends AbstractRoute
{
    public function process()
    {

    }
}
```

#### Actions
Just like with Template Tags, Actions get stored in the `YourAddon\Module\Actions` namespace. The below is for an Action called `my-test-action`. 

```php
<?php
namespace YourAddon\Module\Actions;

use ExpressionEngine\Service\Addon\Controllers\Action\AbstractRoute;

class MyTestAction extends AbstractRoute
{
    public function process()
    {

    }
}
```

Please note, you still need to "install" Actions in the upd file. This can be done in the Upd file by extending  `ExpressionEngine\Service\Addon\Installer` and then setting the `$actions` array:

```php
public $actions = [
    [
        'class' => 'Custom_addon',
        'method' => 'my-test-action'
    ]
];
```

### Extension

The `ext` is structured just like the others:

```php
<?php
use ExpressionEngine\Service\Addon\Extension;

class Custom_addon_ext extends Extension
{
    protected $addon_name = 'custom_addon';
}
```

Again, just like the others, Extensions are structured similarly.

```php
<?php
namespace YourAddon\Extensions;

use ExpressionEngine\Service\Addon\Controllers\Extension\AbstractRoute;

class TestExtension extends AbstractRoute
{
    public function process()
    {

    }
}
```

Note that the above `process` method allows you to accept variable parameters (just like regular Extensions). For example, to build an Extension around `template_post_parse`, you'd write your Extension like the below:

```php
<?php
namespace YourAddon\Extensions;

use ExpressionEngine\Service\Addon\Controllers\Extension\AbstractRoute;

class TestExtension extends AbstractRoute
{
    public function process(string $final_template, bool $is_partial, string $site_id, array $currentTemplateInfo): string
    {
        return $final_template;
    }
}
```

### Module Control Panel (MCP)

The `mcp` layer acts more as a Controller/Router than the others in that the CP is supposed to be rendered as Views. To start, just like all the others, you extend from the `Mcp` object. Once that's done, all requests will be routed to the object layer. 

```php
<?php
use ExpressionEngine\Service\Addon\Mcp;

class Custom_addon_mcp extends Mcp
{
    protected $addon_name = 'custom_addon';
}
```

Please note, you still need to "install" Extension hooks. One way is to do this in the Upd file by extending  `ExpressionEngine\Service\Addon\Installer` and then setting the `$methods` array:

```php
public $methods = [
    [
        'class' => 'Custom_addon_ext',
        'method' => 'test-extension',
        'hook' => 'sessions_start'
    ]
];
```


#### Route Examples

A basic 'index' route, normally done through a method attached to the `mcp` object, would look like the example below:

```php
<?php
namespace YourAddon\Mcp;

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
    public function process($id = false): AbstractRoute
    {
        return $this;
    }
}
```

The generation of the CP array format is done automatically by the Controller so all the devs really do is assign variables and ensure their `process` method returns an instance of their Route:

```php
<?php
namespace YourAddon\Mcp;

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
    public function process($id = false): AbstractRoute
    {
        $this->addBreadcrumb('test-link', 'My Link')
            ->addBreadcrumb('test-link2', 'My Second Link');

        $variables = [];
        $this->setBody('my-view', $variables);
        return $this;
    }
}
```
