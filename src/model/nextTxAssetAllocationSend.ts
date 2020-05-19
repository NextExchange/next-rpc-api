import { AssetAllocationAmount } from "./assetAllocationAmount";

export interface NextTxAssetAllocationSend {
  txtype: string;
  asset_allocation: string;
  asset_guid: number;
  symbol: string;
  txid: string;
  height: number;
  sender: string;
  allocations: AssetAllocationAmount[];
  total: number;
  blockhash: string;
}
