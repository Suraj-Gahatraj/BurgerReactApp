import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

const burger=(props)=>{
    let tranformedIngredients=Object.keys(props.ingredients)
            .map(igKey=>{
                return[...Array(props.ingredients[igKey])].map((_,i)=>{
                   return <BurgerIngredient key={igKey+i} type={igKey} />;
                });
            })
            .reduce((arr, el)=>{
                return arr.concat(el)
            },[]);
        
            if(tranformedIngredients.length===0){
                tranformedIngredients=<p>Please start adding ingredients</p>
            }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {tranformedIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    )
    
}
export default burger;
