<script lang="ts" setup>
import { ref } from 'vue'
import { getPwGameClient, getPwGameWorldHelper, usePWClientStore } from '@/stores/PWClientStore.ts'
import { useRouter } from 'vue-router'
import { LoginViewRoute } from '@/router/Routes.ts'
import { sendGlobalChatMessage } from '@/services/ChatMessageService.ts'
import { withLoading } from '@/services/LoaderProxyService.ts'
import PiCardContainer from '@/components/PiCardContainer.vue'
import PiButton from '@/components/PiButton.vue'
import PiOverlay from '@/components/PiOverlay.vue'
import { MessageService } from '@/services/MessageService.ts'

const loadingOverlay = ref(false)

const PWClientStore = usePWClientStore()
const router = useRouter()

const worldId = ref<string>(PWClientStore.worldId)
const worldName = ref<string>(getPwGameWorldHelper().meta?.title ?? '')

async function onDisconnectButtonClick() {
  await withLoading(loadingOverlay, async () => {
    getPwGameClient().disconnect(false)

    PWClientStore.setPwGameClient(undefined)
    PWClientStore.setPwApiClient(undefined)
    PWClientStore.worldId = ''
    await router.push({ name: LoginViewRoute.name })
  })
}

function onClickMeButtonClick() {
  sendGlobalChatMessage('Button got clicked on bot website!')
  MessageService.info('Message sent in game!')
}
</script>

<template>
  <PiOverlay :loading="loadingOverlay"></PiOverlay>
  <PiCardContainer>
    <v-col>
      <v-row>
        <h3>Connected to {{ `'${worldName}'` }}</h3>
      </v-row>
      <v-row>
        <a :href="`https://pixelwalker.net/world/${worldId}`" target="_blank">{{
          `https://pixelwalker.net/world/${worldId}`
        }}</a></v-row
      >
      <v-row>
        <PiButton color="red" @click="onDisconnectButtonClick">Disconnect</PiButton>
      </v-row>
    </v-col>
  </PiCardContainer>
  <PiCardContainer>
    <v-col>
      <v-row><h3>Usage info</h3></v-row>
      <v-row
        >Bot runs fully in browser. So for best experience, keep this tab focused if possible. Otherwise, browser may
        decide to throttle the bot, which may lead to bot becoming unresponsive.
      </v-row>
    </v-col>
  </PiCardContainer>
  <PiCardContainer>
    <v-col>
      <v-row>
        <PiButton color="blue" @click="onClickMeButtonClick">Click me!</PiButton>
      </v-row>
    </v-col>
  </PiCardContainer>
</template>

<style scoped>
/*Waiting for fix: https://github.com/vuetifyjs/vuetify/issues/17633*/
ul {
  padding-left: 2rem;
}
</style>
