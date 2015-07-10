Working with Relationships
==========================

.. contents::
   :local:
   :depth: 1


Basic Usage
-----------


Accessing Related Models
------------------------

Related models are available on the model directly using the relationship name.
They are easily differentiated by their ``CamelCase`` naming conventions::

  $group = $member->MemberGroup;

Eager vs Lazy Loading
---------------------

By default, all relationship data is loaded on a need-to-know basis. When a
related model is accessed, its data is automatically retrieved::

  $template = ee('Model')->get('Template')->first();

  $template_group = $template->TemplateGroup; // fetches the correct template group behind the scenes

This lazy loading behavior is good for single models, but it can cause
performance bottlenecks when it is put inside a loop. For example::

  $templates = ee('Model')->get('Template')->all();

  foreach ($templates as $template)
  {
    $group = $template->TemplateGroup; // BAD, triggers a fetch for each iteration
  }

To get around this problem, you can specify a relationship to be loaded with
the original query. This is done using the ``with()`` method. The above snippet
then becomes::

  $templates = ee('Model')->get('Template')->with('TemplateGroup')->all();

  foreach ($templates as $template)
  {
    $group = $template->TemplateGroup; // OK, already loaded
  }

These eager queries can also be nested to retrieve complex model hierarchies::

  ->get('Template')->with(array('LastAuthor' => 'MemberGroup'));


Setting Relationships
---------------------



Adding Related Models
---------------------

Removing Related Models
-----------------------
