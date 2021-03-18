import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import { useState } from 'react';

// NEED TWO (2) COMPONENTS

function App() {

  const [additionalName, setAdditionalName] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchResults, setSearchResults] = useState('');

  const putPerson = (person) => {
    Axios.put('http://localhost:45030/people/' + person)
    .then(response => {
      console.log(response.data);
    })
    .catch(response => {
      console.log("error");
    });
  };

  const getPeople = (person) => {
    Axios.get('http://localhost:45030/people/' + person)
    .then(response => {
      console.log(response.data);
    })
    .catch(response => {
      console.log("error");
    });
  };

  const getNames = (query) => {
    Axios.get('http://localhost:45030/search/' + query)
    .then(response => {
      console.log(response.data);
      // Issue Here
      setSearchResults(response.data.person);
    })
    .catch(response => {
      console.log("error");
    });
  };

  return (
    <div className="App">
      <input type="text" onChange={(event) => setAdditionalName(event.target.value)} />
      <button onClick={() => putPerson(additionalName)}>Click me to test!</button>

      <input type="text" onChange={(event) => setSearchName(event.target.value)} />
      <button onClick={() => getPeople(searchName)}>Click me to test!</button>

      <input type="text" onChange={(event) => setSearchResults(event.target.value)} />
      <button onClick={() => getNames(searchResults)}>Click me to test!</button>
      {/*
        searchResults.map((value, index) => {
          return <p key={index}>{value}</p>
        })
      */}
    </div>
  );
}

export default App;
