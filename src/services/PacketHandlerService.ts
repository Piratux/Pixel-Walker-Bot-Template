import { getPwGameClient, getPwGameWorldHelper } from '@/stores/PWClientStore.ts'
import { sendPrivateChatMessage } from '@/services/ChatMessageService.ts'
import { ProtoGen } from 'pw-js-api'

export function registerCallbacks() {
  getPwGameClient()
    .addHook(getPwGameWorldHelper().receiveHook)
    .addCallback('debug', console.log)
    .addCallback('playerInitPacket', playerInitPacketReceived)
    .addCallback('playerChatPacket', playerChatPacketReceived)
    .addCallback('playerJoinedPacket', playerJoinedPacketReceived)
}

function playerJoinedPacketReceived(data: ProtoGen.PlayerJoinedPacket) {
  const playerId = data.properties?.playerId
  if (!playerId) {
    return
  }
  sendPrivateChatMessage('Template Bot is here!', playerId)
}

function playerChatPacketReceived(data: ProtoGen.PlayerChatPacket) {
  const args = data.message.split(' ')
  const playerId = data.playerId

  switch (args[0].toLowerCase()) {
    case '.ping':
      sendPrivateChatMessage('pong', playerId)
      break
    default:
      if (args[0].startsWith('.')) {
        sendPrivateChatMessage('ERROR! Unrecognised command', playerId)
      }
  }
}

function playerInitPacketReceived() {
  getPwGameClient().send('playerInitReceived')
}
