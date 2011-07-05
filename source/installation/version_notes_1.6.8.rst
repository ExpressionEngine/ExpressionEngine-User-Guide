Update Notes for Version 1.6.8
==============================

ExpressionEngine 1.6.8 includes a number of new features and updates.
Reviewing the notes below will help you transition to 1.6.8 with as
little effort as possible.


Template Updates
----------------

Simply find the following code in your 'smileys' templates

::

    function add_smiley(smiley) {
        opener.document.comment_form.comment.value += " " + smiley + " ";     
        opener.window.document.comment_form.comment.focus();
        window.close(); 
    }

And change it to this

::

    function add_smiley(smiley) {
        var el = opener.window.document.getElementById('comment_form').comment;     
        el.value += " " + smiley + " ";
        el.focus(); // Move to end for non-IE
        
        if ('selectionStart' in el) {         
            el.setSelectionRange(el.value.length, el.value.length);
        }
        
        window.close(); 
    }
