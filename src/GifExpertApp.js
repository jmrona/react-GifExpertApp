import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = (props) => {

    const [categories, setCategories] = useState(['Doraemon'])

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr/>

            
            

            <ul>
            { 
                categories.map( category => 
                    <GifGrid 
                        key={category}
                        category={ category }
                    />
                )
            }
            </ul>
        </>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp

