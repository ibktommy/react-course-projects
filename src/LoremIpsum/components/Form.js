import { useState } from 'react'
import data from '../dataText'
import TextBox from './TextBox'

const Form = ({count, setCount}) => {
  const [paragraph, setParagraph] = useState([])

  function handleChange(e) {
    setCount(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    const newDataArray = data.slice(0, count)
    setParagraph(newDataArray)
  }

  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="number">Paragraph</label>
          <input type="number" name="count" id="number" min="1" max="8" step="1" value={count} onChange={handleChange}/>
        </div>

        <button>Generate</button>
      </form>
      <TextBox paragraph={paragraph}/>
    </>
  )
}

export default Form;