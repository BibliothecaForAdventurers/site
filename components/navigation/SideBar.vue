<template>
  <div
    class="
      border-off-200 border-double border-r-4
      rounded-tl-2xl
      p-4
      bg-gray-900
      transform
      duration-300
      ease-in-out
      transition-all
      left-0
      z-20
    "
    :class="
      sideBarOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'
    "
  >
    <div class="sm:sticky top-10 flex flex-col z-30 h-screen overflow-scroll">
      <div class="sm:hidden w-full">
        <button class="ml-auto" @click="toggleSideBar">
          <Close class="w-6 h-6" />
        </button>
      </div>

      <h2>
        <NuxtLink to="/">
          <Book class="w-16 h-16 mx-auto sm:mt-12" />
        </NuxtLink>
      </h2>
      <span class="text-center font-semibold text-2xl">
        <span class="text-yellow-400">${{ (lordsPrice || 0).toFixed(4) }}</span>
        $LORDS
      </span>

      <nav class="flex flex-col p-2 capitalize mt-8">
        <h4 class="mt-8 uppercase text-off-200 tracking-wide pl-4">
          Loot Assets
        </h4>
        <BButton
          v-for="(link, i) in adventureLinks"
          :key="i"
          type="navLink"
          :to="link.page"
          @click.native="toggleSideBar"
        >
          <span class="flex"> {{ link.title }}</span>
        </BButton>
        <BButton
          v-for="link in assetLinks"
          :key="link.title"
          type="navLink"
          :to="link.page"
          @click.native="toggleSideBar"
        >
          {{ link.title }}
        </BButton>
        <h4 class="mt-8 uppercase text-off-200 tracking-wide pl-4">
          Utilities
        </h4>
        <BButton
          v-for="link in utilLinks"
          :key="link.title"
          type="navLink"
          :to="link.page"
          @click.native="toggleSideBar"
        >
          {{ link.title }}
        </BButton>
        <a
          type="navLink"
          class="
            button
            ease-in-out
            font-display
            disabled:opacity-25
            w-full
            text-xl
            rounded-xl
            hover:bg-gray-800
            p-2
            px-4
            font-body
          "
          href="https://atlas.bibliothecadao.xyz"
          @click.native="toggleSideBar"
        >Atlas</a>
        <h4 class="mt-8 uppercase text-off-200 tracking-wide pl-4">
          Knowledge base
        </h4>
        <BButton
          type="navLink"
          class="text-left"
          href="https://bibliotheca-for-loot.notion.site/Bibliotheca-DAO-Foundational-Principles-1d226a06414f40bc92f85a8036c74d52"
          @click.native="toggleSideBar"
        >
          DAO
        </BButton>
        <BButton
          type="navLink"
          class="text-left"
          to="/realms/resources"
          @click.native="toggleSideBar"
        >
          Realms Resources
        </BButton>
        <BButton
          type="navLink"
          class="text-left"
          href="https://docs.bibliothecadao.xyz/lootverse-master-scroll"
          @click.native="toggleSideBar"
        >
          White Paper & Docs
        </BButton>
        <h4 class="mt-8 uppercase text-off-200 tracking-wide pl-4">
          Governance
        </h4>
        <BButton
          type="navLink"
          class="text-left"
          href="https://snapshot.org/#/council.bibliotheca.eth"
          @click.native="toggleSideBar"
        >
          Snapshot
        </BButton>
      </nav>

      <div
        class="mt-auto flex flex-wrap py-10 justify-between px-4 text-off-200"
      >
        <div class="w-full text-center text-xl pb-5 hover:underline">
          <a href="https://docs.bibliothecadao.xyz/lootverse-master-scroll/">White Paper & Docs</a>
        </div>
        <a
          target="blank_"
          class="hover:bg-gracy-700 self-center"
          href="https://github.com/BibliothecaForAdventurers/site"
        ><Github
          class="w-8 h-8"
        /></a>
        <a
          target="blank_"
          class="hover:bg-gracy-700"
          href="https://discord.gg/8NS4JxGmUC"
        ><Discord
          class="w-8 h-8 fill-current"
        /></a>
        <a
          target="blank_"
          class="hover:bg-gracy-700"
          href="https://twitter.com/bibliothecadao"
        ><Twitter
          class="w-8 h-8 fill-current"
        /></a>
        <a
          target="blank_"
          class="hover:bg-gracy-700"
          href="https://medium.com/@bibliotheca"
        >
          <Medium class="w-8 h-8 fill-current" />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted } from '@vue/composition-api'
import { useWeb3 } from '@instadapp/vue-web3'
import { useUiState, useLordsPrice, usePrice } from '~/composables'
import Book from '~/assets/img/book-open.svg?inline'
import Close from '~/assets/img/x-square.svg?inline'
import Github from '~/assets/img/github.svg?inline'
import Discord from '~/assets/img/discord.svg?inline'
import Medium from '~/assets/img/medium.svg?inline'
import Twitter from '~/assets/img/twitter.svg?inline'
export default {
  name: 'SideBar',
  components: {
    Book,
    Close,
    Github,
    Discord,
    Medium,
    Twitter
  },
  setup () {
    const { account } = useWeb3()
    const { toggleSideBar, sideBarOpen } = useUiState()
    const { lordsPrice, getLordsPrice } = useLordsPrice()
    const { goldPrice, getGoldPrice } = usePrice()

    const assetLinks = [
      {
        page: '/loot',
        title: 'Loot'
      },
      {
        page: '/realms',
        title: 'Realms'
      }
    ]

    const utilLinks = [
      {
        page: '/settling#roadmap',
        title: 'Road map'
      },
      {
        page: '/settling',
        title: 'Staking'
      }
    ]

    const adventureLinks = [
      {
        page: '/adventurer',
        title: 'Search All'
      }
    ]

    onMounted(() => {
      getLordsPrice()
      getGoldPrice()
      window.setInterval(() => {
        getLordsPrice()
        getGoldPrice()
      }, 20000)
    })

    return {
      toggleSideBar,
      sideBarOpen,
      goldPrice,
      lordsPrice,
      getLordsPrice,
      assetLinks,
      utilLinks,
      adventureLinks,
      account
    }
  }
}
</script>
