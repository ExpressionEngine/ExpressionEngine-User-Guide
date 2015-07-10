Model Service
=============

ExpressionEngine has a complex set of data types, such as Channels, Members,
Templates, and Categories. These have properties and constraints, as well
as relationships and complex storage requirements. The model service helps
smooth out interacting with ExpressionEngine's data types by providing an API
that mimics their natural language description as closely as is feasible. You do
not query for ``channel_data`` joined on ``channel_titles``; instead, you simply
get a channel entry with its fields.

.. toctree::
  :maxdepth: 1
  :glob:

  model/index
  building_models/index
  model/fetching
  model/relationships
