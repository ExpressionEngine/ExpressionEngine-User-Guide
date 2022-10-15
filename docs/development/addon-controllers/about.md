# Add-on Controllers

Add-on Controllers allows Add-on developers to create their Add-on methods using an abstracted object layer while keeping backwards compatibility intact. It covers Extensions, Modules (Action and Tags), and the Control Panel layers. It's very simple to implement (just inherit an object), while maintaining the legacy implementation in play. 

To implement, you simply set your Add-on `mod.`, `ext.`, and/or `mcp.` files to inherit from a base object (depending on the implementation).

## Add-on File Examples

Here's a breakdown for how the Add-on files would look for an Add-on named `Custom_addon`.

> Note that this works by using set or determined namespaces for a given Add-on. By default, this Controller implementation will use the Add-on name to get the configured namespace within the Add-on. For this example of `Custom_addon`, it's `YourAddon`; all route namespaces are determined by that. 

### Module

The `mod` file would consist exclusively of the below. 

```php
use ExpressionEngine\Service\Addon\Module;

class Custom_addon extends Module
{
    protected $addon_name = 'custom_addon';
}
```

Once that's done, your Add-on Module is now set to look for objects for all calls to it. Those objects depend on what "type" (Tag or Action). Using the configured namespace for the Add-on, the Module routes would be looked for in `Mithra62\PlayThing\Module\Tags|Action`. 

#### Template Tag 

For a template tag called as `{exp:custom_addon:test_template_tag}`, you'd setup your Tag object like the below:

```php
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
Just like with Template Tags, Actions get stored in the `Actions` namespace. The below is for an Action called `my-test-action`. 

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

### Extension

The `ext` is structured just like the others:

```php
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
use ExpressionEngine\Service\Addon\Mcp;

class Custom_addon_mcp extends Mcp
{
    protected $addon_name = 'custom_addon';
}
```

#### Route Examples

A basic 'index' route (normally done through a method attached to the `mcp` object) would look like the below:

```php
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
        $this->addBreadcrumb('test-link', 'test-link')
             ->addBreadcrumb('test-link2', 'test-link2');

        $variables = [];
        $this->setBody('my-view', $variables);
        return $this;
    }
}
```