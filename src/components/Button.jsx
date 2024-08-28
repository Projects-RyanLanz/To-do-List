import React from 'react'

const Button = ({ text, content }) => {

    const action = (e) => {
        content(e);
    }
  return (
    <button onClick={action}>{text}</button>
  )
}

export default Button