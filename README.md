# ExpressionEngine® User Guide

The public user guide repository for the [ExpressionEngine](https://expressionengine.com) project. The online version of the user guide is hosted at [docs.expressionengine.com](https://docs.expressionengine.com).

## Setup Instructions

The ExpressionEngine user guide uses Sphinx to manage the documentation and output it to various formats. Pages are written in human-readable ReStructured Text format.

## Prerequisites

To build the user guide, you must have Docker installed. If you need to install it, the easiest way is with [Docker Desktop](https://www.docker.com/products/docker-desktop).

Once that's installed, you can use the `eetools` helper script to simplify working with the Docker. First you need to build the container:

```
eetools createcontainer
```

Note, on MAMP you may get a `eetools: command not found`, as your shell maybe isn’t looking in the current working directory. Just use `./eetools` instead.

## Editing and Creating Documentation

All of the source files exist under `source/` and is where you will add new documentation or modify existing documentation. We recommend working from feature branches and making pull requests to the `stability` branch of this repo.

## So where's the HTML?

The HTML documentation is what we care most about, as it is the primary documentation that users will encounter. Since revisions to the built files are not of value, they are not under source control. This also allows you to regenerate as necessary if you want to "preview" your work. Generating the HTML is very simple. From the root directory of your fork, issue this command:

```
eetools make
```

If you want to rebuild all files from scratch instead of just the changed ones, use:

```
eetools make -c
```

You will see it do a whiz-bang compilation, at which point the fully rendered user guide and images will be in `build/html/`. After the HTML has been built, each successive build will only rebuild files that have changed, saving considerable time. If for any reason you want to "reset" your build files, use the `-c` flag for a "clean" build.

## Contributing

See something that needs fixing? Want to improve the user guide or make it more helpful? Great! Check out [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## Copyright / License Notice

The ExpressionEngine project is copyright (c) 2003-2018 EllisLab, Inc ([https://ellislab.com](https://ellislab.com)) and is licensed under Apache License, Version 2.0. This project contains subcomponents with separate copyright and license terms, all of which are fully FOSS and compatible with Apache-2.0.

Complete license terms and copyright information can be found in [LICENSE.txt](LICENSE.txt) in the root of this repository.

"ExpressionEngine" is a registered trademark of EllisLab, Inc. in the United States and around the world. Refer to EllisLab's [Trademark Use Policy](https://ellislab.com/trademark-use-policy) for access to logos and acceptable use.
