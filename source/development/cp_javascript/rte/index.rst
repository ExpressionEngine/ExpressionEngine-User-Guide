Rich Text Editor Javascript
===========================

ExpressionEngine's rich text editor has a clean API that hides away a lot
of the finicky browser differences.

.. contents::
  :local:

.. highlight:: js

Prerequisites
-------------

Before you dive into RTE button development, please make sure that you
have a solid understanding of :doc:`ranges and selections
<rangesandselections>`.

You should also familiarize yourself with the :doc:`WysiHat
API<wysihat_api>`.

Registering Buttons
-------------------

Buttons are loaded into the editor in two distinct steps. First they
must be registered with WysiHat. Then they can be added to the WysiHat
toolbar using just their shortname.

To register a button, you must use the :js:func:`addButton` function on
the WysiHat global object. It requires a name, and an object of
properties and methods. One of these properties is required: ``label``.
It will be the text on your button.

::

  WysiHat.addButton("ytLink", {
      'label': EE.rte.quickLink.add
      // properties and methods
  });

Your button, named `ytLink`, is now ready for use. You can also declare
a ``toggle-text``, which will become the button's label when the button
is activated.

Responding to Events
--------------------

A button needs to be able to respond to its click event. This is done in
the button's ``handler`` method. Let's add one now: ::

  WysiHat.addButton("ytLink", {
      'label': EE.rte.ytLink.add,
      handler: function()
      {
          alert('clicked!');
      }
  });

This works, but it's not particularly interesting. Luckily the editor
provides us with some utility methods to manipulate the current
selection. Let's begin with a simple requirement: the user must have
text selected. ::

  WysiHat.addButton("ytLink", {
      'label': EE.rte.ytLink.add,
      handler: function()
      {
          if (this.Selection.toString() == '')
          {
              alert('you must select text');
              return;
          }
      }
  });

.. note:: Do not return ``false`` when bailing out early as we are doing
  here. The return value is reserved for triggering async mode, covered
  below.

Here we are using the editor's selection utility to quickly check for
the contents of the selection. The selection utility is used for simple
range manipulation. It is merely concerned with text, so falling back to
ranges may still be appropriate.

Modifying the Text
------------------

With that out of the way, we will want to actually create a YouTube
link. To do that, we can use the button's ``make`` method, which will
handle the more intricate details for us. ::

  WysiHat.addButton("ytLink", {
      'label': EE.rte.ytLink.add,
      handler: function()
      {
          if (this.Selection.toString() == '')
          {
              alert('you must select text');
              return;
          }

          this.make('link', 'http://youtube.com');
      }
  });

Now it would be nice if we could ask the user for a video ID to use. So
we will add an overlay to prompt the user for an ID. ::

  WysiHat.addButton("ytLink", {
      'label': EE.rte.ytLink.add,
      handler: function(state)
      {
          if (this.Selection.toString() == '')
          {
              alert('you must select text');
              return;
          }
          this.state = state;
          this._prompt('Youtube ID:');
      },
      _prompt: function(text)
      {
          var $input = $('<input type="text" value="" />');
          this.$target = $('<form>', {
              html: '<span>'+text+'</span>',
              submit: $.proxy(this, '_createLink', $input)
          })
          .append($input)
          .dialog({
              modal: true,
              open: function() {
                  setTimeout($.proxy($input, 'focus'), 10);
              }
          });
      },
      _createLink: function($input)
      {
          this.$target.dialog('close');
          this.Selection.set(this.state.selection);
          this.make('link', 'http://youtube.com/watch?v=' + $input.val());
          return false;
      }
  });

That was a lot, let's look at it in more detail. The ``_prompt`` method
is not very interesting, it is mostly jQuery UI boilerplate. In
``_createLink`` we first close the dialog, reselect the editor, and then
create the link.

What we didn't cover above is that the handler always receives two
parameters. The first is the starting state of the editor. This contains
the current HTML and the selection as it is returned from the selection
utility. We save this and reselect the text when we're ready to modify
the editor again.

So now let's talk about the second parameter ...

Async Mode
----------

While the above works fairly well at first glance, it breaks the
editor's undo feature. Normally, the editor stores the state changes for
all actions to make sure that undoing works intuitively. This storing
action runs after the handler is completely. When we do something
asynchronous, such as waiting for an AJAX request or waiting for user
input, the new state isn't any different from the old.

To account for this, the finalizing code is passed to your handler as
the second parameter. To signal that you want to run the finalizer
yourself, you must return ``false`` from the handler. Let's retrofit our
code to do this. ::

      handler: function(state, finalize)
      {
          if (this.Selection.toString() == '')
          {
              alert('you must select text');
              return;
          }
          this.state = state;
          this.finalize = finalize;

          this._prompt('Youtube ID:');
          return false;
      },

      // [prompt ...]

      _createLink: function($input)
      {
          this.$target.dialog('close');
          this.Selection.set(this.state.selection);
          this.make('link', 'http://youtube.com/watch?v=' + $input.val());
          this.finalize();
          return false;
      }

.. note:: You must **always** call finalize. Even if an AJAX request
  fails or the user decides to cancel his or her action.

Quick Reference
---------------

Button Options
~~~~~~~~~~~~~~

- ``label`` - the label on the button
- ``toggle-text`` - alternative label, this is show in the on state
- ``type`` - should be set to `"select"` when creating a dropdown (e.g.
  headings tool)

Button Properties
~~~~~~~~~~~~~~~~~

- ``name`` - the button name
- ``parent`` - parent class (use when extending)
- ``$editor`` - the editor element
- ``$field`` - the edited textarea
- ``$element`` - the button element
- ``Event`` - WysiHat Event Core
- ``Commands`` - WysiHat Commands Object
- ``Selection`` - WysiHat Selection Utility

Button Methods
~~~~~~~~~~~~~~

- ``init`` - constructor
- ``handler`` - event handler
- ``query`` - state change handler
- ``setOn`` - manually activate button
- ``setOff`` - manually deactivate button
- ``is`` - state query method [cannot be extended]
- ``make`` - selection state change method [cannot be extended]
- ``toggle`` - alias to ``make``
