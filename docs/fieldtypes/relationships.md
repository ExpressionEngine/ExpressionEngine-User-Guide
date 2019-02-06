<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Relationships Fieldtype

[TOC]

Relationships are an extremely powerful tool that allow you to connect Entries in one Channel to those in another one, or even to other entries in the same channel. This ability allows you to store very complex content in your Channel entries.

This fieldtype is currently only limited to Channels.

## Field Options

### Channels to Relate

Choose which channels can related content be pulled from.

### Include in Selection

Allow expired or future entries in this relationships field.

### Limit by Category

Choose categories to limit the entries in this relationships field.

### Authors

Choose authors to limit the entries in this relationships field.

### Limit By Status

Choose statuses to limit the entries in this relationships field.

### Maximum Entries

Maximum number of entries to show in the relationship field. Leave blank to allow all entries.

### Order By

Default ordering of entries in relationship field.

### Allow Multiple Relationships?

When set to yes, authors will be allowed to create multiple relationships in a single field.

## Template Tags

### Parameters

The following parameters are available to all looping relationship tags, allowing you to further filter or sort the entries being retrieved. They function the same as they do when used on the [{exp:channel:entries}](channels/entries.md#parameters). The available parameters are:

- author_id
- backspace
- category
- channel
- entry_id
- group_id
- offset
- orderby
- show_expired
- show_future_entries
- sort
- start_on
- status
- stop_before
- url_title
- username

Some relationship tags may have additional parameters available. These are included in the usage instructions below.

## Accessing Children

### Usage: Multiple Related Entries

Given the following channel layout:

    ParentChannel
      title
      url_title
      field1          Text
      field2          Text
      relationship_field    Relationship (ChildChannel, Multiple)


    ChildChannel
      title
      url_title
      field1          Text
      field2          Text

You would access the child entries in your template using the following syntax:

    {exp:channel:entries channel="parentChannel"}
      {title} - {field1} - {field2}
      {relationship_field}
        {relationship_field:title}
        {relationship_field:field1}
        {relationship_field:field2}
      {/relationship_field}
    {/exp:channel:entries}

The section of the template that belongs to the `relationship_field`:

    {relationship_field}
      {relationship_field:title}
      {relationship_field:field1}
      {relationship_field:field2}
    {/relationship_field}

Will be looped over. It acts very similarly to a `channel:entries` tag.

### Usage: Single Related Entries

Given the following channel layout, where `relationship_field` is limited to taking a single child entry:

    ParentChannel
      title
      url_title
      field1          Text
      field2          Text
      relationship_field    Relationship (ChildChannel, Single)


    ChildChannel
      title
      url_title
      field1          Text
      field2          Text

You would access the child entry in your template using the following syntax:

    {exp:channel:entries channel="parentChannel"}
      {title} - {field1} - {field2}
      {relationship_field:title}
      {relationship_field:field1}
      {relationship_field:field2}
    {/exp:channel:entries}

No looping occurs.

## Accessing Siblings

### Usage

Given the following channel layout:

    ParentChannel
      title
      url_title
      field1          Text
      field2          Text
      relationship_field    Relationship (ChildChannel, Multiple)


    ChildChannel
      title
      url_title
      field1          Text
      field2          Text

You can access siblings of the current entry in `{exp:channel:entries}` tag using the following syntax:

    {exp:channel:entries channel="childChannel"}
      {siblings field="relationship_field"}
        {siblings:title} - {siblings:field1} - {siblings:field2}
      {/siblings}
    {/exp:channel:entries}

The `{siblings}` tag does not need to be a top level tag. It may be used from a nested relationship in order to access that relationship's siblings. The syntax is:

    {exp:channel:entries channel="parentChannel"}
      {relationship_field}
        {relationship_field:siblings field="relationship_field"}
          {relationship_field:siblings:title}
        {/relationship_field:siblings}
      {/relationship_field}
    {/exp:channel:entries}

### Parameters

In addition to the standard parameters, the following parameter may be used in this tag:

#### field

There can be multiple relationship fields in a field group, thus child entries may be related to the same parent via different fields. Use the `field` parameter to specify which field in the parent entry we should be pulling the siblings from. The syntax is:

    {siblings field="relationship_field"}

## Accessing Parents

### Usage

Given the following channel layout:

    ParentChannel
      title
      url_title
      field1          Text
      field2          Text
      relationship_field    Relationship (ChildChannel, Multiple)


    ChildChannel
      title
      url_title
      field1          Text
      field2          Text

You can access the parents of the current entry in a `channel:entries` tag using the following syntax:

    {exp:channel:entries channel="childChannel"}
      {parents field="relationship_field"}
        {parents:title} - {parents:field1} - {parents:field2}
      {/parents}
    {/exp:channel:entries}

The `{parents}` tag may be accessed through nested relationships tags using the following syntax:

    {exp:channel:entries channel="parentChannel"}
      {relationship_field}
        {relationship_field:parents field="relationship_field"}
          {relationship_field:parents:title}
        {/relationship_field:parents}
      {/relationship_field}
    {/exp:channel:entries}

### Parameters

In addition to the standard parameters, the following parameter may be used in this tag:

#### field

There can be multiple relationship fields in a field group, and thus an entry may be selected as a child in multiple fields. Use the `field` parameter to specify which field in the parent entry we should be checking for our child. The syntax is:

    {parents field="relationship_field"}

## Fetching Entry IDs Only

Sometimes it's useful to get just a list of the entry IDs of related entries, to pass on to a plugin as a tag a parameter or similar. If you need to do this, you can use the single variable `:entry_ids` shortcut modifier:

    {relationship_field:entry_ids}

Outputs in the format:

    43|58|127

Note that this is not used inside a relationships tag pair, but is a standalone variable.

### Usage

For children:

    {relationship_field:entry_ids}

For parents:

    {parents:entry_ids}

    {!-- or --}

    {parents:entry_ids field="relationship_field"}

### Parameters

The _entry_ids_ shortcut tag has only one optional parameter:

#### delimiter

By default the entry IDs will be pipe-delimited, but you can choose to have them delimited with something else:

    {relationship_field:entry_ids delimiter=","}

Would output in the format:

    43,48,127

## Namespacing Variables

Any variable available to the channel entries tag can be used inside a relationship tag pair. Use prefixes to specify which entry or set of entries the variable belongs to:

    {exp:channel:entries channel="childChannel"}

      {parents}

        {if parents:count == "1"}
          <h3>Parents</h3>
        {/if}

        {parents:title} - {parents:field1} - {parents:field2}

        {if parents:no_results}
          No parent entries
        {/if}

        {parents:switch="one|two"}

      {/parents}

    {/exp:channel:entries}

### Grid Compatibility

The Relationships field can be used as a [Grid field](fieldtypes/grid.md) column. You cannot use Relationships inside of a Grid field that does not store Channel data.

Showing the contents of a grid field in a related child, sibling or parent entry is fully supported.

    {relationship_field}
      {relationship_field:title}
      {relationship_field:grid_field}
        {grid_field:grid_column_a}<br />
      {/relationship_field:grid_field}
    {/relationship_field}

### Fluid Compatibility

Relationships can also be used in [Fluid Fields](fieldtypes/fluid.md) and they can output the contents of a related entry's fluid field.

    {relationship_field}
      {relationship_field:title}
      {relationship_field:fluid_field}
        {relationship_field:fluid_field:text_field}
          {content}
        {/relationship_field:fluid_field:text_field}
        {relationship_field:fluid_field:checkbox_field_pair}
          <ul>
              {content}
              <li>{item}</li>
              {/content}
          </ul>
        {/relationship_field:fluid_field:checkbox_field_pair}
       {/relationship_field:fluid_field}
    {/relationship_field}

## Examples

### The Pizza Shop

Let's start with a very simple example. You've been tasked with building a website for a small chain of local pizza joints. These pizza places share a menu of specialty pizzas, but each individual store manager gets to decide which pizzas will be available on any particular week. You need to make a website for the whole chain with store pages for each store to display that store's menu for the week.

Since this is a template writing tutorial, we'll go ahead and layout the channels for you:

    Stores
      title       Text Input
      url_title     Text Input
      address       Textarea
      phone       Text Input
      specialty_pizzas  Relationship (to Pizzas, multiple)

    Pizzas
      title       Text Input
      url_title     Text Input
      description     Textarea
      ingredients     Checkbox

#### Child Entries: Displaying the Stores and their Menus

First things first. We need to write a page to list each Store and which pizzas they have to offer. We do that with this template:

    {exp:channel:entries channel="stores"}
      <h1>{title}</h1>
      <p>Phone: {phone}</p>
      <p>Address: {address}</p>
      <h2>Specialty Pizzas</h2>
      {specialty_pizzas}
        <h3>{specialty_pizzas:title}</h3>
        <p>{specialty_pizzas:description}</p>
        <p>{specialty_pizzas:ingredients}</p>
      {/specialty_pizzas}
    {/exp:channel:entries}

We start with the standard `{exp:channel:entries}` tag, pulling from the Stores channel. For each Store entry we display the Store name, the Store's phone number and its address. Then we display which specialty pizzas are available:

    <h2>Specialty Pizzas</h2>
    {specialty_pizzas}
      <h3>{specialty_pizzas:title}</h3>
      <p>{specialty_pizzas:description}</p>
      <p>{specialty_pizzas:ingredients}</p>
    {/specialty_pizzas}

The `{specialty_pizzas}` tag is a Relationship variable tag. Since it is a relationship that can take multiple entries, it is a looping tag pair. So these three lines, contained in the pair, will be looped over:

    <h3>{specialty_pizzas:title}</h3>
    <p>{specialty_pizzas:description}</p>
    <p>{specialty_pizzas:ingredients}</p>

The variables will be replaced for each Pizza entry that is attached to the current Store entry. In those lines `{specialty_pizzas:title}` will be replaced by the title of the current Pizza entry, `{specialty_pizzas:description}` will be replaced by its description and so on.

Notice that what we're doing here is prefixing the names of the variables in the Pizza channel with the name of the Relationship field that relates the Store channel to the Pizza channel. We call this namespacing and it's a very powerful tool. This is what allows us to access the variables of the related entries, even though they may be the same as those of the parent entries.

Inside the `{specialty_pizzas}` tag pair, you can use `{title}` to display the title of the current Store entry and `{specialty_pizzas:title}` to display the title of the current Pizza entry. This means we can nest relationships as deeply as we want to with out having to worry too much about naming collisions.

#### Parent Entries: Which Stores have Which Pizza?

Another template you might want to make is a page for each pizza where you give a description of the pizza, list its ingredients and show which stores currently have the pizza available. You can do this with the `{parents}` tag. Like so:

    {exp:channel:entries channel="pizzas"}
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{ingredients}</p>
      <h3>Where can I find this pizza?</h3>
      {parents field="specialty_pizzas"}
        <strong>{parents:title}</strong>: <br />
        {parents:phone} <br />
        <p>{parents:address}</p>
      {/parents}
    {/exp:channel:entries}

In this template we list the Pizza channel's variables -- `{title}`, `{description}` and `{ingredients}`. Then we have a section to show in which stores this pizza is currently available. To accomplish this, we use the `{parents}` tag.

The `{parents}` tag will pull entries that have the current Entry from the `{exp:channel:entries}` tag as a child through the field that you specify. If you use the same field group in multiple channels, you may want to also specify the channel. In this case, we're passing it the `specialty_pizzas` field. It will look for all entries attached to any channel through the `specialty_pizzas` field that have the current Pizza entry as a child. In our case, `specialty_pizzas` is only used in the Stores channel and this will have the result of finding all Stores that currently have this Pizza available.

The `{parents}` tag is a looping tag pair. So for each Store it finds, it will loop over the section of template contained in the pair:

    <strong>{parents:title}</strong>: <br />
    {parents:phone} <br />
    <p>{parents:address}</p>

It will replace that section's variables and append it to the final output. Here, we use namespacing again to access the parent Store's variables. We access its title, phone and address using `parents:title`, `parents:phone`, and `parents:address`.

---

### The Music Venue

Another case in which Relationships can be handy is the Music Venue website. We'll assume this is a small venue that plays a lot of local bands. These bands return for many shows. They also change pretty frequently. And it is often the same musicians moving between the bands as they breakup, reform or trade musicians. So we'll want three channels, `Bands`, `Musicians`, and `Shows`. Here's the layout:

    Musicians
      title     Text
      url_title   Text
      first_name    Text
      last_name   Text
      biography   Text
      instruments   Text

    Bands
      title     Text
      url_title   Text
      history     Text
      style     Text
      members     Relationship (to Musicians, multiple)

    Shows
      title     Text
      url_title   Text
      what      Text
      when      Date
      bands     Relationship (to Bands, multiple)

#### Child Entries: Upcoming Shows

The first thing we tackle is creating a listing of upcoming shows and the bands that are playing in them. We assume the Show entry is set to expire the day after the show, so we don't have to worry about any date stuff for now. Here's what that template might look like:

    {exp:channel:entries channel="shows"}
      <div class="show">
        <h2><a href="{path="shows/index"}/{url_title}">{title}</a></h2>
        <div class="show-body">
          <div class="what"><label>What</label>{what}</div>
          <div class="when"><label>When</label>{when}</div>
          <div class="who">
            <label>Who's playing?</label>
            {bands}
              <div class="band"><strong>{bands:title}</strong> {bands:style}</div>
            {/bands}
          </div>
        </div>
      </div>
    {/exp:channel:entries}

Most of this should look pretty familiar to you if you're familiar with the `channel:entries` tag. But notice this section:

    <div class="who">
      <label>Who's playing?</label>
      {bands}
        <div class="band"><strong>{bands:title}</strong> {bands:style}</div>
      {/bands}
    </div>

This section uses the Relationships field. On the publish page, we attached the Bands that are going to playing this Show to the Show's entry. With the `{bands}` tag, we are now looping over those bands. For each Band entry attached to the Show entry, we append this line of the template with the variables replaced:

    <div class="band"><strong>{bands:title}</strong> {bands:style}</div>

In each loop, we replace the Band's name `{bands:title}` and what style of music they play `{bands:style}`. Again, the namespacing of relationships with the relationship tag name allows us to specify which title we want, in this case, the Band's and not the Show's.

#### Parent Entries: A Band's Recent Shows

Now we want to build a page for each Band. And on that page, we want to display all the Shows that Band has played. To do this, we need a parent tag:

    {exp:channel:entries channel="bands" limit="1"}
      <div class="band">
        <h2>{title}</h2>
        <span class="style">{style}</span>
        <p>{history}</p>
        <div class="members">
          {members}
            <div class="member">
              <a href="{path="musicians/index"}/{members:url_title}">{members:first_name} {members:last_name}</a>
            </div>
          {/members}
        </div>
        <div class="shows">
          <h3>Recent Shows</h3>
          {parents channel="shows" field="bands"}
            <div class="show">
              <strong>{parents:title}</strong>
              <div class="what">{parents:what}</div>
              <div class="when">{parents:when}</div>
            </div>
          {/parents}
        </div>
      </div>
    {/exp:channel:entries}

The part to notice is this bit:

    <div class="shows">
    <h3>Recent Shows</h3>
    {parents channel="shows" field="bands"}
      <div class="show">
        <strong>{parents:title}</strong>
        <div class="what">{parents:what}</div>
        <div class="when">{parents:when}</div>
      </div>
    {/parents}
    </div>

Here, we use the `{parents}` tag to access this Band's parent entries in the Shows channel. It will cycle through each Show that has this particular Band entry as a child through the `bands` field and display this part of the template for that Show entry:

    <div class="show">
      <strong>{parents:title}</strong>
      <div class="what">{parents:what}</div>
      <div class="when">{parents:when}</div>
    </div>

#### Parent Entries: A Musician's Bands

On the musician page, we want to be able to display the bands a musican currently plays with. To do that, we use the `{parents}` tag again. Here is the template:

    {exp:channel:entries channel="musicians" limit="1"}
      <div class="musician">
        <h2>{first_name} {last_name}<h2>
        <div class="instruments">
          {instruments}
        </div>
        <div class="biography">
          {biography}
        </div>
        <div class="past-bands">
          <ul>
          {parents field="members"}
            <li class="band-name"><a href="{path="bands/index"}/{parents:url_title}">{parents:title}</a></li>
          {/parents}
          </ul>
        </div>
      </div>
    {/exp:channel:entries}

The relevant section is this:

    <div class="past-bands">
      <ul>
      {parents field="members"}
        <li class="band-name"><a href="{path="bands/index"}/{parents:url_title}">{parents:title}</a></li>
      {/parents}
      </ul>
    </div>

Here we use the `{parents}` tag to access the Band entries that this Musician is a member of. Since the `members` field is only used in the Band channel we do not need to specify the channel. It will only pull Bands.

---

### The Community Sports League

Let's tackle something more complex. We're building a website for a local community sports league. The league runs multiple seasons every year with different teams and games. The channels might look like this:

    Seasons
      title     Text Input
      url_title   Text Input
      games     Relationship (pointing to Games channel, multiple Games)
      teams     Relationship (pointing to Teams channel, multiple Teams)

    Games
      title     Text Input
      url_title   Text Input
      home      Relationship (pointing to Teams channel, a single Team)
      away      Relationship (pointing to Teams channel, a single Team)
      home_score    Text Input (Number)
      away_score    Text Input (Number)

    Teams
      title     Text Input
      url_title   Text Input
      players     Relationship (pointing to Players channel, multiple Players)

    Players
      title     Text Input
      url_title   Text Input
      first_name    Text Input
      last_name   Text Input
      number      Text Input (Number)

#### Child Entries: Showing Games and Teams in a Season

The first thing we do is show all games and teams in a particular season. The 'Spring 2013' season. While we're at it, lets list all the players on each team, so that players know which team they've been placed on. The template might look something like this:

    {exp:channel:entries channel="seasons" title="Spring 2013" limit="1"}
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

Let's break that down to see what we are doing. The first thing you see is the good old channel entries tag:

    {exp:channel:entries channel="seasons" title="Spring 2013" limit="1"}

We pull a single entry from the Seasons channel. The one titled "Spring 2013". Just inside of that we see our standard `{title}` tag to pull the title of the entry. After that things get more interesting:

    {teams}
      <div class="team">
        <h4>{teams:title}</h4>
        {teams:players}
          <span class="player"><span class="number">{teams:players:number}{teams:players:first_name} {teams:players:last_name}</span>
        {/teams:players}
      </div>
    {/teams}

Notice, the tag name `teams` is the same as our relationship field name in the Seasons channel. This is a Relationship tag. It works very similarly to the `channel:entries` tag. It will loop over the entries you have assigned to the `teams` field on the publish page and use them to replace the variables contained.

Here, things differ a little bit from standard channel entries. We need a way to separate the related entry's variables from your `channel:entries` tag's variables. To accomplish this we prefix the variables of the related entries with the name of the field they belong to. So:

    <h4>{teams:title}</h4>

In that bit of code, we're accessing the title of the entry from the Teams channel related to our current Season through the `teams` field. This is very powerful. It allows you to relate entries even from the same channel to each other and still access their variables. Say you wanted to add a field for the previous and next seasons to a season's entry. You could give it a `previous` and `next` field. In your `channel:entries` tag you might access them like this:

    {exp:channel:entries channel="seasons" url-title="winter-2013" limit="1"}
      <a href="{path="seasons/index"}/{previous:url_title}">{previous:title}</a>
      <a href="{path="seasons/index"}/{next:url_title}">{next:title}</a>

Even though all the variables would be the same, you can easily access any variable from the current entry or either of the related entries.

Prefixing variables this way also allows us to access nested relationships. Look back up to our previous example. Notice this bit of code:

    {teams:players}
      <span class="player">{teams:players:first_name} {teams:players:last_name}</span>
    {/teams:players}

In our Teams channel you'll notice that we have a relationship field to the Players channel that can take multiple entries. We access those entries through the `{teams:players}` tag. This works exactly the same as the `{teams}` tag. It's an entries loop tag. Except in this case, we're getting the entries that were assigned to our current Team. We can access the Player channel's variables in the same way as we do our Team channel's variables, by prefixing them:

    <span class="player">{teams:players:first_name} {teams:players:last_name}</span>

You may also have noticed that in some places we wrap our relationship in an open and close tag, like we did above with players:

    {teams:players}
      <span class="player">{teams:players:first_name} {teams:players:last_name}</span>
    {/teams:players}

In other places, however, we don't. We just access the relationship's variables directly using the prefixing, like we did with the `home` and `away` fields:

    {games}
      <div class="game">
        <h4>{games:title}</h4>
        {games:home:title} vs {games:away:title}
      </div>
    {/games}

In the above example, `home` and `away` are relationship fields in the Games channel. However, they are limited to a single entry. In that case, you can access the relationship's variables directly, at any time, by adding the prefix. There's no need to specify the bit of your template you want to loop over. There can only be one!

#### Child Entries: Showing Details of a Game

Let's try another example. Let's say you need another page on this league website that shows the details of a single game: when, who played and who won. That template might look something like this:

    {exp:channel:entries channel="games" limit="1"}
      <h2>{home:title} ({home_score}) vs {away:title} ({away_score})</h2>
      <p>In this game the {home:title} played the {away:title}.</p>
      <p>The final scores were {home:title} with {home_score} and {away:title} with {away_score}.</p>
      <p>Playing for {home:title} were:</p>
      <div class="players">
        {home:players}
          <span class="player">#{home:players:number} {home:players:first_name} {home:players:last_name}</span>
        {/home:players}
      </div>
      <p>Playing for {away:title} were:</p>
      <div class="players">
        {away:players}
          <span class="player">#{away:players:number} {away:players:first_name} {away:players:last_name}</span>
        {/away:players}
      </div>
    {/exp:channel:entries}

Here, the `{exp:channel:entries}` tag accesses the Games channel. The first thing we do is display which teams are playing and what the score was. We do that by going through the `home` and `away` fields which both point to the Teams channel. We grab the title (`{home:title}` and `{away:title}`) and display it.

Further down we list the players on each team using `{home:players}` and `{away:players}`. Since the `players` field is a multiple relationship, we need a tag pair. But notice that we don't need to be the `{home:players}` tag itself inside a `{home}` pair. `{home}` takes a single entry, and so we can just use it as a prefix to access its custom field variables.

Inside the `{home:players}` and `{away:players}` pairs we can access the field variables of the Players channels by prefixing them with `home:players` or `away:players` respectively. So, inside `{home:players}` we can get the Player's first name, last name and number with `{home:players:first_name}`, `{home:players:last_name}` and `{home:players:number}`.

#### Parent Entries: Showing A Team's History

Say you had a Team page where you showed details of a particular team and you wanted to show all Games that team had played in. You could accomplish this like so:

    {exp:channel:entries channel="teams"}
      <div class="games"><ul>
        {parents field="home|away"}
          <li>{parents:home:title} ({parents:home_score}) vs {parents:away:title} ({parents:away_score})</li>
        {/parents}
      </ul></div>
    {/exp:channel:entries}

In this case, we have two different fields in the parent channel that relate to the Teams channel: `home` and `away`. We want to pull from both of them, so in our `{parents}` tag field parameter we use `field="home|away"`. Here the channel parameter is unnecessary as neither `home` or `away` is used in any channel other than Games.

#### Sibling Entries: Navigating Between Games

What if you wanted to have a series of pages showing the details of a single game? On these pages, you want to show a navigation section, showing other games from the current season. You could accomplish this by using `channel:entries` for the Seaons channel and walking down to games. But that would require an `if` tag to determine whether the gamo ae're showing in navigation is the current game. An easier way to accomplish this would be to use the `siblings` tag, like so:

    {exp:channel:entries channel="games"}
      <div class="navigation"><ul>
        {siblings channel="seasons" field="games"}
          <li>{siblings:title}  - {siblings:home:title} vs {siblings:away:title}</li>
        {/siblings}
      </ul></div>
    {/exp:channel:entries}

The `siblings` tag pulls all entries in the Games channel that are related to the Seasons channel through the `games` field, except for the current one. The current entry in the Games channel that the `channel:entries` tag has pulled up must be related to the channel through the field given to the siblings tag. Otherwise it won't work.
