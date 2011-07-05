Functions Class
===============

The Functions class contains commonly required functions used throughout
ExpressionEngine's scripts.

set\_realpath(path [string])
----------------------------

Returns realpath for a directory or file.

**Class:** Functions (functions)

**Description:** Takes a path and attempts to determine the full server
path for it.

fetch\_site\_index(add\_slash [int], session\_id [int])
-------------------------------------------------------

Returns site's main index URL.

**Class:** Functions (functions)

**Description:** Returns the url of the main site index. If add\_slash
is set to 1, then a slash is added to the end of the string. If
session\_id is set to 1, then the session id is included (if sessions
are being used on the user side and this function is called in a
'webpage' template). Alternatively, those two values can be set to 0 and
no slash will be added and no session id will be added, respecively.
Default is 0 for add\_slash and 1 for session\_id.

create\_url(segment [string], session\_id [boolean])
----------------------------------------------------

Returns url for site.

**Class:** Functions (functions)

**Description:** The segment inputed to this function is parsed and
added to the full site URL to create a full URL/URI. If session\_id is
set to FALSE, then the session id will not be included (if sessions are
being used on the user side). Alternatively, session\_id can be set to
true and the session id will be added. Default is true for session\_id.

::

    $memberlist_url = $this->EE->functions->create_url('member/memberlist');
    // returns "http://example.com/index.php/member/memberlist/"

fetch\_current\_uri()
---------------------

Returns uri for current page.

**Class:** Functions (functions)

**Description:** Returns the full URI for the current page.
Occassionally, used in forms when a return location is not set by
default.

remove\_double\_slashes(str [string])
-------------------------------------

Remove duplicate slashes from URL.

**Class:** Functions (functions)

