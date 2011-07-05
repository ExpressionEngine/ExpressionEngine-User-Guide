Introducing ExpressionEngine 2 - Output and View Content
========================================================

The Goal: Learn where to modify templates to output your content..
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The templates are where the design of your site is created and where EE
tags go to output your previously-entered content.

Create a New Template Group
---------------------------

Click Create a New Template Group

.. figure:: ../images/ee2_cp_new_template_group.png
   :align: center
   :alt: EE2 CP New Template Group

Name the new template group example. Tick the box for Make the index
template in this group your site's home page?

**Note:** Template Groups are used to group templates. The name of the
Template Group will also appear as the first segment in your URL.

Edit the index template to output your Content
----------------------------------------------

Your Template Group will automatically have an index template. We will
edit that template and add a simple EE tag to output our previously
published entry.

Click on the name of the template, in this case, click index

.. figure:: ../images/ee2_cp_edit_template.png
   :align: center
   :alt: EE2 CP Edit Template

We're now going to add the Channel Entries EE tag to our template.

**Note**: You will need your Channel Shortname and your Channel Field
short name for outputting the content. ::

	         {exp:channel:entries channel="example" limit="10"}         <h1>{title}</h1>         {example_body}         {/exp:channel:entries}

.. figure:: ../images/ee2_cp_edit_template_with_tag.png
   :align: center
   :alt: EE2 CP Edit Template With Tag

View the Output
---------------

Now you can view the output your work by clicking View Rendered Template
in the upper right of the Edit Template area.

.. figure:: ../images/ee2_cp_view_rendered_template.png
   :align: center
   :alt: EE2 CP View Rendered Template

**Congratulations!** You have taken the first steps to learning
ExpressionEngine. You now know how to create categories, statuses, and
channel fields to hold your content; how to create a channel and assign
your groups; how to create a file upload preference; how to publish; and
finally, how to output your content to the screen.

***Welcome to ExpressionEngine 2!***
