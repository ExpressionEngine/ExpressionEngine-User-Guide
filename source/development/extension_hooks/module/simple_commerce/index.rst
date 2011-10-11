Simple Commerce Module Extension Hooks
======================================

.. contents::
	:local:
	:depth: 1


simple\_commerce\_evaluate\_ipn\_response
-----------------------------------------

Take over processing of PayPal's response to an IPN confirmation

::

	$result = $this->extensions-> universal_call('simple_commerce_evaluate_ipn_response', $this, $result); if ($this->extensions->end_script === TRUE) return;

$this
~~~~~

The current Simple Commerce object including all data relating to
the purchase and debug state

$result
~~~~~~~

PayPal's response to the IPN confirmation

:returns:
    String

Added in v1.5.1

simple\_commerce\_perform\_actions\_end
---------------------------------------

After a purchase is recorded, do more processing

::

	$edata = $this->extensions-> universal_call('simple_commerce_perform_actions_end', $this, $query->row); if ($this->extensions->end_script === TRUE) return;

$this
~~~~~

The current Simple Commerce object including all data relating to
the purchase and debug state

$query->row
~~~~~~~~~~~

The database record for the store item

:returns:
    void

Additional Notes
^^^^^^^^^^^^^^^^

Useful object variables: $this->post - array of information about the
purchase $this->debug - whether or not debug mode is enabled.

Added in v1.5.1

simple\_commerce\_perform\_actions\_start
-----------------------------------------

After a purchase is recorded, do more processing before EE's processing

::

	$edata = $this->extensions-> universal_call('simple_commerce_perform_actions_start', $this, $query->row); if ($this->extensions->end_script === TRUE) return;

$this
~~~~~

The current Simple Commerce object including all data relating to
the purchase and debug state

$query->row
~~~~~~~~~~~

The database record for the store item

:returns:
    void

Added in v1.5.1
