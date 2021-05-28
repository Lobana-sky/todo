set -e

# ------------------------
near view todo sayHi

# ------------------------
near call $CONTRACT greetingUser --account_id $OWNER

# ------------------------
near call $CONTRACT addToMyList '{"task":"new task"}' --account_id $OWNER
near call $CONTRACT deleteTask '{"task":1}' --account_id $OWNER

# ------------------------
near call $CONTRACT showMyTasks --account_id $OWNER
near call $CONTRACT getNumTasks --account_id $OWNER
