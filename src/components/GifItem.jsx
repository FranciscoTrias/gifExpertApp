import React from 'react'

export const GifItem = ({title, url, id}) => {
  
  
  return (
    
    <div className="card">
      <img src={url} alt="Error"></img>
      <p>{title}</p>    
 
    </div>
  )
}
