<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Back Up Your Site

[TOC]

Files and data can become lost or corrupt for a number of reasons, but you can be prepared for the worst by following some simple strategies for backing up your site. The goal of your strategy should be to have backups that are readily available and easy to restore. In this article, we'll go over what to back up and options for doing so.

## What to Back Up

When dealing with an ExpressionEngine installation, you'll need to backup the following components of your site:

- **Files**: This includes ExpressionEngine's core files, third-party add-ons, and any user-uploaded content like images. It's recommended to back up files with their existing folder structure and permissions intact.
- **Database**: The database ultimately contains the configuration for and data used on your site. We recommend storing these backups as database dumps for human readability and the ability for partial restores.

The combination of these items should ensure you have what you need to restore any part, or the entirety, of your site.

## Evaluate Host Options

Many web hosts offer backup solutions. If you consider using them, it's important to evaluate them to learn what exactly is backed up, how often it's backed up, and what the restoration process is like.

For example, these are some questions that should be asked when evaluating a host-provided backup service:

- Are files and databases backed up or just files?
- If databases are backed up, in what format are they backed up? Will it be easy to restore?
- What does the restoration process look like? Do I have to contact support?
- Can I recover a single file or is my whole server replaced with a snapshot?
- How often are backups taken? Is it frequent enough for my site's needs?
- Can I access previous backups or just the most recent?

If it turns out your host offers a backup solution that allows for easy, selective, fast restores, you may not need to go any further. If, however, you find you need more fine-grained control over your backups, read on for recommendations.

## Backing Up Files

Our goals for backing up files are:

- **Retain same folder structure as on the server**: This will make it easier to find and restore files.
- **Retain same permissions as on the server**: If you have to restore a lot of files with varying permissions, you don't want to spend much time resetting those permissions.
- **Retain more than the most recent snapshot**: If you're called in to restore a file that has been changed or deleted before the most recent backup took place, you'll want to be able to go back to the last known good version of the file.
- **Send backups to a safe, redundant place**: We don't want to store backups on the server, we need to assume if the server goes away, you can easily restore the site elsewhere. So our backups should be remote relative to the server, and ideally the backups are backed up.

A good mantra for backing up files is, "a file doesn't exist unless it exists in two places." Or three, if you can manage!

Let's take a look at several solutions for backing up files.

### Source Control

