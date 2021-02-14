// Class Component
import React from 'react';
import MarketItem from '../MarketItem';

class Market extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }
//this.state.count.map((index) => {<MarketItem key={index} count={index}/>}));
//
    render() {
        return(
            <div>
                <h2>Click to add items.</h2>
                <button onClick={() => {
                    const items = this.state.items;
                    items.push(<MarketItem key={items.length} count={items.length}/>);
                    this.setState({items: items});
                }}>Click me!</button>
    
                <div>{this.state.items.map((item, index) => {
                        return item;
                    })
                }</div>

                
            </div>
            
        )
    }
}






export default Market;