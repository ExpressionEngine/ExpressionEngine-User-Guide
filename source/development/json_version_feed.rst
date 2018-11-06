JSON Version Feed
=================

If you have need of knowing the current available version of
ExpressionEngine, or the release history of previous version numbers,
that information is available to you via a JSON feed at the following
URL::

  https://expressionengine.com/support/expressionengine-version-history.json

Feed Format
-----------

The returning feed is formatted thusly:

.. code-block:: json

  {
    "current_version": "2.8.1",
    "version_history": {
        "2.8.1": "2014-03-14",
        "2.8.0": "2014-02-28",
        "2.7.3": "2013-12-10",
        "2.7.2": "2013-10-08",
        "2.7.1": "2013-09-24",
        "2.7.0": "2013-08-27",
        "2.6.1": "2013-05-06",
        "2.6.0": "2013-04-23",
        "2.5.5": "2012-12-20",
        "2.5.4": "2012-12-18",
        "2.5.3": "2012-09-18",
        "2.5.2": "2012-06-06",
        "2.5.1": "2012-05-30",
        "2.5.0": "2012-05-07",
        "2.4.0": "2012-01-24",
        "2.3.1": "2011-10-17",
        "2.3.0": "2011-10-11",
        "2.2.2": "2011-08-01",
        "2.2.1": "2011-06-30",
        "2.2.0": "2011-06-22",
        "2.1.5": "2011-05-12",
        "2.1.4": "2011-01-01",
        "2.1.3": "2010-12-20",
        "2.1.2": "2010-12-15",
        "2.1.1": "2010-10-18",
        "2.1.0": "2010-07-12",
        "2.0.2": "2010-04-15",
        "2.0.1": "2010-01-21",
        "2.0.0": "2009-12-02"
    }
  }

current_version
~~~~~~~~~~~~~~~

The current version of ExpressionEngine available for download.

version_history
~~~~~~~~~~~~~~~

A hash table of all versions and release dates for ExpressionEngine,
including the most current.

==============  =========================
Key             Value
==============  =========================
version number  release date (yyyy-mm-dd)
==============  =========================

Accessing the Feed
------------------

When utilizing the JSON version feed, please utilize caching and
restrict calls to no more than once per day. Abuse of the resource by a
specific user will result in terminated access to the JSON version feed
for that user.
