<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Custom fields and indexes

If your custom field type stores something else in the `exp_channel_data` table than what needs to be indexed, you can add Pro Search compatibility to your custom field type. Just add a public method `third_party_search_index($field_data)` to your field type class, and you’re good to go.

`third_party_search_index` is given one parameter: `(string) $data`, the field data currently in the database. Furthermore, all field settings are available through `$this->settings`, including `$this->settings['entry_id']` for the current entry and `$this->settings['pro_search_collection_id']` for the current collection id. The method should return a string that is used for the search index. The string will be sanitized by Pro Search and the field weight will be added automatically as well.

## Example

    public function third_party_search_index($data)
    {
      $query = $this->EE->db->select('real_content')
             ->from('custom_table')
             ->where('entry_id', $this->settings['entry_id'])
             ->where('other_key', $data)
             ->get();
    
      return $query->row('real_content');
    }