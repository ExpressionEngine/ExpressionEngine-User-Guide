# Running Queue

The queue is run and managed through a CLI command: `php eecli queue:work` This will process jobs in the queue by their consecutive order received and assigned runAt date.

If no jobs are found, the process will end with no output

## Limiting Jobs

The queue worker is assigned to take 3 jobs at a time and process them, so it can keep server resources free and avoid timing out. You can add the `--take` parameter to the command in order to adjust this.

```bash
php eecli queue:work --take=10
```

You can also use the `--once` option in order to take the first job in queue.

```bash
php eecli queue:work --once
```

The `once` option will override the `take` option.

## Keeping the Queue Running

A queue isn't much of a queue if you have to manually run it. It is simple to set up a few methods in order to keep the queue running.

### Managing with Supervisor

Supervisord or Supervisor daemon is an open source process management system. In a nutshell: if a process crashes for any reason, Supervisor restarts it. Full documentation for Supervisor is found here: [http://supervisord.org/index.html](http://supervisord.org/index.html)

#### Installing Supervisor

To install Supervisor on Ubuntu, you may use the following command:

`sudo apt-get install supervisor`

#### Configuring Supervisor

Supervisor configuration files are typically stored in the /etc/supervisor/conf.d directory. Within this directory, you may create any number of configuration files that instruct supervisor how your processes should be monitored. For example, let's create a expressionengine-worker.conf file that starts and monitors a `queue:work` process:

```bash
[program:expressionengine-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /path/to/my/site eecli queue:work --take=3
autostart=true
autorestart=true
user=root
numprocs=2
redirect_stderr=true
stdout_logfile=/path/to/my/site/logs/worker.log
stopwaitsecs=3600
```

In this example, the numprocs directive will instruct Supervisor to run 2 `queue:work` processes and monitor all of them, automatically restarting them if they fail. Make sure that the value of `stopwaitsecs` in your configuration file is greater than the number of seconds consumed by your longest running job. Otherwise, Supervisor may kill the job before it is finished processing.

#### Starting Supervisor

Once your configuration file has been created, you may update the Supervisor configuration and start the processes using the following commands:

```bash
sudo supervisorctl reread

sudo supervisorctl update

sudo supervisorctl start expressionengine-worker:*
```

This will be processing your queue immediately, and restart it if it crashes.

### Managing with CRON

If Supervisor is not an option, you can also utilize CRON to run the queue for you.

#### Set Up Cron Job

Edit your crontab in your server text editor, and add a job that runs according to the schedule you would like:

```bash
# This will run every minute
* * * * * php /path/to/my/site eecli queue:work --take=3 > /dev/null 2>&1
```

More information can be found here: [https://crontab.guru/](https://crontab.guru/)