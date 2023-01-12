<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->
# Collections

Collections are used by the Keywords filter. A Collection generates an index which is used to match search terms (ie. keywords) against. They are always tied to one channel, but you can create multiple collections per channel.

## Settings

### Channel
The Channel to which the collection is related.

### Collection label
Full name of the search collection.

### Collection name
Short name of the search collection.

### Language
The language of the search collection. Defining a language will add the words in the collection to the lexicon.

### Modifier
Number used to multiply the relevance score of each entry in this search collection.


### Adding weight to fields

Selecting a Channel will display its fields below: the title and the searchable channel fields. Per field, you can assign a weight, ranging from 0 (excluding it from the index) to 3. The higher the weight, the more important that field will be in the collection index.

TIP: It makes sense to add more weight to small fields, like Title or text inputs, containing specific words about the entry. Adding weight to larger fields that contain a lot of content will be less effective.

### Selecting the excerpt field

You can select one of the available fields to act as the excerpt field. A stripped down version of this field will become available in the Results tag as the `{pro_search_excerpt}` variable.

For non-keyword searches, where collection information is not available, the excerpt field defined in the channel preferences will be used instead.

### Including categories

Pro Search can also add category information to the index, making entries searchable by keywords present in their categories. Just like the regular channel fields, you can add weight to the category name, description and any of the category custom fields.


### Building the index

You will need to build the index of the new collection. To do this, just click the Index link on the collections list page for the collection you’ve just created. If you have defined a language, you can also build the Lexicon or both the index and lexicon. Depending on the Batch size set in your Settings and amount of entries in the collection channel, this could take a while.

Once a collection index and lexicon is built, they will automatically stay up to date. However, if you change any of the field weights, you will need to rebuild the index to apply those changes to itself. Pro Search will alert you if a rebuild of the index is necessary. In such cases, the lexicon does not need to be updated.

### Third party fieldtypes

If a third party fieldtype stores its data in the native exp_channel_data table, it is supported by Pro Search, ie. its contents can be added to the collection index. Because of this, some popular fieldtypes can already be indexed. For example, Matrix stores its searchable columns in said table to enable ExpressionEngine’s native search module and is therefore also supported by Pro Search. Playa stores the Title and URL title of selected entries in the same way, which means the index data for searchable Playa fields will consist of these fields.

If the fieldtype doesn’t store its data in the native exp_channel_data table, it can make use of the Search index API to customize the data that will be added to the collection index.

### Diacritics and foreign characters

One of the advantages of Pro Search is the accent-insensitive search. This is achieved by removing any diacritics from characters in the search index. Pro Search uses the native foreign characters array to convert these characters to simple ASCII. You can find the array in the /system/expressionengine/config/foreign_chars.php file, which you can modify to your liking. Any characters not present in that array will be left alone. Each search query will be treated in the same way.

### Automate building of search indexes

If you’re manipulating ExpressionEngine’s entries through any other means than through the Control Panel or Channel Form, then you might need to build the search indexes manually. You can also use a CRON job that calls a specific URL that will trigger the update of the index and/or lexicon automatically. You can find this URL on the module home page, and it will look something like this:

http://example.com/index.php?ACT=99&key=12345

The following variables can be added to the call to that URL either via GET or POST:

- `ACT` - The build index action ID, as given. Required
- `build` - What you need to build, either index, lexicon or both (the default).
- `collection_id` - Comma separated list of collection IDs to build.
- `entry_id` - Comma separated list of entry IDs to build.
- `key` - Your Pro Search license key. Required

**Examples:**

`http://example.com/index.php?ACT=99&key=12345&collection_id=3`

`http://example.com/index.php?ACT=99&key=12345&entry_id=14,15,16&build=lexicon`

`http://example.com/index.php?ACT=99&key=12345&collection_id=1,2&build=index`

NOTE:**Note:** Building the index or lexicon via this URL will not happen in batches.