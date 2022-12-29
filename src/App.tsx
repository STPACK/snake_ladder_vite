import { useState } from 'react'
import picc from '@/assets/pic_react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div className='text-red border'>tzxt</div>
      <img src={picc} alt='' />
    </div>
  )
}

export default App
