import React from 'react'
import colorNames from 'colornames'

const Input = ({colorSetValue,colorValue,isDark,setHexValue,setIsDark
}) => {
  return (
      <form onSubmit={(e) => e.preventDefault()} className='inputVal'>
      <label htmlFor="addColor"></label>
      <input 
      type="text"
      autoFocus
      placeholder='type color name'
      required
      value={colorValue}
      onChange={(event) => {
      colorSetValue(event.target.value);
      setHexValue(colorNames(event.target.value))
      }
      }
       />

       <button
       type='button'
       onClick={ () => setIsDark(!isDark)}
       >
        Toggle Text Color
       </button>
      </form>
    )
}

export default Input