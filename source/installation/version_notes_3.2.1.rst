#######################
Version Notes for 3.2.1
#######################

With 3.1.2, we changed the path where the dictionary words text file is loaded and referenced. Before, it was pointing to ``system/ee/legacy/config``, but now it is pointing to ``system/user/config``. If you're using the dictionary text file, you will need to move the file to the config folder in the user directory in order for the disabling of dictionary passwords feature to keep working.
