import { useState } from 'react'
import { Button } from './components/ui/button'

function App(): JSX.Element {
  const [clientDetailsFilePath, setClientDetailsFilePath] = useState<string | null>()
  const [loading, setLoading] = useState<boolean>(false)

  const handleFileChoose = async () => {
    const results = await window.api.selectClientDetailsFile()
    setClientDetailsFilePath(results)
  }

  const handleGenerateReports = async () => {
    if (clientDetailsFilePath) {
      setLoading(true)
      try {
        const { success, error } = await window.api.generateReports(clientDetailsFilePath)
        if (success) {
          console.log('Reports generated successfully.')
        } else {
          console.error('Failed to generate reprots:', error)
        }
      } catch (error) {
        console.error('Communication error: Failed to generate reports.')
      }
    }
    setLoading(false)
  }

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen space-y-8 bg-background text-primary dark">
      <h1 className="text-3xl font-semibold">Hello World</h1>
      <Button variant="secondary" onClick={handleFileChoose}>
        Select Client Details File
      </Button>
      <p>Client Details File Path:</p>
      {clientDetailsFilePath ? <p>{clientDetailsFilePath}</p> : null}
      <Button onClick={handleGenerateReports} disabled={!clientDetailsFilePath || loading}>
        Generate Reports
      </Button>
      {loading && <p>Loading...</p>}
    </div>
  )
}

export default App
