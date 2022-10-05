import { useEffect, useState } from "react"
import axios from 'axios'
import './Home.scss'
const Home = () => {
    const [characters, setCharacters] = useState()

    useEffect(() => {
        
            axios.get('https://rickandmortyapi.com/api/character')
            .then(resp=> setCharacters(resp.data.results))
        
    }, [])

    return (
        <div className="Home">
            {
                characters?.map((character) => {
                    return <div className="character-card" key={character.id}>
                            <h3>{character.name}</h3>
                            <p>estado: {character.status}</p>
                            <p>especie: {character.species}</p>
                            <p>tipo: {character.type}</p>
                        </div>
                })
            }

        </div>
    )
}

export default Home


