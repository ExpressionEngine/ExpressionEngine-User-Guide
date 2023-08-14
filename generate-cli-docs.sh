# Define the path to the EE CLI:
EE_CLI_PATH="/Users/matthewjohnson/Code/work/code/ExpressionEngine/system/ee/eecli.php"

php $EE_CLI_PATH list --simple

# run the list command, and then loop through each line
# and run the help command for each command
php $EE_CLI_PATH list --simple | while read line
do
    php $EE_CLI_PATH $line --help  > docs/cli/generated/$line.md
done
