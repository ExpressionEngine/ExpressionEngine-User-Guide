.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

CAPTCHAs
========

ExpressionEngine supports what are known as "CAPTCHAs", or Completely
Automated Public Turing tests to tell Computers and Humans Apart. A
CAPTCHA is a computer-generated test that humans can easily pass, but
that is computationally difficult for a computer to do.

So how does this work? An image is generated in real time for a user
loading a web page. This image contains a word that the user must enter
in a form. The concept is effective because computers are generally not
very good at reading images, but it is something humans can do with
little effort.

In ExpressionEngine, CAPTCHAs can be used in several places:

#. `Channel Comment Form <#comment_form>`_
#. `Member Registration Form <#member_registration_form>`_
#. `Contact and Tell-a-Friend Email Forms <#email_forms>`_

The settings to require CAPTCHAs for these forms are located at
:menuselection:`Settings --> CAPTCHA` in the control panel.

Comment Forms
-------------

Once you have the preference turned on, you'll need to add the CAPTCHA
code to your :doc:`/comment/form`. See below for the `CAPTCHA Code`_.

Member Registration Form
------------------------

The necessary CAPTCHA code already exists in the Member Templates by
default, so you should not need to add it. If you have a version of
ExpressionEngine from before the CAPTCHA feature was added or if you
otherwise need the code, see below for the `CAPTCHA Code`_.

Contact and Tell-a-Friend Email Forms
-------------------------------------

Once you have the preference turned on, you'll need to add the CAPTCHA
code. See below for the `CAPTCHA Code`_.

CAPTCHA Code
------------

::

    {if captcha}
        <p>Please enter the word you see in the image below:</p>
        <p>{captcha}<br /> <input type="text" name="captcha" value="{captcha_word}" size="20" maxlength="20" style="width:140px;" /></p>
    {/if}


The contents of the conditional {if captcha} tag will only appear if
you have the CAPTCHA preference turned on for either the comment or
member registration forms.

The code used inside the Member Registration Form is very similar, with
only the omission of the {captcha_word} variable::

    {if captcha}
        <p>Please enter the word you see in the image below:</p>
        <p>{captcha}<br />
        <input type="text" name="captcha" value="" size="20" maxlength="20" style="width:140px;" /></p>
    {/if}


Notes
-----

It is important to note that there is a downside to using CAPTCHAs.
While they can be very successful in stopping automated bots from being
able to post comments or sign up for memberships, it can also have the
same effect on blind or visually impaired users of your site. If you
enable CAPTCHAs, then you will be making it extremely difficult for
these legitimate users to be able to use your site.

You should determine for yourself whether or not CAPTCHAs are
appropriate for your situation and your website audience.

For ExpressionEngine installations that power multiple domains or subdomains,
you may need to place the *server* path for the **Relative Path to Captcha
Folder** setting under :menuselection:`Settings --> CAPTCHA`. A server path is
typically something similar to /home/domain.com/http\_docs/images/captchas/.
The specific setting will vary from server to server so you may need to contact
your Host or server admin to determine what your correct "server path" is.

CAPTCHA Words
-------------

The CAPTCHA system uses a default dictionary. You can override these by adding a special user config file and returning an array of words you want to use instead. Create a PHP file at ``system/user/config/captcha.php`` with the format::

  <?php

  return [
    'your',
    'words',
    'here',
    /* ... */
  ];

