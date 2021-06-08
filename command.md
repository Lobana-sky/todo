*************************************************

1- npx create-near-app todo

2- yarn install

3- yarn dev

4- yarn build:release

5- near dev-deploy 


or run ./scripts/build.sh instead of 4,5

near dev-deploy will create a temporary account id on which the contract can we deploy

after got that temporary account id ex:dev-1623122119865-7322615 type

export CONTRACT=dev-1623122119865-7322615

export OWNER=lobana.testnet

then run ./scripts/view_call.sh



*************************************************

near view dev-1622125962236-5124564 sayHi

near call dev-1622125962236-5124564 greetingUser --account_id lobana.testnet 

near call dev-1622125962236-5124564 showMyTasks --account_id lobana.testnet 

near call dev-1622125962236-5124564 addToMyList '{"task":""}' --account_id lobana.testnet

near call dev-1622125962236-5124564 addToMyList '{"task":"wake up"}' --account_id lobana.testnet

near call dev-1622125962236-5124564 addToMyList '{"task":"at 7 am"}' --account_id lobana.testnet

near call dev-1622125962236-5124564 addToMyList '{"task":"Go For shopping"}' --account_id lobana.testnet

near call dev-1622125962236-5124564 addToMyList '{"task":"coding"}' --account_id lobana.testnet

near call dev-1622125962236-5124564 showMyTasks --account_id lobana.testnet 

near call dev-1622125962236-5124564 deleteTask '{"task":1}' --account_id lobana.testnet

near call dev-1622125962236-5124564 showMyTasks --account_id lobana.testnet 

near call dev-1622125962236-5124564 getNumTasks --account_id lobana.testnet 



--------------------------------------------------------------------------------------------

yarn test:unit