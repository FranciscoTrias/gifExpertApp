import React, { useState, useEffect} from 'react'
import '../../src/styles.css'
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { getGifs } from './helpers/getGifs';


export const GifGrid = ({category}) => {
     
const {images, isLoading} = useFetchGifs(category);

console.log({images, isLoading})



if (isLoading) {
  return (
    
    
      <p style={{color:'white', textAlign: 'center', background: 'black', opacity: '80%'}}>Loading...</p>
)
  
 }else { return (
    <>
        <h3>{category}</h3>
    
        <div className='card-grid'>
              {

            images?.map((image) => (
                     <GifItem 
                     key={image.id}
                     {...image} 
                     />
              ))
             
             }

             
        </div>
    
    
    </>
  )
}
}