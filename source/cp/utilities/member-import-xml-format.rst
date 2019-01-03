.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Member XML Format
=================

ExpressionEngine utilizes a special XML format for member data. ::

	<members>
		<member>
			<username>brettb</username>
			<screen_name>Brett Bretterson</screen_name>
			<password type="md5">653132ffd94b986bf2bb806b3c67d190</password>
			<email>brett@example.com</email>
		</member>
		<member>
			<username>robr</username>
			<screen_name>Robert Robertson</screen_name>
			<password type="sha1">1b4395b877794a16a7f4db5747380dbaafc7ff18</password>
			<email>robert@example.com</email>
		</member>
	</members>

The XML tags are identical to their database field counterparts from the
exp_members table. All fields are allowed except for "unique_id".

.. important:: The <member_id> tag will cause the import utility to
   overwrite any existing members with the same ID. It is generally
   recommended that you do not use a <member_id> tag, so when transferring
   users from one system to another, ExpressionEngine can automatically
   create new unique IDs for each member without overwriting any existing
   members.


Required Tags
-------------

There are a few tags common to every ExpressionEngine member XML file,
as follows.

Root Tag
~~~~~~~~

XML documents require a root tag surrounding all of the elements. For
the ExpressionEngine member XML format, the required root tag is
<members></members>.

Element Tag
~~~~~~~~~~~

Each XML element of your member data must be contained in a
<member></member> tag block.

Member Data Tags
~~~~~~~~~~~~~~~~

There are three required tags to form a valid member element.

-  <username>
-  <screen\_name>
-  <email>

Password Tag
------------

The <password> tag has a special attribute, type. This allows you to
provide contextual information for the password.

type=
~~~~~

"text"
^^^^^^

::

	<password type="text">pa55w0id</password>

"text" type passwords are plain text, unencrypted passwords. When
importing members from an XML file, ExpressionEngine will automatically
encrypt "text" type passwords for you before inserting them into the
database. This allows you to keep existing passwords when importing
member data from a third party application that does not store encrypted
passwords.

"md5"
^^^^^

::

	<password type="md5">653132ffd94b986bf2bb806b3c67d190</password>

"md5" passwords are those that have been encrypted with an RSA Data
Security, Inc. MD5 Message-Digest Algorithm (md5) hash. `[RFC
1321] <http://www.faqs.org/rfcs/rfc1321.html>`_

"sha1"
^^^^^^

::

	<password type="sha1">1b4395b877794a16a7f4db5747380dbaafc7ff18</password>

"sha1" passwords are those that have been encrypted with a US Secure
Hash Algorithm 1 (sha1) hash. `[RFC
3174] <http://www.faqs.org/rfcs/rfc3174.html>`_

.. note:: If you import encrypted passwords of one type and your
	ExpressionEngine installation was configured with a different type
	of encryption, the passwords will not work, and users will need to
	use the "Forgot Password" link to log in.



Available Member Data Tags
--------------------------

-  <accept\_admin\_email>
-  <accept\_messages>
-  <accept\_user\_email>
-  <authcode>
-  <avatar\_filename>
-  <avatar\_height>
-  <avatar\_width>
-  <cp\_theme>
-  <display\_avatars>
-  <display\_signatures>
-  <email>
-  <forum\_theme>
-  <group\_id>
-  <in\_authorlist>
-  <ip\_address>
-  <join\_date>
-  <language>
-  <last\_activity>
-  <last\_bulletin\_date>
-  <last\_comment\_date>
-  <last\_email\_date>
-  <last\_entry\_date>
-  <last\_forum\_post\_date>
-  <last\_view\_bulletins>
-  <last\_visit>
-  <localization\_is\_site\_default>
-  <member\_id>
-  <notepad>
-  <notepad\_size>
-  <notify\_by\_default>
-  <notify\_of\_pm>
-  <password>
-  <photo\_filename>
-  <photo\_height>
-  <photo\_width>
-  <pmember\_id>
-  <private\_messages>
-  <profile\_theme>
-  <quick\_links>
-  <quick\_tabs>
-  <screen\_name>
-  <sig\_img\_filename>
-  <sig\_img\_height>
-  <sig\_img\_width>
-  <signature>
-  <smart\_notifications>
-  <template\_size>
-  <time\_format>
-  <timezone>
-  <tmpl\_group\_id>
-  <total\_comments>
-  <total\_entries>
-  <total\_forum\_posts>
-  <total\_forum\_topics>
-  <tracker>
-  <upload\_id>
-  <username>
-  <channel\_id>

