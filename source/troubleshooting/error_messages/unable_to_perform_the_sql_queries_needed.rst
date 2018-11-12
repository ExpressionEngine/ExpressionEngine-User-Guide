.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Unable to perform the SQL queries needed to install this program.
=================================================================

MySQL returns the error message **"Unable to perform the SQL queries
needed to install this program."**

Troubleshooting
---------------

This error most frequently occurs with some versions of MySQL 5.
ExpressionEngine requires the following database privileges:

-  ``ALTER``

-  ``CREATE``

-  ``DELETE``

-  ``DROP``

-  ``INSERT``

-  ``SELECT``

-  ``UPDATE``

Depending on the configuration of the MySQL server, these permissions
may have to be granted explicitly. Also, ExpressionEngine **does not
work in STRICT_TRANS_TABLES mode**. The MySQL manual will have more
information on the subject.


