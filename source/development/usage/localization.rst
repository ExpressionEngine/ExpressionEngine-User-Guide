Localization Class
==================

.. contents::
	:local:

Calling the Localize Class
--------------------------

ExpressionEngine stores all dates and times in UTC (Universal
Coordinated Time), formerly known as GMT (Greenwich Mean Time). The
benefit of doing so is that each member of an EE site can choose their
own time zone and date localization settings. This permits entries and
other information containing dates/times to appear in each member's
local time. ExpressionEngine uses the date/time and localization
functions available in the Localize class to set and display dates and
times throughout the program.

This class is initialized automatically, by the system so there is no
need to do it manually.
::

    function localization_example()
    {

        $entry_data = array(
                            'entry_id'      => $entry_id,
                            'title'     => $title,
                            'url_title'     => $url_title,
                            'ip_address'        => $this->EE->input->ip_address(),
                            'entry_date'        => $this->EE->localize->now,
                            'year'          => gmdate('Y', $this->EE->localize->now),
                            'month'     => gmdate('m', $this->EE->localize->now),
                            'day'           => gmdate('d', $this->EE->localize->now),
                            'status'        => 'open'
                            );
                
        $this->EE->db->query($this->EE->db->update_string('exp_channel_titles', $entry_data , "entry_id='$entry_id'")); 
    }

What time is it now?
--------------------

**$this->EE->localize->now** will probably be the Localization variable
used the most often in any module. Basically, it returns the current UTC
(Universal Coordinated Time) and when making an INSERT into the
database, this is the time that should be used.

If you need to enter the current day, month, or year into the database
you should also inserted into the database as UTC/GMT. To do this, use
the PHP function gmdate() with the $this->EE->localize->now variable.

::

    $year = gmdate('Y', $this->EE->localize->now);

User's Localized Time
---------------------

**$this->EE->localize->set\_localized\_time()** is used to return back
the current localized time of the user, which is required when
displaying dates and times from the database. If the user is a visitor
or a member who has not specified their Localization, then the system
default will be used.

By default, **$this->EE->localize->set\_localized\_time()** will return
the current time.

::

    if (preg_match("/current_time/", $key))
    {
        $now = $this->EE->localize->set_localized_time();
        $tagdata = $this->EE->TMPL->swap_var_single($key, $this->EE->localize->decode_date($val,$now), $tagdata);
    }

You can also specify the time in Unix timestamp form, i.e. as from the
database.

::

    $d = date('d', $this->EE->localize->set_localized_time($query->row('entry_date')));

If you want to set the timezone and/or DST (Daylight Savings Time)
independently of the user, you can specify those in the second and third
parameter for this tag.

