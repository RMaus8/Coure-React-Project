import React from 'react';

import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    //pull an array of just the keys in the key/value pairs of object passed - Object js method
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, index) => {
            return <BurgerIngredient key={igKey + index} type={igKey} />
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el);
    }, []);
if(transformedIngredients.length === 0) {
    transformedIngredients = <p> Please start adding ingredients </p>
}
    
    // explanation for above:
    //     we are using Object.keys(props.ingredients) to create an array of just the keys in the ingredients object [meat, salad, bacon, cheese]
    //     then we are calling map which runs a function on each ingredient key
    //     that function creates an array for each ingredient with the length being the value or number of that ingredient in the ingredients object
    //     we then call map on each new array which returns a <BurgerIngredient> element for each ingredient that specifies its type so it'd return 2 cheese elements
    //     this is just a way to make sure that it dynamically returns all ingredients in their current state
    //     note: props.ingredients[igKey] is how you dynamically call the specific ingredient for the ingredients object - this only works on objects 
    //      then we flatten the array with the reduce method which takes an accumulator element and current element as arguments and you can reduce to a single array
    //      basically we are concatenating each array element to each other to make one array and not an array of arrays - the [] at the end is the initial value so it will start with an empty array
    
    
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
        
    );
}

export default burger;