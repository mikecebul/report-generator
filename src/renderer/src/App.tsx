import { Button } from './components/ui/button'

function App(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen space-y-8 bg-background text-primary">
      <h1 className="text-3xl font-semibold">Hello World</h1>
      <Button>Generate Reports</Button>
    </div>
  )
}

export default App
