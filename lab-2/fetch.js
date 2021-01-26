import chalk from 'chalk';
import axios from 'axios';

class Fetch {
    constructor(pokemon, color) {
        this.pokemon = pokemon;
        this.color = color;
    }
    fetch () {
        axios("https://pokeapi.co/api/v2/pokemon/" + this.pokemon).then(function(response) {
            const pokemon = response.data;
            console.log(chalk.hex(this.color)(pokemon.name, pokemon.id));
        }).catch(function(error){
            console.log(chalk.red(error));
        });
    }
}

export default Fetch;