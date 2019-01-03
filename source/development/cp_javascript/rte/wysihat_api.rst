.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

WysiHat API Reference
=====================

This documentation is for developers who wish to dig a little deeper. It
outlines most of the core WysiHat classes and methods.

.. contents::
  :local:
  :depth: 2

.. highlight:: js

jQuery Reference
----------------

This is the main public method to use when dealing with WysiHat. It will
handle most of the setup for you. It can also be used to get access to
instances of some of the public classes without going through
``$.data()``.

Initial Setup
~~~~~~~~~~~~~

.. js:function:: wysihat(options)

  Creates a new instance of the editor on a textarea. ::

    $('textarea').wysihat({
        'buttons': ['bold', 'italic', 'underline']
    });

Existing Editors
~~~~~~~~~~~~~~~~

.. js:data:: wysihat

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

.. js:class:: WysiHat

.. js:attribute:: name

  The editor name. Always "WysiHat" in ExpressionEngine. This is used to
  prefix editor specific events.

.. js:function:: addButton(name, config)

  Register a button for use. Not shown in the editor, until it is actually
  added to the toolbar. This is usually accomplished through the button
  option when attaching the editor.

.. js: function:: attach(field, options)

  Replace the textfield in `field` with a new WysiHat instance. Options
  can contain:

  - ``buttons`` - Array of strings, one for each button name. Buttons
    must be registered with addButton before they can be
    shown.

.. js:function:: inherit(proto, props)

  Convenience method for prototypal inheritance. Returns a new object
  with proto in its prototype chain and an additional `parent` property
  which contains proxies to the prototype's methods.

WysiHat.Editor
~~~~~~~~~~~~~~

.. js:class:: WysiHat.Editor

  An object of this class is returned by :js:func:`attach` It implements
  the CommandExpando as well as the following methods:

.. js:function:: updateField()

  Updates the textarea from the editor markup. Called automatically for
  most changes.

.. js:function:: updateEditor()

  Updates the editor from the textarea markup. Automatically called when
  switching from source to editor view.

.. js:function:: selectEmptyParagraph()

  Utility method to help select an empty editor. Most browsers will not
  create a paragraph tag for the first paragraph otherwise.

WysiHat.Event
~~~~~~~~~~~~~

.. js:class:: WysiHat.Event

  Main event handling class. Takes care of all internal and external editor
  events.

.. js:function:: add(eventName, handler)

  Add an event handler for a given event name.

.. js:function:: has(eventName)

  Checks if a handler exists for ``eventName``.

.. js:function:: run(eventName, state, finalize)

  Runs an event handler and calls finalize. Usually you will want
  :js:func:`fire`.

.. js:function:: fire(eventName)

  Run all the required code to dispatch the event. This function
  understands all built in commands, such as ``undo``, ``redo``, and
  ``paste``.

.. js:function:: textChange(before [, after])

  Marks a chunk of text changes as undoable.

.. js:function:: isKeyCombo(strName, evt)

  Identifies if the current event matches a specified key event name.
  The name must take on the form: :kbd:`ctrl-shfit-c`.

.. js:function:: isEvent(name, evt)

  Identifies a named key event such as paste or undo.

.. js:function:: getState()

  Returns the editors current html contents and selection.

WysiHat.Undo
~~~~~~~~~~~~

.. js:class:: WysiHat.Undo

  A simple undo stack. Specifically made to handle text changes, it will
  try to find the smallest difference in two strings rather than saving
  the whole thing.

.. js:function:: push(before, after, selBefore, selAfter)

  Adds a diff of the before and after strings as well as the selection
  positions to the undo stack.

.. js:function:: hasUndo()

  Check for available undos.

.. js:function:: hasRedo()

  Check for available redos.

.. js:function:: undo()

  Undo the last change.

.. js:function:: redo()

  Redo the last undo.

WysiHat.Selection
~~~~~~~~~~~~~~~~~

.. js:class:: WysiHat.Selection

  A small helper class that abstracts the very basic range manipulations
  into a text offset based system. For advanced stuff you will still
  have to fall back on ranges for node level granularity.

