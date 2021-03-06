/* eslint-disable max-depth */
import {
  computed,
  reactive,
  onMounted,
  useContext,
  ref,
  ssrRef,
} from '@nuxtjs/composition-api'
import { useWeb3 } from '@instadapp/vue-web3'
import { buildSRealmsWhere } from './graphql/helpers/search'
import { useNetwork, activeNetwork } from './useNetwork'
import { getRealmsQuery, getRealmQuery } from './graphql/queries'
import type { Realm, Wallet } from './types'
import { useWeb3Modal } from '~/composables/useWeb3Modal'
import { useGraph } from '~/composables/useGraph'

export enum Layers {
  l1,
  l2,
}
export type layerRealms = {
  l1: {
    wallet: Wallet
    realms: [Realm]
    bridgedRealms: [Realm]
    bridgedV2Realms: [Realm]
  }
}
const userRealms = reactive<layerRealms>({
  l1: {
    wallet: null,
    realms: null,
    bridgedRealms: null,
    bridgedV2Realms: null,
  },
})
const realms = reactive({
  l1: {
    wallet: null,
    realms: null,
    bridgedRealms: null,
    bridgedV2Realms: null,
  },
})

export function useRealms() {
  const loading = ref(false)
  const error = reactive({
    getWalletRealms: null,
  })
  const { gqlRequest } = useGraph()
  const realm = ref({})
  const realms = reactive({
    l1: {
      wallet: null,
      realms: null,
      bridgedRealms: null,
      bridgedV2Realms: null,
    },
  })
  const getRealm = async (params) => {
    loading.value = true
    try {
      const { realm: realmResponse } = await gqlRequest(
        getRealmQuery,
        { id: params },
        'realms'
      )
      realm.value = realmResponse
    } catch (e) {
      console.log(e)
    }
    loading.value = false
  }

  const fetchRealms = async (params) => {
    const { wallet, realms, bridgedRealms, bridgedV2Realms } = await gqlRequest(
      getRealmsQuery,
      defaultVariables(params),
      'realms'
    )
    return { wallet, realms, bridgedRealms, bridgedV2Realms }
  }

  const getRealms = async (params?: null) => {
    try {
      error.getWalletRealms = null
      loading.value = true

      realms.l1 = await fetchRealms(params)
    } catch (e) {
      console.log(e)
    } finally {
      loading.value = false
    }
  }

  const getWalletRealms = async (filters?) => {
    try {
      error.getWalletRealms = null
      loading.value = true

      userRealms.l1 = await fetchRealms(filters)
    } catch (e) {
      console.log(e)
    } finally {
      loading.value = false
    }
  }

  const defaultVariables = (params?) => {
    return {
      address: params?.address?.toLowerCase() || '',
      resources: params?.resources || [],
      orders: params?.orders?.length
        ? params?.orders
        : [
            'Power',
            'Giants',
            'Titans',
            'Skill',
            'Perfection',
            'Brilliance',
            'Enlightenment',
            'Protection',
            'Anger',
            'Rage',
            'Fury',
            'Vitriol',
            'the Fox',
            'Detection',
            'Reflection',
            'the Twins',
          ],
      first: params?.first || 12,
      skip: params?.skip || 0,
      orderBy: params?.orderBy || 'tokenId',
      orderDirection: params?.orderDirection || 'asc',
    }
  }

  return {
    getRealm,
    getRealms,
    getWalletRealms,
    error,
    loading,
    realm,
    userRealms: computed(() => userRealms),
    realms: computed(() => realms),
  }
}
