--------------------
SafeCracker Examples
--------------------

.. contents::
   :local:

Basic Example Contact Form
~~~~~~~~~~~~~~~~~~~~~~~~~~

::

	     {exp:safecracker channel="contact_form" return="contact/thanks" }
	     	<input name="title" type="text">
	     	<input name="my_custom_field" type="text">
	     	<input type="submit" value="Submit">
	     {/exp:safecracker}


Entry Form using the {custom_fields} loop
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

    {exp:safecracker channel="channel_name" return="channel_name/edit/ENTRY_ID" entry_id="{segment_3}"}

    <label for="title">Title</label>
    <input type="text" name="title" id="title" value="{title}" size="50" maxlength="100" onkeyup="liveUrlTitle();">

    <label for="url_title">URL Title</label>
    <input type="text" name="url_title" id="url_title" value="{url_title}" maxlength="75" size="50">

    {custom_fields}
      <label for="{field_name}">{if required}* {/if}{field_label}</label>
      {field_instructions}
      {formatting_buttons}
      {if error}
        <p class="error">{error}</p>
      {/if}

      {if text}
      <input type="text" dir="{text_direction}" id="{field_name}" name="{field_name}" value="{field_data}" maxlength="{maxlength}" size="50">
      {/if}

      {if select}
        <select id="{field_name}" name="{field_name}">
        {options}<option value="{option_value}"{selected}>{option_name}</option>{/options}
        </select>
      {/if}

      {if date}
        <input type="text" id="{field_name}" name="{field_name}" value="{field_data}" size="50">
      {/if}

      {if checkbox}
        {options}
          <label class="checkbox">{option_value}
          <input type="checkbox" id="{field_name}" name="{field_name}[]" value="{option_value}"{checked}>
          </label>
        {/options}
      {/if}

      {if radio}
        {options}
          <label class="checkbox">{option_value}
            <input type="radio" id="{field_name}" name="{field_name}" value="{option_value}"{checked}>
          </label>
        {/options}
      {/if}

      {if safecracker_file}
        {display_field}
      {/if}

      {if relationship}
        <select id="{field_name}" name="{field_name}">
          {options}
            <option value="{option_value}"{selected}>{option_name}</option>
          {/options}
        </select>
      {/if}

      {if multiselect}
        <select id="{field_name}" name="{field_name}[]" multiple="multiple">
          {options}
            <option value="{option_value}"{selected}>{option_name}</option>
          {/options}
        </select>
      {/if}

      {if textarea}
        <textarea id="{field_name}" name="{field_name}" dir="{text_direction}" rows="{rows}">{field_data}</textarea>
      {/if}

      {/custom_fields}
      <input type="submit" name="submit" value="Submit">
    {/exp:safecracker}

Entry Form without using the {custom\_fields} loop
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

	{exp:safecracker channel="products" return="safecracker/ENTRY_ID" entry_id="{segment_2}"}
		<label for="title">Title</label>
		<input type="text" name="title" id="title" value="{title}" size="50" maxlength="100" onkeyup="liveUrlTitle();">
		
		<label for="url_title">URL Title</label>
		<input type="text" name="url_title" id="url_title" value="{url_title}" maxlength="75" size="50">
		
		<label for="entry_date">Date</label>
		<input type="text" name="entry_date" id="entry_date" value="{entry_date}" maxlength="23" size="25">
		
		<label for="my_field_name">Your Custom Field</label>
		<input type="text" name="my_field_name" id="my_field_name" value="{my_field_name}">
		
		<label for="my_field_name">Your Custom Field (a field with options)</label>
		<select name="my_field_name">
			{options:my_field_name}
				<option value="{option_value}"{selected}>{option_name}</option>
			{/options:my_field_name}
		</select>
		
		<label for="my_field_name">Your 3rd Party WYSIWYG Field</label> {field:my_field_name} 
		<input type="submit" name="submit" value="Submit">
	{/exp:safecracker}







AJAX-driven Entry Form
~~~~~~~~~~~~~~~~~~~~~~

::

  <html>
  <head>
  {exp:jquery:script_tag}
  <!--using the jQuery Form plugin http://jquery.malsup.com/form/-->
  <script src="/js/jquery.form.js" type="text/javascript"></script>
  <script type="text/javascript">
    $(document).ready(function(){
    $('#publishForm').ajaxForm({
    dataType: 'json',
      success: function(data) {
        if (data.success) {
          alert('You successfully added a new entry with entry_id '+data.entry_id)
            } else {
            alert('Failed with the following errors: '+data.errors.join(', '));
            }
          } 
        });
      });
  </script>
  </head>
   <body>
   {exp:safecracker channel="products" return="safecracker/ENTRY_ID" entry_id="{segment_2}" json="yes"}
   <label for="title">Title</label>
   <input type="text" name="title" id="title" value="{title}" size="50" maxlength="100" onkeyup="liveUrlTitle();">

   <label for="url_title">URL Title</label>
   <input type="text" name="url_title" id="url_title" value="{url_title}" maxlength="75" size="50">

   <label for="entry_date">Date</label>
   <input type="text" name="entry_date" id="entry_date" value="{entry_date}" maxlength="23" size="25">

   <input type="submit" name="submit" value="Submit">
   {/exp:safecracker}
   </body>
   </html>
