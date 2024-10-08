---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Database Class

[TOC]

## Calling the DB Class

ExpressionEngine has an abstract database layer that allows developers to easily access the MySQL database and also provide many features like automatic escaping of characters and query caching.

This class is initialized automatically:

    $channels = ee()->db->select('channel_name')
      ->from('channels')
      ->get();

    if ($channels->num_rows() > 0)
    {
        foreach($channels->result_array() as $row)
        {
            echo $row['channel_name']."<br />\n";
        }
    }

### Active Record

While we still make `ee()->db->query()` available, it's highly recommended that you use [CodeIgniter's Active Record](https://www.codeigniter.com/userguide2/database/active_record.html) because queries will be easier to read and edit:

    $query = ee()->db->select('username, screen_name, email, url, signature')
        ->from('members m')
        ->join('my_table t', 'm.member_id = t.member_id')
        ->where(array(
            't.subscribed' => 'y',
            't.end_date >' => ee()->localize->now,
        ))
        ->limit($per_page)
        ->order_by('m.join_date', 'desc')
        ->get();

NOTE: **Note:** We're not adding `exp_` to the beginning of the table names, CodeIgniter takes care of that automatically, so you can add it if you want, but it's unnecessary.

## SELECTing Data

When you perform a `SELECT` query using Active Record, a database object containing the results will be returned. To check for the number of results returned by the query, use the `num_rows` value in the returned object:

    $results = ee()->db->select('*')
      ->from('channels')
      ->get();

    if ($results->num_rows() == 0)
    {
        exit('No channels exist');
    }

NOTE: **Note:** You don't have to supply a `select()` or a `from()`, instead if you want to select everything simply omit the `select()`, and instead of adding a `from()`, just put the table name in the `get()`:

    $results = ee()->db->get('channels');

In many instances, you will know that only a single row of data will be returned from a query. Instead of looping through an array, you can simply use the `row` array in the object returned:

    $results = ee()->db->order_by('channel_id')
      ->limit(1)
      ->get('channels');

    $first_channel = $results->row('channel_name');

When many rows of data are returned you will wish to loop through the returned array and use the values returned for the fields. ExpressionEngine uses `MYSQL_ASSOC`, which has MySQL using the field names in the array and not numbers. To access this array, then you will want to use the `result` array of the object with a `foreach` loop:

    $results = ee()->db->select('channel_name, channel_id')
      ->get('channels');

    if ($results->num_rows() > 0)
    {
        foreach($results->result_array() as $row)
        {
            echo $row['channel_id'].' - '.$row['channel_name']."<br />\n";
        }
    }

## INSERTing Data

Active Record includes `insert()`, `insert_batch()` and `set()` methods that makes the inserting of data into the database easier by correctly formatting the `INSERT` string and escaping the values being inserted. The `insert()` and `insert_batch()` methods accept the name of the table for the insert and an array containing the field names as keys with the values containing the data for those fields:

    ee()->db->insert(
        'channel',
        array(
            'name'  => $name,
            'email' => $email,
            'url'   => $url
        )
    );

Upon performing an insert you might wish to know the value of the primary key for the row that was added. Active Record tracks the last insert and will return the primary key value using the `insert_id()` method of the class:

    ee()->db->insert('channel', array('name' => $name));
    $entry_id = ee()->db->insert_id();

## UPDATEing Data

Active Record also includes `update()` and `update_batch()` methods that makes the updating of data in the database easier by correctly formatting the UPDATE string and escaping the values being inserted. Both methods accept the name of the table for the update, an array containing the field names as keys with the values containing the updated data for those fields, and the `WHERE` clause for choosing which rows in the table to update:

    ee()->db->update(
        'channel',
        array(
            'name'  => $name,
            'email' => $email,
            'url'   => $url
        ),
        array(
            'author_id' => '1'
        )
    );

## DELETEing Data

Like `UPDATE`'s and `INSERT`'s, Active Record has a `delete()` method for deleting data. It accepts a table name and a string or array containing the `WHERE` clause(s):

    ee()->db->delete(
        'table',
        array(
            'id' => $id_to_delete
        )
    );

NOTE: **Note:** Always be wary of the data you're deleting.

## Additional Methods

`affected_rows` will return how many rows in the database were affected during the most recent query. Every so often a useful variable to have when performing `INSERT`, `UPDATE`, or `DELETE` queries:

    ee()->db->delete('comments', array('url' => $site_url));
    echo ee()->db->affected_rows()." rows were deleted.";
