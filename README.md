# nextcoin-js

A javascript library for interacting directly with the NEXT RPC Server. Provides 1:1 mappings for all RPC endpoints. For full 
endpoint list below. Built for NodeJS or for browser.

## Installation

`npm install @nextexchange/nextcoin-js`

## Usage 

*Typescript*
```
import { NextcoinRpcClient, rpcServices } from "@nextexchange/nextcoin-js";

const config = {
  host: "localhost",
  rpcPort: 7077,
  username: "u",
  password: "p",
  logLevel: 'error'
};
const client = new NextcoinRpcClient(config);
const info = await rpcServices(client.callRpc).getBestBlockHash().call();
```

*NodeJS*
```
const NextcoinRpcClient = require("@nextexchange/nextcoin-js").NextcoinRpcClient;
const rpcServices = require("@nextexchange/nextcoin-js").rpcServices;

const config = {
  host: "localhost",
  rpcPort: 7077, // This is the port used in the docker-based integration tests, change at your peril
  username: "u",
  password: "p",
  logLevel: 'error'
};
const client = new NextcoinRpcClient(config);
const info = rpcServices(client.callRpc).getBestBlockHash().call();
```

### Batch Calls

Batch requests can be constructed using the `batch` function. Results will be an array based on the requests.
```
const result = await client.batch([
  rpcServices(client.callRpc).getBestBlockHash(),
  rpcServices(client.callRpc).getWallteInfo()]);

// result[0] = getBestBlockHash result
// result[1] = getWalletInfo result

```

### Wrapped and Unwrapped Responses

The NEXT RPC server returns results wrapped in an object - `{result: null, id: null, error: null }`. By default 
nextcoin-js will unwrap RPC responses to provide consumers with `data.result` or `data.error` directly. Consumers can 
optionally disable this to process the full wrapped object. 

*Example single call with unwrapping disabled*
```
const result = await rpcServices(client.callRpc).getBestBlockHash().call(false);
```

*Example batch call with unwrapping disabled*
```
const result = await client.batch([
  rpcServices(client.callRpc).getBestBlockHash(),
  rpcServices(client.callRpc).getWallteInfo()], false);
```

## Contributing

Please submit all updates and improvements via pull request.

