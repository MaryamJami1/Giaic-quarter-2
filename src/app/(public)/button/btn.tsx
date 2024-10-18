import React from 'react'

interface Iprops{
    text:string
}
export default function Button(props:Iprops) {
  return (
    <div>
      <button className='bg-blue-600 text-white py-2 px-4 mt-10 rounded-md font-bold'>{props.text}</button>
    </div>
  )
}
