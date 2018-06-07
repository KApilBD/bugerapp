import React,{Component, Fragment} from 'react';
//import Auxx from '../../hoc/Auxx'
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{
    render(){
        return (
            <Fragment>
                <Burger/>
                <div>Burger Controls</div>
            </Fragment>
        );

    }
}

export default BurgerBuilder