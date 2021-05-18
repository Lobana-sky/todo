npx create-near-app todo

yarn install

yarn dev

yarn build:release

near dev-deploy 




------------------------------------------------------------------------------------------

near view dev-1621375202594-6539728 sayHi

near call dev-1621375202594-6539728 greetingUser --account_id lobana.testnet 

near call dev-1621375202594-6539728 showMyTasks --account_id lobana.testnet 

near call dev-1621375202594-6539728 addToMyList '{"task":"wake up morning"}' --account_id lobana.testnet

near call dev-1621375202594-6539728 addToMyList '{"task":"at 7 am"}' --account_id lobana.testnet

near call dev-1621375202594-6539728 addToMyList '{"task":"prayer"}' --account_id lobana.testnet

near call dev-1621375202594-6539728 addToMyList '{"task":"coding"}' --account_id lobana.testnet

near call dev-1621375202594-6539728 showMyTasks --account_id lobana.testnet 

near call dev-1621375202594-6539728 deleteTask '{"task":1}' --account_id lobana.testnet

near call dev-1621375202594-6539728 showMyTasks --account_id lobana.testnet 

near call dev-1621375202594-6539728 getNumTasks --account_id lobana.testnet 



--------------------------------------------------------------------------------------------

yarn test:unit