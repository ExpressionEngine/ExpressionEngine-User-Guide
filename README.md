# ExpressionEngine® User Guide

The public user guide repository for the [ExpressionEngine](https://expressionengine.com) project. The online version of the user guide is hosted at [docs.expressionengine.com](https://docs.expressionengine.com).

## Setup

The ExpressionEngine user guide is written in human-readable Markdown and uses a simple script to generate beautiful HTML docs.

### Prerequisites

Building the docs requires Node and npm (latest stable version).

In the root of the repository, install all the dependencies:

    npm install

### Building the Docs

To build the docs:

    npm run build

To dynamically rebuild on any file changes:

    npm run watch

### Building theme assets

The documentation css and js files are located under `theme/assets-src`.

To build the theme assets, run `npm run buildAssets`. You can also dynamically rebuild the assets when a file changes: `npm run watchAssets`.

### Viewing local changes

Manually load `/build/index.html` in your browser to view your local build. For example, `file:///Users/<username>/Documents/ExpressionEngine-User-Guide/build/index.html`. You can use the side navigation to navigate to different local files, but the search functionality always takes you to the live version at docs.expressionengine.com.

## Using DocSearch Locally

First you will need to choose a docsearch index name to use for your local testing and set that in `config.yml`

Then you will need to build the docs and serve a local copy.  For simplicity's sake we recommend using the node http-server like this `npx http-server -o ./build`

Next you will need to update all the urls in `search.config.json` to point at your local copy of the documentation.  Do a find/replace on `https://docs.expressionengine.com/latest` => `http://localhost:8080`.  You will also need to update the `allowed_domains` array to include this new url. (If you are on a mac you may need to use `http://host.docker.internal:8080` instead so that the scraper container can connect to the docs on your local http-server.)

Finally you can scrape your local docs with the following docker command

```
docker run -t --rm --network=host
    -e MEILISEARCH_HOST_URL=https://docsearch.expressionengine.com \
    -e MEILISEARCH_API_KEY={{ SECRET_KEY }} \
    -v ./search.config.json:/docs-scraper/search.config.json \
    getmeili/docs-scraper:latest pipenv run ./docs_scraper search.config.json
```

## Contributing

See something that needs fixing? Want to improve the user guide or make it more helpful? Great! Check out [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## Copyright / License Notice

The ExpressionEngine project is copyright (c) 2003-2021 Packet Tide, LLC. ([https://packettide.com](https://packettide.com)) and is licensed under Apache License, Version 2.0. This project contains subcomponents with separate copyright and license terms, all of which are fully FOSS and compatible with Apache-2.0.

Complete license terms and copyright information can be found in [LICENSE.txt](LICENSE.txt) in the root of this repository.

"ExpressionEngine" is a registered trademark of Packet Tide, LLC. in the United States and around the world. Refer to ExpressionEngine's [Trademark Use Policy](https://expressionengine.com/about/trademark-use-policy) for access to logos and acceptable use.
