###################
Syntax Highlighting
###################

.. highlight:: html

As of ExpressionEngine 3.3.0, we're no longer automatically syntax highlighting ``[code]`` and Markdown code blocks. Instead, you'll have to use a javascript syntax highlighting library. Most of the available libraries offer the ability to pick the only the languages that you need (therefore saving bandwidth on languages you don't) and provide themes that allow for greater customization of the output compared to ExpressionEngine's previous highlighted code.

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
