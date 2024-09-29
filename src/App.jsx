import { useState } from 'react'
//  import './App.css'
import Propscaed from './components/props/propscaed'

function App() {
  const [color, setColor] = useState("olive")
  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 px-3 py-2 rounded-xl bg-white shadow-lg'>
           <button onClick={()=>setColor("red")} className='outline-none px-4 rounded-full py-1' style={{backgroundColor:"red"}}>Red</button>
           <button onClick={()=>setColor("green")} className='outline-none px-4 rounded-full py-1' style={{backgroundColor:"green"}}>Green</button>
           <button onClick={()=>setColor("yellow")} className='outline-none px-4 rounded-full py-1' style={{backgroundColor:"yellow"}}>Yellow</button>
           <button onClick={()=>setColor("white")} className=' px-4 rounded-full py-1' style={{backgroundColor:"white"}}>White</button>
           <button onClick={()=>setColor("black")} className='outline-none px-4 rounded-full py-1 text-white' style={{backgroundColor:"black"}}>Black</button>
           <button onClick={()=>setColor("pink")} className='outline-none px-4 rounded-full py-1' style={{backgroundColor:"pink"}}>Pink</button>
           <button onClick={()=>setColor("blue")} className='outline-none px-4 rounded-full py-1 text-white' style={{backgroundColor:"blue"}}>Blue</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
