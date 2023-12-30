import { useState } from 'react'
import { Button } from './components/ui/button'
import { type ClientDetails } from '../../types/clientDetails'

function App(): JSX.Element {
  const [clientDetails, setClientDetails] = useState<ClientDetails[]>([])

  const handleFileChoose = async () => {
    const results = await window.api.getClientDetails()
    setClientDetails(results)
  }

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen space-y-8 bg-background text-primary dark">
      <h1 className="text-3xl font-semibold">Hello World</h1>
      <Button variant="secondary" onClick={handleFileChoose}>
        Select Client Details
      </Button>
      <p>Client Details:</p>
      <p>{clientDetails && JSON.stringify(clientDetails[0])}</p>
      <Button>Generate Reports</Button>
    </div>
  )
}

export default App
