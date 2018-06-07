import React,{Component, Fragment} from 'react';
//import Auxx from '../../hoc/Auxx'
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={}
    // }

    state = {
        ingredients: {
            salad:1,
            bacon:1,
            meat:2,
            cheese:2,
        }
    }

    render(){
        return (
            <Fragment>
                 <Burger ingredients={this.state.ingredients}/>
                <div>Burger Controls</div>
            </Fragment>
        );

    }
}

export default BurgerBuilder