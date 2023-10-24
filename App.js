// import logo from './logo.svg';
import './App.css';
import React, {useState , useRef} from 'react'

export default function App() {
  const [name, setName] = useState()
  const inputRef = useRef()


  // focus function
  function focus(){
    console.log(inputRef.current);
  }

// count the value 
//   const renderCount = useRef(0)


// // useEffect
// useEffect(()=>{
//   renderCount.current = renderCount.current + 1
// })


  return (
    <>
    <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
    <div>My name is {name}</div>
    <button onClick={focus}>Focus</button>
    </>
  )
}

