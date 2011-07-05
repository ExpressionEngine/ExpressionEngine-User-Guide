Javascript Controller Extension Hooks
=====================================

In the menu below you will find links to details about available
extension hooks in the css controller (css.php).


Added in v2.1.2cp\_css\_end
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Allows you add custom CSS to every Control Panel page. ::

	$str = $this->extensions->call('cp_css_end');

*Return value*
    String


