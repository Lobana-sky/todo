#!/usr/bin/env bash
set -e

echo
echo \$CONTRACT is $CONTRACT
echo \$OWNER is $OWNER
echo

near view $CONTRACT sayHi

near call $CONTRACT greeting --account_id $OWNER

# ------------------------

# ------------------------

near call $CONTRACT addToMyList '{"task":"new task"}' --account_id $OWNER
near call $CONTRACT deleteTask '{"task":1}' --account_id $OWNER

near call $CONTRACT showMyTasks --account_id $OWNER
near call $CONTRACT getNumTasks --account_id $OWNER

# ------------------------
