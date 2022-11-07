# Modules

Just like with Extension and Control Panel routing, you have to extend your Add-on file to use the corresponding Add-on Controller Base route. In this case, that'll be `ExpressionEngine\Service\Addon\Module`.

You'll also have to add a new property to your Module called `$route_namespace` which is the namespace for route objects.

> Note that since a Module file is responsible for both Actions and Template Tags within ExpressionEngine, the handling of Module routes is split into both `Tag` and `Action` route objects. 

### Update Module File

```php
use ExpressionEngine\Service\Addon\Module;

class Your_addon extends Module
{
    protected $route_namespace = 'Namespace\For\Your\Controllers';
}
```

#### About `$route_namespace`

Note that `$route_namespace` isn't directly one to one. The Add-on Controller does some magic to keep things compartmentalized.  Using the below example, the namespace used to locate your Route objects would be `Namespace\For\Your\Controllers\Action|Tag\Routes`.

### Create Tag Routes

```php
namespace YourAddon\Controllers\Module\Tag\Routes;

use ExpressionEngine\Service\Addon\Controllers\Tag\AbstractRoute;

class TemplatePostParse extends AbstractRoute
{
    public function process(): string
    {
        //magic
    }
}
```

### Create Action Routes

```php
namespace YourAddon\Controllers\Module\Action\Routes;

use ExpressionEngine\Service\Addon\Controllers\Action\AbstractRoute;

class AnotherAction extends AbstractRoute
{
    public function process(): string
    {
        //magic
    }
}
```