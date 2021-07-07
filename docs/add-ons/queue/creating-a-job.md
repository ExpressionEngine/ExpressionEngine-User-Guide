# Creating a Job

Jobs are added into and managed by third party add-ons.

## addon.setup.php

Jobs are registered and initialized in the `addon.setup.php` file of an addon. A job belonging to an add-on is registed by creating an associative array called `jobs`. The key should be the name of the class, and the value should be the fully qualified namespace of the Job class.

```php
'jobs' => [
	'SampleJob' => AwesomeAddon\Jobs\SampleJob::class,
],
```

## Class Structure

Job classes must use the `ExpressionEngine\Addons\Queue\Traits\Queueable` trait and contain both a `__construct` and `handle` function.

```php
namespace AwesomeAddon\Jobs;

use ExpressionEngine\Addons\Queue\Traits\Queueable;

class SampleJob {

	use Queueable;

	public function __construct()
	{
		$this->construct();
	}

	public function handle()
	{
		echo 'Hello world';
	}
}
```

The job class constructor must call the `construct` method from the `Queueable` trait in order to set it up for proper serialization.

When the job is created, all public and protected class variables will be serialized to the database. It is important that any information you want to be processed in the job is included in a public or protected class variable. For example:

```php
class SampleJob {

	use Queueable;

	protected $name;

	public function __construct(string $name)
	{
		$this->construct();
		$this->name = $name;
	}

	public function handle()
	{
		echo "Hello {$this->name}";
	}
}
```

There are also a number of class variables that can be set to manage the job on the queue.

### Attempts

This is the number of times a job will be attempted if it fails. Default: 1

```php
protected $attempts = 3;
```

### Sleep

This is the number of seconds that the server will pause after running the job. Default: 1

```php
protected $sleep = 10;
```

### Run At

This is the time that the job should be run. It is a MySQL datetime stamp format Y-m-d H:i:s.

```php
protected $runAt;

public function __construct()
{
	$this->construct();
	
	// Add 10 minutes
	$time = new DateTime;
	$time->add(new DateInterval('PT10M'));
	$this->runAt = $time->format('Y-m-d H:i');
}
```

## Creating Job

Once you have your Job class created and registered in the add-on, you can initiate it using EE's `queue` helper.

```php
use AwesomeAddon\Jobs\SampleJob;

public function do_stuff()
{

	queue(new SampleJob('Derek'));

}
```

This will automatically serialize the job and add it to the queue.