--------------------
SafeCracker Examples
--------------------

.. contents::
   :local:

Basic Example
~~~~~~~~~~~~~

::

	     {exp:safecracker channel="contact_form" return="contact/thanks" }
	     	<input name="title" type="text">
	     	<input name="my_custom_field" type="text">
	     	<input type="submit" value="Submit">
	     {/exp:safecracker}

More Complex Example
~~~~~~~~~~~~~~~~~~~~

::

    {exp:safecracker channel="channel_name" return="channel_name/edit/ENTRY_ID" entry_id="{segment_3}"}

        <label for="title">Title</label>
        <input type="text" name="title" id="title" value="{title}" size="50" maxlength="100" onkeyup="liveUrlTitle();">

        <label for="url_title">URL Title</label>
        <input type="text" name="url_title" id="url_title" value="{url_title}" maxlength="75" size="50">

        <select name="my_field_name" id="my_field_name">
	        {options:my_field_name}
	            <option value="{option_value}"{selected}>{option_name}</option>
	        {/options:my_field_name}
        </select>

        {status_menu}
            <label for="status">Status</label>
            <select name="status" id="status">
	            {select_options}
            </select>
        {/status_menu}

        <label for="entry_date">Date</label>
        <input type="text" name="entry_date" id="entry_date" value="{entry_date}" maxlength="23" size="25">

        <label for="expiration_date">Expiration Date</label>
        <input type="text" name="expiration_date" id="expiration_date" value="{expiration_date}" maxlength="23" size="25">

        <label for="comment_expiration_date">Comment Expiration Date</label>
        <input type="text" name="comment_expiration_date" id="comment_expiration_date" value="{comment_expiration_date}" maxlength="23" size="25">

        <label class="checkbox"><input type="checkbox" name="sticky" value="y"  {sticky}> Make Entry Sticky</label>
        <label class="checkbox"><input type="checkbox" name="allow_comments" value="y" {allow_comments}> Allow Comments</label>
        <label class="checkbox"><input type="checkbox" name="dst_enabled" value="y" {dst_enabled}>DST Active on Date of Entry</label>

        {category_menu}
            <label for="categories">Categories</label>
            <select name="category[]" id="categories" size="4" multiple="multiple">
	            {select_options}
            </select>
        {/category_menu}
        
        {if captcha}
            <label for="captcha">Please enter the word you see in the image below:</label>
            {captcha}
            <input type="text" name="captcha" value="{captcha_word}" maxlength="20">
        {/if}

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
