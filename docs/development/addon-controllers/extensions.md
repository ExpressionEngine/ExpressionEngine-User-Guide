# Extensions

Just like with Module and Control Panel routing, you have to extend your ExpressionEngine Addon file to use the cooresponding Add-on Controller Base route. In this case, that'll be `ExpressionEngine\Service\Addon\Extension`.

You'll also have to add a new property to your Extension called `$route_namespace` which is the namespace for route objects.

### Update Extension File

```php
use ExpressionEngine\Service\Addon\Extension;

class Your_addon_ext extends Extension
{
    protected $route_namespace = 'Namespace\For\Your\Controllers';
}
```

#### About `$route_namespace`

Note that `$route_namespace` isn't directly one to one. The Add-on Controller does some magic to keep things compartmentalized.  Using the below example, the namespace used to locate your Route objects would be `Namespace\For\Your\Controllers\Extensions\Routes`.

### Create Route

Note that your `process` method's signature should match up with the ExpressionEngine hooks passed parameters. 

```php
namespace YourAddon\Addon\Controllers\Extension\Routes;

use ExpressionEngine\Service\Addon\Extension\AbstractRoute;

class TemplatePostParse extends AbstractRoute
{
    public function process(string $final_template, bool $is_partial, int $site_id, array $currentTemplateInfo): string
    {
        return $final_template;
    }
}
```
