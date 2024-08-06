import { useState } from 'react'
import './App.css'
import Card from './components/Card'


function App() {
  const [color, setColor] = useState("olive");
const desc={
  jobProfile: 'Software Developer',
  age: '29 years'
};
  return (
    <div className='justify-center' style={{backgroundColor : color}}>
      <h1 className='text-3xl font-bold underline'>Learn React</h1>
      <Card userName="Divya Tiwari" description={desc.jobProfile} btnDetail='Click Me'/>
      <div className='flex items-center justify-between px-4 py-2 bg-white mt-20'>
        <button className='m-2 text-white bg-red-500' onClick={()=>setColor("red")}>Red</button>
        <button className='m-2 color-white bg-green-500' onClick={()=>setColor("green")}>Green</button>
        <button className='m-2 color-white bg-blue-500' onClick={()=>setColor("blue")}>Blue</button>
        <button className='m-2 color-white bg-pink-500' onClick={()=>setColor("pink")}>Pink</button>
      </div>
      </div>
  )
}

export default App
