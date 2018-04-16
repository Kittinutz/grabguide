import {withState, compose, withHandlers, lifecycle} from 'recompose'
import {Logout} from "../../action/Authentication";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

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
  return bindActionCreators({Logout}, dispatch);
};

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  handleEvent,
)