import {withState, compose, withHandlers, lifecycle} from 'recompose'
import {connect} from 'react-redux'

import {bindActionCreators} from "redux";


const name = withState('name', 'setName', 'Kittinut');
const mapStateToProps = ({bookingdetail, tripseleted, authentication}) => {
  
  return {
    bookingdetail,
    tripseleted,
    authentication
  }
};

export default compose(
  connect(mapStateToProps),
  name
);