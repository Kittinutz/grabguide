import {withState, compose, withHandlers, lifecycle} from 'recompose'
import {Logout,fetchmessage} from "../../action/Authentication";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
const Lifecycle = lifecycle({
  componentDidMount(){
    // const {id} = this.props.match.params;
    if (!this.props.authentication.isAuth) {
      return this.props.history.push(`/login/facebook`);
    }else{
      this.props.fetchmessage();
    }
  }
})
const handleEvent = withHandlers({
  handleLogout:props=>event=>{
    const {Logout,history} = props;
    return Logout(history.push('/'))
  }
  
});
const mapStateToProps = ({authentication})=>{
  return{
    authentication,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({Logout,fetchmessage}, dispatch);
};

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  Lifecycle,
  handleEvent,
)