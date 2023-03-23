import {React, useState} from 'react';
import axios from 'axios'

function App() {
    const [resposta, setResposta] = useState("")
    axios.get("http://localhost:3001/")
    .then(function (res) {
        setResposta(res.data)
    })
    .catch(function (err) {
        setResposta(err.data)
    })
    return (
        <div className="app">
            <h1>Word Associations Map</h1>
            <h2>{resposta}</h2>
        </div>
    );
}

export default App;