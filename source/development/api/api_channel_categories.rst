ExpressionEngine Channel Categories API
=======================================

.. contents::
  :local:
  :depth: 1
            
Calling the Class
-----------------

.. class:: Api_channel_categories

  The Channel Category class is called with the api->instantiate()
  function::

    $this->EE->load->library('api');  
    $this->EE->api->instantiate('channel_categories');

Function Reference
------------------

.. contents::
  :local:

Category Tree
~~~~~~~~~~~~~

.. method:: category_tree($group_id[, $selected = ''[, $order = '']])

  This function returns an array consisting of a hierarchy tree of
  categories. It has one required parameter, the category
  ``group_id``. The category group(s) may be defined as a pipe
  delimited list of ``group_ids`` or an array. The second parameter
  allows the specification of any selected categories (useful when
  used as form data), while the third parameter determines the
  ordering of the categories (``a`` for alphabetical based on
  ``category_name`` or ``c`` for the specified custom ordering)::

    $this->EE->api_channel_categories->category_tree(
        (mixed) $group_id, [(mixed) $selected, [(string) c or a]]
    );

  :param mixed $group_id: Category group ID, pipe delimited string of 
    category group IDs or array of category group IDs to create a 
    category tree for
  :param mixed $selected: Category ID, pipe delimited string of 
    category IDs or array of category IDs to mark as selected
  :param string $order: ``c`` for custom ordering, ``a`` for 
    alphabetical
  :returns: ``FALSE`` if no results, otherwise an associative array 
    containing the category tree (see below)
  :rtype: Array/Boolean

  Example of returned data::

    array(
        0 => array(
            '0' =>  (int) Category ID,
            '1' =>  (string) Category Name,
            '2' =>  (int) Category Group ID,
            '3' =>  (string) Category Group Name,
            '4' =>  (bool) Selected,
            '5' =>  (int) Depth Nested in the Tree,
            '6' =>  (int) Category Parent ID
        ),
        1 => array(...)
    );

Category Form Tree
~~~~~~~~~~~~~~~~~~

.. method:: category_form_tree([$nested = 'y'[, $categories = FALSE[, $sites = FALSE]]])

  This function returns an array consisting of a hierarchy tree of
  categories formatted for use in select and multi-select forms and
  related javascript. It takes 3 optional parameters. The first
  parameter determines whether the returned categories are arranged in
  a nested format. The second parameter allows you to specify
  categories to include or exclude from the array. Included categories
  may be in the format of an array of category ids. You may also
  include or exclude categories using a pipe delimited string. This
  parameter defaults to ``(bool) FALSE``, which will include all
  categories. The third parameter determines the ``site_id``, and may
  be in the format of an array of site ids. You may also include or
  exclude sites using a pipe delimited string. This parameter defaults
  to ``(bool) FALSE``, which will include only categories from the
  current site::

    $this->EE->api_channel_categories->category_form_tree(
        [(string) $nested y/n, [(mixed) $categories, [(mixed) $sites]]]
    );

  :param string $nested: `y` if you want the array to be nested, 
    anything else will return a flat listing
  :param mixed $categories: Category ID, pipe delimited string of 
    category IDs, or array of Category IDs
  :param mixed $sites: Site ID, pipe delimited string of site IDs, or 
    array of site IDs
  :returns: Array consisting of a hierarchy tree of categories 
    formatted for use in select and multi-select forms and related 
    javascript
  :rtype: Array

  Example of returned data::

    array(
        0 => array(
            '0' =>  (int) Category Group ID,
            '1' =>  (int) Category ID,
            '2' =>  (string) Category Name in ASCII Format,
            '3' =>  (int) Parent ID
        ),
        1 => array(...)
    );

Fetch Category Parents
~~~~~~~~~~~~~~~~~~~~~~

.. method:: fetch_category_parents($cat_array)

  This function finds the parents of the specified categories and adds
  them to the cat\_parents class variable. ::

    $this->EE->api_channel_categories->fetch_category_parents(
        (array) $cat_array
    );

  :param array $cat_array: Array of category IDs
  :rtype: Void

Fetch Allowed Category Groups
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. method:: fetch_allowed_category_groups($cat_group)

  Given an array or a pipe delimited list of category group ids, this
  returns an array of the category group names if the user has
  permission to administrate channels or edit categories. Returns
  ``FALSE`` otherwise::

    $this->EE->api_channel_categories->fetch_allowed_category_groups(
        (mixed) $cat_group
    );

  :param mixed $cat_group: Category ID, or an array or pipe delimited
    string of category IDs
  :returns: Array of category group names the user has permission to 
    administrate or ``FALSE`` if there are no allowed category 
    groups.
  :rtype: Array/Boolean

  Example Usage::

    $group_id = '1|5';
    
    $allowed = $this->EE->api_channel_categories->fetch_allowed_category_groups($group_id);
    
    if ($allowed != FALSE) {
        foreach($allowed as $val)
        {
            echo 'Group ID: '.$val['0'].' Group Name: '.$val['1'].'';
        }
    }
