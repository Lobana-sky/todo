npx create-near-app todo

yarn install

yarn dev

yarn build:release

near dev-deploy 




------------------------------------------------------------------------------------------

near call dev-1621360783772-3232802 showMyTasks --account_id lobana.testnet 

near call dev-1621360783772-3232802 deleteTask '{"task":1}' --account_id lobana.testnet

near call dev-1621360783772-3232802 addToMyList '{"task":"1"}' --account_id lobana.testnet

near call dev-1621360783772-3232802 deleteTask '{"task":1}' --account_id lobana.testnet

near call dev-1621360783772-3232802 getNumTasks --account_id lobana.testnet 