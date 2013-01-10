--------------------
SafeCracker Tutorial
--------------------

.. contents::
   :local:

Purpose
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
The purpose of this tutorial is to provide a working example of how to use
SafeCracker. We will create an entry form that allows users to add entries
without giving them access to the Control Panel, often referred to as the "back-
end". When completed we will have a fully working form that you can download for your
own use.

Lets set the scene. You have a group of freelance consultants that work for
you. You want to track where they are and what they are doing. Instead of
creating an account for each one of them in ExpressionEngine, you would rather
have all of consultants enter their information on the front end of your site.
With SafeCracker this is very easy to do.


Creating the Channel and Channel Fields
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
The very first step is to plan out what information we will need for each 
consultant. We can do this by creating a list of the fields we will need and
how we would like them presented to each consultant in our form.

===============  =================  ==============
Field Name       Field Type         Create
===============  =================  ==============
Start Date       Text Input         No
Location         Select Dropdown    Yes
Driving Area     Select Dropdown    Yes
Purpose          Checkboxes         Yes
Category         Select Dropdown    No
Status           Select Dropdown    No
Notes            Text Area          Yes
Documents        SafeCracker File   Yes
===============  =================  ==============


Now that we know what channel fields we need, lets create them. 

First we will create a channel and name it ``Tracking``.

:menuselection:`Admin --> Channel Administration --> Channels`

.. image:: /images/add-channel-tracking.png

Now we will create a new Channel Field Group and name it ``Tracking``.

:menuselection:`Admin --> Channel Administration --> Channel Fields -->  Create a New Channel Field Group`

.. image:: /images/add-channel-group-tracking.png

Lastly we will create the following Channel Fields.

:menuselection:`Admin --> Channel Administration --> Channel Fields -->  Create a New Channel Field`

.. image:: /images/channel-fields-added.png

Did you notice that Start Date, Category, and Status are not in the list of
channel fields that I created? That's because those exist separate from the
channel. Status Fields and Category Fields are available to be shared across
channels so that you can share common statuses and categories. The Date Entry
Field is native to each channel and does not need to be created because it
already exists.

We are set! We have all we need in the Control Panel in order to receive some 
entries. Now we just need to set up a Template Group and a Template to start
building our Entry Form.


Creating the Template Group and Template
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Now that we have the Channel and Channel Fields created we need to create a 
Template Group and a Template for our SafeCracker form. We will call our
Template Group ``consultants`` and we will use the default index template
for the form.

:menuselection:`Design -->  Templates --> Template Manager -->  New Group`

.. image:: /images/template-group-add-consultants.png

:menuselection:`Design -->  Templates --> Template Manager -->  Edit Template`

.. image:: /images/template-add-consultants.png

Creating Categories
~~~~~~~~~~~~~~~~~~~
We need to create a Categories Group and some categories to keep our entries
organized. We will create a Categories Group called ``Tracking`` and add the
following Categories.

1.  Development
2.  Design
3.  Development and Design
4.  Consultation Only
5.  Needs Review

:menuselection:`Admin --> Channel Administration --> Categories -->  Create a New Category Group`

.. image:: /images/category-group-tracking.png

:menuselection:`Admin --> Channel Administration --> Categories --> Add/Edit Categories`

.. image:: /images/categories-tracking-added.png



Step 1 SafeCracker Opening Tag
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

    {exp:safecracker channel="tracking" return="consultants/edit/ENTRY_ID" logged_out_member_id="7"}

The first step is to use the SafeCracker opening tag. The three parameters that 
you will notice here are 
:ref:`channel= <sc-channel-tag>` ,
:ref:`return= <sc-return-tag>` , and 
:ref:`logged_out_member_id= <sc-loggedout-tag>`. You can click on the links to 
read more about each tag. 

What we do here is tell the SafeCracker module to use
the Channel Fields that we just created in the ``Tracking`` channel. 

We also give SafeCracker the destination we would like our consultants to be 
directed to when the form has been submitted. In this case we want to land 
in the consultants template group and the edit template. We use the ENTRY_ID 
so that we are  automatically on the correct entry and able to edit the entry.

Lastly, we tell SafeCracker which logged out member ID to use when creating the 
form. This is an account you have set up in ExpressionEngine, just a guest
account to be used for SafeCracker forms. In fact, I like to name the account
``SafeCracker``.


