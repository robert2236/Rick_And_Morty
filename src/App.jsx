import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import ResidentInfo from './components/ResidentInfo';

function App() {
  const [character, setCharacter] = useState({});
  const [location, setlocation] = useState(" ");

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}/`)
      .then((res) => setCharacter(res.data));
  }, []);

  const searchType = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${location}`)
      .then((res) => setCharacter(res.data));
  };

  console.log(character);

  return (
    <div className="App">
    <div className="header">
      <div className="search-character">
        <input
          name="name"
          placeholder="Write the name of the location here"
          type="text"
          value={location}
          onChange={(e) => setlocation(e.target.value)}
        />
        <button onClick={searchType}>search </button>
      </div>
    </div>
    <section>
      <div className="character-location">
        <div>NAME:</div>
        <div>TYPE:</div>
        <div>DIMENSION:</div>
        <div>POBLATION:</div>
        <div>{character.name}</div>
        <div>{character.type}</div>
        <div>{character.dimension}</div>
        <div>{character.residents?.length}</div>
      </div>
    </section>
    <section className='allCards'>
      {character.residents?.map((resident) => (
        <ResidentInfo url={resident} key={resident} />
      ))}
    </section>
  </div>
);
}

export default App
