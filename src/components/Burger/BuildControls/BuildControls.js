import React from 'react';
import classes  from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';



const controls=[
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'},
]
const buildControls=(props)=>(
    <div className={classes.BuildControl}>
        <p>Total Price of Burger is :{props.totalprice}</p>
        {controls.map(ctrl=>(
            <BuildControl
                key={ctrl.label} 
                label={ctrl.label}
                added={()=>props.ingredientAdded(ctrl.type)}
                removed={()=>props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
                price={props.totalprice}/>
        )

        )}
    </div>
)

export default buildControls;