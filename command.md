npx create-near-app todo

yarn install

yarn dev

yarn build:release

near dev-deploy 




------------------------------------------------------------------------------------------

near view dev-1621374224571-7295251 sayHi

near call dev-1621374224571-7295251 showMyTasks --account_id lobana.testnet 

near call dev-1621374224571-7295251 addToMyList '{"task":"wake up morning"}' --account_id lobana.testnet

near call dev-1621374224571-7295251 addToMyList '{"task":"at 7 am"}' --account_id lobana.testnet

near call dev-1621374224571-7295251 addToMyList '{"task":"prayer"}' --account_id lobana.testnet

near call dev-1621374224571-7295251 addToMyList '{"task":"coding"}' --account_id lobana.testnet

near call dev-1621374224571-7295251 deleteTask '{"task":1}' --account_id lobana.testnet

near call dev-1621374224571-7295251 showMyTasks --account_id lobana.testnet 

near call dev-1621374224571-7295251 getNumTasks --account_id lobana.testnet 