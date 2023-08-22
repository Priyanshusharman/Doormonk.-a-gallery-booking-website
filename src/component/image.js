import React from 'react'

export default function Image(props) {
  return (
    <div className='styleimage'>
      <img src={props.img} alt="props.img" />
      <p>{props.detail}</p>
    </div>
  )
}
