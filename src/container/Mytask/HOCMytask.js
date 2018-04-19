import {withState,compose,withHandlers,lifecycle} from 'recompose'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {GetTask} from '../../action/addplace';
import {fetchmessage} from '../../action/Authentication';
const MyState = withState("MyState","setMyState",0);
const LifeCycle = lifecycle({
  componentDidMount(){
    if (!this.props.authentication.isAuth) {
      return this.props.history.push(`/login/facebook`);
    } else {
      this.props.GetTask();
      this.props.fetchmessage();
    }
 
  }
})
const mapStateToProps = ({authentication,mytasks})=>{
  return {
    authentication,
    mytasks,
  }
}
const mapDispatchToProps = dispatch =>{
  return bindActionCreators({GetTask},dispatch);
}
export default compose(
  connect(mapStateToProps,{GetTask,fetchmessage}),
  LifeCycle,
  MyState,
)