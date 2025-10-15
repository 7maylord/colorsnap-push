// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Script, console} from "forge-std/Script.sol";
import {ColorSnap} from "../src/Colorsnap.sol";

contract DeployPushChain is Script {
    ColorSnap public colorsnap;

    function setUp() public {}

    function run() public {
        // Get deployment parameters from environment
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        address owner = vm.addr(deployerPrivateKey);

        console.log("=== PUSH CHAIN DONUT TESTNET DEPLOYMENT ===");
        console.log("Owner address:", owner);
        console.log("Chain ID: 42101");
        console.log("RPC URL: https://evm.rpc-testnet-donut-node1.push.org");
        console.log("===========================================");

        console.log("\nDeploying ColorSnap contract...");

        vm.startBroadcast(deployerPrivateKey);

        colorsnap = new ColorSnap(owner);

        console.log("\nSUCCESS: ColorSnap deployed to:", address(colorsnap));
        console.log("View on Push Explorer: https://donut.push.network/address/", vm.toString(address(colorsnap)));

        vm.stopBroadcast();

        // Save deployment info
        logDeploymentInfo();
    }

    function logDeploymentInfo() internal view {
        address owner = vm.addr(vm.envUint("PRIVATE_KEY"));

        console.log("\n=== DEPLOYMENT SUMMARY ===");
        console.log("Contract Address:", address(colorsnap));
        console.log("Contract Path: src/Colorsnap.sol:ColorSnap");
        console.log("Owner Address:", owner);
        console.log("Chain ID: 42101");
        console.log("Network: Push Chain Donut Testnet");
        console.log("Explorer: https://donut.push.network");
        console.log("==========================");

        console.log("\nUpdate your .env file:");
        console.log("NEXT_PUBLIC_PUSH_CHAIN_CONTRACT_ADDRESS=", vm.toString(address(colorsnap)));
    }
}
