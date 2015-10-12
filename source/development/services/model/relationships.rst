Working with Relationships
==========================

.. contents::
   :local:
   :depth: 1

.. highlight:: php


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

To set a relationship, simply assign the model or collection that you want to
relate, and then ``save()`` to commit the change::

  $member->MemberGroup = ee('Model')->get('MemberGroup', 1)->first();
  $member->save();

Adding Related Models
---------------------

To add additional models to a ``HasMany`` or ``HasAndBelongsToMany`` relationship,
simply use PHP's array syntax, or call ``add()`` with a model to add::

  $member_group[] = $member;
  $member_group->add($member);

Removing Related Models
-----------------------

To unset a relationship, simply assign ``NULL``::

  $member->MemberGroup = NULL;

.. Caution:: Unsetting a relationship may result in the deletion of the child,
  where it would otherwise be orphaned. This can be prevented by establishing
  a new relationship before calling ``save()``.

To remove a related model from a collection, call ``remove()`` with the related
model or its primary key value::

  $member_group->remove($member);
  $member_group->remove(5); // remove member_id 5
