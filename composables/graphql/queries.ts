import { gql } from 'graphql-request'
import { WalletFragment } from './fragments/wallet'
import { RealmFragment, SRealmFragment } from './fragments/realmFragments'
import { RaidResultFragment } from './fragments/raidResults'
import { BagFragment, defaultLoot } from './fragments/loot'
import { ManaFragment } from './fragments/mana'
import { GAdventurerFragment } from './fragments/gadventurer'

const getRealmsQuery = gql`
  ${RealmFragment}
  query usersRealms(
    $address: String
    $resources: [Int]
    $orders: [String]
    $first: Int
    $skip: Int
    $orderBy: String
    $orderDirection: String
  ) {
    realms(
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: {
        currentOwner_contains: $address
        resourceIds_contains: $resources
        order_in: $orders
      }
    ) {
      ...RealmData
      currentOwner {
        address
        joined
      }
    }
    bridgedRealms: realms(
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: {
        bridgedOwner: $address
        resourceIds_contains: $resources
        order_in: $orders
      }
    ) {
      id
      ...RealmData
    }
    bridgedV2Realms: realms(
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: {
        bridgedV2Owner: $address
        resourceIds_contains: $resources
        order_in: $orders
      }
    ) {
      id
      ...RealmData
    }
    wallet(id: $address) {
      realmsHeld
      bridgedRealmsHeld
      bridgedV2RealmsHeld
    }
  }
`

const getRealmQuery = gql`
  ${RealmFragment}
  query realm($id: String) {
    realm(id: $id) {
      ...RealmData
      currentOwner {
        address
        realmsHeld
        bridgedRealmsHeld
        bridgedV2RealmsHeld
      }
    }
  }
`

const getResourceListQuery = gql`
  query getResourceListQuery {
    resources(first: 25) {
      id
      name
      totalRealms
    }
  }
`
const getResourceBalancesQuery = gql`
  query getResourceBalancesQuery($address: String) {
    accounts(where: { id: $address }) {
      balances {
        token {
          identifier
        }
        value
      }
    }
  }
`

const getl1Adventurer = gql`
  ${WalletFragment}
  ${BagFragment}
  ${defaultLoot}
  ${ManaFragment}
  ${GAdventurerFragment}

  query getAdventurer($address: String!) {
    wallet(id: $address) {
      id
      realmsHeld
      bridgedRealmsHeld
      bridgedRealms(first: 30) {
        id
        tokenURI
      }
      realms(first: 30) {
        id
        tokenURI
      }
      bagsHeld
      bags(first: 30) {
        ...BagData
      }
      mLootsHeld
      mLoot(first: 30) {
        id
        head
        neck
        chest
        hand
        ring
        weapon
        waist
        foot
      }
      manasHeld
      manas(first: 30) {
        ...ManaData
      }
      gAdventurersHeld
      gAdventurers(first: 30) {
        ...DefaultBagData
        ...GAdventurerData
      }
    }
  }
`

const getWalletAtBlock = gql`
  query getWalletAtBlock(
    $address: String! 
    $block: Int!
  ) {
    wallet(
      id: $address 
      block: {
        number: $block
      }
    ) {
      id
      realmsHeld
      bridgedRealmsHeld
    }
  }
`
const getl2Adventurer = gql`
  ${RealmFragment}
  ${SRealmFragment}
  ${RaidResultFragment}
  query adventurer($address: String!) {
    wallet(id: $address) {
      id
      realmsHeld
      realms(first: 5) {
        ...RealmData
      }
      srealmsHeld
      srealms(first: 3) {
        ...SRealmData
      }
      raiderResults(orderBy: timestamp, orderDirection: desc) {
        ...RaidResultFragment
      }
      defenderResults(orderBy: timestamp, orderDirection: desc) {
        ...RaidResultFragment
      }
    }
  }
`

const mintedRealmsQuery = gql`
  query mintedRealmsQuery($lastID: String) {
    realms(
      first: 1000
      where: { id_gt: $lastID }
      orderBy: id
      orderDirection: asc
    ) {
      id
    }
  }
`

const lpPositionQuery = gql`
  query lpPositionQuery($address: String) {
    positions(where: { owner: $address }) {
      id
      tokenId
      owner
      staked
      oldOwner
      incentivePositions {
        id
        active
      }
    }
    depositedPositions: positions(where: { oldOwner: $address }) {
      id
      tokenId
      owner
      staked
      oldOwner
      liquidity
      incentivePositions(where: { active: true }) {
        id
        active
        incentive {
          id
          pool
        }
      }
    }
  }
`
const lpIncentivesQuery = gql`
  query lpIncentivesQuery($address: String) {
    incentives(where: { pool: $address }, orderBy: "startTime") {
      id
      startTime
      endTime
      reward
      ended
    }
  }
`
export {
  getRealmQuery,
  getRealmsQuery,
  mintedRealmsQuery,
  getl1Adventurer,
  getl2Adventurer,
  getWalletAtBlock,
  getResourceListQuery,
  getResourceBalancesQuery,
  lpPositionQuery,
  lpIncentivesQuery,
}
