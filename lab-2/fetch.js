import chalk from 'chalk';
import axios from 'axios';

class Fetch {
    constructor(pokemon, color) {
        this.pokemon = pokemon;
        this.color = color;
    }
    fetch () {
        
    }
}


// promise
axios("https://pokeapi.co/api/v2/pokemon/rayquaza").then(function(response) {
    const pokemon = response.data;
    console.log(pokemon.name, pokemon.id);
}).catch(function(error){
    console.log("Error");
});