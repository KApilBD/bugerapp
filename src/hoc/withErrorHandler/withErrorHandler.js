import React, {Fragment,Component} from 'react';

import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrapperComponent, axios) => {
    return class extends Component {
        state = {
            error: null,
        }

        componentDidMount (){
            axios.interceptors.request.use(request=>{
                this.setState({error:null,})
                return request;
            })
            axios.interceptors.response.use(res => res, (error)=>{
                console.log(error)
                this.setState({error: error});
            })
        }

        errorConfirmedHandler = ()=>{
            this.setState({
                error:null,
            })
        }


        render(){
            return(
                <Fragment>
                    <Modal show={this.state.error}
                           modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.massage : null}
                    </Modal>
                    <WrapperComponent {...this.props} />
                </Fragment>
            );
        }
    }
}

export default withErrorHandler;