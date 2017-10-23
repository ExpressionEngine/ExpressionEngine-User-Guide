Spam Service
============

.. contents::
  :local:

.. highlight:: php

Introduction
------------

ExpressionEngine's Spam service gives developers a general method for
classifying any text as spam or ham. The Spam service requires the
Spam Module to be installed.

Class Methods
-------------

::

  ee('Spam')->isSpam($text)

isSpam takes a single parameter, a string, and returns TRUE if it's
classified as spam and FALSE otherwise. The classify method will use
the same classifier used for catching comment and forum spam. If you
wish to use a custom classifier please see the documentation for the
Spam Module. If the Spam Module is not installed this method will
always return FALSE.

::

	ee('Spam')->moderate($content_type, $entity, $document, $optional_data)

The moderate method will store content flagged as spam to the Spam Queue. Once content is stored Admins can use the Spam Module Control Panel to deal with spam, either flagging false positives and letting that content be published, or confirming that it's spam. In both cases, these actions train the Spam module for your site's unique content.

The ``moderate()`` method has four required parameters:

	- ``$content_type`` - This **MUST** be your add-on's package name (matching your folder name), which will identify it in the control panel and let ExpressionEngine know which add-on to use with this item in the Spam Queue.
	- ``$entity`` - The Model object for this piece of content. Can be an entity that has been saved to the database, or unsaved.
	- ``$document`` - The plain text that was used for ``isSpam()``. Used for spam classification.
	- ``$optional_data`` - Any additional data of any variable type that you'd like to be made available to your spam handler. This is essentially a bonus MEDIUMTEXT column that you can use for any purpose.

Spam Moderation File (``spam.package_name.php``)
------------------------------------------------

To handle approval and rejection of Spam, an add-on must contain a ``spam.package_name.php`` file (where ``package_name`` is your package's folder name) with a class name matching the package name with the first character capitalized and suffixed with ``_spam``, e.g.: ``Package_name_spam``. The class must implement the ``SpamModerationInterface`` interface::

	<?php

	use EllisLab\Addons\Spam\Service\SpamModerationInterface;

	class Package_name_spam implements SpamModerationInterface {

		/**
		 * Approve Trapped Spam
		 *
		 * @param  object $my_entity The Model object saved in the Spam Queue
		 * @param  mixed $my_extra_data Optional data saved to the Spam Queue
		 * @return void
		 */
		public function approve($my_entity, $my_extra_data)
		{
			// take actions when the item is approved, not spam, e.g.:
			$my_entity->status = 'open';
			$my_entity->save();
		}

		/**
		 * Reject Trapped Spam
		 *
		 * @param  object $my_entity The Model object saved in the Spam Queue
		 * @param  mixed $my_extra_data Optional data saved to the Spam Queue
		 * @return void
		 */
		public function reject($my_entity, $my_extra_data)
		{
			// take actions when the item is rejected, is spam, e.g.:
			$my_entity->delete();
		}
	}
	// END CLASS


