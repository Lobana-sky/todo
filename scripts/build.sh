
near delete $CONTRACT $OWNER

echo --------------------------------------------
echo
echo "cleaning up the /neardev folder"
echo
rm -rf ./neardev

set -e

echo --------------------------------------------
echo
echo "rebuilding the contract (release build)"
echo
yarn build:release

echo --------------------------------------------
echo
echo "redeploying the contract"
echo
near dev-deploy ./build/release/sample.wasm
echo

exit 0