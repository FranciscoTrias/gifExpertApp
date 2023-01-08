import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([])

    const onAddCategory = ( newCategory ) => {
        if (categories.includes(newCategory) ) return;
        setCategories([newCategory, ...categories]);
        // setCategories([newCategory,...categories ])
        
    }
    console.log(categories)
                
    return (
    <>
    
    
    {/* Titulo */}
    <h1>GifExpertApp</h1>
    
    {/* Input */}
    <AddCategory 
        onNewCategory={ value => onAddCategory(value) }
    />

    {/* Listado de gifs */}
    
        
    { 
        categories.map((category) => {
            return (
                    <GifGrid key={category}
                    category={category}/>
                )

            })

    }

        {/* Gif item */}

    </>
  )
}