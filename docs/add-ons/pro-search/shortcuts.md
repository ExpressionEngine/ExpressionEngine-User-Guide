<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->
# Search Shortcuts

Shortcuts are saved searches. Any search query can be saved as a shortcut, given a name, and then the search query can be triggered with that name. These shortcuts can be grouped and ordered, allowing you to generate a list of readable links to predefined searches.

For example, a complicated search query can result in a long URL like this one:

`domain.com/search/eyJyZXN1bHRfcGFnZSI6Im5ld3NcL3NlYXJjaCIsImtleXdvcmRzIjoiaGVsbG8gd29ybGQiLCJjb2xsZWN0aW9uIjoibmV3cyJ9`

If you save this search and name it hello, you will be able to trigger the same search results using this URL:

`domain.com/search/hello`

## Saving Shortcuts

Shortcuts are saved in groups, just like native channel fields, categories and statuses. Make sure you create a shortcut group before saving your shortcuts. There are three ways of saving them.

#### Manually

You can manually save and edit shortcuts. Select a shortcut group and add a shortcut to it. You then give it a name, a label and any amount of parameters, in a key/value format.

#### From the Search Log

When viewing the Search Log, you can click the arrow on the right of each logged search query. This will lead you to the Create Shortcut screen, where you just have to select a group, name and label your new shortcut. The parameters will already be filled out for you.

#### From the front end

You can add a Save tag to your template to generate a form to save a query, allowing you to use your own search form and save shortcuts on the spot.

## Displaying Shortcuts

Use the Shortcuts tag to display a list of shortcuts. By default, these will be displayed in the order they appear in their group, which makes this tag useful for creating custom navigation.

## Displaying Search Results by Shortcut

To display the search results based on a given shortcut, use the shortcut parameter. This parameter is available in the Form tag, Filters tag, URL tag, and Results tag, and is required in the latter to trigger the shortcut search results. A typical Results tag using both encoded queries and shortcuts can look like this:

    {exp:low_search:results query="{segment_2}" shortcut="{segment_2}"}
      ...
    {/exp:low_search:results}