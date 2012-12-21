WysiHat API Reference
=====================

This documentation is for developers who wish to dig a little deeper. It
outlines most of the core WysiHat classes and methods.

.. contents::
	:local:
	:depth: 2

jQuery Reference
----------------

This is the main public method to use when dealing with WysiHat. It will
handle most of the setup for you. It can also be used to get access to
instances of some of the public classes without going through ``$.data()``.

Initial Setup
~~~~~~~~~~~~~

Creates a new instance of the editor on a textarea. ::

	$('textarea').wysihat({
	    'buttons': ['bold', 'italic', 'underline']
	});

Existing Editors
~~~~~~~~~~~~~~~~

Attempting to setup multiple editors will fail. Subsequent calls to
``$.wysihat()`` will return the existing editor. You can also access
the editor instance bound to an element using ``$.data()``: ::

	$myTextarea.data('wysihat');

Helper Classes
~~~~~~~~~~~~~~

Since the helper classes are all bound on the editor instance you can
retrieve any of them from an editor instance ::

	editor = $('textarea').data('wysihat');
	selection = editor.Selection;

Alternatively you can use the WysiHat constructor to get access to any
of the helper classes directly. This is provided mainly for debugging, to
quickly look up information about the undo stack or selection. ::

	$('textarea').wysihat('undo'); // undo stack
	$('textarea').wysihat('selection'); // selection utility


Publicly Accessible Classes
---------------------------

Just because they exist does not mean it's always a good idea to use them.
Use common sense and try to find a way to use the more general button API
where possible.

WysiHat
~~~~~~~

name
^^^^

The editor name. Always "WysiHat" in ExpressionEngine. This is used to
prefix editor specific events.

.. _WysiHat.addButton :

addButton(name, config)
^^^^^^^^^^^^^^^^^^^^^^^

Register a button for use. Not shown in the editor, until it is actually
added to the toolbar. This is usually accomplished through the button
option when attaching the editor.

.. _WysiHat.attach :

attach(field, options)
^^^^^^^^^^^^^^^^^^^^^^

Replace the textfield in `field` with a new WysiHat instance. Options
can contain:

- **buttons** - Array of strings, one for each button name. Buttons
  must be registered with addButton before they can be
  shown.

.. _WysiHat.inherit :

inherit(proto, props)
^^^^^^^^^^^^^^^^^^^^^

Convenience method for prototypal inheritance. Returns a new object
with proto in its prototype chain and an additional `parent` property
which contains proxies to the prototype's methods.

WysiHat.Editor
~~~~~~~~~~~~~~

An object of this class is returned by :ref:`attach() <WysiHat.attach>`
It implements the CommandExpando as well as the following methods:

updateField()
^^^^^^^^^^^^^

Updates the textarea from the editor markup. Called automatically for
most changes.

updateEditor()
^^^^^^^^^^^^^^

Updates the editor from the textarea markup. Automatically called when
switching from source to editor view.

selectEmptyParagraph()
^^^^^^^^^^^^^^^^^^^^^^

Utility method to help select an empty editor. Most browsers will not
create a paragraph tag for the first paragraph otherwise.


WysiHat.Event
~~~~~~~~~~~~~

Main event handling class. Takes care of all internal and external editor
events.

.. _Event.add :

add(eventName, handler)
^^^^^^^^^^^^^^^^^^^^^^^

Add an event handler for a given event name.

.. _Event.has :

has(eventName)
^^^^^^^^^^^^^^

Checks if a handler exists for ``eventName``.

.. _Event.run :

run(eventName, state, finalize)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Runs an event handler and calls finalize. Usually you will want :ref:`fire() <Event.fire>`.


.. _Event.fire :

fire(eventName)
^^^^^^^^^^^^^^^

Run all the required code to dispatch the event. This function understands
all built in commands, such as ``undo``, ``redo``, and ``paste``.

.. _Event.textChange :

textChange(before [, after])
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Marks a chunk of text changes as undoable.

.. _Event.isKeyCombo :

isKeyCombo(strName, evt)
^^^^^^^^^^^^^^^^^^^^^^^^

Identifies if the current event matches a specified key event name. The
name must take on the form: :kbd:`ctrl-shfit-c`.

.. _Event.isEvent :

isEvent(name, evt)
^^^^^^^^^^^^^^^^^^

Identifies a named key event such as paste or undo.

.. _Event.getState :

getState()
^^^^^^^^^^

Returns the editors current html contents and selection.

WysiHat.Undo
~~~~~~~~~~~~

A simple undo stack. Specifically made to handle text changes,
it will try to find the smallest difference in two strings rather
than saving the whole thing.

.. _Undo.push :

push(before, after, selBefore, selAfter)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Adds a diff of the before and after strings as well as the selection
positions to the undo stack.

hasUndo()
^^^^^^^^^

Check for available undos.

hasRedo()
^^^^^^^^^

Check for available redos.

