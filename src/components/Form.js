import React from 'react'
import './FormStyles.css'


const Form = () => {
  return (
    <div className='form'>
      <form>
        <label>Your name</label>
        <input type="text" ></input>
        <label>Your name</label>
        <input type="text" ></input>
        <label>Your name</label>
        <input type="text" ></input>
        <label>Your name</label>
        <textarea rows="6" placeholder='Type your message here'/>
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default Form
