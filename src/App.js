import { useState } from 'react';
import './App.css';
import Input from './Input';
import Square from './Square';

function App() {

  const [colorValue, colorSetValue] = useState(" ")
  const [hexValue, setHexValue] = useState(" ")
  const [isDark, setIsDark] = useState(true)

  return (
   <div>

  <Square 
    colorValue={colorValue}
    hexValue={hexValue}
    isDark={isDark}

  />

  <Input
    colorValue={colorValue}
    colorSetValue={colorSetValue}
    isDark={isDark}
    setHexValue={setHexValue}
    setIsDark={setIsDark}

   />

   </div>
   );
}

export default App;
