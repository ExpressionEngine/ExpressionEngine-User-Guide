Import File Converter
=====================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer --> Utilities --> File Converter`

.. Overview

The Convert Delimited Data to XML utility enables you to take member information from a third party application that exports a delimited data file and create an XML file in ExpressionEngine’s Member XML Format. Nearly all delimited formats are accepted, such as the common tab-delimited, comma-delimited, and quote-enclosed formats.

The utility itself contains the instructions needed to assist you with the XML creation, and you should read each area carefully as you proceed. Username, Screen Name, and Email are required, and all standard member database fields are available to you. It is recommended that you do not use member_id, so ExpressionEngine can automatically generate unique Member IDs when the members are later imported from the XML file.

.. note:: Many applications export field headings as the first line of a delimited data file. You must delete this row, or it will be included as a member element. Field assignment takes place during the conversion process, so those field headings will not be necessary to define your file’s structure.

.. Screenshot (optional)

.. Permissions

Permission Restrictions
-----------------------

* Access Tools sections: Utilities
* Access Tools sections: Import




Fields
------

.. contents::
  :local:
  :depth: 1

.. Each Field

Member file
~~~~~~~~~~~

The delimited file to convert. Files must be an allowed file type in order to upload.

Delimiting character
~~~~~~~~~~~~~~~~~~~~

Character used to delimit the above file.


Enclosing character
~~~~~~~~~~~~~~~~~~~

Character that encloses your data.

