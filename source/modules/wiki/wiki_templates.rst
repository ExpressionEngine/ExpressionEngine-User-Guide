Wiki Templates
==============

The Wiki's appearance is controlled via a collection of template files
that make up a **theme**. Wiki themes are located in the
themes/wiki\_themes directory. The following describes how the default
theme's templates are put together and lists the available tags,
parameters, and variables for each template.

**Note:** The included default wiki theme is fully commented with all
the tags, parameters, and variables available in the wiki. This provides
a quick reference while building your own theme or modifying the default
one.

Templates
---------

-  `Wiki Page <wiki_templates_page.html>`_: This is the **wrapper**
   template that contains the header, sidebar and navigation.
-  `Wiki Article <wiki_templates_article.html>`_: Displays the article
   and a list of its assigned categories.
-  `Wiki History <wiki_templates_history.html>`_: Displays an article's
   history.
-  `Wiki Edit <wiki_templates_edit.html>`_: Displays a article's editing
   interface.
-  `Wiki File <wiki_templates_file.html>`_: Information about a single
   uploaded file.
-  **Special sections**: Pages created dynamically by the wiki.

   -  `Recent Changes <wiki_templates_special_recent_changes.html>`_:
      The most recently changed wiki articles.
   -  `Categories <wiki_templates_special_categories.html>`_: All wiki
      categories.
   -  `Titles <wiki_templates_special_titles.html>`_: All wiki articles
      by title.
   -  `Uncategorized <wiki_templates_special_uncategorized.html>`_:
      Lists all uncategorized wiki articles.
   -  `Search Results <wiki_templates_special_search_results.html>`_:
      Displays wiki search results.
   -  `Files list <wiki_templates_special_files.html>`_: Lists all of
      the files uploaded to the wiki.
   -  `Upload Form <wiki_templates_special_upload_form.html>`_: Creates
      the wiki's upload form.
   -  `Associated
      Pages <wiki_templates_special_associated_pages.html>`_: Lists
      pages that link to the current article.

-  `RSS and ATOM feeds <wiki_templates_special_feeds.html>`_: The
   templates used to generate the wiki's feeds.
-  `Wiki Email Moderation Message <wiki_templates_special_email.html>`_:
   Used to create the article moderator notification email body.
-  `Wiki Email Moderation Subject <wiki_templates_special_email.html>`_:
   Used to create the article moderator notification email subject.
-  Wiki Style: The stylesheet used by all of a theme's templates.


