//------------------------- State -----------------------
//React components has a built-in state object
//The state object is where we store property values that belong to the component
//When the state object changes, the component re-renders
//The state object is initialized in the constructor

import React, { Component } from 'react'

class StateClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            fruits: [
                {name:'Apple', color:'Red'},
                {name:'Mango', color:'Yellow'},
            ]
        }
    }

//State manipulating
    changeColor = () => {
        this.setState({
          fruits: [
            { name: 'Apple', color: 'Green' },  // Change Apple color
            { name: 'Mango', color: 'Orange' }, // Change Mango color
          ],
        });
    }


    
    render() {
        return (
            <div>
                <h1>I love {this.state.fruits[0].name}. The color of {this.state.fruits[0].name} is {this.state.fruits[0].color}.</h1> 
                <h1>I love {this.state.fruits[1].name}. The color of {this.state.fruits[1].name} is {this.state.fruits[1].color}.</h1>
             
                <button onClick={this.changeColor}>Change Colors</button>
            
            </div>

        )
    }
    
}


export default StateClass 