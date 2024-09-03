import React from 'react' 

const Button = ({ text, content, clas}) => {

    const action = (e) => {
        content(e);
    }
  return (
    <button onClick={action} className={clas}>{text}</button>
  )
}

export default Button