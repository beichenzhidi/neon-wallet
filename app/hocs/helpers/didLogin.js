// @flow
import { wallet } from '@cityofzion/neon-js'

export default function didLogin(oldAddress: ?string, newAddress: ?string) {
  return !oldAddress && wallet.isAddress(newAddress)
}
