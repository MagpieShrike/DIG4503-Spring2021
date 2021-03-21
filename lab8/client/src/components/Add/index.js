import Axios from 'axios';
import { useState } from 'react';

function Add() {
    const [additionalName, setAdditionalName] = useState('');

    const putPerson = (person) => {
        Axios.put('http://localhost:45030/people/' + person)
        .then(response => {
          console.log(response.data);
        })
        .catch(response => {
          console.log("error");
        });
      };

    return(
      <div>
        <input type="text" onChange={(event) => setAdditionalName(event.target.value)} />
        <button onClick={() => putPerson(additionalName)}>Click me to test!</button>
      </div>
    );
}

export default Add;