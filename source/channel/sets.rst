############
Channel Sets
############

.. versionadded:: 3.3.0

Channel Sets are an easy way for you to save the structure of a Channel and import it elsewhere. The structure of a channel is made up of it's :doc:`/cp/channel/settings`, :doc:`/cp/channel/cat/index`, :doc:`/cp/channel/fields/index`, and :doc:`Status Group </cp/channel/status/index>`. When you :ref:`export your Channel Set <channel_set_export>`, you're provided with a zip file that contains all of the data needed to recreate that same Channel on any other ExpressionEngine installation by using the :doc:`/cp/channel/import` page.

When using Relationships, your Channel Set export will export related Channels and continue following the relationships. So if you have a Game Channel that has a Relationship field that has the Team Channel selected, the Team Channel will also be exported. This continues to the Team Channel as well, if that Channel has a Relationship field that has the Player Channel selected, the Player Channel will be exported.

*********************
Channel Set Structure
*********************

Channel Sets are zip files containing the following files::

  ├── channel_set.json
  └── custom_fields
      └── <field group name>
          ├── <custom field name>.<fieldtype>
          ├── <custom field name>.<fieldtype>
          └── ...

``"custom_fields"``
===================

Custom fields are all represented as JSON objects. Each custom field exports it's own properties, but ``label``, ``instructions``, and ``order`` are always inclued. If after exporting you realize you want to order your fields differently, simply set the ``order`` property in the order you want the field to appear in.

.. code:: json

  {
      "label": "Content",
      "instructions": "Content for this blog entry.",
      "order": 1,
      "search": "y",
      "ta_rows": 10,
      "settings": {
          "field_show_smileys": "n",
          "field_show_file_selector": "n",
          "field_show_formatting_btns": "n"
      }
  }

.. note:: Only first party fieldtypes are currently supported.

``channel_set.json``
====================

.. contents::
 :local:
 :depth: 2

Your ``channel_set.json`` file ties everything together. It will contain structural data about ``channels``, ``status_groups``, ``category_groups``, ``upload_destinations``, ``config``, and ``template_preferences``.

``channels``
------------

.. code:: json

  "channels": [
      {
          "channel_title": "Blog",
          "status_group": "Default",
          "field_group": "blog",
          "cat_groups": [
              "Blog"
          ]
      }
  ],

The array of channels will contain objects that represent each Channel. Each Channel has a ``channel_title``, ``status_group``, ``field_group``, and ``cat_groups``, though they can be empty. In addition, you can supply ``title_field_label`` to change the Title Label on the publish page.

``status_groups``
-----------------

.. code:: json

  "status_groups": [
      {
          "name": "Default",
          "statuses": [
              {
                  "name": "Featured",
                  "highlight": "66ccff"
              }
          ]
      }
  ],

The array of ``status_groups`` contains objects that represent the related status group. If you're using the "Default" status group, we don't export the "open" or "closed" status, only the additional statuses.

Each object will contain a ``name`` for the Status Group and it will contain an array of ``statuses`` that have objects defining the status that contain the ``status``'s name and *optionally* the ``highlight`` color.

``category_groups``
-------------------

.. code:: json

 "category_groups": [
   {
     "name": "Blog",
     "categories": [
       "News",
       "Personal",
       "Photos",
       "Videos",
       "Music"
     ]
   }
 ],

The array of ``category_groups`` contains a ``name`` for the category group, and an array of ``categories`` representing the group's categories.

.. note:: Nested categories are not currently supported.

``upload_destinations``
-----------------------

.. code:: json

 "upload_destinations": [
   {
     "name": "Blog Images",
   }
 ]

In the event that there's a file field that contains a specified upload destination, you'll find an ``upload_destinations`` object. It contains an object representing each upload destination that was related to a file field and that object contains a ``name``.
