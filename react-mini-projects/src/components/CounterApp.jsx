import { useState } from 'react'
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './counterApp.css'

const CounterApp = () => {

  const [counter, setCounter] = useState(0)
  //let counter = 0

  const addValue = () => {
   setCounter(counter + 1)
  }

  const removeValue = () => {
    if (counter >= 1) {
    setCounter(counter - 1)
    }
    else {
      toast.error("The value cannot be negative!")
    }
  }
  
  return (
    <>
      <h1
      className='mb-2 text-2xl'
      >Counter</h1>

      <h2
      className='text-lg'
      >Counter Value : {counter} </h2>

      <button 
        className='ctr-btn mt-4'
        onClick={addValue}
      >Add value</button> {" "}

      <button 
        className='ctr-btn'
        onClick={removeValue}
      >Remove value</button>

      <ToastContainer 
        position="top-right" 
        autoClose={2000} 
        // transition={Zoom}
        hideProgressBar={false}
        newestOnTop={true}
        theme='dark'
      />

      {/* <p>Footer: {counter}</p> */}
    </>
  )
}

export default CounterApp