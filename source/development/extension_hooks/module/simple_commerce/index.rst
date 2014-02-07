Simple Commerce Module Extension Hooks
======================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

simple_commerce_evaluate_ipn_response
-------------------------------------

.. function:: simple_commerce_evaluate_ipn_response($this, $result)

  Take over processing of PayPal's response to an IPN confirmation.

  How it's called::

    $result = ee()->extensions->universal_call('simple_commerce_evaluate_ipn_response', $this, $result);
    if (ee()->extensions->end_script === TRUE) return;

  :param object $this: The current Simple Commerce object including all
    data relating to the purchase and debug state
  :param string $result: PayPal's response to the IPN confirmation
  :returns: Modified IPN response (``$result``)
  :rtype: String

  .. versionadded:: 1.5.1

simple_commerce_perform_actions_end
-----------------------------------

.. function:: simple_commerce_perform_actions_end($this, $row)

  After a purchase is recorded, do more processing.

  How it's called::

    ee()->extensions->universal_call('simple_commerce_perform_actions_end', $this, $query->row());
    if (ee()->extensions->end_script === TRUE) return;

  :param object $this: The current Simple Commerce object including all
    data relating to the purchase and debug state
  :param array $row: The database record for the store item
  :rtype: Void

  Useful object variables:

  - ``$this->post`` - array of information about the purchase
  - ``$this->debug`` - whether or not debug mode is enabled

  .. versionadded:: 1.5.1

simple_commerce_perform_actions_start
-------------------------------------

.. function:: simple_commerce_perform_actions_start($this, $row)

  After a purchase is recorded, do more processing before EE's
  processing.

  How it's called::

    ee()->extensions->universal_call('simple_commerce_perform_actions_start', $this, $query->row());
    if (ee()->extensions->end_script === TRUE) return;

  :param object $this: The current Simple Commerce object including all
    data relating to the purchase and debug state
  :param array $row: The database record for the store item
  :rtype: Void

  .. versionadded:: 1.5.1
