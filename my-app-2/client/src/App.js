import { useState } from 'react';
import axios from 'axios'

function App() {
    const [resposta, setResposta] = useState("")
    const [resposta2, setResposta2] = useState("")

    axios.get("http://localhost:8080/usuarios")
    .then(function (res) {
        setResposta(res.data)
    })
    .catch(function (err) {
        setResposta(err.data)
    })

    axios.get("http://localhost:8080/usuarios/f")
    .then(function (res) {
        setResposta2(res.data)
    })
    .catch(function (err) {
        setResposta2(err.data)
    })

    return (
        <div className="app">
            <h1>Word Associations Map</h1>
            <h2>{resposta}</h2>
            <h2>{resposta2}</h2>
        </div>
    );
}

export default App;