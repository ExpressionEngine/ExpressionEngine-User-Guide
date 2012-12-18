The Template Engine
===================

At a basic level, :ref:`Templates <getting-started-templates>` contain
almost everything you want displayed on the front-end of the site. When
ExpressionEngine serves up each Template, the system must go through a
rendering process to parse out the Tags, Variables, Snippets, and Embeds
being used in the Template.

.. note:: The information in this article applies only to rendering
   Templates. It doesn't apply to rendering theme files such as those 
   used for :doc:`Member Profiles 
   </cp/design/themes/member_profile_templates>`, the :doc:`Wiki 
   </modules/wiki/wiki_templates>` module, or the :doc:`Discussion 
   Forum </modules/forum/forum_themes>` module.

ExpressionEngine goes through several stages to fully process each
Template, and this article exposes the order of those rendering stages.
Understanding how the system renders a template can help immensely when
building pages and troubleshooting problems.

The use of :doc:`Conditional Variables <globals/conditionals>` provides
a great example here. Simple conditionals are parsed *before* module
tags, but advanced conditionals are parsed *after* module tags. If a
simple conditional evaluates false, ExpressionEngine simply ignores a
module tag within that conditional, neither rendering it nor displaying
it. But if an advanced conditional evaluates false, ExpressionEngine can
only hide the output of the already fully rendered module tag. That
amounts to a big difference in performance.

Rendering Stages
----------------

The Template Engine processes the selected template fully from top to
bottom through each rendering stage.

#. Determine template to process based on request :doc:`URI </urls/url_structure>`

#. Get **template from database**, check :doc:`template access permissions </cp/design/templates/template_access>`, and increment the :doc:`hit counter </templates/hit_counter>`

#. If it exists, get :doc:`template from file </templates/templates_as_files>`

#. If template type is :doc:`static </cp/design/templates/new_template>`, return template and end parsing

#. Parse (as a group, so order is irrelevant):

   * {freelancer_version}
   * :doc:`Snippets </templates/globals/snippets>`
   * :ref:`MSM variables <msm-variables>`: {site_id}, {site_label}, {site_shortname}
   * :ref:`{last_segment} <global-last-segment>`

#. Parse :doc:`segment variables </templates/globals/url_segments>`

#. Parse :ref:`embed variables <embed-variables>`

#. Parse :ref:`date formatting string constants <template-date-formatting-constants>`

#. Parse :ref:`{template_edit_date} <global-template_edit_date>`

#. Parse :ref:`{current_time} <global-current_time>`

#. If present, get :ref:`cached template <caching-template-caching>`, then skip to the **advanced 
   conditionals** parsing stage

#. Parse :ref:`PHP on Input <php-parsing-stage>`

#. Parse :ref:`simple conditionals <global-simple-conditionals>`: segment, embed, global variables

#. Assign and parse :doc:`preload_replace variables </templates/globals/preload_replacement>`

#. Parse **module and plugin tags**

   * See notes on how :ref:`nested plugins <templates-nested-plugins>` are parsed.
   * If any module's :ref:`{if no_results} <channel-entries-if-no_results>` tag pair evaluates true, a :ref:`{redirect} <global-redirect>` variable within the tag pair will be processed immediately.

#. Parse :ref:`PHP on Output <php-parsing-stage>`

#. Write **template to cache file**

#. Parse :ref:`advanced conditionals <global-advanced-conditionals>`

#. Process :doc:`embedded templates </templates/embedding>`

#. Process :ref:`redirect variable <global-redirect>`

#. Parse :doc:`user-defined global variables 
   </templates/globals/user_defined>`

#. Parse some :doc:`standard global variables </templates/globals/single_variables>` (separately, in order given):

   * {hits}
   * {ip_address}
   * {ip_hostname}
   * {homepage}
   * {cp_url}
   * {site_name}
   * {site_url}
   * {site_index}
   * {webmaster_email}
   * {stylesheet}
   * {encode}
   * {debug_mode}
   * {gzip_mode}
   * {app_version}
   * {version}
   * {app_build}
   * {build}
   * {charset}
   * {lang}
   * {doc_url}
   * {theme_folder_url}
   * {member_profile_link}
   * {captcha}

#. Add :ref:`security hashes <dev-guidelines-secure-forms>` to forms and parse :ref:`{XID_HASH} <global-xid-hash>` 

#. Parse remaining :doc:`standard global variables </templates/globals/single_variables>` (separately, in order given):

   * {member_id}
   * {group_id}
   * {group_description}
   * {group_title}
   * {member_group}
   * {username}
   * {screen_name}
   * {email}
   * {ip_address}
   * {location}
   * {total_entries}
   * {total_comments}
   * {private_messages}
   * {total_forum_posts}
   * {total_forum_topics}
   * {total_forum_replies}

#. Parse :ref:`alternative syntax <global-alt-syntax>` forms of the member variables above

#. Parse :doc:`path variables </templates/globals/path>`