import {withState,compose,withHandlers,lifecycle} from 'recompose'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {GetTask} from '../../action/addplace';
const MyState = withState("MyState","setMyState",0);
const LifeCycle = lifecycle({
  componentDidMount(){
    this.props.GetTask();
  }
})
const mapStateToProps = ({mytasks})=>{
  return {
    mytasks,
  }
}
const mapDispatchToProps = dispatch =>{
  return bindActionCreators({GetTask},dispatch);
}
export default compose(
  connect(mapStateToProps,{GetTask}),
  LifeCycle,
  MyState,
)