import React, { useState, useEffect} from 'react'
import { getGifs } from './helpers/getGifs';
import '../../src/styles.css'

export const GifGrid = ({category}) => {
        
  const [images, setImages] = useState()

  const getImages = async() => {
    const newImages = await getGifs (category);
    setImages(newImages)
  }

    useEffect( () => {
        getImages()
        
    }, [])

  
    return (
    <>
        <h3>{category}</h3>
    
        <ol className='card-grid' >

         
    
        {
        
        
        

        
             images?.map( img => (
                     <li className='card' key={img.id}><p className='card'>{img.title}</p>
                     <img src={img.url} alt="error" /></li>
              ))
             
             
             
             }
        
        
        
    
        
        </ol>
    
    
    </>
  )
}
