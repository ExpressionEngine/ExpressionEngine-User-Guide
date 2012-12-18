404 Pages
---------

In addition to the Throttling feature, ExpressionEngine allows you to
specify a particular Template to display in cases where the requested
page does not exist.

The setting is located at: :menuselection:`Design --> Templates --> Global Preferences`

**Note:** The setting is a site-wide preference.

It is important to note that there are limitations when it comes to what
will trigger this "404" type Template to display. **ExpressionEngine
will only display the 404 Template if the requested Template Group in
the URL does not exist**.

Due to the dynamic nature of EE's URL structure, there is no guarantee
about exactly what any particular URL segment represents beyond the
first segment. Thus, **the error can only be triggered by a Template Group
name that doesn't exist**.

SHANE ADDITION

ExpressionEngine and 404 Pages.

**1. What is a 404?**

404 is an HTTP status code. 
What’s a status code? To get a handle on that we have to talk a little bit about what happens when you visit a website. Each time you visit a web page your computer, which is known as the client, requests data from a server using HTTP or Hyper Text Transfer Protocol. The server responds with what is called an HTTP header and inside that header is a status code.

Most of the time the status code that is sent is 200, which means OK! This status code is not seen by you because that status code means go ahead and load the page. It’s only when you encounter errors that you are going to see an error code and since we are talking about the 404 error code, let’s dive into that particular code.

404 seems kind of random no? What does it mean? Basically the 4 indicates a client problem. Remember that there is a client and a server. A user sitting at home on his computer or on his cell phone is the client who is making a request to a web server to view a page. The first 4 says the error is with the client. Either the URL was typed incorrectly or something similar. If this were a server side problem the error code would start with a 5. The 0 in 404 lets you know that this is a syntax issue. Often just a spelling mistake. The last 4 is simply the specific error in the 4 or client error group.  You can check out all the error `code here <http://www.w3.org/Protocols/rfc2616/rfc2616.html#Status-Codes>`_. 

Now that you understand a bit more about what a 404 status code is, that helps you to better understand how to create a relevant error page and message.

**2. How does ExpressionEngine handle a 404 by default?**

By default when a 404 error is encountered, ExpressionEngine will direct your visitor to the homepage. Or rather, the default template group and the index file in that template group. ExpressionEngine only checks the first two segments to determine whether or not to show a 404 page. Anything beyond that cannot be used, but we will address that later on in this guide.

**3. Where do I change the settings so that I have control over the 404 page that is shown?**

If you would like to change the default way that ExpressionEngine handles 404 error codes, you can do that in the Control Panel under Design, templates, Template Preferences.

**SCREEN SHOT HERE**

:menuselection:`Design --> Templates --> Global Preferences`

The 404 page setting tells ExpressionEngine which template group/template to use for all the 404 errors that are received. It is worth noting that using strict URLs is preferable as this makes the path to your content more precise, allows more relevant 404 pages, and does not allow your content to be shown with variances in the URL structure

If you wish to extend this to the second segment, requiring a valid template, then in your “index” template of your Template Group(s) that you wish to do this, you can take advantage of the {redirect=} global variable like this. ::

  {if segment_2 != ''}   
    {redirect="404"} 
  {/if}


What if someone makes a mistake when typing in the url to my ExpressionEngine website?

This is common with single entry pages. For example if you have

**www.site.com/blog/title-of-article**

and someone types in 

**ww.site.com/blog/title-of-article-about-cats**

Then they would get a blank page. In order to show your 404 page you would do a few things.

In your channel entries tag pair you would add  `require_entry= <http://ellislab.com/expressionengine/user-guide/modules/channel/channel_entries.html#require-entry>`_


This tells the channel entries tag pair to only return results if there is a specific title url title found in the segment of the url. 

Now we need a way to deal with the times there are no results returned. To do this we use a global variable and test for results. ::


  {if no_results}
    {redirect="404"}
  {/if}

So a completed block code would look like this. ::

  {exp:channel:entries channel="blog" limit="1" require_entry="yes"  url_title="{segment_2}"}
  {if no_results}
  {redirect="404"}
  {/if}
  Stuff here
  {/exp:channel:entries} 

This is what have so far. On a single entry page we expect that in one of the segments that there is a title_url. If that is not the case then no results are going to be given. If no results are given then redirect to our 404 page, otherwise show the content.

Another case that might crop up is when url is correct but there are extra segments in the url.

For example:

**www.site.com/blog/title-of-article/another/segment**

Placing this code will auto correct that. This will require that PHP be enabled in the your template. ::

  {if segment_3!=""}
  <?
  Header( "HTTP/1.1 301 Moved Permanently" );
  Header( "Location: /{segment_1}/{segment_2}" );
  die();
  ?>   
  {/if}