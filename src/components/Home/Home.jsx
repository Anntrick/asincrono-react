import { useEffect, useState } from "react"
import axios from 'axios'
const Home = () => {
    let characters = []
    let char = {id: 0, name: '', status: '', species: '', others: {}}
    let { id, name, status, species, others } = char

    useEffect(() => {
        getCharacters()
    }, [])

    const getCharacters = async () => {
        axios.defaults.baseURL = 'http://github.io';
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        characters = await axios.get('https://rickandmortyapi.com/api/character')
        console.log( characters.data.results[0].name)
        char = characters.data.results[0] 
        console.log(name)
    }

    return (
        <div></div>
    )
}

export default Home


