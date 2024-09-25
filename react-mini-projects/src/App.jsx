// import { useState } from 'react'

import CounterApp from "./components/counterApp"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="mt-8 text-center">
        <h1 className="text-3xl">
            Hello world!
        </h1>
      </div>

      <div className="counter-div">
      <CounterApp />
      </div>
 
    </>
  )
}

export default App
