import {withState,withHandlers,lifecycle,compose} from 'recompose'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import firebase from 'firebase';
import{signup} from '../../action/Authentication';
import {provider,auth} from "../../firebase";
const handleEvent = withHandlers({
     handleLogin:props => async args =>{
        const result = await auth().signInWithPopup(provider);
        const itemuser = result.user
        const user = {
            name: itemuser.displayName,
            email: itemuser.email,
            avatar: itemuser.photoURL,
            provider_id: itemuser.uid,
            provider: "facebook"

        };
       props.signup(user);
    }

});
const mapDispatchToProps = dispatch => {
    return bindActionCreators({signup}, dispatch);
};
export default compose(
    connect(null,mapDispatchToProps),
    handleEvent
)