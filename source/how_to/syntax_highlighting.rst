.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

###################
Syntax Highlighting
###################

.. highlight:: html

``[code]`` and Markdown code blocks output clean and properly marked up code samples ready for you to style. [#change-in-3.3.0]_

::

  <pre>
      <code>
          ... your code sample...
      </code>
  </pre>

The result is agnostic, flexible, and ready for you to style how you like. This guide shows you how easy it is to use popular highlighting libraries for pretty code.

************
highlight.js
************

You can pretty quickly get `highlight.js <https://highlightjs.org>`_ working by dropping in these three lines of code::

  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.2.0/styles/default.min.css">
  <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.2.0/highlight.min.js"></script>
  <script>hljs.initHighlightingOnLoad();</script>

That will automatically highlight and style all codeblocks. You can further customize the look by `choosing a theme or selecting specific languages <https://highlightjs.org/download/>`_ or by `tweaking how it's run <https://highlightjs.org/usage/>`_.

If you want to specify a language, add a class to the ``<code>`` element::

  <pre><code class="html">...</code></pre>

You can also do that using Markdown::

  ``` .html

Or using bbcode::

  [code="html"]

If you want to *prevent* syntax highlighting, add a class of ``nohighlight`` to the ``<code>`` element::

  <pre><code class="nohighlight">...</code></pre>
  ``` .nohightlight
  [code="nohighlight"]

*************
Other Options
*************

Besides `highlight.js`_ we also recommend `Prism <http://prismjs.com/>`_ and `Rainbow <https://craig.is/making/rainbows>`_.  While highlight.js allows you to *optionally* specify the language, both Prism and Rainbow **require** that you specify the language. Beyond that, they work very similarly to highlight.js.

.. [#change-in-3.3.0] As of version 3.3.0, ExpressionEngine no longer outputs ugly span tag syntax highlighting for code blocks.
