import { useState } from 'react'

function App() {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  let calcBmi = (event) => {
    //prevent submitting to the server
    event.preventDefault()
 
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))
 
      // Logic for message
 
      if (bmi < 25) {
        setMessage('You are underweight')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are a healthy weight')
      } else {
        setMessage('You are overweight')
      }
    }
  }

  let reload = () => {
    window.location.reload();
  }

  return (
    <>
      <div style={{backgroundColor: "#7f8fa6"}} className='w-full h-screen flex justify-center items-center'>
        <div className='w-72 h-96 p-2 bg-slate-100 rounded-lg'>
          <h2 className='text-center font-bold text-2xl my-4'>BMI Calculator</h2>
          
          <form onSubmit={calcBmi}>
            <div className='mt-4 mx-6'>
              <h4 className='font-semibold'>Weight (lbs)</h4>
              <input value={weight} onChange={(e) => setWeight(e.target.value)} type="text" className='my-1 px-6 py-1 border-solid rounded-md border border-black' placeholder='Enter Weight....' />
            </div>

            <div className='my-4 mx-6'>
              <h4 className='font-semibold'>Height (in)</h4>
              <input value={height} onChange={(event) => setHeight(event.target.value)} type="text" className='my-1 px-6 py-1 border-solid rounded-md border border-black'/>
            </div>

            <div className='flex justify-center items-center'>
              <button type='submit' className='bg-blue-700 ml-2 px-[90px] py-1 rounded-md text-white font-semibold text-center'>Submit</button>
            </div>
            
            <div className='flex justify-center items-center'>
              <button type='submit' onClick={reload} className='bg-slate-700 ml-2 mt-2 px-[90px] py-1 rounded-md text-white font-semibold text-center'>Reload</button>
            </div>
          </form>
          
          <div className='text-center font-semibold mt-2'>
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