.. js:function:: get()

  Get a selection. Returns an ordered pair of [start, end]. These
  offsets are text based. Not html based.

.. js:function:: set(start [, end])

  Sets up a new selection to surround the text that range. Can either
  accept the 2-tuple returned by :js:func:`get` or separate start and
  end offsets.

.. js:function:: toString()

  Returns the contents of the current selection.

WysiHat.Commands
~~~~~~~~~~~~~~~~

.. js:class:: WysiHat.Commands

  Singleton that contains all of the available editor commands. They are
  split up into query commands (*is*), modifying commands ( *make*), as
  well as a variety of utility methods.

  You can retrieve a list of make and is commands by simply dumping
  ``WysiHat.Commands.is`` and ``WysiHat.Commands.make``. These functions
  are also available through the shortcut methods on the
  `CommandsMixin`_.

.. js:function:: styleSelectors

  A list of styles that you may need to access in your tool. Mainly
  provided to smooth out strange mappings.

.. js:function:: execCommand(command, ui, value)

  Works just like the browser native execCommand, but handles errors
  gracefully so you don't have to.

.. js:function:: isMakeCommand(cmd)

  Utility method to check if the command is available as a WysiHat
  version. Used in the button handler to decide what handler to return.
  You probably won't ever need this.

.. js:function:: isValidExecCommand(cmd)

  Utility method to check if the command is valid as an option to the
  browser's execCommand. Used in the button handler to decide what
  handler to return. You probably won't ever need this.

.. js:function:: queryCommandState(state)

  Works just like the browser native queryCommandState, but will first
  look for custom command state queries on ``WysiHat.is``. Also handles
  errors for you.

.. js:function:: selectionIsWithin(tagNames)

  Checks if the current selection is contained in any of the provided
  tags.

.. js:function:: getSelectedStyles()

  Returns all styles in the :js:func:`styleSelectors` map with their
  values in the current selection context.

.. js:function:: replaceElement($el, tagName)

  Takes the current element and turns it into a different one. Does not
  change the contents of the element.

.. js:function:: deleteElement($el)

  Replaces the element with its contents, similar to jQuery's unwrap.

  .. note:: This function is likely to change or be removed in the
    future.

.. js:function:: stripFormattingElements()

  Completely strips the selection of formatting.

.. js:function:: manipulateSelection(callback)

  Utility function that takes a callback and calls it with each
  available range in the editor in the context of
  :js:class:`WysiHat.Commands`. It will restore the ranges to their
  original state once all callbacks have been called.

.. js:function:: getRangeElements(range, tagNames)

  Returns all elements in the ``range`` that match the ``tagNames``
  selector.

.. js:function:: getRanges()

  Returns an array of all ranges. Utility method to avoid calling
  getRangeAt in a loop.

.. js:function:: restoreRanges(ranges)

  Takes an array of ranges and creates an editor selection from them.

.. js:function:: changeContentBlock(tagName)

  Similar to :js:func:`replaceElement`, but applies to all block
  elements in the selection.

.. js:function:: unformatContentBlock()

  Changes all block elements in the selection into paragraphs.

.. js:function:: unlinkSelection()

  Removes all links in the selection.

  .. note:: This function may be moved in the future.

.. js:function:: wrapHTML(html)

  Wraps the current selection in HTML. Can be called with multiple
  parameters to consecutively wrap the selection further.

.. js:function:: toggleHTML(button)

  Toggles the editors source view and flips the button state.

  .. note:: This function may be re-moved in the future.

.. js:function:: insertHTML(html)

  Replaces the current range with a given piece of HTML.

.. js:function:: quoteSelection()

  Turns the current line or closest block element into a blockquote.
  Please use :js:func:`toggle('blockquote') <toggle>` instead.

.. js:function:: unquoteSelection()

  Removes the blockquote closest to the current selection. Please use
  :js:func:`toggle('blockquote') <toggle>` instead.

.. js:function:: toggleList(type)

  Toggles the list type of the current line. Removes the list if it is
  already a list of the given ``type``. Please use
  :js:func:`toggle('li/ul') <toggle>` instead.

