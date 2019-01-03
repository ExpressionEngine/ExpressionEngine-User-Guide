.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

I've Lost or Forgotten My Username or Password and Can't Log In
===============================================================

Problem
-------

We've all been there. And since ExpressionEngine is self-installed, no one but you or someone at your organization can really help. For security, your password isn't stored in your database in a method that would be useful to look at. That protects you even if a hacker broke in and had access to your database.

If you find yourself unable to log in to your control panel, follow the steps below.

Solution
--------

1. The first thing to try is the "Forgot Password?" link, which will ask for your email address. If the address is associated with an account in your installation, you will receieve an email with a link that lets you reset your password. **phew**! Don't forget to check your Spam/Junk folder in your email app for the email, just in case.
2. If that doesn't work, ask another Super Admin on your site to log in and reset your password for you (and/or let you know what your username is.)
3. If neither of those work, then you will need someone who has direct access to the database on your server to do the following:

  1. Find your member record in the ``exp_members`` table.
  2. Set the email address in the ``email`` column to an email that you own.
  3. Go back to Step 1 above using the "Forgot Password?" link to reset your password.

4. If none of those work, you will need to contact an engineer who is familiar with ExpressionEngine member records to be able to create one from scratch for you. That engineer will also need direct access to your MySQL database.
