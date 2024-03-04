import React from 'react'

const Square = ({colorValue,hexValue,isDark}) => {
  return (
    <div className="sectionS">
   <section
    className='square'
    style={{
        backgroundColor:colorValue,
        color:isDark ? "#000" : "#FFF"
      }}
   >
    <p>{colorValue ? colorValue :" Empty value"}</p>
    <p>{hexValue ? hexValue :null}</p>

   </section>
  </div>
  )
}

Square.defaultProps = {
  colorValue : "Empty Color Value"
}

export default Square