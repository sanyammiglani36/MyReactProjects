import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
   <h1 className='bg-blue-600 mb-4'>Tailwind</h1>
   <Card username="Sanyam" btnText = "Click me"/> 
   <Card username="Vansh" btnText="Visit me"/>
  

</>
  )
}

export default App
