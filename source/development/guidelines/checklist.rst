Developer Guidelines Checklist
==============================

-  General Syntax and Correctness:

   -  Classes and methods are properly named and cased
   -  Variables are properly named and cased
   -  Prolific and informative commenting using proper comment style
   -  Capital letters used for all constants, e.g. CONSTANT\_NAME
   -  Capital letters used for the keywords: TRUE, FALSE, and NULL
   -  Proper comparison of return values and variables (=== and !== as
      necessary)
   -  No debugging code leftover unless commented out
   -  No whitespace before or after opening/closing PHP tags in files
   -  No use of deprecated core methods (check the
      `Developer Log <../../cp/tools/logs/developer_log.html>`_ to make
      sure no deprecation warnings have surfaced from your add-on)
   -  All code is PHP 5.1.6+ compatible
   -  Proper use of $this->EE->session->cache variables, e.g.
      $this->EE->session->cache['class\_name']['var\_name']
   -  Class and filenames are prefixed to avoid overlap when the name
      and purpose may be common
   -  Custom database tables all use 'exp\_' prefix, followed by unique
      prefix, then the table name, e.g.: exp\_pre\_email\_addresses
   -  Separate files used for unrelated classes.
   -  Tabs for whitespacing, not spaces
   -  File saved with Unix line breaks
   -  Allman style indenting: braces placed on a line by themselves and
      indented at same level as the control statement
   -  Text output in the control panel uses Language variables to allow
      localization
   -  Private variables and methods start with an underscore:
      \_convert\_text() is a private method, convert\_text() is public
   -  Not using PHP functions that require non-default libraries unless
      an alternative is provided, or implicitly documented as a
      requirement.
   -  Code executes error free for all users with
      error\_reporting(E\_ALL);
   -  Full PHP opening tags used.
   -  Multiple statements are not combined on a single line
   -  Single quoted strings used unless variables are being parsed or
      string needs to contain single quotes
   -  Variables inside double-quoted strings are braced, e.g. {$foo}
   -  No overlap of tag parameters effecting the same thing
   -  Long queries broken up into multiple lines for legibility.
   -  Function argument defaults used when appropriate

-  Performance:

   -  POSIX extended (ereg, etc.) regular expression functions not being
      used
   -  ?: used at the start of a PCRE subpattern not being captured for
      use
   -  preg\_replace() is not being used where str\_replace() would
      suffice
   -  strpos() used before str\_replace() to see if the replacement is
      necessary
   -  strncmp() and strncasecmp() instead of substr() or preg\_match()
      when comparing the start of strings
   -  Calculations are not being made in the second expression of for()
      loops
   -  Heredoc string syntax avoided whenever possible
   -  No variables are being set for one-time use
   -  Queries are not needlessly stuck in loops or being run redundantly
      on a single page load

-  Security:

   -  XSS Cleaning taking place for all front-side user input before
      inserting into the database or output to the screen.
   -  PHP variables escaped in queries.
   -  Manually written queries using $this->EE->db->escape\_str()
   -  $this->EE->db->insert\_string() used for data INSERTs as
   -  $this->EE->db->update\_string() is used for UPDATEs
   -  Strings sent as the WHERE clause to
      $this->EE->db->update\_string() are escaped with
      $this->EE->db->escape\_str()
   -  Security and required preference settings are stored in the
      database or config.php file.
   -  Prefs and settings are not being used in hidden form fields
   -  No unnecessary preferences being used
   -  Tag parameters are validated before use
   -  Tag parameters have default values to fall back on
   -  User-side forms are created with
      $this->functions->form\_declaration()
   -  Checks and deletions of secure form hashes taking place
      appropriately
   -  No unfiltered incoming data output to the screen.
   -  Methods processing forms are thorough with regards to validation,
      security, and processing
   -  File name security precautions are being taken for include(),
      require() and saving files to servers.
   -  Typography class used for outputting blocks of user submitted
      data, with proper settings as security dictates.
   -  Security exceptions not being made for Super Admins
   -  Built in EE classes and methods used for tasks when possible
   -  Least Privilege approach used


