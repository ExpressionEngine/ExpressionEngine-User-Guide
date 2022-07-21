<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Purchasing Pro and Adding a Site License

[TOC]

## Trial use of ExpressionEngine Pro
When used in a local development environment with an [approved top-level domain](installation/license-management.md#approved-top-level-domains) or hosted in an [approved PaaS environment](installation/license-management.md#approved-platform-as-a-service-paas-domains), ExpressionEngine Pro (including Low Search and Low Variables) can be used freely. All features are available to users while in this trial mode.

### Approved Top-Level Domains

- acc
- acceptance
- demo
- dev (approved by ICANN as public TLD and is now deprecated. will be removed shortly)
- example
- invalid
- loc
- local
- localhost
- sandbox
- stage
- staging
- test
- testing
- vm

### Approved Platform-as-a-Service (PaaS) Domains

- amazonaws.com
- elasticbeanstalk.com
- frb.io
- herokuapp.com
- xip.io
- localtest.me
- ddev.site
- lndo.site

## Purchasing an ExpressionEngine Pro License
ExpressionEngine Pro requires a license to be installed on a publicly visible domain. You can choose from yearly or monthly billing, as well as receive a discount for additional MSM sites. If a site which was developed locally with ExpressionEngine Pro is deployed to a publicly visible site you will most likely see license error messages in your Control Panel. While not breaking the front-end of your site, an invalid license will prevent many Pro features from being used including front-end editing, Low Search, Low Variables, Cookies management, and more.


### Purchase Pro from the Control Panel
To purchase an ExpressionEngine Pro license you can click on the "Purchase Pro License" link in the Control Panel (found at the bottom of the side navigation menu).

![purchase pro Control panel](_images/ee-pro-purchase-pro-cp.png)

### Purchase Pro from the ExpressionEngine Store
To purchase an ExpressionEngine Pro license from the ExpressionEngine Store, go to [https://expressionengine.com/store/purchase-pro](https://expressionengine.com/store/purchase-pro) and select the type of billing that best suits your needs.

### Purchase a license for additional MSM sites
After purchasing your first license for your default site, additional MSM licenses can be purchased using the same methods as above at a discounted rate.

## Activating Your License
Follow these steps to use your purchased Pro license:

1. Go to your [ExpressionEngine Store Account](https://expressionengine.com/store/licenses) and attach the license to a site (Video: [Attach your product to a site)](https://youtu.be/F80Bl8pid_0 ). 


2. Next, enter your site license key in your [General Settings](control-panel/settings/general.md) (Settings -> General Settings -> Site License Key)

![license key](_images/ee-pro-site-license-key.png)

**Your ExpressionEngine Pro installation should now should show as active.**


## Installation of Included Products
An ExpressionEngine Pro license also includes access to other products. Currently this includes Low Search and Low Variables. Each of these can be downloaded separately and will be automatically installed with Pro if available in your `user/addons` folder. If you do not wish to use any of the additional products, just do not include these in your `user/addons` folder and they will not be installed.  If your site is already making use of Low Search, Low Variables, or other included products, they will continue to work as intended.

### Downloading Included Products
Included products (such as Low Search and Low Variables) can be downloaded from the [ExpressionEngine Store](https://expressionengine.com/add-ons). Once downloaded, simply unzip the product package and follow the standard [add-on install process](add-ons/overview.md#installing-add-ons).

### Licenses for Included Products
Once installed, included products will be licensed through the site license which Pro is attached to. Therefore, all you need to do is ensure that your [site license](pro/installation.md#activating-your-license) is setup correctly, and all your included products will just work.

### Using Included Products Without Pro
If you have installed included products along side your ExpressionEngine Pro installation, but do not wish to continue to use Pro, then you must purchase individual licenses for those products through the ExpressionEngine Store. Once those licenses are purchased and tied to a site in your Store account, then your products will again have full functionality.