# Important Notes

## Resources

Queue workers are meant to handle large jobs that can happen asynchronously. It is important to make sure that you set proper time out settings so as not to have your job ignored when it times out.

Daemon queue workers do not "reboot" the framework before processing each job. Therefore, you should free any heavy resources after each job completes. For example, if you are doing image manipulation with the GD library, you should free the memory with imagedestroy when you are done.

## Deploying

Queues save classes at a specific point in time. So, any code changes that are made once a job is queued may not be applied. In order to avoid this, after deploying new code, make sure to restart Supervisord.