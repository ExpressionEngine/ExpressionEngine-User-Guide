# Routing

> NOTE this document goes into detail on how Routing works as a concept. To say this is for Advanced developers would be an understatement. 

## Router Basics

Routing is handled through a simple `__call` translation to find the appropriate object. Standard and as traditional as can be. For example, consider an ExpressionEngine module with a template tag called `my_template_tag`. Using a Module object like the below:

```php
class Your_addon extends Module
{
    protected $route_namespace = 'Namespace\For\Your\Controllers';
}
```

would be Routed to `Namespace\For\Your\Controllers\Tag\Routes\MyTemplateTag`. And this is the case for 90% of use-cases. Everything gets magically translated to the proper object. Again. Standard. Traditional. Nothing really fancy here. Basically:

```php
if(!method_exists($method)) {
   return Namespace\For\Your\Controllers\Tag\Routes\MyTemplateTag->process();
}
```

But the Control Panel Router is different. 

### Control Panel Routing

Unlike the above, where everything's really one to one, an ExpressionEngine Control Panel is based around navigation. There can be multiple views. And multiple URL parameters. Which makes this much closer to an actual Controller paradigm than the other methods. 

> Quick word on setting up Routes for the Control Panel: you HAVE to declare a dedicated `route()` method available to process the request. ExpressionEngine has to delegate the request 

#### Noun/Verb Routing

That's made that up BTW, but it's fairly accurate way to think of the routing. This allows for quite a few situations though:

1. You have a "thing" ("/thing" routes to "Cp\Routes\Thing")
2. You have a thing you wanna do something with ("thing/create" routes to "Cp\Routes\Thing\Create")
3. You have a "thing", you declare what you wanna do with it, then you say which thing you want to use ("/thing/edit/12" routes to "Cp\Routes\Thing\Edit", passing "12" as a parameter)