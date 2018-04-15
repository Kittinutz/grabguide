import {withState, compose, withHandlers, lifecycle} from 'recompose'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
const Lifecycle = lifecycle(
  {
    componentDidMount() {
      console.log(this.props);
      // const {id} = this.props.match.params;
      if (!this.props.authentication.isAuth) {
        return this.props.history.push(`/facebook/`);
      } else {
        return this.props.fetchmessage();
      }
    }
  }
);
export default compose(
  Lifecycle,
)