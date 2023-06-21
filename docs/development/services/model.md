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

# Model Service

[TOC]

ExpressionEngine has a complex set of data types, such as Channels, Members, Templates, and Categories. These have properties and constraints, as well as relationships and complex storage requirements. The model service helps smooth out interacting with ExpressionEngine's data types by providing an API that mimics their natural language description as closely as is feasible. You do not query for `channel_data` joined on `channel_titles`; instead, you simply get a channel entry with its fields.

NOTE: Models can also be **generated quickly by the Command Line Interface (CLI)**. Refer to the [make:model command](cli/built-in-commands/make-addon.md#makemodel) for more information.


## Naming Conventions

Models follow the [prefix naming conventions](development/architecture.md#prefixes). Native models can be referred to either prefix-free or with the `ee:` prefix. All add-on models must be used with the add-on prefix.

## Creating

To create a new instance of a model, simply pass its name to the `make()` method on the model service:

    $template = ee('Model')->make('Template');

You can also pass an array of default model properties:

    $template = ee('Model')->make('Template', array(
      'template_name' => 'test'
    ));

## Setting and Getting Values

Models behave like regular objects. Their properties can be set and read directly:

    $template->template_name = 'index';
    var_dump($template->template_name); // 'index'

To bulk set data from an array, use the `set()` method:

    $template->set(array(
      'template_name' => 'header',
      'template_notes' => 'This is the site header!'
    ));

## Saving

To save a new or updated model, call `save()`:

    $template->template_notes = 'A great note!';
    $template->save();

## Deleting

To delete an existing model, call `delete()`:

    $template->delete();
    echo $template->template_name;

## Fetching

_Full Documentation:_ [Fetching Models](development/services/model/fetching.md)

To fetch one or more existing models, use the `get()` method with a model name to specify which model to get, and then call `all()` to fetch a collection of all matching models:

    $templates = ee('Model')->get('Template')->all();

You can also use `first()` to only grab the first one:

    $template = ee('Model')->get('Template')->first();

## Events

_Full Documentation:_ [Event Service](development/services/event.md)

All models have basic support for the built-in event system. To listen to an event on a model, use the `on` method:

    $my_model = ee('Model')->make('myaddon:MyModel');

    $my_model->on('boom', function() use ($my_model)
    {
      echo 'boom event happened on '.$my_model->getName();
    });

To initiate an event, use the `emit()` method:

    $my_model->emit('boom');

Any additional arguments passed to emit, will be passed on to the event handler.

## Validation

After making changes to a model, you should call `validate()` to ensure it will save successfully. The result returned from validation is a result object from the [Validation Service](development/services/validation.md):

    $template->template_name = 'Mike';
    $result = $template->validate();

    if ($result->isValid())
    {
      $template->save();
    }

## Working with Relationships

_Full Documentation:_ [Working with Relationships](development/services/model/relationships.md)

Models can be related to other models. All relationships can be accessed directly with their uppercase name:

    $channel->ChannelEntries;

Depending on the type of relationship, this may return either a collection or a single other model. By convention, if the name is singular it returns a model otherwise it returns a collection.