Step 2 Title and URL Title Fields
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

    <label for="title"><span class="small">Title</span></label>
    <input type="text" name="title" id="title" value="{title}" size="50" maxlength="100" onkeyup="liveUrlTitle();">

    <label for="url_title"><span class="small">URL Title</span></label>
    <input type="text" name="url_title" id="url_title" value="{url_title}" maxlength="75" size="50">

Every entry in ExpressionEngine needs a title and a
:ref:`URL Title <channel-entries-url_title>`. This is pretty self explanatory but
worth mentioning because it is required.


Step 3 Channel Fields
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We have 8 channel fields we would like to include in our form and now it's time 
add those in. Two of them we did not have to create because they are included
by default for each channel. Category and Status. You can create your own
Status Group and Statuses but we are going to use the default one which gives
us the Open and Closed Statuses. We are going to use the Categories that we
created earlier.

Date Field
----------
The first we will cover is the Start Date. ::

  <label for="entry_date"><span class="small">Start Date</span></label>
  <input type="text" name="entry_date" id="entry_date" value="{entry_date}" maxlength="23" size="25">

This is a straight forward input field. What is worth noting is that you will want to format the date picker by :ref:`including assets <sc-include-assets>`. This gives the date picker some nice formatting. In our example this looks like the following. ::

  <link href="{path=css/_ee_saef_css}" type="text/css" rel="stylesheet" media="screen">


Select Dropdown
---------------

The next few fields are Select Dropdown fields. These are are also pretty straight forward. ::


    <label for="locations"><span class="small">Location</span></label>
    <select name="my_location" id="my_location">
      {options:my_location}
        <option value="{option_value}"{selected}>{option_name}</option>
      {/options:my_location}
    </select>

    <label for="driving_area"><span class="small">Driving Area</span></label>
    <select name="driving_area" id="driving_area">
      {options:driving_area}
        <option value="{option_value}"{selected}>{option_name}</option>
      {/options:driving_area}
    </select>

    <label for="status"><span class="small">Status</span></label>
    <select name="status" id="status">
      {statuses}
        <option value="{status}"{selected}>{status}</option>
      {/statuses}
    </select>


Checkboxes
----------

The next set of fields are checkboxes. ::

    {category_menu}
      <label for="categories"><span class="small">Categories</span></label>
      <select name="category[]" id="categories">
        {select_options}
      </select>
    {/category_menu}

    <label for="purpose"><span class="small">Purpose Of Visit</span></label>
     {options:purpose}
       <label class="checkbox">{option_value}</label>
       <input type="checkbox" id="purpose" name="purpose[]" value="{option_value}"{checked}>
     {/options:purpose}  

The thing to remember with checkboxes is that the name parameter must be an array in order to capture all the checked boxes. Note the following ::

    <select name="category[]" id="categories">

Name equals the name of the field followed by two brackets. ``[]``. IF you do not do this just like the example, then it will simply not work.

The other thing to remember when editing an entry is that you must preserve checkboxes by using :ref:`preserve\_checkboxes= <sc-preservecheck-tag>` in your SafeCracker opening tag. It will look like this for our example. ::

    {exp:safecracker channel="tracking" return="consultant/edit/ENTRY_ID" logged_out_member_id="7" entry_id="{segment_3}" preserve_checkboxes="yes"}

I will explain the other parameters that you see in this SafeCracker tag for an edit template later on.


SafeCracker File
----------------

The next field is a :ref:`SafeCracker File field <sc-filefieldtype>` , which is
a simple file fieldtype for creating file fields without the entire file manager. To include as many examples as possible into this tutorial we will use the :ref:`{custom\_fields} Loop <safecracker-custom-fields>`. ::

    <label for="documents"><span class="small">Document Upload</span></label>
      {custom_fields}
        {if safecracker_file}
          {display_field}
        {/if}
      {/custom_fields}

This will display an upload button so that our consultants can upload any documentation that they wish. You can review the process for :ref:`creating a file upload destination here <file-create-upload-destination>` For our example I named our upload destination ``client_documents``.




Completed Entry Form
~~~~~~~~~~~~~~~~~~~~

