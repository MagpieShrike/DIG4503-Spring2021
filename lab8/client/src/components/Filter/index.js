import Axios from 'axios';
import { useState } from 'react';

function Filter() {
    const [searchResults, setSearchResults] = useState('');

    const getNames = (query) => {
        Axios.get('http://localhost:45030/search/' + query)
        .then(response => {
          console.log(response.data);
        })
        .catch(response => {
          console.log("error");
        });
      };

    return(
      <div>
        <input type="text" onChange={(event) => setSearchResults(event.target.value)} />
        <button onClick={() => getNames(searchResults)}>Click me to test!</button>
      </div>
    );
}

export default Filter;