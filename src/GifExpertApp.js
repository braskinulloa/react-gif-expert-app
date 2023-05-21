import React, { useState } from'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export default function GifExpertApp() {

    const [categories, setCategories] = useState(['One Punch Man'])

    // const handleAdd = (category) => setCategories([...categories, 'HxH']);

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={ setCategories }/>
            
            <hr />

            <ol>
                {
                    categories.map((c, i) => <GifGrid key={ c } category={ c }/>)
                }
            </ol>
        </>
    )
}
