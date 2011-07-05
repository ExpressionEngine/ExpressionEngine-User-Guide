Simple Commerce – Purchase Tag Parameters
=========================================

There are a few parameters that you can use with the Simple Commerce
Purchase tag.

-  `entry\_id="{entry\_id}" <#par_entry_id>`_ *(required)*
-  `success="store/thank\_you" <#par_success>`_ *(required)*

cancel=
-------

::

	cancel="store/cancel"

You may specify a particular Template to display if a purchase is
cancelled mid-transaction. This takes a standard
"Template\_Group/Template" as input, or you may provide a full URL, e.g.
http://example.com/index.php/store/cancel/. If this parameter is not
supplied, your site's main index template will be displayed.

country\_code=
--------------

::

	country_code="DE"

This parameter controls the language that will be used on the initial
PayPal shopping cart / log in screen when someone makes a purchase from
your store. Use the two letter country abbreviation, following the `ISO
3166
standard <http://www.iso.org/iso/en/prods-services/iso3166ma/02iso-3166-code-lists/list-en1.html>`_.
If no parameter is given, a default of 'US' will be used.

currency=
---------

::

	currency="USD"

The three letter representation of the currency for the item prices in
the store, using the ISO 4217 standard. Default is "USD" (U.S. Dollars).
For other currencies, please refer to `official ISO 4217
lising <http://www.iso.org/iso/en/prods-services/popstds/currencycodeslist.html>`_.

decimal=
--------

::

	decimal=","

Change the decimal separator for display. For example, instead of
display 3.95, you can have the price outputted as 3,95.

entry\_id=
----------

::

	entry_id="{entry_id}"

**REQUIRED**. As the Simple Commerce Purchase tag is designed to be used
inside a Channel Entries tag, the {entry\_id} variable of the Channel
Entries tag will normally be used to provide the value. You may also use
a specific entry id to display an item's information outside of a
Channel Entries tag.

show\_disabled=
---------------

::

	show_disabled="yes"

Allows the Simple Commerce Purchase tag to output information for store
items that are not enabled. This can be used in conjunction with an
item\_enabled conditional to display information for enabled / disabled
items. e.g.::

	{if item_enabled == 'n'}    <b>NOT AVAILABLE</b> {if:else}    <p><strong>{item_sale_price}</strong></p>     <p><a href="{buy_now_url}" onclick="window.open(this.href);return false;">Buy Now</a></p>    <p><a href="{add_to_cart_url}" onclick="window.open(this.href);return false;">Add to Cart</a></p>    <p><a href="{view_cart_url}" onclick="window.open(this.href);return false;">View Cart</a></p> {/if}

success=
--------

::

	success="store/thank_you"

**REQUIRED**. You must specify a particular Template to display after a
successful purchase transaction. This takes a standard
"Template\_Group/Template" as input, or you may provide a full URL, e.g.
http://example.com/index.php/store/thank\_you/.
