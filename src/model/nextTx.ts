import { NextTxAssetActivate } from "./nextTxAssetActivate";
import { NextTxAssetUpdate } from "./nextTxAssetUpdate";
import { NextTxAssetAllocationSend } from "./nextTxAssetAllocationSend";
import { NextTxAssetTransfer } from "./nextTxAssetTransfer";

export type NextTx = NextTxAssetActivate | NextTxAssetUpdate | NextTxAssetAllocationSend | NextTxAssetTransfer;

export const NEXTTX = {
  ASSET_NEW: 'assetactivate',
  ASSET_UPDATE: 'assetupdate',
  ASSET_SEND: 'assetsend',
  ASSET_ALLOCATION_SEND: 'assetallocationsend',
  ASSET_TRANSFER: 'assettransfer'
};

