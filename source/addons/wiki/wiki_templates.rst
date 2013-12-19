Wiki Templates
==============

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Design --> Themes --> Wiki`

The Wiki's appearance is controlled via a collection of template files
that make up a **theme**. Wiki themes are located in the
themes/wiki\_themes directory. The following describes how the default
theme's templates are put together and lists the available tags,
parameters, and variables for each template.

.. note:: The included default wiki theme is fully commented with all
   the tags, parameters, and variables available in the wiki. This 
   provides a quick reference while building your own theme or modifying
   the default one.

Templates
---------

-  :doc:`Wiki Page <wiki_templates_page>`: This is the **wrapper**
   template that contains the header, sidebar and navigation.
-  :doc:`Wiki Article <wiki_templates_article>`: Displays the article
   and a list of its assigned categories.
-  :doc:`Wiki History <wiki_templates_history>`: Displays an article's
   history.
-  :doc:`Wiki Edit <wiki_templates_edit>`: Displays a article's editing
   interface.
-  :doc:`Wiki File <wiki_templates_file>`: Information about a single
   uploaded file.
-  **Special sections**: Pages created dynamically by the wiki.

   -  :doc:`Recent Changes <wiki_templates_special_recent_changes>`:
      The most recently changed wiki articles.
   -  :doc:`Categories <wiki_templates_special_categories>`: All wiki
      categories.
   -  :doc:`Titles <wiki_templates_special_titles>`: All wiki articles
      by title.
   -  :doc:`Uncategorized <wiki_templates_special_uncategorized>`:
      Lists all uncategorized wiki articles.
   -  :doc:`Search Results <wiki_templates_special_search_results>`:
      Displays wiki search results.
   -  :doc:`Files list <wiki_templates_special_files>`: Lists all of
      the files uploaded to the wiki.
   -  :doc:`Upload Form <wiki_templates_special_upload_form>`: Creates
      the wiki's upload form.
   -  :doc:`Associated
      Pages <wiki_templates_special_associated_pages>`: Lists
      pages that link to the current article.

-  :doc:`RSS and ATOM feeds <wiki_templates_special_feeds>`: The
   templates used to generate the wiki's feeds.
-  :doc:`Wiki Email Moderation Message <wiki_templates_special_email>`:
   Used to create the article moderator notification email body.
-  :doc:`Wiki Email Moderation Subject <wiki_templates_special_email>`:
   Used to create the article moderator notification email subject.
-  Wiki Style: The stylesheet used by all of a theme's templates.