WysiHat.Toolbar
~~~~~~~~~~~~~~~

.. js:class:: WysiHat.Toolbar

.. js:function:: addButton(name)

  Add a button to the current editor toolbar. The button must already be
  registered with WysiHat through :js:func:`addButton`.

.. js:function:: createButtonElement(button)

  Creates the main button markup. Odds are you don't need to call this.
  Ever.

.. js:function:: observeButtonClick(button)

  Sets up the event handler for the button. As with creating the button,
  this is done completely automatically.

.. js:function:: observeStateChanges(button)

Binds editor selection change events to the button's ``queryStateHandler`` and
update the button's state when the cursor enters or exits text controllable
with that button.

.. js:function:: updateButtonState(button, state)

  Toggles the buttons controls on or off. Identical to calling
  :js:func:`setOn` or :js:func:`setOff`.

Publicly Accessible Objects
---------------------------

Most of these are used as utilities and have better abstractions elsewhere.
Use with care.

WysiHat.Element
~~~~~~~~~~~~~~~

.. js:class:: WysiHat.Element

A helper object that provides easy access to types of elements.

WysiHat.Paster
~~~~~~~~~~~~~~

.. js:class:: WysiHat.Paster

A helper object that provides the event handler for paste events

WysiHat.Formatting
~~~~~~~~~~~~~~~~~~

.. js:class:: WysiHat.Formatting

  A helper object that contains most of the functions to keep editor
  markup clean and consistent. Please use the editor's
  :js:func:`updateField` and :js:func:`updateEditor` methods when
  syncing the editor and textarea.

.. js:function:: cleanup($element)

  Removes browser added markup such as ``b`` and ``i`` tags. It also
  removes comments, scripts, empty paragraphs, and inline style tags.

.. js:function:: cleanupPaste($element, parentTagName)

  Cleans up a paste container. This includes everything in
  :js:func:`cleanup` as well as resolving newlines into paragraphs and
  `br` tags. When given a ``parentTagName`` it will also remove that tag
  from the pasted content. This is done to prevent nesting blocks such
  as ``h1`` tags.

  Most times you will want to use :js:class:`WysiHat.Paster` or
  :js:func:`Event.fire('paste') <fire>`.

.. js:function:: format($element)

  Prettifies the HTML markup to ease in readability and debugging.

.. js:function:: getBrowserMarkupFrom($element)

  Returns the raw markup form the textarea. Please use
  :js:func:`updateField` to sync.

.. js:function:: getApplicationMarkupFrom($element)

  Returns the raw markup form the editor. Please use
  :js:func:`updateEditor` to sync.

Non-public Internal Classes
---------------------------

BlankButton
~~~~~~~~~~~

.. js:class:: BlankButton

  This is the parent class for all buttons.

.. js:function:: init(name, $editor)

  The main constructor. If you extend it, it should always return
  ``this``.

.. js:function:: setElement(element)

  Links the button instance with its clickable element.

.. js:function:: getHandler()

  Returns the buttons event handler.

.. js:function:: getStateHandler()

  Returns the buttons state handler. This is called frequently. If you
  extend it, make sure it can handle the load.

.. js:function:: setOn()

  Change the button state to indicate that it is active.

  .. note:: Usually you do not need to call this yourself. Look into
    overriding the state handler instead.

.. js:function:: setOff()

  Change the button state to indicate that it is inactive. The same
  warnings as for :js:func:`setOn` apply.

CommandsMixin
~~~~~~~~~~~~~

.. js:class:: CommandsMixin

  This mixin is provided to ensure consistency across buttons and editor
  instances at all times.

.. js:function:: is(type)

  Use this to check for the current state of the selection. Returns
  a boolean of the current state::

    this.is('bold')

.. js:function:: make(type)

  Changes the state of the current selection. Also understand some
  simple aliases for ease of use. ::

    this.make('italicize'); // native name
    this.make('italic'); // alias

.. js:function:: toggle(type)

  Alias to :js:func:`make`.

Browser Compatibility Shims
---------------------------

Currently not documented. These provide cross browser support for
ranges and selections.
