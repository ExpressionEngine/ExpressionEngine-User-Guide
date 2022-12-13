# Control Panel

Just like with Extension and Module routing, you have to extend your ExpressionEngine Addon file to use the corresponding Add-on Controller Base route. In this case, that'll be `ExpressionEngine\Service\Addon\Mcp`.

You'll also have to add a new property to your Control Panel object called `$route_namespace` which is the namespace for route objects.

> Note the below example uses the `setRouteNamespace` method to set the `$route_namespace` property. 

### Update Control Panel File

```php
use ExpressionEngine\Service\Addon\Mcp;

class My_addon_mcp extends Cp
{
    protected $module_name = 'my_addon';

    public function __construct()
    {
        $this->setRouteNamespace('MyAddon\Addon\Controllers');
    }

    public function index()
    {
        return $this->route('index', func_get_args());
    }
}

```

#### About `$route_namespace`

Note that `$route_namespace` isn't directly one to one. The Add-on Controller does some magic to keep things compartmentalized.  Using the below example, the namespace used to locate your Route objects would be `Namespace\For\Your\Controllers\Cp\Routes`.

#### About `$module_name`

This value should contain the internal value ExpressionEngine uses to classify your parent Addon.

> An extra special note about the use of `func_get_args()`: you should 100% keep doing that if you want Routing to be consistent. Basically, every declaration of a `route()` call should look like: `return $this->route('ROUTE_NAME', func_get_args());`

### Create Control Panel Routes

Unlike any other Controller Route, Control Panel routes require an addition to your ExpressionEngine Control Panel object. The idea is you tell ExpressionEngine to your object then the Router takes over. For example, in the above example, we define an `index` method and then route it internally. 

The route object itself would look like the below:

```php
namespace YourAddon`\Addon\Controllers\Cp\Routes;

use ExpressionEngine\Service\Addon\Mcp\AbstractRoute;

class Index extends AbstractRoute
{
    protected $route_path = 'index';

    public function process($id = false): AbstractRoute
    {
        return $this;
    }
}
```

You may have noticed that unlike traditional ExpressionEngine Control Panel methods, you don't return an array; you return an instance of your route instead. To generate output, the Router will take everything you setup within your object and pass that to ExpressionEngine. 

#### About `$route_path`

The value MUST contain the `noun|/verb` your Route is accessed through. See the for more details. 

#### Full Example

```php
namespace YourAddon\Controllers\Mcp\Routes\ControllersExamples;

use ExpressionEngine\Service\Addon\Mcp\AbstractRoute;

class Cp extends AbstractRoute
{
    protected $route_path = 'controllers-examples/cp';

    public function process($id = false): AbstractRoute
    {
        $this->setBody('test-route/my-action', []);
        $this->setHeading('cp');

        $this->addBreadcrumb($this->url('controllers-examples'), 'eo.cp.nav.controller.examples');
        return $this;
    }
}
```

 
## Helper Functionality

### Sidebar Generator

To automatically generate your sidebar, you'll need to add a property to your Route object called `$sidebar_data` that contains an array that outlines your sidebar. 

```php
protected $sidebar_data = [
    'eo.cp.nav.controller.examples' => [
        'path' => 'controllers-examples',
        'list' => [
            'cp' => 'controllers-examples/cp',
            'module' => 'controllers-examples/mod',
        ]
    ],
    'eo.cp.nav.forms' => [
        'path' => '',
        'list' => [
            'eo.cp.nav.example' => 'forms/example'
        ]
    ],
    'eo.cp.nav.members' => [
        'path' => '',
        'list' => [
            'eo.cp.nav.example' => 'members'
        ]
    ],
    'eo.cp.nav.entries' => [
        'path' => '',
        'list' => [
            'eo.cp.nav.example' => 'entries'
        ]
    ]
];
```

Note the `$active_sidebar` property can be used to specify a specific sidebar node as having an `active` state. Otherwise, that'll be determined through the `$route_path` property. 

### URL Helper

To remove a considerable amount of keystrokes, you can use the `url($path, $with_base, $query)` method. What this does is allow you to create Control Panel URLs using the short syntax of a Route as well as any URL. 

```php
protected function url(string $path, bool $with_base = true, array $query = []): string
```
#### `$path` 

Either the Router shortname for the route you want, or a full URL to the destination. 

#### `$with_base`

Boolean to compile the URL along with the `$base_url` property. If your link is to anything BUT a Route, you'll want this to be false. 

#### `$query`

An array of key=>values you want to use for the query string on the URL. 

### Breadcrumbs

You apply breadcrumbs using either the `addBreadcrumb($url, $text)` or the `setBreadcrumbs(array $breadcrumbs = [])` method(s). Note that `setBreadcrumbs` will completely reset any previously compiled `breadcrumb` items.

```php
protected function setBreadcrumbs(array $breadcrumbs = []): AbstractRoute
protected function addBreadcrumb(string $url, string $text): AbstractRoute
```

### Body Content

To output content within the ExpressionEngine Control Panel, you have to dictate both a view script to use and the variables to pass to it. 

```php
public function setBody(string $view, array $variables = []): AbstractRoute
```