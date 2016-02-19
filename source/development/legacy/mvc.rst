#####################
Model-View-Controller
#####################

ExpressionEngine's add-ons are based on the Model-View-Controller development pattern. MVC is a software approach that separates application logic from presentation. This means that you won't have HTML mixed with your logic and that accessing your add-on's data can be abstracted instead of repeated.

- The **Model** represents your data structures. Typically your model classes will contain functions that help you retrieve, insert, and update information in your database.
- The **View** is the information that is being presented to a user. A View will normally be a web page, but a view can also be a page fragment like a header or footer.
- The **Controller** serves as an *intermediary* between the Model, the View, and any other resources needed to process the HTTP request and generate a web page. This is usually represented as your ``mcp.my_addon.php`` file.

ExpressionEngine has a loose approach to MVC since Models are not required. If you don't need the added separation, or find that maintaining models requires more complexity than you want, you can ignore them and build your application minimally using Controllers and Views.
