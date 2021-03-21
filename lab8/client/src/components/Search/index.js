import Axios from 'axios';
import { useState } from 'react';

function Search() {
    const [searchName, setSearchName] = useState('');

    const getPeople = (person) => {
        Axios.get('http://localhost:45030/people/' + person)
        .then(response => {
          console.log(response.data);
        })
        .catch(response => {
          console.log("error");
        });
      };

    return(
      <div>
        <input type="text" onChange={(event) => setSearchName(event.target.value)} />
        <button onClick={() => getPeople(searchName)}>Click me to test!</button>
      </div>
    );
}

export default Search;