import react from 'react';
import Pokemon from '../Pokemon'

/*
    Should use state
    Should use <input type="text" /> or a combination of <input type="text" /> and <button>
    Should use axios and the Pokemon API (see Lab 2 for reminder)
    Should show the result of a search:
        If successful, show Pokemon component
        If not successful, show "Not found!"
*/

class Search extends 'react' () {
    constructor(props) {
        super(props);

        this.state = {
            result: []
        };
    }
    
    render() {
        return;
    }
}

export default Search;