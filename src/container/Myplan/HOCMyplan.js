import {withState, compose, withHandlers, lifecycle} from 'recompose'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {fetchmessage} from '../../action/Authentication';
import {GetActivitiesAPi,querybooking} from "../../action/index";

const plus = withState("plus","setplus",false);

const Lifecycle = lifecycle(
  {
    componentDidMount() {
      // const {id} = this.props.match.params;
      if (!this.props.authentication.isAuth) {
        return this.props.history.push(`/login/facebook`);
      } else {
        this.props.GetActivitiesAPi();
        return this.props.querybooking();
        
      }
    }
    
  }
);
const handleEvent = withHandlers({
  HandleClickIcon: props => event => {
    props.history.push('/createtrip/')
  }
})
const mapStateToProps = ({bookingdetail, authentication,mytrip}) => {
  return {
    authentication,
    mytrip
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchmessage,GetActivitiesAPi,querybooking}, dispatch);
};
export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  Lifecycle,
  handleEvent,
  plus
)