import React from 'react'
import { Button } from 'components'

function App() {
  return (
    <div className="bg-main">
      <button className="font-sans rounded-lg">Hey</button>
      <Button onClick={console.log}>hey</Button>
      <Button onClick={console.log} disabled>
        hey disabled
      </Button>
    </div>
  )
}

export default App
