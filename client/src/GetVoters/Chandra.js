import { Card } from '@mui/material';
import { useState } from 'react';

const Chandra = () => {
  const [person, setPerson] = useState(null);
  const [searchId, setSearchId] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchPersonById = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:4000/get/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch person');
      }
      const data = await response.json();
      setPerson(data.data);
    } catch (error) {
      console.error('Error fetching person:', error);
      setPerson(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (searchId.trim() !== '') {
      fetchPersonById(searchId.trim());
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
        placeholder="Voter Epic-No or Name "
      />

      
      <button onClick={handleSearch}>Search</button>
      {loading && <p>Loading...</p>}
      {person && (
        <div>
        <Card sx={{width:"25%"}}>
          <h2 style={{color:"red"}}>Person Details</h2>
         
              <p>SNO:{person.SNO}</p>
              <p>VOTER_NAME:{person.VOTER_NAME}</p>
              <p>EPIC_NUMBER:{person.EPIC_NUMBER}</p>
              <p>SNOP:{person.SNOP}</p>
              <p>PARTNO:{person.PARTNO}</p>
              <p>PARTY:{person.PARTY}</p>
              <p>SUB_CASTE:{person.SUB_CASTE}</p>
              <p>GENDER:{person.GENDER}</p>
              <p>AGE:{person.AGE}</p>
              <p>RELATION:{person.RELATION}</p>
              <p>ST:{person.ST}</p>
              <p>SURNAME:{person.SURNAME}</p>
              <p>GAURDIEN:{person.GAURDIEN}</p>
              <p>VillAGE:{person.VillAGE}</p>
              <p>H_NO:{person.H_NO}</p>
              <p>R_TYPE:{person.R_TYPE}</p>
    
          </Card>
        </div>
      )}
    </div>
  );
};

export default Chandra;
