import {withState,withHandlers,lifecycle,compose} from 'recompose'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import firebase from 'firebase';
import{signup} from '../../action/Authentication';
import {provider,auth} from "../../firebase";
import {fetchmessage} from '../../action/Authentication';
const Lifecycle = lifecycle({
    componentDidMount(){
      if(this.props.authentication.isAuth){
        this.props.fetchmessage();
      }
      
    },
    componentWillReceiveProps(nextProps){
       if(nextProps.authentication.isAuth){
         this.props.fetchmessage();
           return this.props.history.goBack();
       }
    }

});
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
        const {id} = props.match.params
       props.signup(user,props.history.goBack());

    }

});
const mapStateToProps = ({bookingdetail,authentication})=>{
    return {
        bookingdetail,
        authentication
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({signup,fetchmessage}, dispatch);
};
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    handleEvent,
    Lifecycle
)