Simple Commerce – Purchase Tag Variables
========================================

There are a number of variables that you can use inside the
{exp:simple\_commerce:purchase} tag, as follows.


Item Details
------------

item\_id
~~~~~~~~

::

	{item_id}

The store item's id.

item\_name
~~~~~~~~~~

::

	{item_name}

The descriptive name of the item.

item\_enabled
~~~~~~~~~~~~~

::

	{item_enabled}

Whether or not the store item is enabled (y/n). This can be useful if
you use custom queries to access information about your store items. If
the item is not enabled ("n"), the {exp:simple\_commerce:purchase} tag
will not output information for that item.

item\_purchases
~~~~~~~~~~~~~~~

::

	{item_purchases}

The number of times the item has been purchased.

item\_regular\_price
~~~~~~~~~~~~~~~~~~~~

::

	{item_regular_price}

The item's regular price.

item\_sale\_price
~~~~~~~~~~~~~~~~~

::

	{item_sale_price}

The item's sale price.

item\_use\_sale
~~~~~~~~~~~~~~~

::

	{item_use_sale}

Whether or not the item is on sale (y/n). Useful in conditionals and
custom queries. If the item is marked as on sale, the PayPal purchase
links will automatically use the sale price.

item\_type
~~~~~~~~~~

::

	{item_type}

Whether item is a recurring item (subscription/purchase). Useful in
conditionals and custom queries.

**Note:** Recurring payments cannot be made using the shopping cart.
Thus item\_type conditionals should be used if you offer cart links and
are mixing recurring and non-recurring items.

Purchase Links
--------------

add\_to\_cart\_url
~~~~~~~~~~~~~~~~~~

::

	<a href="{add_to_cart_url}" onclick="window.open(this.href);return false;">Add to Cart</a>

The PayPal URL to add the item to the PayPal shopping cart. The example
shown is a typical usage as a popup link. Recurring payments *cannot* be
made using the cart.

buy\_now\_url
~~~~~~~~~~~~~

::

	<a href="{buy_now_url}" onclick="window.open(this.href);return false;">Buy Now</a>

The "Buy Now" PayPal URL. The example shown is a typical usage as a
popup link.

view\_cart\_url
~~~~~~~~~~~~~~~

::

	<a href="{view_cart_url}" onclick="window.open(this.href);return false;">View Cart</a>

The PayPal URL to view the contents of the shopping cart. The example
shown is a typical usage as a popup link.

view\_cart\_url
~~~~~~~~~~~~~~~

::

	<a href="{subscribe_now_url}" onclick="window.open(this.href);return false;">Subscribe Now</a>

The "Subscribe Now" PayPal URL. The example shown is a typical usage as
a popup link.

Purchase Buttons
----------------

Purchase buttons are variable pairs, and enclose the text used for the
button label.

add\_to\_cart\_button
~~~~~~~~~~~~~~~~~~~~~

::

	{add_to_cart_button}Add to Cart{/add_to_cart_button}

A button that adds the item to the PayPal shopping cart.

buy\_now\_button
~~~~~~~~~~~~~~~~

::

	{buy_now_button}Buy Now{/buy_now_button}

A "Buy Now" PayPal button.

view\_cart\_button
~~~~~~~~~~~~~~~~~~

::

	{view_cart_button}View Cart{/view_cart_button}

A button to view the contents of the shopping cart.
