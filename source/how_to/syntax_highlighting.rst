###################
Syntax Highlighting
###################

As of ExpressionEngine 3.3.0, we're no longer automatically syntax highlighting ``[code]`` and Markdown code blocks. Instead, you'll have to use a javascript syntax highlighting library. We have two recommendations:

.. highlight:: html

.. contents::
  :local:
  :depth: 1

Both options provide the ability to pick the only the languages that you need (therefore saving bandwidth on languages you don't) and allow for greater customization of the output using themes.

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

If you want to *prevent* syntax highlighting, add a class of ``nohighlight`` to the ``<code>`` element::

  <pre><code class="nohighlight">...</code></pre>

*****
Prism
*****

With `Prism <http://prismjs.com/>`_ you'll have to also include the languages you want highlighted. This may require more includes, but allows you to further reduce your page weight by only including syntax highlighting for languages you actually display. The following code highlights only PHP, CSS, HTML, and Javascript::

  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.4.1/prism.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.4.1/components/prism-css.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.4.1/components/prism-javascript.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.4.1/components/prism-markup.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.4.1/components/prism-php.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.4.1/themes/prism.min.css">

.. todo:: Finish up this section.

********
Rainbows
********

.. todo:: point out that Rainbows and Prism are similar and require specifying the language that's going to be highlighted and as such, only Markdown really works out of the box with either. Both are modular and flexible and have various themes and both work similarly.

::

  <script src="{theme_folder_url}site/default/asset/js/plugins/validate.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/rainbow/1.2.0/js/rainbow.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/rainbow/1.2.0/js/language/javascript.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/rainbow/1.2.0/js/language/php.min.js"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/rainbow/1.2.0/themes/github.min.css" title="common-styles" rel="stylesheet">
