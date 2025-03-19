import { PWApiClient, PWGameClient } from 'pw-js-api'
import { GENERAL_CONSTANTS } from '@/constants/General.ts'
import { GameError } from '@/classes/GameError.ts'

export async function pwAuthenticate(pwApiClient: PWApiClient): Promise<void> {
  const authenticationResult = await pwApiClient.authenticate()

  if ('token' in authenticationResult) {
    return
  }

  if ('message' in authenticationResult) {
    throw new GameError(authenticationResult.message)
  } else {
    throw new GameError(GENERAL_CONSTANTS.GENERIC_ERROR)
  }
}

export async function pwJoinWorld(pwGameClient: PWGameClient, worldId: string): Promise<void> {
  try {
    await pwGameClient.joinWorld(worldId)
  } catch (e) {
    throw new GameError('Failed to join world. Check world ID. ' + (e as Error).message)
  }
}
