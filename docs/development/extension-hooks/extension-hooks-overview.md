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

# Available Core Hooks

Throughout ExpressionEngine are what is known as "hooks"; little snippets of code in over 100 strategic places that allow the calling of third-party scripts that can rewrite and modify the inner workings of the program. By hooking into the core, you can do things like modify an entire Control Panel page, add/remove functionality, and modify the appearance of certain page elements. Hooks enable third party developers to modify aspects of ExpressionEngine without hacking the core.

TIP: Reference [Extending The Core](development/extensions.md) for more information on developing extensions that hook into the core.

Core hooks are categorized into 5 categories:
- Global
    - [Core Library](development/extension-hooks/global/core.md)
    - [Email Library](development/extension-hooks/global/email.md)
    - [Filemanager Library](development/extension-hooks/global/filemanager.md)
    - [Functions Library](development/extension-hooks/global/functions.md)
    - [Grid Fieldtype](development/extension-hooks/global/grid.md)
    - [RTE Fieldtype](development/extension-hooks/global/rte.md)
    - [Input Library](development/extension-hooks/global/input.md)
    - [Output Library](development/extension-hooks/global/output.md)
    - [Pagination Library](development/extension-hooks/global/pagination.md)
    - [Relationships Fieldtype](development/extension-hooks/global/relationships.md)
    - [Session Library](development/extension-hooks/global/session.md)
    - [Template Library](development/extension-hooks/global/template.md)
    - [Text Helper](development/extension-hooks/global/text-helper.md)
    - [Typography Library](development/extension-hooks/global/typography.md)
- API Libraries
    - [Channel Fields API](development/extension-hooks/api/channel-fields.md)
    - [Template Structure API](development/extension-hooks/api/template-structure.md)
- Control Panel
    - [Admin Content Controller](development/extension-hooks/cp/admin-content.md)
    - [CSS Controller](development/extension-hooks/cp/css.md)
    - [Design Controller](development/extension-hooks/cp/design.md)
    - [Javascript Controller](development/extension-hooks/cp/javascript.md)
    - [Login Controller](development/extension-hooks/cp/login.md)
    - [Members Controller](development/extension-hooks/cp/members.md)
    - [Control Panel Menu](development/extension-hooks/cp/menu.md)
    - [My Account Controller](development/extension-hooks/cp/myaccount.md)
    - [Publish Controller](development/extension-hooks/cp/publish.md)
- Models
    - [CategoryField Model](development/extension-hooks/model/category-field.md)
    - [CategoryGroup Model](development/extension-hooks/model/category-group.md)
    - [Category Model](development/extension-hooks/model/category.md)
    - [Channel Model](development/extension-hooks/model/channel.md)
    - [Channel Entry Model](development/extension-hooks/model/channel-entry.md)
    - [ChannelFieldGroup Model](development/extension-hooks/model/channel-field-group.md)
    - [ChannelField Model](development/extension-hooks/model/channel-field.md)
    - [ChannelFormSettings Model](development/extension-hooks/model/channel-form-settings.md)
    - [ChannelLayout Model](development/extension-hooks/model/channel-layout.md)
    - [Comment Model](development/extension-hooks/model/comment.md)
    - [File Model](development/extension-hooks/model/file.md)
    - [Fluid Field Library](development/extension-hooks/model/fluid-field.md)
    - [GlobalVariable Model](development/extension-hooks/model/template-global-variable.md)
    - [MemberField Model](development/extension-hooks/model/member-field.md)
    - [Member Model](development/extension-hooks/model/member.md)
    - [Role Model](development/extension-hooks/model/role.md)
    - [Site Model](development/extension-hooks/model/site.md)
    - [Snippet Model](development/extension-hooks/model/template-snippet.md)
    - [SpecialtyTemplate Model](development/extension-hooks/model/template-specialty-template.md)
    - [Status Model](development/extension-hooks/model/status.md)
    - [TemplateGroup Model](development/extension-hooks/model/template-group.md)
    - [TemplateRoute Model](development/extension-hooks/model/template-route.md)
    - [Template Model](development/extension-hooks/model/template.md)
- Modules
    - [Channel Module](development/extension-hooks/module/channel.md)
    - [Channel Form](development/extension-hooks/module/channel-form.md)
    - [Comment Module](development/extension-hooks/module/comment.md)
    - [Email Module](development/extension-hooks/module/email.md)
    - [Forum Module](development/extension-hooks/module/forum.md)
    - [Member Module](development/extension-hooks/module/member.md)
    - [Member Module Authorization](development/extension-hooks/module/member-auth.md)
    - [Member Module Registration](development/extension-hooks/module/member-register.md)
    - [Member Module Settings](development/extension-hooks/module/member-settings.md)
    - [Search Module](development/extension-hooks/module/search.md)
    - [Simple Commerce Module](development/extension-hooks/module/simple-commerce.md)
    - [Wiki Module](development/extension-hooks/module/wiki.md)