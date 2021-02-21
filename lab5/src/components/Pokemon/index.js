import React from 'react';

/*
    Should not have state
    Should show at least the image (sprites.front_default), 
    name, and id of a Pokemon
 */

//function Pokemon (props) {
const Pokemon = (props) => {

     return (
        <div>  
                    
            <h2>{props.pokemon.name}</h2>
            <p>{props.pokemon.id}</p>
            <img alt={props.pokemon.name} src={props.pokemon.sprites.front_default} />
    
        </div>
     );
 }

 export default Pokemon;