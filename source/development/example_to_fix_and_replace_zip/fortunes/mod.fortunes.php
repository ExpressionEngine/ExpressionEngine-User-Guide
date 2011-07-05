<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/*
=====================================================
ExpressionEngine - by EllisLab, Inc.
-----------------------------------------------------
http://expressionengine.com/
-----------------------------------------------------
Copyright (c) 2003 - 2007 EllisLab, Inc.
=====================================================
THIS IS COPYRIGHTED SOFTWARE
PLEASE READ THE LICENSE AGREEMENT
http://expressionengine.com/docs/license.html
=====================================================
File: mod.fortunes.php
-----------------------------------------------------
Purpose: Fortunes display class
=====================================================

EXAMPLE:

{exp:fortunes refresh="6"}

{fortune}

{/exp:fortunes}

*/

class Fortunes {

    var $return_data    = ''; 
    var $cookie_name    = 'fortune_cookie';        // Name of $_COOKIE variabled checked and set
    var $cookie_length    = 24;                    // Cookie length in hours

    // -------------------------------------
    //  Constructor
    // -------------------------------------

    function Fortunes()
    {        
        global $DB, $TMPL, $IN, $FNS;
        
        $this->cookie_length = ($TMPL->fetch_param('refresh') === FALSE) ? $this->cookie_length : $TMPL->fetch_param('refresh');
        
        // -------------------------------------------------------
        // Select Random Fortune, if Cookie Not Set
        // -------------------------------------------------------
            
        if ( ! $IN->GBL($this->cookie_name, 'COOKIE'))
        {
            
            $query = $DB->query("SELECT fortune_text, fortune_id 
                                  FROM exp_fortunes
                                  ORDER BY rand()
                                  LIMIT 1");
                                  
            if ($query->num_rows == 0)
            {
                return;
            }
                                  
            // ---------------------------------------------------
            //  Set Cookie - 1 day
            // ---------------------------------------------------
            
            if ($this->cookie_length != 'always' && $this->cookie_length > 0)
            {
                $FNS->set_cookie($this->cookie_name, $query->row['fortune_id'], 60*60*ceil($this->cookie_length));
            }
        }
        else
        {
            $query = $DB->query("SELECT fortune_text 
                                  FROM exp_fortunes
                                  WHERE fortune_id = '".$IN->GBL($this->cookie_name, 'COOKIE')."'");        
        }
        
        // -------------------------------------------------------
        //  Find and Replace {fortune} Varaible in Tag Data
        // -------------------------------------------------------
        
        $this->return_data = str_replace('{fortune}',$query->row['fortune_text'], $TMPL->tagdata);         
        
    }
    // END

}
// END CLASS
?>