import { ElectronAPI } from '@electron-toolkit/preload'
import { GenerateReportsResponse } from 'src/types/generateReportsResponse'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      selectClientDetailsFile: () => Proimise<string>
      generateReports: (string) => Promise<GenerateReportsResponse>
    }
  }
}
