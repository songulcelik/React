import React from 'react'

const Style1 = () => {
     const isRadius= true;
  return (
   
    <>
    <h1 style={{
        border:"1px solid red",
        padding:"10px", 
        borderRadius:isRadius? "15px": "0",
        textAlign:"center"
        }}>Inline Styles</h1>
    <p style={{
        fontStyle:"italic",
        fontSize:"1.4rem",
        textAlign:"justify"
    }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus quam accusamus ab assumenda commodi voluptates, odit saepe ea tempora blanditiis rerum nihil magnam! Esse aspernatur, laudantium quaerat hic provident recusandae.</p>
    </>
    
  )
}

export default Style1