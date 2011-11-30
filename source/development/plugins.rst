ExpressionEngine Plugin API
===========================

Tag Construction
----------------

A typical ExpressionEngine tag looks like this:

::

    {exp:channel:entries}

The first segment is the tag identifier: {exp:. It tells the template
engine that it has just encountered a tag.

The second segment is the "family" name: {exp:channel. There are
different families of tags: channel, comments, members, email, stats,
etc. In programming terms, the second segment is the name of the 'class'
that is instantiated by the tag.

The above example would tell the template engine to dynamically
instantiate the "channel" class.

The third segment indicates the 'function' from within a particular
family of tags: {exp:channel:entries}. This example would tell
ExpressionEngine you want to use the "entries" function in the "channel"
class. To be more precise, the third segment is the "method" or
"function" name within a given class.

A tag, therefore, mirrors an object oriented approach: Class->function

::

    {exp:class_name:function_name}

**Note:** Tags are not always required to have three segments. If your
plugin is very simple you might opt to only use the class constructor.
In this case you can get by only using two segments:

::

    {exp:class_name}

Two Kinds of Tags
~~~~~~~~~~~~~~~~~

There are two kinds of tags: Single tags and tag pairs. A single tag
does not have a closing tag:

::

    {exp:randomizer:set_one}

Single tags are designed to return a single value. Tag pairs look like
this:

::

    {exp:xml_encode}

    Stuff between the tags

    {/exp:xml_encode}

Tag pairs allow you to process the information contained between the
tags. In the above example, the text between the pairs would be encoded
with XML entities.

Anatomy of a Plugin
-------------------

A plugin consists of a class and at least one function:

::

    <?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

    class Plugin_name {

        public function __construct()
        {
            $this->EE =& get_instance(); 
        }
    }

    /* End of file pi.plugin_name.php */ 
    /* Location: ./system/expressionengine/third_party/plugin_name/pi.plugin_name.php */

**Note**: Always deny direct access to your script by checking for the
BASEPATH constant.

In addition, you should add some information that is displayed in the
Plugin Manager section of the Control Panel. This is covered in the
`Control Panel Information <#cp_info>`_ section.

Creating a Plugin
-----------------

The best way to learn how a plugin is created is to walk you through the
process of creating one. For this example, we will create a plugin that
prints "Hello World". Our example plugin will have this syntax:

::

    {exp:hello_world}

You will be able to use this plugin anywhere in a Template.

Creating the Plugin File
------------------------

Once you've decided on a name for your plugin you will create a text
file for it. The file name must be the same as the class name and it
must have pi. as the prefix. We will name our file: pi.hello\_world.php.

Plugin file names are always lower case and they must be identical to
the name of the second segment of the tag:

::

    {exp:hello_world}

Creating the Class
------------------

In the new file you've created add this class and constructor:

::

    class Hello_world
    {
        public function __construct()
        {
            $this->EE =& get_instance();
        }
    }

**Note**: Class name must always be capitalized. This is the one
exception to the rule. Tag names and file names are always lowercase,
while the class name is capitalized.

**Note**: You must call of the super object in your constructor.

Returning a Value
~~~~~~~~~~~~~~~~~

Your new class is useless unless it can return a value. There are two
ways to return a value depending on whether your tag has three segments
or two.

Two Segments
~~~~~~~~~~~~

The above tag only has two segments therefore it only utilizes a
constructor. Since constructors cannot return a value directly, we will
assign it to a variable called: $return\_data.

::

    class Hello_world
    {
        public $return_data = "";

        public function __construct()
        {
            $this->EE =& get_instance();
            $this->return_data = "Hello World";
        }
    }

Three Segments
~~~~~~~~~~~~~~

With tags that utilize three segments you can return directly. Consider
a tag with this syntax:

::

    {exp:hello_world:bold}

The third segment represents a function called bold, which can return a
value directly:

::

    class Hello_world
    {
        public function __construct()
        {
            $this->EE =& get_instance();
        }

        public function bold()
        {
            return "<b>Hello World</b>";
        }
    }

You could create a class with several functions this way:

::

    class Hello_world
    {
        public function normal()
        {
            return "Hello World";
        }

        public function bold()
        {
            return "<b>Hello World</b>";
        }

        public function italic()
        {
            return "<i>Hello World</i>";
        }
    }

Each function would be accessible using these tags:

::

    {exp:hello_world:normal}
    {exp:hello_world:bold}
    {exp:hello_world:italic}

Processing Data Within Tag Pairs
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Often you will want to process data contained between a pair of tags.
Let's create a simple tag that makes text bold to illustrate how this is
done. Our example plugin will have this syntax:

::

    {exp:bold}

    Some text we want to process.

    {/exp:bold}

You will be able to use this plugin anywhere in a Template. You can even
put this tag within another tag in order to affect a variable:

::

    {exp:channel:entries}

    {exp:bold}{title}{/exp:bold}

    {/exp:channel:entries}

In following our naming rules, we will create a plugin file named:
pi.bold.php. And we will create a class with this syntax:

::

    class Bold
    {
        public $return_data = "";

        public function __construct()
        {
            $this->EE =& get_instance();
        }
    }

So how do we fetch the data contained within the tag pairs? Using the
following variable:

::

    $this->EE->TMPL->tagdata;

Here is how the variable is used:

::

    class Bold
    {
        public $return_data = "";

        public function __construct()
        {
            $this->EE =& get_instance();
            $this->return_data = $this->EE->TMPL->tagdata;
        }
    }

Of course you'll want to do something with the data before you return
it, so let's make it bold:

::

    class Bold
    {
        public $return_data = "";
        
        public function __construct()
        {
            $this->EE =& get_instance();
            $this->return_data = "<b>".$this->EE->TMPL->tagdata."</b>";
        }
    }

Parameters
~~~~~~~~~~

Since tags will often have parameters, the template engine makes it easy
to fetch them using the following variable:

::

    $this->EE->TMPL->fetch_param('param_name');

To see how this is used, let's create a plugin that lets you format text
based on the parameter. Our new plugin will have this syntax:

::

    {exp:format type="uppercase"}

    Some text to process.

    {/exp:format}

We will allow the following parameter choices:

-  type="uppercase"
-  type="lowercase"
-  type="bold"
-  type="italic"

Create a plugin file named pi.format.php and in it put this:

::

    class Format
    {
        public $return_data = "";

        public function __construct()
        {
            $this->EE =& get_instance();
            $parameter = $this->EE->TMPL->fetch_param('type');

            switch ($parameter)
            {
                case "uppercase":
                    $this->return_data = strtoupper($this->EE->TMPL->tagdata);
                    break;
                case "lowercase":
                    $this->return_data = strtolower($this->EE->TMPL->tagdata);
                    break;
                case "bold" :
                    $this->return_data = "<b>".$this->EE->TMPL->tagdata."</b>";
                    break;
                case "italic":
                    $this->return_data = "<i>".$this->EE->TMPL->tagdata."</i>";
                    break;
            }
        }
    }

Passing Data Directly
~~~~~~~~~~~~~~~~~~~~~

ExpressionEngine allows any plugin to be assigned as a text formatting
choice in the Publish page of the Control Panel. In order to allow a
plugin to be used this way it needs to be able to accept data directly.
This is how it's done.

Add a parameter to the function. It's best to make the parameter
conditional so it will know whether it's being used in a template or
directly as a formatting choice:

::

    class Bold
    {
        public $return_data = "";

        function __construct($str = NULL)
        {
            $this->EE =& get_instance();
            
            if (empty($str))
            {
                $str = $this->EE->TMPL->tagdata;
            }

            $this->return_data = "<b>".$str."</b>";
        }
    }

The above tag can then be assigned in the Publish page, allowing you to
run your channel entries through it.

Database Access
---------------

ExpressionEngine makes it easy to access the database using the provided
database class. To run a query you will use `active
record <http://codeigniter.com/user_guide/database/active_record.html>`_
syntax:

::

    $query = $this->db->get('mytable');

    // Produces: SELECT * FROM mytable

To show the result of a query you will generally use the "result\_array"
array. This is an associative array provided by the database class that
contains the query result. Let's use a real example to show how this is
used.

We will run a query that shows a list of members. For this we will
create a plugin called pi.memberlist.php. The tag syntax will be this:

::

    {exp:memberlist}

Here is the class syntax:

::

    class Memberlist
    {
        public $return_data = "";

        public function __construct()
        {
            $this->EE =& get_instance();

            $qry = $this->EE->db->select("screen_name")
                    ->get('members', 15);

            foreach($qry->result() as $row)
            {
                $this->return_data .= $row->screen_name."<br>";
            }
        }
    }

Here are some additional variables available in the database class:

$query->row()
~~~~~~~~~~~~~

If your query only returns one row you can use this variable like this:

::

        
    $qry = $this->EE->db->select('screen_name');
            ->get('members', 1);

    return $qry->row('screen_name');

$query->num\_rows()
~~~~~~~~~~~~~~~~~~~

The number of rows returned by the query. This is a handy variable that
can be used like this:

::

    $query = $this->EE->db->select('screen_name')
            ->where('url !=', '')
            ->get('members');

    if ($query->num_rows() == 0)
    {
        $this->return_data = "Sorry, no results";
    }
    else
    {
        $this->return_data .= sprintf('Total Results: %s<br>',
                        $query->num_rows());

        foreach($query->result() as $row)
        {
            $this->return_data .= $row->screen_name."<br>";
        }
    }

Control Panel Information
-------------------------

In addition to the class and function, you should also add some
information that will display in the Plugin Manager section of the
Control Panel. There are two parts to this information.

$plugin\_info array
~~~~~~~~~~~~~~~~~~~

At the top of your file you can specify a PHP array that contains
information about the Plugin. The array follows this format:

::

    $plugin_info = array(
        'pi_name'       => 'Member List',
        'pi_version'        => '1.0',
        'pi_author'     => 'Jane Doe',
        'pi_author_url'     => 'http://example.com/',
        'pi_description'    => 'Returns a list of site members',
        'pi_usage'      => Memberlist::usage()
    );

The information is as follows:

-  **pi\_name**: The display name of the Plugin
-  **pi\_version**: The Plugin version number
-  **pi\_author**: The name of the Plugin author
-  **pi\_author\_url**: The URL associated with the author (or a URL to
   a page about the Plugin)
-  **pi\_description**: A short description of the purpose of the Plugin
-  **pi\_usage**: This array item is special. It should be the name of
   the Plugin 'class' followed by "::usage". So for the 'Memberlist'
   class it is "Memberlist::usage".

usage() function
~~~~~~~~~~~~~~~~

The "usage" function is designed to easily allow you to give a
description of how to use your new Plugin, including giving example
ExpressionEngine code.

This function should be placed inside the 'class', just like the other
functions. Your finished Plugin would look like this:

::

    <?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

    /**
     * Memberlist Class
     *
     * @package     ExpressionEngine
     * @category        Plugin
     * @author      Jane Doe
     * @copyright       Copyright (c) 2010, Jane Doe
     * @link        http://example.com/memberlist/
     */

    $plugin_info = array(
      'pi_name'         => 'Member List',
      'pi_version'      => '1.0',
      'pi_author'       => 'Jane Doe',
      'pi_author_url'   => 'http://example.com/',
      'pi_description'  => 'Returns a list of site members',
      'pi_usage'        => Memberlist::usage()
    );

    class Memberlist
    {

        public $return_data = "";

        // --------------------------------------------------------------------

        /**
         * Memberlist
         *
         * This function returns a list of members
         *
         * @access  public
         * @return  string
         */
        public function __construct()
        {
            $this->EE =& get_instance();

            $query = $this->EE->db->select('screen_name')
                        ->get('members', 15);

            foreach($query->result_array() as $row)
            {
                $this->return_data .= $row['screen_name'];
                $this->return_data .= "<br />";
            }
        }

        // --------------------------------------------------------------------

        /**
         * Usage
         *
         * This function describes how the plugin is used.
         *
         * @access  public
         * @return  string
         */
        public static function usage()
        {
            ob_start();  ?>

    The Memberlist Plugin simply outputs a
    list of 15 members of your site.

        {exp:memberlist}

    This is an incredibly simple Plugin.


        <?php
            $buffer = ob_get_contents();
            ob_end_clean(); 

            return $buffer;
        }
        // END
    }
    /* End of file pi.memberlist.php */ 
    /* Location: ./system/expressionengine/third_party/memberlist/pi.memberlist.php */ 