undo()
^^^^^^

Undo the last change.

redo()
^^^^^^

Redo the last undo.

WysiHat.Selection
~~~~~~~~~~~~~~~~~

A small helper class that abstracts the very basic range manipulations
into a text offset based system. For advanced stuff you will still have
to fall back on ranges for node level granularity.

get()
^^^^^

Get a selection. Returns an ordered pair of [start, end]. These offsets
are text based. Not html based.

.. _Selection.set :

set(start [, end])
^^^^^^^^^^^^^^^^^^

Sets up a new selection to surround the text that range. Can either
accept the 2-tuple returned by `get()`_ or separate start and end offsets.

toString()
^^^^^^^^^^

Returns the contents of the current selection.

WysiHat.Commands
~~~~~~~~~~~~~~~~

Singleton that contains all of the available editor commands. They
are split up into query commands (*is*), modifying commands (
*make*), as well as a variety of utility methods.

You can retrieve a list of make and is commands by simply dumping
``WysiHat.Commands.is`` and ``WysiHat.Commands.make``. These functions
are also available through the shortcut methods on the `CommandsMixin`_.


styleSelectors
^^^^^^^^^^^^^^

A list of styles that you may need to access in your tool. Mainly
provided to smooth out strange mappings.

.. _Commands.execCommand :

execCommand(command, ui, value)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Works just like the browser native execCommand, but handles errors
gracefully so you don't have to.

.. _Commands.isMakeCommand :

isMakeCommand(cmd)
^^^^^^^^^^^^^^^^^^

Utility method to check if the command is available as a WysiHat version.
Used in the button handler to decide what handler to return. You probably
won't ever need this.

.. _Commands.isValidExecCommand :

isValidExecCommand(cmd)
^^^^^^^^^^^^^^^^^^^^^^^

Utility method to check if the command is valid as an option to the
browser's execCommand. Used in the button handler to decide what handler
to return. You probably won't ever need this.

.. _Commands.queryCommandState :

queryCommandState(state)
^^^^^^^^^^^^^^^^^^^^^^^^

Works just like the browser native queryCommandState, but will first
look for custom command state queries on ``WysiHat.is``. Also handles
errors for you.

.. _Commands.selectionIsWithin :

selectionIsWithin(tagNames)
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Checks if the current selection is contained in any of the provided
tags.

getSelectedStyles()
^^^^^^^^^^^^^^^^^^^

Returns all styles in the `styleSelectors`_ map with their values in
the current selection context.

.. _Commands.replaceElement :

replaceElement($el, tagName)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Takes the current element and turns it into a different one. Does not
change the contents of the element.

deleteElement($el)
^^^^^^^^^^^^^^^^^^

Replaces the element with its contents, similar to jQuery's unwrap.

.. caution::
	This function is likely to change or be removed in the future.

stripFormattingElements()
^^^^^^^^^^^^^^^^^^^^^^^^^

Completely strips the selection of formatting.

.. _Commands.manipulateSelection :

manipulateSelection(callback)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Utility function that takes a callback and calls it with each available
range in the editor in the context of `WysiHat.Commands`. It will restore
the ranges to their original state once all callbacks have been called.

.. _Commands.getRangeElements :

getRangeElements(range, tagNames)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Returns all elements in the ``range`` that match the ``tagNames`` selector.

getRanges()
^^^^^^^^^^^

Returns an array of all ranges. Utility method to avoid calling getRangeAt
in a loop.

.. _Commands.restoreRanges :

restoreRanges(ranges)
^^^^^^^^^^^^^^^^^^^^^

Takes an array of ranges and creates an editor selection from them.

.. _Commands.changeContentBlock :

changeContentBlock(tagName)
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Similar to :ref:`replaceElement() <Commands.replaceElement>`, but applies
to all block elements in the selection.

unformatContentBlock()
^^^^^^^^^^^^^^^^^^^^^^

Changes all block elements in the selection into paragraphs.

unlinkSelection()
^^^^^^^^^^^^^^^^^

Removes all links in the selection.

.. caution::
	This function may be moved in the future.

.. _Commands.wrapHTML :

wrapHTML(html)
^^^^^^^^^^^^^^

Wraps the current selection in HTML. Can be called with multiple parameters
to consecutively wrap the selection further.

.. _Commands.toggleHTML :

toggleHTML(button)
^^^^^^^^^^^^^^^^^^

Toggles the editors source view and flips the button state.

.. caution::
	This function may be re-moved in the future.

.. _Commands.insertHTML :

insertHTML(html)
^^^^^^^^^^^^^^^^

Replaces the current range with a given piece of HTML.

quoteSelection()
^^^^^^^^^^^^^^^^

Turns the current line or closest block element into a blockquote.
Please use :ref:`toggle('blockquote') <CommandsMixin.toggle>` instead.

unquoteSelection
^^^^^^^^^^^^^^^^

