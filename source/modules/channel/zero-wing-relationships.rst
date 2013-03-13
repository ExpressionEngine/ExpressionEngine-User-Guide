#############
Relationships
#############

.. contents::
   :local:
   :depth: 1

************
Introduction
************

ExpressionEngine's relationships work very simply.  To show how the tags work
we'll use an example community sports league website with four channels: Seasons,
Teams, Games and Players.  The league that runs multiple seasons every year
with different teams and games.  Your channels might look like this::

	Seasons
		title			Text 
		url_title		Text 
		games			Relationship (pointing to Games channel, multiple Games)
		teams			Relationship (pointing to Teams channel, multiple Teams)

	Games
		title			Text	
		url_title		Text	
		home			Relationship (pointing to Teams channel, a single Team)
		away			Relationship (pointing to Teams channel, a single Team)
		home_score		Number
		away_score		Number

	Teams
		title			Text
		url_title		Text
		players			Relationship (pointing to Players channel, multiple Players)

	Players
		title			Text
		url_title		Text
		first_name		Text
		last_name		Text
		number			Number

So, with our channel structure layed out, let's dive right in.  Say you wanted
to show all games and teams in the 'Spring 2013' season.  And you wanted to
list all the players on each team.  Your template might look something like
this::

	{exp:channel:entries channel="Seasons" title="Spring 2013" limit="1"}
		<div class="season">
			<h2>{title}</h2>
			<h3>Teams</h3>
			<div class="teams">
				{teams}
				<div class="team">
					<h4>{teams:title}</h4>
					{teams:players}
					<span class="player">{teams:players:first_name} {teams:players:last_name}</span>
					{/teams:players}
				</div>
				{/teams}
			</div>
			<h3>Games</h3>
			<div class="games">
				{games}
				<div class="game">
					<h4>{games:title}</h4>
					{games:home:title} vs {games:away:title}
				</div>
				{/games}
			</div>
		</div>
	{/exp:channel:entries}

Let's break that down to see what we're doing.  The first thing you'll see is
the good old channel entries tag::

	{exp:channel:entries channel="Seasons" title="Spring 2013" limit="1"}	

We're pulling a single entry from the Seasons channel.  The one titled "Spring
2013".  Just inside of that we see our standard ``{title}`` tag to pull the
title of the entry.  After that things get more interesting::

	{teams}
	<div class="team">
		<h4>{teams:title}</h4>
		{teams:players}
		<span class="player"><span class="number">{teams:players:number}{teams:players:first_name} {teams:players:last_name}</span>
		{/teams:players}
	</div>
	{/teams}

Notice, the tag name ``teams`` is the same as our relationship field name in
the Seasons channel.  This is a relationship tag.  It works very similarly to
the ``channel:entries`` tag.  It will loop over the entries you have assigned
to the ``teams`` field on the publish page and use them to replace the
variables contained.  

Here, things differ a little bit from standard channel entries.  We need a way
to separate the related entry's variables from your ``channel:entries`` tag's
variables.  To accomplish this we prefix the variables of the related entries
with the name of the field they belong to.  So::

	<h4>{teams:title}</h4>

In that bit of code, we're accessing the title of the entry from the Teams
channel related to our current Season through the ``teams`` field.  This is
very powerful.  It allows you to relate entries even from the same channel to
each other and still access their variables.  Say you wanted to add a field for
the previous and next seasons to a season's entry.  You could give it a
``previous`` and ``next`` field.  In your ``channel:entries`` tag you might
access them like this::

	{exp:channel:entries channel="Seasons" url-title="winter-2013" limit="1"}
		<a href="{path="seasons/index"}/{previous:url_title}">{previous:title}</a>
		<a href="{path="seasons/index"}/{next:url_title}">{next:title}</a>

Even though all the variables would be the same, you can easily access any
variable from the current entry or either of the related entries.

Prefixing variables this way also allows us to access nested relationships.  Look
back up to our previous example.  Notice this bit of code::

	{teams:players}
	<span class="player">{teams:players:first_name} {teams:players:last_name}</span>
	{/teams:players}

