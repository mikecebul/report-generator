import { ElectronAPI } from '@electron-toolkit/preload'
import { ClientDetails } from 'src/types/clientDetails'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      getClientDetails: () => ClientDetails[]
    }
  }
}
