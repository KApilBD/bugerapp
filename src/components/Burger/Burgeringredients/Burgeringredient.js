import React, {Component} from 'react';
import PropTypes from 'prop-types';

//import classes from './Burgeringredient.css';

class BurgerIngredient extends Component{
    render(){


        return <div> Hello</div>;
    }
}

BurgerIngredient.prototype={
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;