In our Teams channel you'll notice that we have a relationship field to the
Players channel that can take multiple entries.  We access those entries
through the ``{teams:players}`` tag.  This works exactly the same as the
``{teams}`` tag.  It's an entries loop tag.  Except in this case, we're getting
the entries that were assigned to our current Team.  We can access the Player
channel's variables in the same way as we do our Team channel's variables, by
prefixing them::

	<span class="player">{teams:players:first_name} {teams:players:last_name}</span>

You may also have noticed that in some places we wrap our relationship in an
open and close tag, like we did above with players::

	{teams:players}
	<span class="player">{teams:players:first_name} {teams:players:last_name}</span>
	{/teams:players}

In other places, however, we don't.  We just access the relationship's
variables directly using the prefixing, like we did with the ``home`` and
``away`` fields::

	{games}
	<div class="game">
		<h4>{games:title}</h4>
		{games:home:title} vs {games:away:title}
	</div>
	{/games}

In the above example, ``home`` and ``away`` are relationship fields in the
Games channel.  However, they are limited to a single entry. In that case, you
can access the relationship's variables directly, at any time, by adding the
prefix. There's no need to specify the bit of your template you want to loop
over. There can only be one!

Let's try another example, with the same channel set up.  What if you wanted to
have a series of pages showing the details of a single game?  On these pages, 
you want to show a navigation section, showing other games from the current
season.  You could accomplish this by using ``channel:entries`` for the Seaons
channel and walking down to games.  But that would require an ``if`` tag to 
determine whether the game we're showing in navigation is the current game. An
easier way to accomplish this would be to use the ``siblings`` tag, like so::

	{exp:channel:entries channel="Games"}
		<div class="navigation"><ul>
			{siblings channel="Seasons" field="games"}
				<li>{sibling:title}	- {sibling:home:title} vs {sibling:away:title}</li>
			{/siblings}
		</ul></div>
	{/exp:channel:entries}
		
The ``siblings`` tag pulls all entries in the Games channel that are related to
the Seasons channel through the ``games`` field, except for the current one.
The current entry in the Games channel that the ``channel:entries`` tag has
pulled up must be related to the channel through the field given to the
siblings tag.  Otherwise it won't work.  

Notice, that when we are prefixing the variables inside the ``siblings`` loop
tag, we use the singular case of ``sibling``.  This is to remind you that
``siblings`` isn't just another relationship variable, but a special tag with a
special meaning.  

A similar tag is the ``parents`` tag.  It pulls all entries that are parents of
the of the current entry.  Say you had a Team page where you showed details of
a particular team and you wanted to show all Games that team had played in.
You could accomplish this like so::

	{exp:channel:entries channel="Teams"}
		<div class="games"><ul>
			{parents channel="Games"}
				<li>{parent:title} - {parent:home:title} vs {parent:away:title}</li>
			{/parents}
		</div>
	{/exp:channel:entries}

The ``parents`` tag will pull all games in which the current team was either
the home or away team.  If you wanted to just pull home games, you could use
the ``field`` parameter to specify which relationship field from the parent
channel you wanted to examine::

	{exp:channel:entries channel="Teams"}
		<div class="games"><ul>
			{parents channel="Games" field="home"}
				<li>{parent:title} - {parent:home:title} vs {parent:away:title}</li>
			{/parents}
		</div>
	{/exp:channel:entries}
		  

*************
Tag Reference
*************

.. contents::
   :local:
   :depth: 1

Accessing Children
==================

.. contents::
   :local:
   :depth: 2

Multiple Related Entries 
------------------------

Given the following channel layout::

	ParentChannel
		title
		url_title
		field1					Text
		field2					Text
		relationship_field		Relationship (ChildChannel, Multiple)


	ChildChannel
		title
		url_title
		field1					Text
		field2					Text

You would access the child entries in your template using the following syntax::

	{exp:channel:entries channel="ParentChannel"}
		{title} - {field1} - {field2}
		{relationship_field}
			{relationship_field:title}
			{relationship_field:field1}
			{relationship_field:field2}
		{/relationship_field}
	{/exp:channel:entries}

