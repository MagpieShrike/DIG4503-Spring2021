import React from 'react';
import Axios from 'axios';
import Pokemon from '../Pokemon';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            error: false,
            search:"",
            pokemon: "",
        };
    }

     searchMonsters() {

        Axios('https://pokeapi.co/api/v2/pokemon/' + this.state.search)
        .then((response) => {
            this.setState(
                {
                    pokemon: response.data,
                    loading: false
                }
            );
        })
        .catch((error) => {
            console.log("Error: " + error);
            this.setState(
                {
                    error: true,
                    loading: false
                }
            );
        });
      }
    
    render() {
        return(
            <div>
                <h1> Find a Pokemon </h1>
                <input type="text" onChange={(event) => {

                    this.setState({search: event.target.value});
                }} />

                <button onClick={() => this.searchMonsters()}>Search</button>

                {
                (this.state.loading === true) ? (<></>) : (
                    (this.state.error === true) ? (<p>Not found!</p>) : (
                        <Pokemon pokemon={this.state.pokemon}/>
                    )
                    
                )
                }   
            </div>   
        );
    }
}

export default Search;