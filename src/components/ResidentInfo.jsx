import axios from 'axios';
import React, { useEffect, useState } from 'react';


const ResidentInfo = ({ url }) => {
  const [characterDescription, setCharacterDescription] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => setCharacterDescription(res.data));
  }, []);

  console.log(characterDescription)

  return (
    
        
    
          <div className='cardContainer btn-neon'>
          <h4>{characterDescription.status}</h4>
          <img src={characterDescription.image} alt="" className='cardImg' />
          <h1>{characterDescription.name}</h1>
          <h4>Species: <br />{characterDescription.species}</h4>
          <h4>Origin: <br />{characterDescription.origin?.name}</h4>
          <h4>Episode: <br />{characterDescription.episode?.length}</h4>
          </div>
        
    
  );
};

export default ResidentInfo;