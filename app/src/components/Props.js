//---------------------- Props -------------------------- 
//Props stands for properties
//Props are arguments passed into components
//Props are the way to pass data throughout the components

import React from 'react'

function Fruits(props){
    return <h1>I love {props.name}. The color of {props.name} is {props.color}.</h1>;
}

// Optional: Define default props in case the values are not passed
// Fruits.defaultProps = {
//    name: 'Apple',
//    color: 'red',
// };

export default Fruits