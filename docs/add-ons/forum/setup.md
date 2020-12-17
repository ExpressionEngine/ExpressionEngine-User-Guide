<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Discussion Forum Setup

[TOC]

When setting up a new forum, it is typically best to do things in a certain order.

## Create a Forum Board

Before you can begin setting up your forums, you will need to have at least one [forum board](add-ons/forum/boards.md) for your forums to belong to.

## Set Permissions

There are seven types of permissions you can set. It should be obvious what each type of permission allows.

- Can View Forum
- Can View Hidden Forums
- Can View Posts
- Can Post
- Can Report
- Can Upload
- Can Search

For each type of permission, you can determine whether or not it is available for any of your Member Roles. Check a checkbox in a permission column for a Role row if you want that Role to have that permission. For instance, you might not want to allow a particular Role to be able to post in your forum. If that's the case, then make sure the "Can Post" checkbox is unchecked for that Role.

The Discussion Forum module requires membership in order to post in the forums. Non logged-in users (the "Guest" Primary Role) cannot post to the forums.

The "blank" boxes in the last column and last row allow you to easily select or de-select an entire column or row.

Member Roles are managed under `Members --> Member Roles` since Roles are used throughout your site and not just as part of the forum.

## Add a New Category

Once you've set the preferences and permissions you can start to add the actual forums. First, you'll need to create at least one "Category" for your forum. Let's imagine that your site is about sports and politics. So, you first go to the Create New Category link in the Forum Manager. Here you could create a "Sports" category. Later, you can create separate forums for different types of sports. You might also create a "Politics" category.

A "category" in the Forum Module is simply a way to organize one or more forums together.

## Add your Forums

Now that you've created one or more categories, you can create forums inside them. Use the Create New Forum link under the category in which you're interested. For instance, under the Sports category, you could click that link and then create a "Football" forum. You might also create "Basketball", "Baseball", "Rugby", and "Hockey" forums in that category.

In the Politics category you might create "Democrat", "Independent", and "Republican" forums.

When creating your forums, you can set the "Status" for the forum. There are three statuses:

- **Live**: This is the normal state for a forum. It allows new postings.
- **Read Only**: A Read Only forum does not permit new posts. You could use this status if you have a forum that you still want to keep the contents available for viewing but don't want anything new added. You can think of this as a sort of "archival" mode.
- **Hidden**: A Hidden forum is one that is only viewable by people given permission to do so (via the forum permissions, as mentioned earlier).

## Customizing Particular Forums

After a forum has been created, you can use the Edit link for that forum to adjust its settings.

## Changing the Display Order of Forums and Categories

Often, you won't create your categories and forums in the ultimate order in which you'd like them displayed. In the main Forum Manager screen you can use the drag handles to change the order of things. Changing the order of forums will change the order of those forums within the category. You can use the drag handles for the categories to change the order in which the categories are displayed.