Removes the blockquote closest to the current selection.
Please use :ref:`toggle('blockquote') <CommandsMixin.toggle>` instead.

.. _Commands.toggleList :

toggleList(type)
^^^^^^^^^^^^^^^^

Toggles the list type of the current line. Removes the list if it is
already a list of the given ``type``.
Please use :ref:`toggle('li/ul') <CommandsMixin.toggle>` instead.

WysiHat.Toolbar
~~~~~~~~~~~~~~~

.. _Toolbar.addButton :

addButton(name)
^^^^^^^^^^^^^^^

Add a button to the current editor toolbar. The button must already be
registered with WysiHat through :ref:`addButton <WysiHat.addButton>`.

.. _Toolbar.createButtonElement :

createButtonElement(button)
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Creates the main button markup. Odds are you don't need to call this. Ever.

.. _Toolbar.observeButtonClick :

observeButtonClick(button)
^^^^^^^^^^^^^^^^^^^^^^^^^^

Sets up the event handler for the button. As with creating the button, this
is done completely automatically.

.. _Toolbar.observeStateChanges :

observeStateChanges(button)
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Binds editor selection change events to the button's ``queryStateHandler`` and
update the button's state when the cursor enters or exits text controllable
with that button.

.. _Toolbar.updateButtonState :

updateButtonState(button, state)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Toggles the buttons controls on or off. Identical to calling `setOn()`_ or
`setOff()`_.


Publicly Accessible Objects
---------------------------

Most of these are used as utilities and have better abstractions elsewhere.
Use with care.


WysiHat.Element
~~~~~~~~~~~~~~~

A helper object that provides easy access to types of elements.

WysiHat.Paster
~~~~~~~~~~~~~~

A helper object that provides the event handler for paste events


WysiHat.Formatting
~~~~~~~~~~~~~~~~~~

A helper object that contains most of the functions to keep editor
markup clean and consistent. Please use the editor's `updateField()`_
and `updateEditor()`_ methods when syncing the editor and textarea.

.. _Formatting.cleanup :

cleanup($element)
^^^^^^^^^^^^^^^^^

Removes browser added markup such as ``b`` and ``i`` tags. It also removes
comments, scripts, empty paragraphs, and inline style tags.

.. _Formatting.cleanupPaste :

cleanupPaste($element, parentTagName)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Cleans up a paste container. This includes everything in
:ref:`cleanup <Formatting.cleanup>` as well as resolving newlines into
paragraphs and `br` tags. When given a ``parentTagName`` it will also remove
that tag from the pasted content. This is done to prevent nesting blocks
such as ``h1`` tags.

Most times you will want to use
`WysiHat.Paster`_ or :ref:`Event.fire('paste') <Event.fire>`.

.. _Formatting.format :

format($element)
^^^^^^^^^^^^^^^^

Prettifies the HTML markup to ease in readability and debugging.

.. _Formatting.getBrowserMarkupFrom :

getBrowserMarkupFrom($element)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Returns the raw markup form the textarea. Please use `updateField()`_ to sync.

.. _Formatting.getApplicationMarkupFrom :

getApplicationMarkupFrom($element)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Returns the raw markup form the editor. Please use `updateEditor()`_ to sync.

Non-public Internal Classes
---------------------------

BlankButton
~~~~~~~~~~~

This is the parent class for all buttons.

.. _BlankButton.init :

init(name, $editor)
^^^^^^^^^^^^^^^^^^^

The main constructor. If you extend it, it should always return ``this``.

.. _BlankButton.setElement :

setElement(element)
^^^^^^^^^^^^^^^^^^^

Links the button instance with its clickable element.

getHandler()
^^^^^^^^^^^^

Returns the buttons event handler.

getStateHandler()
^^^^^^^^^^^^^^^^^

Returns the buttons state handler. This is called frequently. If you
extend it, make sure it can handle the load.

setOn()
^^^^^^^

Change the button state to indicate that it is active.

.. Note::
	Usually you do not need to call this yourself. Look into overriding
	the state handler instead.

setOff()
^^^^^^^^

Change the button state to indicate that it is inactive. The same warnings
as for `setOn()`_ apply.

CommandsMixin
~~~~~~~~~~~~~

This mixin is provided to ensure consistency across buttons and editor
instances at all times.

.. _CommandsMixin.is :

is(type)
^^^^^^^^

Use this to check for the current state of the selection. Returns
a boolean of the current state. ::
	
	this.is('bold')

.. _CommandsMixin.make :

make(type)
^^^^^^^^^^

Changes the state of the current selection. Also understand some simple
aliases for ease of use. ::

	this.make('italicize'); // native name
	this.make('italic'); // alias

.. _CommandsMixin.toggle :

toggle(type)
^^^^^^^^^^^^

Alias to :ref:`make() <CommandsMixin.make>`


Browser Compatibility Shims
---------------------------

Currently not documented. These provide cross browser support for
ranges and selections.