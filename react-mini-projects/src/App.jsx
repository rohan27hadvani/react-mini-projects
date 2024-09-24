// import { useState } from 'react'

import CounterApp from "./components/counterApp"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="m-2 text-center">
        <h1 className="text-3xl">
            Hello world!
        </h1>
        <CounterApp />
      </div>
 
    </>
  )
}

export default App
