<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Dynamic Parameters

The `{exp:channel:entries}` tag has a Dynamic Parameters feature that permits its parameters to be set "on the fly" using POST data submitted via a form (or GET data submitted via a form or in the URL). A practical use for this is to create some display options in a form on your page that your visitors can use to select their preferred page view.

NOTE: **Note:** This feature will only work if page caching is turned OFF for the template in which it is being used.

Every [Parameter](channels/entries.md#parameters) available to the channel tag can be set dynamically. However, as a security precaution you must specify which parameters you'll allow to be dynamic within a given channel tag, like this

    {exp:channel:entries dynamic_parameters="orderby|limit|category"}

In the above example you would be allowing the orderby, limit, and category parameters. Note that the allowed parameters are being separated with a "pipe" character: |.

Once you've enabled the parameters as indicated above, you can create a form on one of your pages to generate the parameters dynamically. Here's an example of such a form:

Note that each form field is named the same as the parameter name, and the form "action" must point to the template in which it is being used.

    <form method="post" action="{path='template_group/template_name'}">
      <input type="hidden" name="csrf_token" value="{csrf_token}" />

        <select name="orderby">
            <option value="date">Sort By:</option>
            <option value="date">Date</option>
            <option value="title">Title</option>
            <option value="comment_total">Most Comments</option>
        </select>
        <select name="sort">
            <option value="asc">Order In:</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
        </select>
        <select name="category[]">
            <option value="">Result Limit:</option>
            <option value="1">Dogs</option>
            <option value="3">Cats</option>
            <option value="5">Gerbils</option>
        </select>

        <input type="submit" value="Go!">
    </form>

Note the inclusion of the `[]` at the end of the field name. This allows more than one option to be specified for the category field:

    <select name="category[]">

By default, if multiple values are submitted for a single field name, they will be treated as pipe delimited values by the tag. In the above example, if both "Dogs" and "Cats" are selected, then entries in either the Dogs category or the Cats category would be returned.

To designate multiple values be treated as an inclusive stack, add a `[&]` to the field name in the parameter:

    dynamic_parameters="orderby|limit|category[&]"

In this example, if both "Dogs" and "Cats" are selected, only entries in both the Dogs and the Cats categories would be returned.

NOTE: **Note:** The `csrf_token` field is required to protect against cross-site request forgery attacks.

NOTE: **Note:** If you have pagination links on your page they will not retain the dynamically generated values using this feature.
