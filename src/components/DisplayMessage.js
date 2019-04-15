import SnackbarContentWrapper from './SnackbarContentWrapper';
import Snackbar from '@material-ui/core/Snackbar';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/displayMessageActions';

class DisplayMessage extends Component{


    close = () => {
        const {closeDisplayMessage} = this.props;
        closeDisplayMessage();
    }


    render(){

     const {displayMessage} = this.props;   

     return <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={displayMessage.open}
                autoHideDuration={6000}
                onClose={this.close}
                >
                <SnackbarContentWrapper
                    onClose={this.close}
                    variant={displayMessage.type}
                    message={displayMessage.message}
                />
            </Snackbar>
    }

}

function mapStateToProps(state){
    return {displayMessage:state.displayMessage};
}
  
function mapDispachToProps(dispatch){
    return bindActionCreators(actionCreators,dispatch);
}
  
export default connect(mapStateToProps, mapDispachToProps)(DisplayMessage);
