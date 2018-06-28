import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css'

const CheckoutSummary = (props) => {

    return(
        <div className={classes.CheckoutSummary}>
            <h2>We hope you Love it..!</h2>
            <div style={{width: '100%', 
                margin: 'auto'}}>
                {/* <Burger ingredients={props.ingredients} /> */}
                <Button 
                    btnType='Dnager'
                    >Cancel</Button>
                <Button 
                    btnType='Success'
                    >Continue</Button>
            </div>
        </div>
    )
}

export default CheckoutSummary;