The section of the template that belongs to the ``relationship_field``::

	{relationship_field}
		{relationship_field:title}
		{relationship_field:field1}
	{/relationship_field}

Will be looped over.  It acts very similarly to a ``channel:entries`` tag.

Single Related Entries
----------------------

Given the following channel layout, where ``relationship_field`` is limited to taking a single child entry::

	ParentChannel
		title
		url_title
		field1					Text
		field2					Text
		relationship_field		Relationship (ChildChannel, Single)


	ChildChannel
		title
		url_title
		field1					Text
		field2					Text

You would access the child entry in your tempalte using the following syntax::


	{exp:channel:entries channel="ParentChannel"}
		{title} - {field1} - {field2}
		{relationship_field:title}
		{relationship_field:field1}
		{relationship_field:field2}
	{/exp:channel:entries}

No looping occurs.  

Parameters
----------

.. contents::
   :local:
   :depth: 1

Limit
+++++

You can use the limit parameter on any looping relationship tag in order to limit
the number of results returned from the tag.  Given the following channel structure::

	ParentChannel
		title
		url_title
		field1					Text
		field2					Text
		relationship_field		Relationship (ChildChannel, Multiple)


	ChildChannel
		title
		url_title
		field1					Text
		field2					Text

Then you could use the following code::

	{relationship_field limit="5"}
		{relationship_field:title}
		{relationship_field:field1}
	{/relationship_field}

To only grab the first 5 entries that are attached to the current entry in
``ParentChannel`` through the ``relationship_field``.

Accessing Siblings
==================

.. contents::
   :local:
   :depth: 2

Usage
-----

Given the following channel layout::

	ParentChannel
		title
		url_title
		field1					Text
		field2					Text
		relationship_field		Relationship (ChildChannel, Multiple)


	ChildChannel
		title
		url_title
		field1					Text
		field2					Text

You can access siblings of the current entry in ``channel:entries`` tag
using the following syntax::

	{exp:channel:entries channel="ChildChannel"}
		{siblings channel="ParentChannel" field="relationship_field"}
			{sibling:title} - {sibling:field1} - {sibling:field2}
		{/siblings}
	{/exp:channel:entries}

Parameters
----------

.. contents::
   :local:
   :depth: 1

channel
+++++++

Since an entry can have multiple parent entries, we need to specify which
channel should be considered the parent when pulling an entry's siblings.  To
this, use the channel parameter::

    {siblings channel="ParentChannel"}

This will declare that we are looking for siblings of the current entry using
``ParentChannel`` as the parent.  In some cases, ``ParentChannel`` will have
multiple fields that relate to ``ChildChannel``.  In that case, you may also
need to specify which field you want the siblings from.  To accomplish this,
use the ``field=""`` parameter.

field
+++++

Use the ``field`` parameter to specify which field in the parent entry we should
be pulling the siblings from.  Since an entry can have more than a single field
relate to the same channel, this can be extremely useful.  The syntax is::

    {siblings field="relationship_field"}


parent_id
+++++++++

The ``parent_id`` parameter allows you to specify which parent entry you wish to
pull the siblings from.  It takes an entry id and uses that to filter the parent
entries when checking for siblings.  The syntax is::

    {siblings parent_id="2"}


limit
+++++

The ``limit`` parameter allows you to limit the number of entries returned by the
siblings tag.  The syntax is::

    {siblings limit="5"}

Accessing Parents
=================

.. contents::
   :local:
   :depth: 2

Usage
-----

Given the following channel layout::

	ParentChannel
		title
		url_title
		field1					Text
		field2					Text
		relationship_field		Relationship (ChildChannel, Multiple)


	ChildChannel
		title
		url_title
		field1					Text
		field2					Text

You can access the parents of the current entry in a ``channel:entries`` tag
using the following syntax::

	{exp:channel:entries channel="ChildChannel"}
		{parents channel="ParentChannel" field="relationship_field"}
			{parent:title} - {parent:field1} - {parent:field2}
		{/parents}
	{/exp:channel:entries}

Parameters
----------

.. contents::
   :local:
   :depth: 1

channel
+++++++

field
+++++

limit
+++++