If you have your site in source control (you do, don't you?), that's a great way to back up your site's files as it combines all of our backup goals into one tool. However, it's likely going to leave out some things that can change on the live server, such as image upload directories, or template files if people are changing those on the fly after site launch without going through source control.

But if your entire site is in source control and there are good practices in place to ensure no file edits make it to production without being committed, source control may be all you need to back up the file portion of your backups.

### Rsync

[Rsync](https://rsync.samba.org) is a great utility that is available for Unix-based systems. Its purpose is to sync two directories exactly, and the directories can even be remote!

A typical `rsync` command looks like this:

    rsync -ahvz --delete user@production_server:~/public/ ~/backup/

This command is being run from the backup machine. It's saying, "synchronize ~/public on my server to my local folder ~/backups/public/". If you'd rather run this on the server, just swap the source and destination like so:

    rsync -ahvz --delete ~/public/ user@backup_server:~/backup/

Before going any further, let's understand the flags we're passing to `rsync`:

- **-a**: Archive mode, equivalent to `-rlptgoD`, which does things we want in a backup: backs up directories recursively, preserves symlinks, preserves permissions and ownership data, and preserves modification times.
- **-h**: Preserves hard links.
- **-v**: Verbose mode so you can see what's being copied. You can remove this once you're comfortable knowing what's being backed up, or once you start to automate the backups.
- **-z**: Compresses file data during transfer which can help speed up those over-the-network backups.
- **--delete**: Delete files on the destination end that have been deleted in the source. This may seem counter-intuitive given we want to protect ourselves from file deletion, but we want to preserve intentional deletions so that if we have to restore a directory, it does not contain extraneous files. As new versions of ExpressionEngine are released, old core files may be deleted, and in some instances it can be problematic if those old files are kept present in newer versions. But we can still protect ourselves against accidental deletions by rotating our backups, which we'll see later.

This is also a great method for syncing with another public-facing server, such as a load-balanced or failover server.

#### Snapshots

But the main problem with this method is we only ever have the latest backup, what if we want to store multiple snapshots? We need only to change the name of the destination directory, like so:

    rsync -ahvz --delete user@production_server:~/public/ ~/backups/$(date +%F)/

This performs a sync as before, but puts the files in a folder named with the current date. You could then run this command via a [cron job](https://en.wikipedia.org/wiki/Cron) every day (recommended) or any interval you choose.

If you would rather store your backups as compressed archives, it's as easy as tacking on the command:

    rsync -ahvz --delete user@production_server:~/public/ ~/backups/backup_latest/ &&
    tar pcvzfC ~/backups/$(date +%F).tgz --same-owner ~/backups/backup_latest .

#### Rotating

Obviously, if you run this backup command every day, you're going to end up with a lot of backups. It would be great if we could automatically purge older backups we shouldn't need.

One method is to compress your backups after `rsync` completes, and then configure [logrotate](https://linux.die.net/man/8/logrotate) to purge the files for you. This is a great option because you can easily set up the rotation to only keep, for example, 7 daily backups, 4 weekly backups, and 6 monthly backups.

Another method is a little easier to implement but doesn't give you as much flexibility easily, and that's to simply tack on a command to keep the last X number of backup folders/files in the directory. For example, to keep the 10 most recent backup folders (test in a safe place!):

    ls -1t ~/backups/ | sed -e '1,10d' | xargs rm -rf

### Cloud Storage

If you'd rather not maintain a remote backup destination, an easy place to send your files is a cloud storage option like Amazon S3. There are tools like [S3sync](https://s3sync.net) that behave like RSync, except S3 can be used as a source or destination. You can use the same snapshotting methods as above, but since you cannot run `logrotate` or do any other sort of shell commands on S3, you'll need to perform the archival and rotation locally and then sync, or take advantage of S3's [object expiration](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectExpiration.html) to automatically delete old archives.

### Dropbox

Dropbox is another nice option that combines all of our goals into one tool. Dropbox has a Linux client, so it's possible to install the client on your web server and get the same instant syncing functionality you get on your personal computer. There are several ways to go about using Dropbox as a backup solution on your server:

- **Symlink your document root**: Given the Dropbox client is installed on your server, you could create a symlink from your Dropbox folder to the site's document root, and any change made to a file is synced and revisioned shortly after. You can access previous revisions of a file via Dropbox's web interface.
- **Put archives to Dropbox folder**: Tar and rotate the archives of your site as outlined above, then simply move them into your Dropbox folder for upload.
- **Use Dropbox API to upload**: If you'd rather not install the Dropbox service on your server, there are several scripts available, or you can write your own, which use the Dropbox API to perform simple uploads. Use this in conjunction with compressed archives.

You have an option of choosing not to sync site backups with your personal computer, but if you do and you're backing up your computer with Time Machine or Backblaze, that's another welcome layer of redundancy.

## Backing Up the Database

Our goals for backing up the database are:

- **Store as MySQL dumps**: MySQL dumps are essentially plain text files with instructions for MySQL to repopulate the data. This means data is stored in a readable format and gives us the ability to partially restore a database; for example if an entry is accidentally deleted but other changes have since been made to the site, we can go in and pluck out that entry. Some backup solutions recommend backing up MySQL's binary data files but those cannot always be restored reliably, are obfuscated in a binary file, and doesn't as easily allow partial restores.
- **Retain multiple snapshots**: As with files, it's best to have access to multiple revisions on hand in case you need to restore something from last week.
- **Store redundantly**: Since you end up with a file through this backup process, it's recommended to lump these database files in with your regular file backups for safe storage.

### Creating the Dump

There are a couple common ways of creating MySQL dumps. One is to use [mysqldump](https://dev.mysql.com/doc/refman/5.1/en/mysqldump.html):

    mysqldump -u username db_name > output.sql

The above takes a database named `db_name` and outputs it to a file called `output.sql`. Knowing this and what we've covered earlier, you could modify the command to output a file with a name of today's date. Combine that with `tar` to compress the file because text compresses very well.

Many hosts have [phpMyAdmin](https://www.phpmyadmin.net/) installed which also lets you export databases in this format.

### Automysqlbackup

Manually creating the dump and handling the files as outlined above can be quite involved. Luckily, there is a very handy and popular script for creating backups of your databases and automatically rotating them so you only keep the backups you need.

It's called [AutoMySQLBackup](https://sourceforge.net/projects/automysqlbackup/) and will backup all databases on your server as you add them, can send you email notifications of successful or failed backups, will automatically compress the backups, and many more configurable options.

With AutoMySQLBackup, you just take a few minutes to set it up, and then simply incorporate the resulting files into your established file backup routine.

### ExpressionEngine SQL Manager Backups

ExpressionEngine also comes with a [simple database backup utility](control-panel/utilities/database.md#database-backup-utility) that can be used if you don't have access to create your own backups from your web host.

## Third-Party Add-Ons

If it's too technically challenging or you're just unwilling to get your hands dirty in this regard, you may be able to find an add-on that takes care of the entire backup process for you.

When evaluating these add-ons, it's important to ask many of the same questions you would when evaluating a host's backup plan:

- What is backed up?
- How is it stored?
- How do I restore a single file or a deleted entry?
- Are multiple revisions kept?
- Are there offsite backup options?
- Is the add-on well-reviewed, documented, and seem well-supported?