::

    {exp:safecracker channel="tracking" return="consultant/edit/ENTRY_ID" logged_out_member_id="7"}

    <label for="title"><span class="small">Title</span></label>
    <input type="text" name="title" id="title" value="{title}" size="50" maxlength="100" onkeyup="liveUrlTitle();">

    <label for="url_title"><span class="small">URL Title</span></label>
    <input type="text" name="url_title" id="url_title" value="{url_title}" maxlength="75" size="50">

    <label for="entry_date"><span class="small">Start Date</span></label>
    <input type="text" name="entry_date" id="entry_date" value="{entry_date}" maxlength="23" size="25">

    <label for="locations"><span class="small">Location</span></label>
    <select name="my_location" id="my_location">
            {options:my_location}
                <option value="{option_value}"{selected}>{option_name}</option>
            {/options:my_location}
    </select>

    <label for="driving_area"><span class="small">Driving Area</span></label>
    <select name="driving_area" id="driving_area">
            {options:driving_area}
                <option value="{option_value}"{selected}>{option_name}</option>
            {/options:driving_area}
    </select>

    <label for="purpose"><span class="small">Purpose Of Visit</span></label>
     {options:purpose}
     <label class="checkbox">{option_value}</label>
     <input type="checkbox" id="purpose" name="purpose[]" value="{option_value}"{checked}>
     {/options:purpose}  

    <label for="status"><span class="small">Status</span></label>
    <select name="status" id="status">
        {statuses}
          <option value="{status}"{selected}>{status}</option>
        {/statuses}
    </select>

    {category_menu}
    <label for="categories"><span class="small">Categories</span></label>
    <select name="category[]" id="categories">
    {select_options}
    </select>
    {/category_menu}

   <label for="client_notes"><span class="small">Client Notes</span></label>
   <textarea id="client_notes" name="client_notes">{client_notes}</textarea>

   <label for="documents"><span class="small">Document Upload</span></label>
   {custom_fields}
     {if safecracker_file}
       {display_field}
     {/if}
   {/custom_fields}

   {if captcha}
     <label for="captcha">Please enter the word you see in the image below:</label>
     {captcha}
     <input type="text" name="captcha" value="{captcha_word}" maxlength="20">
   {/if}

    <input type="submit" name="submit" value="Submit">
    {/exp:safecracker}


Completed Edit Form
~~~~~~~~~~~~~~~~~~~

::

    {exp:safecracker channel="tracking" return="consultant/edit/ENTRY_ID" logged_out_member_id="7" entry_id="{segment_3}" preserve_checkboxes="yes"}

    <label for="title"><span class="small">Title</span></label>
    <input type="text" name="title" id="title" value="{title}" size="50" maxlength="100" onkeyup="liveUrlTitle();">

    <label for="url_title"><span class="small">URL Title</span></label>
    <input type="text" name="url_title" id="url_title" value="{url_title}" maxlength="75" size="50">

    <label for="entry_date"><span class="small">Start Date</span></label>
    <input type="text" name="entry_date" id="entry_date" value="{entry_date}" maxlength="23" size="25">

    <label for="locations"><span class="small">Location</span></label>
    <select name="my_location" id="my_location">
            {options:my_location}
                <option value="{option_value}"{selected}>{option_name}</option>
            {/options:my_location}
    </select>

    <label for="driving_area"><span class="small">Driving Area</span></label>
    <select name="driving_area" id="driving_area">
            {options:driving_area}
                <option value="{option_value}"{selected}>{option_name}</option>
            {/options:driving_area}
    </select>

    <label for="purpose"><span class="small">Purpose Of Visit</span></label>
     {options:purpose}
     <label class="checkbox">{option_value}</label>
     <input type="checkbox" id="purpose" name="purpose[]" value="{option_value}"{checked}>
     {/options:purpose}  

    <label for="status"><span class="small">Status</span></label>
    <select name="status" id="status">
        {statuses}
          <option value="{status}"{selected}>{status}</option>
        {/statuses}
    </select>

    {category_menu}
    <label for="categories"><span class="small">Categories</span></label>
    <select name="category[]" id="categories">
    {select_options}
    </select>
    {/category_menu}

   <label for="client_notes"><span class="small">Client Notes</span></label>
   <textarea id="client_notes" name="client_notes">{client_notes}</textarea>

   <label for="documents"><span class="small">Document Upload</span></label>
   {custom_fields}
     {if safecracker_file}
       {display_field}
     {/if}
   {/custom_fields}

   {if captcha}
     <label for="captcha">Please enter the word you see in the image below:</label>
     {captcha}
     <input type="text" name="captcha" value="{captcha_word}" maxlength="20">
   {/if}

    <input type="submit" name="submit" value="Submit">
    {/exp:safecracker}


Download The Example
~~~~~~~~~~~~~~~~~~~~

Download all the example files.
