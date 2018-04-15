import {withState, withHandlers, compose} from 'recompose'
import {bindActionCreators} from 'redux'
import {Delete,Addchildren,AddAdult,AddAppointment} from "../../../action/addplace";
import {connect} from 'react-redux'


const handleEvent = withHandlers({
  Add: props => event => {
    props.history.push('/createtrip/add');
  },
  ChildrenNumber: props => event => {
  return props.Addchildren(event);
  },
  AdultNumber: props => event => {
    return props.AddAdult(event);
  },
  Appointment: props => (data,dataString) =>{
    
    return props.AddAppointment(dataString);
  },
  Deleteplace: props => event => {
    const {Delete} = props;
    const {id} = event.target;
    Delete(id)
  }
});
const mapStateToProps = ({myplan}) => {
  return {
    myplan,
  }
};
const mapDispachToProps = dispatch => {
  return bindActionCreators({Delete,
    Addchildren,
    AddAdult
    ,AddAppointment}, dispatch)
};

export default compose(
  connect(mapStateToProps, mapDispachToProps),
  handleEvent
)