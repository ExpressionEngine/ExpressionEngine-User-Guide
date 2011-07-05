Update Notes for Version 1.2
============================

Search Keyword Matching
-----------------------

To take advantage of the new search feature, you need to make a change
to your existing "Advanced Search" form. By default, this is available
in the Control Panel under Templates > Search > Index.

Replace this code::

	<div class="default"> <input type="checkbox" class="checkbox" name="exact_keyword" value="y" /> {lang:exact_phrase_match} </div>

With this::

	<div class="default"> <select name="where"> <option value="exact" selected="selected">{lang:exact_phrase_match}</option> <option value="any">{lang:search_any_words}</option> <option value="all" >{lang:search_all_words}</option> <option value="word" >{lang:search_exact_word}</option> </select> </div>
