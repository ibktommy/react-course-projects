import React from 'react'

import './ColorStyle.css'
import Form from './components/Form'
import ColorList from './components/ColorList'
import { useState } from 'react';
import Values from "values.js";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';



const ColorApp = () => {
  const [colorList, setColorList] = useState(new Values("#ff8000").all(10));

  // Function to create New Color List
  function createColorList(newColor) {
    try {
      if (newColor === "") {
				toast.error("You submitted an empty color value");
        return
			}
      const newColorList = new Values(newColor).all(10);
			setColorList(newColorList);
			toast.success("New Color List Generated");
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <main id='container'>
      <ToastContainer position='top-left'/>
      <div className="header">
        <h4 className='title'>Color Generator</h4>
        <Form createColorList={createColorList}/>
      </div>
      <ColorList colorList={colorList}/>
    </main>
  )
}

export default ColorApp