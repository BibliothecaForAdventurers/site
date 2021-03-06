/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface LootRealmsLockboxInterface extends ethers.utils.Interface {
  functions: {
    "depositToL2(uint256,uint256,uint256,uint256)": FunctionFragment;
    "inbox()": FunctionFragment;
    "initialize(address,address,address)": FunctionFragment;
    "l2Target()": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "realmsContract()": FunctionFragment;
    "realmsToTickets(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setInboxContract(address)": FunctionFragment;
    "setL2Target(address)": FunctionFragment;
    "setRealmsContract(address)": FunctionFragment;
    "tokensToOwners(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "depositToL2",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "inbox", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string]
  ): string;
  encodeFunctionData(functionFragment: "l2Target", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "realmsContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "realmsToTickets",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setInboxContract",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setL2Target", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setRealmsContract",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "tokensToOwners",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "depositToL2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "inbox", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "l2Target", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "realmsContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "realmsToTickets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setInboxContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setL2Target",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRealmsContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokensToOwners",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "RetryableTicketCreated(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RetryableTicketCreated"): EventFragment;
}

export class LootRealmsLockbox extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: LootRealmsLockboxInterface;

  functions: {
    depositToL2(
      _realmId: BigNumberish,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "depositToL2(uint256,uint256,uint256,uint256)"(
      _realmId: BigNumberish,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    inbox(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "inbox()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    initialize(
      _realmsAddress: string,
      _l2TargetAddress: string,
      _inboxAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address,address,address)"(
      _realmsAddress: string,
      _l2TargetAddress: string,
      _inboxAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    l2Target(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "l2Target()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    onERC721Received(
      _operator: string,
      _from: string,
      _tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "onERC721Received(address,address,uint256,bytes)"(
      _operator: string,
      _from: string,
      _tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    owner(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "owner()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    realmsContract(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "realmsContract()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    realmsToTickets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "realmsToTickets(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    setInboxContract(
      _newInboxAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setInboxContract(address)"(
      _newInboxAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setL2Target(
      _newL2Target: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setL2Target(address)"(
      _newL2Target: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setRealmsContract(
      _newRealmsAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setRealmsContract(address)"(
      _newRealmsAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    tokensToOwners(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "tokensToOwners(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  depositToL2(
    _realmId: BigNumberish,
    maxSubmissionCost: BigNumberish,
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "depositToL2(uint256,uint256,uint256,uint256)"(
    _realmId: BigNumberish,
    maxSubmissionCost: BigNumberish,
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  inbox(overrides?: CallOverrides): Promise<string>;

  "inbox()"(overrides?: CallOverrides): Promise<string>;

  initialize(
    _realmsAddress: string,
    _l2TargetAddress: string,
    _inboxAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address,address,address)"(
    _realmsAddress: string,
    _l2TargetAddress: string,
    _inboxAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  l2Target(overrides?: CallOverrides): Promise<string>;

  "l2Target()"(overrides?: CallOverrides): Promise<string>;

  onERC721Received(
    _operator: string,
    _from: string,
    _tokenId: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "onERC721Received(address,address,uint256,bytes)"(
    _operator: string,
    _from: string,
    _tokenId: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  realmsContract(overrides?: CallOverrides): Promise<string>;

  "realmsContract()"(overrides?: CallOverrides): Promise<string>;

  realmsToTickets(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "realmsToTickets(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  setInboxContract(
    _newInboxAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setInboxContract(address)"(
    _newInboxAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setL2Target(
    _newL2Target: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setL2Target(address)"(
    _newL2Target: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setRealmsContract(
    _newRealmsAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setRealmsContract(address)"(
    _newRealmsAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  tokensToOwners(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "tokensToOwners(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    depositToL2(
      _realmId: BigNumberish,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "depositToL2(uint256,uint256,uint256,uint256)"(
      _realmId: BigNumberish,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    inbox(overrides?: CallOverrides): Promise<string>;

    "inbox()"(overrides?: CallOverrides): Promise<string>;

    initialize(
      _realmsAddress: string,
      _l2TargetAddress: string,
      _inboxAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address,address,address)"(
      _realmsAddress: string,
      _l2TargetAddress: string,
      _inboxAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    l2Target(overrides?: CallOverrides): Promise<string>;

    "l2Target()"(overrides?: CallOverrides): Promise<string>;

    onERC721Received(
      _operator: string,
      _from: string,
      _tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC721Received(address,address,uint256,bytes)"(
      _operator: string,
      _from: string,
      _tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    realmsContract(overrides?: CallOverrides): Promise<string>;

    "realmsContract()"(overrides?: CallOverrides): Promise<string>;

    realmsToTickets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "realmsToTickets(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    setInboxContract(
      _newInboxAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setInboxContract(address)"(
      _newInboxAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setL2Target(_newL2Target: string, overrides?: CallOverrides): Promise<void>;

    "setL2Target(address)"(
      _newL2Target: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setRealmsContract(
      _newRealmsAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setRealmsContract(address)"(
      _newRealmsAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    tokensToOwners(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "tokensToOwners(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    RetryableTicketCreated(ticketId: BigNumberish | null): EventFilter;
  };

  estimateGas: {
    depositToL2(
      _realmId: BigNumberish,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "depositToL2(uint256,uint256,uint256,uint256)"(
      _realmId: BigNumberish,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    inbox(overrides?: CallOverrides): Promise<BigNumber>;

    "inbox()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _realmsAddress: string,
      _l2TargetAddress: string,
      _inboxAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(address,address,address)"(
      _realmsAddress: string,
      _l2TargetAddress: string,
      _inboxAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    l2Target(overrides?: CallOverrides): Promise<BigNumber>;

    "l2Target()"(overrides?: CallOverrides): Promise<BigNumber>;

    onERC721Received(
      _operator: string,
      _from: string,
      _tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "onERC721Received(address,address,uint256,bytes)"(
      _operator: string,
      _from: string,
      _tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    realmsContract(overrides?: CallOverrides): Promise<BigNumber>;

    "realmsContract()"(overrides?: CallOverrides): Promise<BigNumber>;

    realmsToTickets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "realmsToTickets(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    setInboxContract(
      _newInboxAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setInboxContract(address)"(
      _newInboxAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setL2Target(
      _newL2Target: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setL2Target(address)"(
      _newL2Target: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setRealmsContract(
      _newRealmsAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setRealmsContract(address)"(
      _newRealmsAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    tokensToOwners(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokensToOwners(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    depositToL2(
      _realmId: BigNumberish,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "depositToL2(uint256,uint256,uint256,uint256)"(
      _realmId: BigNumberish,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    inbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "inbox()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _realmsAddress: string,
      _l2TargetAddress: string,
      _inboxAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address,address,address)"(
      _realmsAddress: string,
      _l2TargetAddress: string,
      _inboxAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    l2Target(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "l2Target()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onERC721Received(
      _operator: string,
      _from: string,
      _tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "onERC721Received(address,address,uint256,bytes)"(
      _operator: string,
      _from: string,
      _tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    realmsContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "realmsContract()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    realmsToTickets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "realmsToTickets(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setInboxContract(
      _newInboxAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setInboxContract(address)"(
      _newInboxAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setL2Target(
      _newL2Target: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setL2Target(address)"(
      _newL2Target: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setRealmsContract(
      _newRealmsAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setRealmsContract(address)"(
      _newRealmsAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    tokensToOwners(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokensToOwners(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}