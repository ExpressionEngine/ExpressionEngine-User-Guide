Wiki Module Extension Hooks
===========================

.. contents::
	:local:
	:depth: 1


edit\_wiki\_article\_end
------------------------

Add more things to do for wiki articles

::

	$edata = $this->extensions-> universal_call('edit_wiki_article_end', $this, $query); if ($this->extensions->end_script === TRUE) return;

$this
~~~~~

The current Wiki class object

$query
~~~~~~

The query object for the article

:returns:
    void

Added in v1.6.0

edit\_wiki\_article\_form\_end
------------------------------

Allows edit page to be modified

::

	$this->return_data = $this->extensions-> universal_call('edit_wiki_article_form_end', $this, $query); if ($this->extensions->end_script === TRUE) return;

$this
~~~~~

The current Wiki class object

$query
~~~~~~

The query object for the article

:returns:
    String

Added in v1.6.0

edit\_wiki\_article\_form\_start
--------------------------------

Additional processing / complete takeover of the wiki article edit form

::

	$edata = $this->extensions-> universal_call('edit_wiki_article_form_start', $this, $title, $query); if ($this->extensions->end_script === TRUE) return;

$this
~~~~~

The current Wiki class object

$title
~~~~~~

The title of the article

$query
~~~~~~

The query object for the requested title

:returns:
    void

Added in v1.6.0

wiki\_article\_end
------------------

Allows takeover of wiki article display

::

	$this->return_data = $this->extensions-> universal_call('wiki_article_end', $this, $query); if ($this->extensions->end_script === TRUE) return;

$this
~~~~~

The current Wiki class object

$query
~~~~~~

The query object for the article

:returns:
    String

Added in v1.6.0

wiki\_article\_start
--------------------

Additional processing / takeover of wiki article display

::

	$edata = $this->extensions-> universal_call('wiki_article_start', $this, $title, $query); if ($this->extensions->end_script === TRUE) return;

$this
~~~~~

The current Wiki class object

$title
~~~~~~

The title of the requested article

$query
~~~~~~

The query object for the article

:returns:
    void

Added in v1.6.0

wiki\_special\_page
-------------------

Allows complete takeover of special pages

::

	$edata = $this->extensions-> universal_call('wiki_special_page', $this, $topic); if ($this->extensions->end_script === TRUE) return;

$this
~~~~~

The current Wiki class object

$topic
~~~~~~

The requested topic (e.g. categories, files, etc.)

:returns:
    void

Added in v1.6.0

wiki\_start
-----------

Allows page template to be modified prior to article processing

::

	$this->return_data = $this->extensions-> universal_call('wiki_start', $this); if ($this->extensions->end_script === TRUE) return;

$this
~~~~~

The current Wiki class object

:returns:
    String

Added in v1.6.0
