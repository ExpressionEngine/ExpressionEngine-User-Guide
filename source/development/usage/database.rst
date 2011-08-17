Database Class
==============

.. contents::
	:local:

Calling the DB Class
--------------------

ExpressionEngine has an abstract database layer that allows developers
to easily access the MySQL database and also provide many features like
automatic escaping of characters and query caching.

This class is initialized automatically.

::

    $query = $this->EE->db->query("SELECT channel_name FROM exp_channels");

    if ($query->num_rows() > 0)
    {
        foreach($query->result_array() as $row)
        {
            echo $row['channel_name']."<br />\n";
        }
    }

Performing a Query
------------------

**$this->EE->db->query()** sends a query to the database and will also
return back the results, if it is a SELECT query. If you are doing an
INSERT or UPDATE, then you do not need to set a variable since there are
no results being returned.

::

    // Simple select query
    $query = $this->EE->db->query("SELECT * FROM exp_channels");

    // Update, with no variable being set
    $this->EE->db->query("UPDATE exp_channels SET channel_name = 'dog' WHERE channel_name = 'cat'");

***Note:** When doing any sort of query using user submitted data make
sure to use the $this->EE->db->escape\_str() function (details below) to
prevent any problems between MySQL and the data.*

Retrieving Results from SELECT query
------------------------------------

Upon performing a SELECT query an object containing the results of query
will be returned by the function. To check for the number of results
returned by the query, use the **num\_rows** value in the returned
object.

::

    $results = $this->EE->db->query("SELECT * FROM exp_channels");

    if ($results->num_rows() == 0)
    {
        exit('No channels exist');
    }

In many instances, you will know that only a single row of data will be
returned from a query. Instead of looping through an array, you can
simply use the **row** array in the object returned.

::

    $results = $this->EE->db->query("SELECT * FROM exp_channels ORDER BY channel_id LIMIT 0,1");

    $first_channel = $results->row('channel_name');

When many rows of data are returned you will wish to loop through the
returned array and use the values returned for the fields.
ExpressionEngine uses MYSQL\_ASSOC, which has MySQL using the field
names in the array and not numbers. To access this array, then you will
want to use the **result** array of the object with a foreach loop.

::

    $results = $this->EE->db->query("SELECT channel_name, channel_id FROM exp_channels");

    if ($results->num_rows() > 0)
    {
        foreach($results->result_array() as $row)
        {
            echo $row['channel_id'].' - '.$row['channel_name']."<br />\n";    
        }
    }

INSERTing Data
--------------

Included in the DB Class is a function that makes the inserting of data
into the database easier by correctly formatting the INSERT string and
escaping the values being inserted. The **insert\_string()** function
accepts the name of the table for the insert and an array containing the
field names as keys with the values containing the data for those
fields.

::

    $data = array('name' => $name, 'email' => $email, 'url' => $url);

    $sql = $this->EE->db->insert_string('exp_channel', $data);

    // INSERT INTO exp_channel (name, email, url) VALUES ('Joe', 'joe@joe.com', 'www.joe.com')

    $this->EE->db->query($sql);

Upon performing an insert you might wish to know the value of the
primary key for the row that was added. The DB Class tracks the last
insert and will return the primary key value using the insert\_id()
method of the class.

::

    $this->EE->db->query($insert_sql);
    $entry_id = $this->EE->db->insert_id();

UPDATEing Data
--------------

Included in the DB Class is a function that makes the updating of data
in the database easier by correctly formatting the UPDATE string and
escaping the values being inserted. The **update\_string()** function
accepts the name of the table for the update, an array containing the
field names as keys with the values containing the updated data for
those fields, and the WHERE clause for choosing which rows in the table
to update.

::

    $data = array('name' => $name, 'email' => $email, 'url' => $url);

    $sql = $this->EE->db->update_string('exp_channel', $data, "author_id = '1'");

    // UPDATE exp_channel SET name = 'Joe', email = 'joe@joe.com', url = 'www.joe.com' WHERE author_id = '1'

    $this->EE->db->query($sql);

Additional Functions
--------------------

**escape\_str** will accept a string variable and return that variable
prepared for any sql statement to the database.

::

    $query = $this->EE->db->query("SELECT FROM exp_comments WHERE url = '".$this->EE->db->escape_str($site_url)."'");

**affected\_rows** will return how many rows in the database were
affected during the most recent query. Every so often a useful variable
to have when performing INSERT, UPDATE, or DELETE queries.

::

    $query = $this->EE->db->query("DELETE FROM exp_comments WHERE url = '".$this->EE->db->escape_str($site_url)."'");
    echo $this->EE->db->affected_rows()." rows were deleted.";

