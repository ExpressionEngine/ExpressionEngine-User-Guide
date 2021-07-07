# QUEUE

## Overview

This queue system allows for asynchronous execution of a time-consuming task, like sending an email, by saving the information to be executed when system resources allow. It utilizes the CLI in order to process the queue.

## Connection

Currently, this uses the current primary database connection. Upon installation of the Queue add-on, it will create a `jobs` and `failed_jobs` table to manage jobs.

## Installation

The queue can be installed on the add-on panel by clicking Install on the Queue add-on.

### Testing Queue

There is a test job that comes out of the box with ExpressionEngine in order to help you test the queue, practice running it on the CLI, and give a solid example of the structure needed.

In order to create a test job, you can run `php eecli queue:test`. This command will ask you for an email address, and send that email address an inspirational quote.

Upon successful creation, the command will instruct you to run the queue by running `php eecli queue:work`. The CLI will indicate successful processing by letting you know the job has processed

```
$ php eecli queue:test

Choose an email, we'll send them an inspirational quote:  hello@expressionengine.com
Job is queued! Run `php eecli queue:work` to process

$ php eecli queue:work

Processing 1
Processed ExpressionEngine\Addons\Queue\Jobs\SampleJob
```

As long as your email settings are correct, you should receive an email with a quote in the appropriate inbox.