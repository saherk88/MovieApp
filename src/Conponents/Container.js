import React, {useState} from 'react'
import MovieList from './MovieList'

const Container = () => {

    
    const [films, setFilms] = useState([
 
        {id:1,name:'Interstellar', rating:"5"},
        {id:2,name:'Seven', rating:"4.6"},
        {id:3,name:'Dark Knight', rating:"3.8"}
        ])
    return (
        <div className="container">
            <MovieList films={films} />
            
        </div>
    )
}


export default Container
