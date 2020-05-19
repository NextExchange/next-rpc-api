import { NextcoinRpcClient } from "../src/NextcoinRpcClient";

async function createClient(rpcConfigOptions) {
    let client = new NextcoinRpcClient(rpcConfigOptions);
    return client;
}

export { createClient };
