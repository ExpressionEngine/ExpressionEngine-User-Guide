---
lang: ee
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://www.packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Cypress Tests

ExpressionEngine is utilizing [Cypress](https://www.cypress.io/) for integration tests.

The tests are organized to check the functionality of ExpressionEngine itself, but can also be extended for add-on testing.

NOTE: In order to get access to Cypress testing, ExpressionEngine need to be [installed from repository](https://github.com/ExpressionEngine/ExpressionEngine/blob/6.dev/README.md#if-youre-installing-from-the-repository). You also need to have [Node.js and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed.

[TOC]

## Setting up

1. Back up your existing database and `system/user/config.php` file.
The database might be rewritten with the test dump and the config file changed during tests run.

2. Ensure your `config.php` file has correct `base_path`, `base_url` and `site_url` values set up. Example:
        $config['base_path'] = $_SERVER['DOCUMENT_ROOT'];
        $config['base_url'] = 'http://ee6pro.local/';
        $config['site_url'] = $config['base_url'];

3. `cd tests/cypress`
The Cypress working directory is `tests/cypress`, so all terminal command should be run there.

4. `npm i`
Cypress is being provided as NPM package, so run this command to install Cypress and all dependencies. If this is your first time using Cypress, the process might take a while to download and unpack the things.

5. `cp cypress.env.example.json cypress.env.json`
You will need to set up environment file that will hold important information that allow Cypress to connect to ExpressionEngine, such as your site URL, database name etc. These values should match the settings in ExpressionEngine config file.

6. `npm run cypress:open`
This command will open the Cypress UI that lists all tests that exist for ExpressionEngine in `tests/cypress/cypress/integration` folder and can be run individually. Clicking on the test file name will run the test using selected browser.

5. `npx cypress run --headed --no-exit -s cypress/integration/cp/login.ee6.js`
This command will run particular test file as specified by `-s` parameter. You can also specicy wildcart `*` in place of file name to run all tests in folder. Note that as of current Cypress version that EE is using the test files cannot be placed above `tests/cypress` directory in directories tree.

## Cypress commands and tasks for EE

In addition to built-in Cypress commands, ExpressionEngine is providing several specific helper commands, that are defined in `support/commands.js`

#### `cy.auth()`
Log the the user into Control Panel.

#### `cy.authVisit()`
Visit certain page after ensuring the user is logged in into Control Panel.

#### `cy.hasNoErrors()`
Checks that page contents does not show any of common errors.

#### `cy.createChannel()`
Creates channel

#### `cy.addMembers()`
Creates test members

#### `cy.addRole()`
Creates new member role

#### `cy.createEntries()`
Creates some entries for testing

#### `cy.eeConfig()`
Get or set certain configuration value

    cy.eeConfig({ item: 'save_tmpl_files', value: 'n' })
    cy.eeConfig({ item: 'site_url' })

#### `cy.task('db:clear')`
Truncates the database

#### `cy.task('db:seed')`
Replaces the database using the default database dump provided with ExpressionEngine Cypress tests

#### `cy.task('db:load', '../../support/spam/spam.sql')`
Executes the SQL file provided

#### `cy.task('db:query', 'SELECT status FROM exp_statuses')`
Executes the SQL query provided

#### `cy.task('cache:clear')`
Clears all EE caches

#### `cy.task('filesystem:delete', '../../images/about/')`
Delete files from directory

#### `cy.task('filesystem:create', Cypress.env("TEMP_DIR")+'/about')`
Create directory

#### `cy.task('filesystem:createFile', Cypress.env("TEMP_DIR")+'/test.html')`
Create file

#### `cy.task('filesystem:copy', { from: Cypress.env("TEMP_DIR")+'/about/*', to: '../../images/about' })`
Copy files between directories

#### `cy.task('filesystem:path', 'support/tmp')`
Get full server path to file or directory

#### `cy.task('filesystem:list', {target: upload_path, mask: '/*.png'})`
List the files that match mask in targer directory

#### `cy.task('filesystem:read', '../../system/user/config/config.php')`
Read the file

#### `cy.task('filesystem:rename', {from: installer_folder, to: '../../system/ee/installer'})`
Rename file or directory

## Writing your own tests

The test files should have `.ee6.js` extension and need to be placed in a folder inside `tests/cypress/cypress/integration` directory.

The minimal test file might just consist of `it` directive like in the example

    it('test something', () => {
        cy.log('performing the test...')
    })

However if you have more than one test, it's better to have them organized into groups

    context('Test', () => {
        it('test something', () => {
            cy.log('performing the test...')
        })
    })

The typical test would try to emulate user performing certain actions and then check the result against what is expected. 

It is recommended to keep the tests granular, so if one of the tests fails and the other ones pass you know exactly where to look. However for complex test cases sometimes the procedure needs to be written as one large test; in such case, it is good practice to perform intermediate checks during the test run.

