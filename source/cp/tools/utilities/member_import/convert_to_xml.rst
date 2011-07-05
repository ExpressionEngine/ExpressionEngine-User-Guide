Convert Delimited Data to XML
=============================

Control Panel Location: Admin > Utilities > Import Utilities > Member
Import Utility > Convert Delimited Data to XML
The Convert Delimited Data to XML utility enables you to take member
information from a third party application that exports a delimited data
file and create an XML file in ExpressionEngine's `Member XML
Format <member_xml_format.html>`_. Nearly all delimited formats are
accepted, such as the common tab-delimited, comma-delimited, and
quote-enclosed formats.

The utility itself contains the instructions needed to assist you with
the XML creation, and you should read each area carefully as you
proceed. Username, Screen Name, and Email are required, and all standard
member database fields are available to you. It is recommended that you
do not use member\_id, so ExpressionEngine can automatically generate
unique Member IDs when the members are later imported from the XML file.

**Note:** Many applications export field headings as the first line of a
delimited data file. You must delete this row, or it will be included as
a member element. Field assignment takes place during the conversion
process, so those field headings will not be necessary to define your
file's structure.
