Import from XML
===============

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Tools --> Utilities --> Import Utilities --> Member Import Utility`

.. note:: There is no undo for importing members. If you make a mistake
	or there is an error in your data, there is not a simple method to
	correct it. **Always backup your database before using this 
	utility!**

**WARNING:** The <member\_id> tag will cause the import utility to
overwrite any existing members with the same ID. It is generally
recommended that you do not use a <member\_id> tag, so when transferring
users from one system to another, ExpressionEngine can automatically
create new unique IDs for each member without overwriting any existing
members.

The Import from XML utility enables you import members from an XML file
in ExpressionEngine's :doc:`Member XML Format <member_xml_format>`.

The utility itself contains the instructions needed to assist you during
the XML import, and you should read each area carefully before
performing the import. Username, Screen Name, and Email are required,
and all standard member database fields are available to you, with the
exception of "unique\_id". Custom member fields are also available, and
if your xml includes elements that do not currently exist, the utility
will give you the opportunity to add new custom member fields for those
elements. It is recommended that you do not use member\_id, so
ExpressionEngine can automatically generate unique Member IDs when the
members are later imported from the XML file.

Passwords will be randomly created for members who do not have a
<password> element, and those members will need to use the "Forgot
Password" link in order to log in. Passwords of the "text" type will be
encrypted for you. Pre-encrypted passwords will be inserted into the
database as-is. Please see the notes on the :doc:`password tag
</cp/tools/utilities/member_import/member_xml_format>` for more details.