::

    $day = date('d', $this->EE->localize->set_localized_time('','-8','n');
    // Returns the current day in the PST timezone without DST set.

Date in the URL
---------------

**$this->EE->localize->set\_localized\_offset()** is used when the date
is specified in the URL (ex:
http://www.site.com/index.php/features/module/2004/07/04/) and we need
to determine the current user's offset from GMT in order to pull the
correct date range from the database. If the user is a visitor or a
member who has not specified their Localization, then the system default
will be used.

::

    // Start of day and end of day in Unix timestamp for UTC
    $start_time = $this->EE->localize->set_gmt(mktime(0, 0, 0, $month, $day, $year));
    $end_time = $this->EE->localize->set_gmt(mktime(23, 59, 59, $month, $day, $year)); 

    // Checks for Daylight Savings Time (DST)       
    // Adds or subtracts an hour

    if (date("I", $this->EE->localize->now) AND ! date("I", $start_time))
    {
        $start_time -= 3600;            
    }
    elseif (date("I", $start_time))
    {
        $start_time += 3600;           
    }

    if (date("I", $this->EE->localize->now) AND ! date("I", $end_time))
    {
        $end_time -= 3600;            
    }
    elseif (date("I", $end_time))
    {
        $end_time += 3600;           
    }

    // Adds localised offset        
    $start_time += $this->EE->localize->set_localized_offset();
    $end_time += $this->EE->localize->set_localized_offset();

**Note:** If no day is specified, then the entire month can be selected
by using the **$this->EE->localize->fetch\_days\_in\_month()** function.

::

    if ($day == '')
    {
        $sday = 1;
        $eday = $this->EE->localize->fetch_days_in_month($month, $year);
    }
    else
    {
        $sday = $day;
        $eday = $day;
    }

    $start_time = $this->EE->localize->set_gmt(mktime(0, 0, 0, $month, $sday, $year));
    $end_time = $this->EE->localize->set_gmt(mktime(23, 59, 59, $month, $eday, $year))

Date Tag Parameters
-------------------

Your module might allow the use of date parameters in its tag(s) so that
only content from a certain date/month/year will be displayed to the
users. To do this, the date parameters must first be converted into
unixtime for the server and then into UTC time to check against the
database time.

::

    $year = ( ! $this->EE->TMPL->fetch_param('year'))  ? date('Y') : $this->EE->TMPL->fetch_param('year');
    $month = ( ! $this->EE->TMPL->fetch_param('month')) ? date('m') : $this->EE->TMPL->fetch_param('month');
    $day = ( ! $this->EE->TMPL->fetch_param('day')) ? date('d') : $this->EE->TMPL->fetch_param('day');

    if (strlen($month) == 1) $month = '0'.$month;

    $utc_time = $this->EE->localize->set_gmt(mktime(0, 0, 0, $month, $day, $year));

**Note:** If no day is specified, then the entire month can be selected
by using the **$this->EE->localize->fetch\_days\_in\_month()** function.

::

    $year = ( ! $this->EE->TMPL->fetch_param('year'))  ? date('Y') : $this->EE->TMPL->fetch_param('year');
    $month = ( ! $this->EE->TMPL->fetch_param('month')) ? date('m') : $this->EE->TMPL->fetch_param('month');
    $day = ( ! $this->EE->TMPL->fetch_param('day')) ? '' : $this->EE->TMPL->fetch_param('day');

    if (strlen($month) == 1) $month = '0'.$month;

    if ($day == '')
    {
        $sday = 1;
        $eday = $this->EE->localize->fetch_days_in_month($month, $year);
    }
    else
    {
        $sday = $day;
        $eday = $day;
    }

    $start_time = $this->EE->localize->set_gmt(mktime(0, 0, 0, $month, $sday, $year));
    $end_time = $this->EE->localize->set_gmt(mktime(23, 59, 59, $month, $eday, $year))

Human Readable Time
-------------------

**$this->EE->localize->set\_human\_time()** formats a Unix/GMT timestamp
to the following format: 2003-08-21 11:35 PM. By default, it will use
the current time and localize it for the current user. You can also
specify a time using the first parameter and by setting the second
parameter to FALSE, you can turn off the localization. The third
parameter, allows you to add the current seconds past the minute for the
human readable time.

::

    $current_user_time = $this->EE->localize->set_human_time();
    // 2003-06-23 10:35 PM

    $current_gmt = $this->EE->localize->set_human_time('',FALSE);
    // PST timezone for user -8 from GMT
    // 2003-06-24 06:35 AM

    $time_with_seconds = $this->EE->localize->set_human_time('',1,1);
    // 2003-06-23 10:35:21 PM

    $last_visit = $this->EE->localize->set_human_time($row['last_visit']);
    // 2003-07-05 9:22 AM

**$this->EE->localize->convert\_human\_date\_to\_gmt()** converts a
string in the following format to a Unix/GMT timestamp: 2003-08-21 11:35
PM. This function uses the set\_localized\_offset() function to make
sure the returned timestamp is in returned for UTC/GMT.

::

    $entry_date = 2003-06-23 10:35 PM
    $entry_UTC_time = $this->EE->localize->convert_human_date_to_gmt($entry_date);

Foreign Dates
-------------

Whenever possible in an ExpressionEngine user interface, you should use
numbers opposed to written text to specify months and specific days.
However, for displaying content, ExpressionEngine uses
**$this->EE->localize->decode\_date()** to parse the date format string
(ex: %y %m %d) for a variable and with the UTC/GMT timestamp it will
output the correct text according to the language and timezone specified
in the user's localization preferences.

::

    $join_date = $this->EE->localize->decode_date($date_format, $row['join_date']);

If part of an ExpressionEngine variable, you can simply send the
variable to the function, and it will parse out the date format string
automatically for you.

::

    foreach ($this->EE->TMPL->var_single as $key => $val)
    {
        if (ereg("^current_time", $key))
        {
            $tagdata = $this->EE->TMPL->swap_var_single($key, $this->EE->localize->decode_date($val,$this->EE->localize->now), $tagdata);
        }
    }

The Location class has some predefined formatting strings that work in
conjunction with **$this->EE->localize->decode\_date()**, available in
the array: **$this->EE->localize->format**

::

    'DATE_ATOM'     =>  '%Y-%m-%dT%H:%i:%s%Q',
    'DATE_COOKIE'       =>  '%l, %d-%M-%y %H:%i:%s UTC',
    'DATE_ISO8601'  =>  '%Y-%m-%dT%H:%i:%s%O',
    'DATE_RFC822'       =>  '%D, %d %M %y %H:%i:%s %O',
    'DATE_RFC850'       =>  '%l, %d-%M-%y %H:%m:%i UTC',
    'DATE_RFC1036'  =>  '%D, %d %M %y %H:%i:%s %O',
    'DATE_RFC1123'  =>  '%D, %d %M %Y %H:%i:%s %O',
    'DATE_RFC2822'  =>  '%D, %d %M %Y %H:%i:%s %O',
    'DATE_RSS'      =>  '%D, %d %M %Y %H:%i:%s %O',
    'DATE_W3C'      =>  '%Y-%m-%dT%H:%i:%s%Q'

An example usage would be:

::

    $atom_date = $this->EE->localize->decode_date($this->EE->localize->format['DATE_ATOM'], $this->EE->localize->now);

Timezone Menu
-------------

If, for some reason, you need to create a timezone menu for your module,
then you can use the **$this->EE->localize->timezone\_menu()** function,
and it will automatically create a form select list with the name
'server\_timezone'. You can set the current or default value using the
first parameter. Check the zones() function in the Localize class file
for acceptable values.

::

    $time_menu = $this->EE->localize->timezone_menu('UTC');
    // UTC/GMT is selected (0)

    $time_menu = $this->EE->localize->timezone_menu('UP8');
    // PST is selected (-8)

    $time_menu = $this->EE->localize->timezone_menu('UM2');
    // MAST is selected (+2)

