.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

ExpressionEngine has detected the modification of a core file
=============================================================

ExpressionEngine displays the error: **One or more core files have been altered**

Troubleshooting
---------------

This means that one of the files that runs ExpressionEngine like the front-end index.php file or your control panel admin.php file has changed on disk. You will see this message after intentionally modifying those files, to change the system path for instance, or when updating a major version that instructs you to replace those files.

However, ExpressionEngine is careful to alert you since these files are executed by the server every time that ExpressionEngine runs. If your server is compromised, these types of files are common targets for hackers, since they know they will be requested frequently.

If you made these changes yourself, you can click Accept and the modifications will be accepted by the system. If you did not alter the files yourself, it may indicate a hacking attempt. Check the files listed for any suspicious contents (JavaScript or iFrames). If you **do** find that your server was compromised or are unsure of how to check or what to do about it, please contact your host and a web professional.
