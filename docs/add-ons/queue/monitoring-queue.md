# Monitoring Queue

The queue system comes with a GUI monitor out of the box, and can be viewed by going to `Add-ons > Queue`.

## Jobs Table

The jobs table shows you current jobs in queue along with expected payload and assigned run at date. From there you will also have opportunity to cancel a job, if indicated prior to the expected start of the job.

Jobs that are in the jobs table are removed after successful completion of the job.

## Failed Jobs

Failed jobs are jobs that did not complete as expected. This could be whether there was a problem creating the job, or whether a job failed in execution.

The failed jobs table shows you all of the failed jobs in queue along with expected payload, assigned run at date, and error that occurred. You can also attempt to retry a failed job, even if the number of attempts have passed.

You can also permanently delete a failed job.

## Flushing Queue

Flushing the queue allows for all jobs to be cleared, both the current and failed.

### From CLI

The queue can be flushed from the CLI by running `php eecli queue:flush`:

```
$ php eecli queue:flush
Deleting all current jobs
Deleting all failed jobs
Queue flushed
```

You can also choose the jobs to flush by adding the `--failed-only` and `--fresh-only` options.

### From Jump Menu

The queues can be flushed EE6 jump menu by accessing the Queue: Flush commands.

## Jump Menu

A number of commands are available in the jump menu, including:

- View Current Jobs: View the current queue of jobs
- View Failed Jobs: View the list of failed jobs
- Flush Queue: Clear out the entire queue, both current and failed jobs
- Flush Failed Jobs: Clear out all failed jobs from the database