<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->
# Find & Replace

You can find and replace content in your entries in a robust and safe manner. On the Find & Replace page in the module, you can select in which fields you want to perform the action, as well as limit the action to the selected categories. You then enter text to find and submit the form, after which you will be presented with a preview of the found entries. You can then select in which entries the text will replaced with the given replacement text. The Find & Replace action is case sensitive.

The list of allowed Channels and fields in which to perform the Find & Replace action respects the permissions set per member group, so members can only manipulate their permitted entries. On top of that, each Find & Replace action is logged in the Replace Log, where you can see exactly who replaced what with what and when, along with a list of the affected entries. Again, non-Super Admin members can only see their own actions logged in the Replace Log, while Super Admins can see all actions.

Any search indexes for entries affected by a Find & Replace action will be updated automatically.

### Channel field support

The Find & Replace utility allows you to target Titles as well as text-based channel fields like Text, Textarea, RTE and various third party wysiwyg-fieldtypes. It also supports Grid and Matrix fields.