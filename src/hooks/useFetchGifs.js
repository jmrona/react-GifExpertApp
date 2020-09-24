import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // UseEffect() permite que el codigo se ejecute una sola vez y no
    // cada vez que se renderiza nuestro componente. Así evitamos cargar 
    // información innecesaria.
    useEffect( () => {
        getGifs( category )
            .then( imgs => {
                setState({
                    data:imgs,
                    loading:false
                })
            })
    }, [ category ]);    

    return state; // {data:[], loading:true}
}