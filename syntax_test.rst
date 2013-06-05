Syntax Highlighting Test
========================

EE Comment::

	{!-- this is a single line --}
	
	{!-- this is a
		multi-line comment --}

Conditional::

	{if segment_2 != ''}
		{redirect="404"}
	{/if}

Another::

	{if segment_1 == 'foo'}
		some text
	{/if}

Simple conditional::

	{if captcha}
		some text
	{/if}

A lonesome variable::

	{yeeehaw}

Path type::

	{embed="foo/bar"}

Here is some HTML::

  <div id="foo">
    <a href="http://example.com">Sample link</a>
  </div>

And here is some PHP::

	<?php
		error_reporting(E_ALL);
		echo "Hello World!";

		class Some_class {
			public function some_method($channel_id, $data = array(), $foo = '')
			{
				return FALSE;
			}
		}
		Some_class::some_method();
	?>



Here are some ExpressionEngine tags::

  {embed="foo/bar"}
  
  {webmaster_email}
  
  {encode="email@example.com"}
  
  {exp:plugin:no_closing_tag}

  {exp:plugin:method parameter="foo"}{bar}{/exp:plugin:method}
    
And finally, mixed::

  {embed="foo/bar"}

  {if segment_2 != ''}
    {redirect="404"}
  {/if}
	
  <?php $i = 0; ?>
  
  <div id="articles">
  {exp:channel:entries channel="foo" limit="10"}

    <?php if ($i % 2): ?><hr /><?php endif; ?>
      
    <article>
      <time>{entry_date format="%M %d, %Y"}</time>
      {content_field}
    </article>
  {/exp:channel:entries}
  </div>

More complex, with simple conditionals, PHP, and pair variables::

	<?php $i = 0; ?>

	{exp:channel:form channel="channel_name" return="channel_name/edit/ENTRY_ID" entry_id="{segment_3}"}

	    <label for="title">Title</label>
	    <input type="text" name="title" id="title" value="{title}" size="50" maxlength="100" onkeyup="liveUrlTitle();" />

	    <label for="url_title">URL Title</label>
	    <input type="text" name="url_title" id="url_title" value="{url_title}" maxlength="75" size="50" />

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
	    <input type="text" name="entry_date" id="entry_date" value="{entry_date}" maxlength="23" size="25" />

	    <label for="expiration_date">Expiration Date</label>
	    <input type="text" name="expiration_date" id="expiration_date" value="{expiration_date}" maxlength="23" size="25" />

	    <label for="comment_expiration_date">Comment Expiration Date</label>
	    <input type="text" name="comment_expiration_date" id="comment_expiration_date" value="{comment_expiration_date}" maxlength="23" size="25" />

	    <label class="checkbox"><input type="checkbox" name="sticky" value="y"  {sticky} /> Make Entry Sticky</label>

	    <label class="checkbox"><input type="checkbox" name="allow_comments" value="y" {allow_comments} /> Allow Comments</label>

	    {category_menu}
	        <label for="categories">Categories</label>
	        <select name="category[]" id="categories" size="4" multiple="multiple">

	        {select_options}
	        </select>
	    {/category_menu}

	    {if captcha}
	        <label for="captcha">Please enter the word you see in the image below:</label>
	        {captcha}

	        <input type="text" name="captcha" value="{captcha_word}" maxlength="20" />
	    {/if}

	    <input type="submit" name="submit" value="Submit" />

	{/exp:channel:form}
	
Tada!


