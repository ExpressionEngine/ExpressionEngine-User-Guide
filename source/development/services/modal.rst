CP/Modal Service
================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

Simple Example
--------------

Adding a modal to the control panel is a straightforward matter of adding it
to the Modal service::

  ee('CP/Modal')->addModal($name, $html);

Or in a view::

  <?php ee('CP/Modal')->startModal($name); ?>
  <div class="modal-wrap modal-test">
  	<div class="modal">
  		<div class="col-group">
  			<div class="col w-16">
  				<div class="box">
  					...
  				</div>
  			</div>
  		</div>
  	</div>
  </div>
  <?php ee('CP/Modal')->endModal(); ?>

CP/Modal Service Methods
------------------------

.. namespace:: EllisLab\ExpressionEngine\Service\Modal

.. class:: ModalCollection

.. method:: addModal($name, $data)

  Adds a named modal to the collection

  :param string $name: The name of the modal
  :param string $data: The contents of the modal
  :returns: $this
  :rtype: ModalCollection

.. method:: startModal()

  This will start a new modal overwriting any previously defined modal of the same name.

  :param string $name: The name of the modal
  :rtype: Void

.. method:: endModal()

  Ends the modal adding the modal to the collection based on the most recently specified name via startModal.

  :rtype: Void

.. method:: getModal($name)

  Gets a named modal from the collection

  :param string $name: The name of the modal
  :returns: The data stored for the named modal
  :rtype: Mixed

.. method:: getAllModals()

  Gets all the modals stored in this collection

  :returns: An array of stored modal data
  :rtype: Array
