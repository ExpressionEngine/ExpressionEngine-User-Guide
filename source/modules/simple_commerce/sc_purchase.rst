Simple Commerce – Purchase Tag
==============================

The Simple Commerce Purchase tag is the primary tag used to display
information about items in your store. It is designed to be used within
a channel entries tag, as store items are directly associated to channel
entries.

Here is a simple example of a possible usage of this tag::

	 {exp:simple_commerce:purchase entry_id="{entry_id}" success="site/success" cancel="site/index"}  {item_name}   <p><strong>{item_sale_price}</strong></p>  {if item_type == "purchase"} <p><a href="{buy_now_url}" onclick="window.open(this.href);return false;">Buy Now</a></p> <p><a href="{add_to_cart_url}" onclick="window.open(this.href);return false;">Add to Cart</a></p> <p><a href="{view_cart_url}" onclick="window.open(this.href);return false;">View Cart</a></p> {/if}  {if item_type == "subscription"} <p><a href="{subscribe_now_url}" onclick="window.open(this.href);return false;">Subscribe Now</a></p> {/if}  {/exp:simple_commerce:purchase}

Parameters
----------

The Simple Commerce Purchase tag has a few
`parameters <sc_parameters.html>`_ that can be used to control the
behavior of the tag.

Variables
---------

Inside of the tag you can use a number of
`variables <sc_variables.html>`_ to display different information such
as the item's name, its price, how many times it has been purchased, and
various other details.
