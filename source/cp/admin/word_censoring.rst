Word Censoring
==============

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Security and Privacy --> Word Censoring`

This section of the Control Panel allows you to enable word censoring.
It is also where you define the list of censored words.

Enable Word Censoring?
~~~~~~~~~~~~~~~~~~~~~~

You may enable or disable word censoring. If you select "Yes", the
system will replace any specified words in channel entries, comments,
forum posts, etc. according to your preference below.

Censoring Replacement Word
~~~~~~~~~~~~~~~~~~~~~~~~~~

You may optionally specify a word or phrase to be used when replacing
censored words. For example, if you set "tisk tisk" as your replacement
word, and "shucks" is in your censored list, then anytime "shucks" is used
it will be replaced with "tisk tisk". If you do not set this preference, a
pound symbol will be used for each character that is censored, so
"shucks" would be converted to "######".

Censored Words
~~~~~~~~~~~~~~

This field contains the list of words that you would like to censor.
Place each word on a separate line. Wild cards are allowed by adding a
\* to the beginning or end of a censored word. So, for example the
wildcard test\* would censor the words test, testing, and tester, while
the wildcard \*gress would censor the words progress and congress.
