#######################
Version Notes for 3.1.0
#######################

With 3.1.0 we needed to make some changes to where and how avatars are stored. The updater will attempt to move all default avatars to a new directory, but there's a slim chance you might see an error. Here's how to deal with them.

.. error:: Please correct the avatar path in your config file.

Double check your config file to ensure ``avatar_path`` is set to a valid path. If you don't have an ``avatar_path`` in your config file, set one temporarily for the update::

  $config['avatar_path'] = '/path/to/images/avatars';

.. error:: Please correct the permissions on your avatar directory.

Ensure that the correct permissions are set on your avatar directory. It must be writable. See :doc:`/troubleshooting/general/file_permissions` for details.
