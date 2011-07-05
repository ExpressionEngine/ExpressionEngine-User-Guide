Simple Commerce Module Extension Hooks
======================================

In the menu below you will find links to details about available
extension hooks in the Simple Commerce module
(mod.simple\_commerce.php).


Added in v1.5.1simple\_commerce\_evaluate\_ipn\_response
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Take over processing of PayPal's response to an IPN confirmation

::

	$result = $this->extensions-> universal_call('simple_commerce_evaluate_ipn_response', $this, $result); if ($this->extensions->end_script === TRUE) return;

$this
    The current Simple Commerce object including all data relating to
    the purchase and debug state
$result
    PayPal's response to the IPN confirmation
*Return value*
    String

Added in v1.5.1simple\_commerce\_perform\_actions\_end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

After a purchase is recorded, do more processing

::

	$edata = $this->extensions-> universal_call('simple_commerce_perform_actions_end', $this, $query->row); if ($this->extensions->end_script === TRUE) return;

$this
    The current Simple Commerce object including all data relating to
    the purchase and debug state
$query->row
    The database record for the store item
*Return value*
    void

Additional Notes
^^^^^^^^^^^^^^^^

Useful object variables: $this->post - array of information about the
purchase $this->debug - whether or not debug mode is enabled.

Added in v1.5.1simple\_commerce\_perform\_actions\_start
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

After a purchase is recorded, do more processing before EE's processing

::

	$edata = $this->extensions-> universal_call('simple_commerce_perform_actions_start', $this, $query->row); if ($this->extensions->end_script === TRUE) return;

$this
    The current Simple Commerce object including all data relating to
    the purchase and debug state
$query->row
    The database record for the store item
*Return value*
    void


