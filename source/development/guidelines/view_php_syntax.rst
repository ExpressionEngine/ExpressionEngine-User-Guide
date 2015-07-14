View Files and PHP Syntax
=========================

.. todo:: Audit for 3.0

.. contents::
  :local:
  :depth: 2

In view files **only**, it is recommended that you use PHPs alternative
syntax for control structures and short tag echo statements. This
minimizes the amount of PHP code in the view file and makes it easier to
identify the code blocks. If you are not familiar with this syntax, it
allows you to eliminate the braces from your code, and eliminate "echo"
statements.

.. note:: If "short tags" are disabled in your PHP ini file,
  ExpressionEngine will automatically rewrite them for you. In such a
  case, if PHP errors are encountered in your **view files**, the
  error message and line number will not be accurately shown. Instead,
  all errors will be shown as ``eval()`` errors.

PHP Alternate Syntax
--------------------

Alternative Echos
^^^^^^^^^^^^^^^^^

Normally to echo, or print out a variable you would do this::

  <?php echo $variable; ?>

With the alternative syntax you can instead do it this way::

  <?=$variable?>

Alternative Control Structures
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Controls structures, like ``if``, ``for``, ``foreach``, and while can be
written in a simplified format as well. Here is an example using
``foreach``::

  <ul>
      <?php foreach($todo as $item): ?>
          <li><?=$item?></li>
      <?php endforeach; ?>
  </ul>

Notice that there are no braces. Instead, the end brace is replaced with
``endforeach``. Each of the control structures listed above has a
similar closing syntax: ``endif``, ``endfor``, ``endforeach``, and
``endwhile``

Also notice that instead of using a semicolon after each structure
(except the last one), there is a colon. This is important!

Here is another example, using ``if``/``elseif``/``else``. Notice the
colons::

  <?php if ($username == 'sally'): ?>
      <h3>Hi Sally</h3>
  <?php elseif ($username == 'joe'): ?>
      <h3>Hi Joe</h3>
  <?php else: ?>
      <h3>Hi unknown user</h3>
  <?php endif; ?>

