import { defineStore } from 'pinia'
import { PWApiClient, PWGameClient } from 'pw-js-api'
import { PWGameWorldHelper } from 'pw-js-world'
import { computed, markRaw, ref } from 'vue'

export const usePWClientStore = defineStore('PWClientStore', () => {
  let _pwGameClient: PWGameClient | undefined
  let _pwApiClient: PWApiClient | undefined
  const pwGameWorldHelper = markRaw(new PWGameWorldHelper())
  const worldId = ref<string>('')

  const pwGameClient = computed<PWGameClient | undefined>(() => {
    if (!_pwApiClient) {
      return undefined
    }
    return _pwGameClient
  })

  function setPwGameClient(client: PWGameClient | undefined) {
    _pwGameClient = client
  }

  const pwApiClient = computed<PWApiClient | undefined>(() => {
    if (!_pwApiClient) {
      return undefined
    }
    return _pwApiClient
  })

  function setPwApiClient(client: PWApiClient | undefined) {
    _pwApiClient = client
  }

  return {
    pwGameClient,
    pwApiClient,
    pwGameWorldHelper,
    worldId,
    setPwGameClient,
    setPwApiClient,
  }
})

export function getPwGameClient(): PWGameClient {
  return usePWClientStore().pwGameClient!
}

export function getPwApiClient(): PWApiClient {
  return usePWClientStore().pwApiClient!
}

export function getPwGameWorldHelper(): PWGameWorldHelper {
  return usePWClientStore().pwGameWorldHelper
}
