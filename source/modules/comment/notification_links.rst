Displaying Comment Notification Links
=====================================

The {exp:comment:notification\_links} tag can be to allow members to
subscribe to an entry without commenting via a simple link.

**Note:** This tag may only be used on a single entry page. ::

	{exp:comment:notification_links} {if subscribed} <h5><a href="{unsubscribe_link}">Unsubscribe to comment notification for this entry.</a></h5> {if:else} <h5><a href="{subscribe_link}">Subscribe to comment notification for this entry.</a></h5> {/if}  {/exp:comment:notification_links}

Comment notification links will only show on a single-entry pages, such
as "comment" pages.

**Note:** Only logged in members may subscribe without commenting. The
tag will return nothing for non-logged in members.
