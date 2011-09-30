Dynamic Parameters
==================

The {exp:channel:entries} tag has a Dynamic Parameters feature that
permits its parameters to be set "on the fly" using POST data submitted
via a form. A practical use for this is to create some display options
in a form on your page that your visitors can use to select their
preferred page view.

**Note:** This feature will only work if page caching is turned OFF for
the template in which it is being used.

Every :ref:`Parameter <channel-entries-parameters>` available to the channel tag can be
set dynamically. However, as a security precaution you must specify
which parameters you'll allow to be dynamic within a given channel tag,
like this

::

	{exp:channel:entries  dynamic_parameters="orderby|limit|sort"}

In the above example you would be allowing the orderby, limit, and sort
parameters. Note that the allowed parameters are being separated with a
"pipe" character: \|

Once you've enabled the parameters as indicated above, you can create a
form on one of your pages to generate the parameters dynamically. Here's
an example of such a form:

Note that each form field is named exactly the same as the parameter
name, and the form "action" must point to the template in which it is
being used. 

::

	<form method="post" action="{path='template_group/template_name'}">
	    <select name="orderby">
	        <option value="date">Sort By:</option>
	        <option value="date">Date</option>
	        <option value="title">Title</option> <option value="comment_total">Most Comments</option>
	    </select>
	    <select name="sort"> 
	        <option value="asc">Order In:</option> 
	        <option value="asc">Ascending</option> 
	        <option value="desc">Descending</option> 
	    </select>
	    <select name="limit"> 
	        <option value="10">Result Limit:</option> 
	        <option value="10">10</option> 
	        <option value="20">20</option> 
	        <option value="30">30</option> 
	    </select>
	    
	    <input type="submit" value="Go!" />  
	</form>

**Note:** If you have pagination links on your page they will not retain
the page layout options created dynamically using this feature.
