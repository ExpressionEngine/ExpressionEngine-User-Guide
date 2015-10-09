Checkboxes, Radio Buttons, Select, Multiselect
==============================================

Checkboxes, Radio Buttons, Select, and Multiselect fields are all ways to allow publishers to choose items from a list. Radio Buttons and Select fields only allow the users to choose one item, while Checkboxes and Multiselects allow multiple items to be chosen from the list.

Field Options
-------------

Text Formatting
~~~~~~~~~~~~~~~

Specifies how the entered-text will be formatted when rendered on the front-end. Most items will be entered will be single-lined and thus treated as a single paragraph by most text-processing plugins.

Options
~~~~~~~

This is where the list of items to select from is created. The default choice is to enter each item in the provided textarea, separating each item on a single line. Or, the list may be populated by the contents of another channel field.

Template Tags
-------------

Fields where multiple items can be selected (Checkboxes and Multiselect) can be rendered using a single tag or a tag pair.

::

  {poll_options}
      {item}<br />
  {/poll_options}

Limit Parameter
~~~~~~~~~~~~~~~

This parameter limits the number of selected items output by the tag. It
works for both the single variable, as well as the tag pair.

Markup Parameter
~~~~~~~~~~~~~~~~

As a single tag, the multi option fields will display a comma seperated
list of values. If you want an HTML list, you can use markup="ul" or
markup="ol" to change the output to the equivalent html list

::

  {poll_options markup="ul"}

Which will render as

::

  <ul>
      <li>Green</li>
      <li>Blue</li>
      <li>Orange</li>
  </ul>

Backspace Parameter
~~~~~~~~~~~~~~~~~~~

When used as a tag pair, the multi option fields are a looping pair.
Backspacing removes characters (including spaces and line breaks) from
the last iteration of the loop. For example, if you put a <br /> tag
after each item you'll have this

::

  {poll_options backspace="7"}
      {item}<br />
  {/poll_options}

Which will render as

::

  <ul>
      <li>Green</li><br />
      <li>Blue</li><br />
      <li>Orange</li><br />
  </ul>

You might, however, not want the <br /> tag after the final item. Simply
count the number of characters (including spaces and line breaks) you
want to remove and add the backspace parameter to the tag. The <br />
tag has 6 characters plus a new line character.
