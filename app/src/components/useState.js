//------------------------- useState -----------------------
//useState is a React Hook that let you add a state variable to your component.
//const [stateName, setStateMethod] = useState(initialState);

import React, { useState } from 'react'

const UseFruitState = props => {

    //set useState 
    const [fruitState, setFruitState] = useState({
        fruits: [
            {name:'Apple', color:'Red'},
            {name:'Mango', color:'Yellow'},
        ]

    });


    //State manipulating: to update state, we have to call the state method
    const changeColor = () => {
        setFruitState({
            fruits: [
                { name: 'Apple', color: 'Green' },  // Change Apple color
                { name: 'Mango', color: 'Orange' }, // Change Mango color
            ],
        });
    }



    return (
        <div>
            <h1>I love {fruitState.fruits[0].name}. The color of {fruitState.fruits[0].name} is {fruitState.fruits[0].color}.</h1> 
            <h1>I love {fruitState.fruits[1].name}. The color of {fruitState.fruits[1].name} is {fruitState.fruits[1].color}.</h1>
            
            <button onClick={changeColor}>Change Colors</button>
        
        </div>

    )
}
    

export default UseFruitState 