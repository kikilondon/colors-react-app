import Input from "./Input";
import Square from "./Square";
import {useState} from 'react';
import React from 'react'
import Header from "./Header";

function App() {
  const [colorValue,setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);
  return (
    <div className="App">
      <Header />
    <Square colorValue = {colorValue}
    hexValue = {hexValue}
    isDarkText = {isDarkText}/>
    <Input 
      colorValue = {colorValue}
      setColorValue={setColorValue}
      setHexValue = {setHexValue}
      isDarkText ={isDarkText}
      setIsDarkText={setIsDarkText}
     />
    </div>
  );
}

export default App;