**Description:** A clean up function that removes all double slashes
(//) from str and returns the string. Useful for cleaning up URLs. The
double slashes in http:// are preserved.

extract\_path(str [string])
---------------------------

Removed session IDs from a URL.

**Class:** Functions (functions)

**Description:** Extract the template group/template name from str, like
{some\_var path='channel/index'}, and returns just the path.

::

    // Parse permalink path
    $key = '{permalink path='channel/details'}'
    if ($this->EE->functions->extract_path($key) != '' && $this->EE->functions->extract_path($key) != 'SITE_INDEX')
    {
        $path = $this->EE->functions->extract_path($key).'/'.$row['entry_id'];
    }
    // function returns 'channel/details'

var\_swap(str [string], data [array])
-------------------------------------

Replace array of variables in string.

**Class:** Functions (functions)

**Description:** Returns a string where the data array is used to
replace all of the occurrences of the data's keys with data's values in
str.

::

    $str = "Rick and Paul ate {meal} while sitting around the {item}"; 
    $swap = array('meal' => "Skittles", 'item' => "computer");
    $msg = $this->EE->functions->var_swap($str, $swap);
    // returns "Rick and Paul ate Skittles while sitting around the computer";

redirect(location [string])
---------------------------

Redirect to location.

**Class:** Functions (functions)

**Description:** Redirects current browser page to location. Does
redirect either by location or meta refresh, depending on the redirect
method preference.

hash(str [string])
------------------

Convert a string into a SHA1 encrypted hash.

**Class:** Functions (functions)

**Description:** Returns str as a SHA1 encrypted hash.

random(type [string], length (string int))
------------------------------------------

Random number/password generator.

**Class:** Functions (functions)

**Description:** Returns a random string based on the type and length
specified. The default type is 'encrypt'.

There are four possible values for type:

-  **basic** - just a random number
-  **alpha** - string with length of length using only letters (upper
   and lower case) of the alphabet
-  **numeric** - string with length of length using only numbers
-  **nozero** - string with length of length using all numbers except
   zero
-  **md5** - string of a random number that has been md5'ed
-  **encrypt** - string of a random number that has been hash'ed

form\_declaration(data [array])
-------------------------------

Creates opening form tag and hidden variables.

**Class:** Functions (functions)

**Description:** The data array contains the attributes and any hidden
fields for the form tag.

Any form will accept the form\_class and form\_id parameters. Access
the values with TMPL class properties of form\_id and form\_class.

::

    $form_details = array('action'     => '',
                      'name'           => 'upload',
                      'id'             => $this->EE->TMPL->form_id,
                      'class'          => $this->EE->TMPL->form_class,
                      'hidden_fields'  => array('new' => 'y'),
                      'secure'         => TRUE,
                      'onsubmit'       => "validate_form(); return false;"
                      );    

    $r = $this->EE->functions->form_declaration($form_details);

form\_backtrack(offset [int])
-----------------------------

Returns a URL for previously viewed page.

**Class:** Functions (functions)

**Description:** Returns a URL that allows us to return a user to a
previously visited page after submitting a form. ExpressionEngine keeps
track of the last five pages viewed by a visitor, and the page returned
is determined by the value of offset. For example, 0 is the current
page, -1 would be the form page, and -2 would be the page prior to the
form page.

::

    $data = array('title'   => 'Information Accepted',
                  'heading' => 'Thank you',
                  'content' => 'Thank you for the locale information',
                  'link'    => array($this->EE->functions->form_backtrack('-2'), 'Return to entry')
                  );
                  
    $this->EE->output->show_message($data);

evaluate(str [string])
----------------------

Evaluates a string as PHP

**Class:** Functions (functions)

**Description:** Evaluates a str as PHP

::

    $str = "echo 3*4;";

    ob_start();

    echo $this->EE->functions->evaluate($str);
    $value = ob_get_contents();

    ob_end_clean(); 

    // $value is now equal to 12, since that is what would be outputted by the PHP.

set\_cookie(name [string], value [string], expire [int])
--------------------------------------------------------

Sets cookie for site.

**Class:** Functions (functions)

**Description:** Sets cookie based on name and value. The optional
expire parameter is added to the current time to specify when the cookie
expires. If not set or set to '', then the cookie expiration is set in
the past and should usually be evaluated as having expired.

The advantage to using this function over just the standard PHP function
is because EE will automatically add the cookie domain, cookie prefix,
and cookie path as specified in the preferences. Those are helpful for
making these cookies unique to EE and not interfering with other cookies
set for your site by other software.

char\_limiter(str [string], num [int])
--------------------------------------

Returns section of a string based on number of character.

**Class:** Functions (functions)

**Description:** When given a str, it will return the string limited to
a certain amount of characters but rounds the string up to the nearest
word. The num parameter is optional and by default is set to 500
characters

word\_limiter(str [string], num [int])
--------------------------------------

Returns section of a string based on number of words.

**Class:** Functions (functions)

**Description:** When given a str, it will return the number of words
specified by num. The num parameter is optional and by default is 100.

fetch\_email\_template(name [string])
-------------------------------------

Returns the contents of email template.

**Class:** Functions (functions)

**Description:** Returns the contents of the email template requested
based on the language settings of the user.

encoding\_menu(which [str], name [str], selected [str])
-------------------------------------------------------

Returns character encoding or language form select menu

**Class:** Functions (functions)

**Description:** The which variable can be set to either 'languages' or
'charsets', and the name must be set to whatever you want the form field
to be named. The optional value selected is for indicating the selected
value or the default value for the pulldown.

::

    echo $this->EE->functions->encoding_menu('languages', 'xml_lang', 'ab');
    //  Displays:
    //  <select name="xml_lang">
    //  <option value='aa'>Afar</option>
    //  <option value='ab' selected='selected'>Abkhazian</option>
    //  <option value='af'>Afrikaans</option>
    //  etc...
    //  </select>

create\_directory\_map(directory [str], top\_level\_only [bool])
----------------------------------------------------------------

Returns array of files and folders in a directory

**Class:** Functions (functions)

**Description:** Specify a directory and this function will create an
array mapping out all the files and folders in that directory, including
any sub-folder files. This functions uses multi-level arrays to show
sub-folder depth.

language\_pack\_names(default [str])
------------------------------------

Returns form select menu of avaialable language packs

**Class:** Functions (functions)

**Description:** The optional parameter default is used to specify the
currently selected or default value.

clear\_caching(which [str], sub-directory [str], relationships [bool])
----------------------------------------------------------------------

Clears one or all of the main cache folders

**Class:** Functions (functions)

**Description:** Set which to one of the six values 'page', 'tag',
'db', 'sql', 'relationships', 'all' to empty the main ExpressionEngine
cache directories. The optional parameter sub\_directory can be used to
specify a specific folder or file in that the directories. relationships
used only when clearing 'all' caches, lets you specify whether or not
relationship caches should be emptied as well. Default is FALSE.

There are certain times when changing data (prefs or templates, for
instances) when you want changes to appear immediately. This allows you
to clear the cache files and make sure the changes appear on the next
viewing of the site.

delete\_directory(path [str], delete root [boolean])
----------------------------------------------------

Empties a directory of any files.

**Class:** Functions (functions)

**Description:** Set path to the absolute path of the directory you
wish to empty. Remember to use the EE defined PATH constants to assist
you in creating these paths.

If you wish to delete the folder as well as the contents inside of it,
then set the optional parameter delete root to TRUE, by default it is
set to FALSE.

fetch\_assigned\_channels()
---------------------------

Returns array of channels accessible by current user.

**Class:** Functions (functions)

**Description:** Returns array of channels accessible by current user.

fetch\_action\_id(class [str], method [str])
--------------------------------------------

Returns a properly formated action id tag

**Class:** Functions (functions)

**Description:** Modules have certain actions for forms, links, etc.
that are recognized via an action ids that are inserted into the
database upon installation of that module. This function returns a tag
in the format {AID:class:method} for use in the frontend. (See also
`EE->cp->fetch\_action\_id <../usage/cp.html#action_id>`_).

::

    $action_id = $this->EE->functions->fetch_action_id('Comment', 'insert_new_comment');

create\_captcha()
-----------------

Returns <img> tag for newly created captcha

**Class:** Functions (functions)

**Description:** Using a random word chosen from the array stored in
the words.php file, this function will create a captcha image and then
store that word and the IP address of the current user in the database.
You can then put the returned <img> tag in your form along with a text
input field for the user submitted word. When the form is submitted you
can check the submitted word against the database for the user's IP. If
it matches, you continue processing the form data. If it does not, then
the form should fail. This is used to prevent automated spamming tools
from submitting spam.

sql\_andor\_string(str [str], field [str], prefix [str])
--------------------------------------------------------

Returns query string when tag parameter usings pipes

**Class:** Functions (functions)

**Description:** Certain tag parameters have the option to be in the
form of 'value1\|value2' or 'not value1\|value2', which allows the
acceptance of multiple values. This function takes that parameter as str
and the field to check, along with the (optional) prefix of the table
containing the field, and returns the query string required.

::

    $str  = 'channel|news|sports';
    $sql  = "SELECT * FROM exp_channels WHERE is_user_channel = 'n' ";
    $sql .= $this->EE->functions->sql_andor_string($str, 'channel_name');
    // $sql equals:
    // SELECT * FROM exp_channels WHERE is_user_channel = 'n'
    // AND channel_name = 'channel' OR channel_name = 'news' OR channel_name = 'sports'

assign\_variables(str [string], slash [string])
-----------------------------------------------

Assign variables of tag to array

**Class:** Functions (functions)

**Description:** This function extracts the variables contained within
the current tag being parsed and assigns them to one of two arrays which
are returned to you: var\_single or var\_pair. The slash variable is
used to determine what form the backslash in tags is in, character (/)
or entity (&#47;).

fetch\_date\_variables(str [string])
------------------------------------

Fetch date variables from tag

**Class:** Functions (functions)

**Description:** This function looks for a variable that has this
prototype: {date format="%Y %m %d"}. If found, returns only the
datecodes: %Y %m %d.

assign\_parameters(tag [string])
--------------------------------

Fetch parameters for tag

**Class:** Functions (functions)

**Description:** Returns an array of parameters for the tag.

prep\_conditionals(str [string], variables [array], safety [string],
prefix [string])
-------------------------------------------------------------------------------------

Parses conditionals and preps conditional for evaluation

**Class:** Functions (functions)

**Description:** The first two parameters are requried. If safety is
set to 'y', then some safety checks are performed to make sure
conditionals are well formed. Normally, do not set this parameter. The
prefix is used when your variables might have a prefix (ex:
(your\_prefix->var\_name}), so that you only have to send the normal
variables and the prefix opposed to two sets of variables (one with
prefix and one without).
