import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { NextApp } from './AnotherApp.jsx'
import {Prop, SayHi} from './Prop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <NextApp/>
    <App />
    <App />
    <NextApp/>
    <Prop firstName="Rishav" lastName="Dhungel"/>
    <Prop firstName="John" lastName="Doe"/>
    <SayHi name="Rishav Dhungel" style={{backgroundColor:"orange",
      color:"white",
      textAlign:"left",
      fontSize:"2rem",
      padding:"1rem"}}
      />
   <SayHi name="Jonny Jonny" style={{backgroundColor:"tomato",
      textAlign:"left",
      fontSize:"13rem",
      padding:"2em"}}
      />


</StrictMode>,
)
