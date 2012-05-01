Rich Text Editor Javascript Reference
=====================================

... this document should help with developing tool definitions,
extending, implementing, etc ...


Manually Setting up the Editor
-------------------------------

::

	$('textarea').wysihat({
	    'buttons': ['bold', 'italic', 'underline']
	});


API Reference
-------------

WysiHat
~~~~~~~

name
^^^^

The editor name. Always "WysiHat" in ExpressionEngine. This is used to
prefix editor specific events.

addButton(name, config)
^^^^^^^^^^^^^^^^^^^^^^^

Register a button for use. Not shown in the editor, until it is actually
added to the toolbar. This is usually accomplished through the button
option when attaching the editor.

attach(field, options)
^^^^^^^^^^^^^^^^^^^^^^

Replace the textfield in `field` with a new WysiHat instance. Options
can contain:

- **buttons** - Array of strings, one for each button name. Buttons
  must be registered with addButton before they can be
  shown.

inherit(proto, props)
^^^^^^^^^^^^^^^^^^^^^

Convenience method for prototypal inheritance. Returns a new object
with proto in its prototype chain and an additional `parent` property
which contains proxies to the prototype's methods.

WysiHat.Editor
~~~~~~~~~~~~~~

An object of this class is returned by `WysiHat.attach()`. It implements
the CommandExpando as well as the following methods:

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


WysiHat.Element
~~~~~~~~~~~~~~~

A helper singleton that provides easy access to types of elements.

WysiHat.Paster
~~~~~~~~~~~~~~

A helper singleton that provides the event handler for paste events

WysiHat.Event
~~~~~~~~~~~~~

Main event handling class. Takes care of all internal and external editor
events.

add(eventName, handler)
^^^^^^^^^^^^^^^^^^^^^^^

Add an event handler for a given event name.

has(eventName)
^^^^^^^^^^^^^^

Checks if a handler exists for `eventName`.

run(eventName, state, finalize)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Runs an event handler and calls finalize. Usually you will want `fire()`.

fire(eventName)
^^^^^^^^^^^^^^^

Run all the required code to dispatch the event. This function understands
all built in commands, such as `undo`, `redo`, and `paste`.

textChange(before [, after])
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Marks a chunk of text changes as undoable.

isKeyCombo(strName, evt)
^^^^^^^^^^^^^^^^^^^^^^^^

Identifies if the current event matches a specified key event name. The
name must takes on the form: `ctrl-shfit-c`

isEvent(name, evt)
^^^^^^^^^^^^^^^^^^

Identifies a named key event such as paste or undo.

getState()
^^^^^^^^^^

Returns the editors current html contents and selection.

WysiHat.Undo
~~~~~~~~~~~~

A simple undo stack. Specifically made to handle text changes,
it will try to find the smallest difference in two strings rather
than saving the whole thing.

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