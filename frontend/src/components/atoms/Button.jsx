import React from 'react'

const Button = ({type, style, text}) => {
  return (
    <div type={type} className={`${style && style} py-3 rounded-md text-white bg-blue-900  font-medium cursor-pointer text-center w-[150px]`}>
      {text}
    </div>
  )
}

export default Button