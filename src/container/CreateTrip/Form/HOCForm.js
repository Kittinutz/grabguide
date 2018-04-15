import {withState, withHandlers, compose} from 'recompose'
import {bindActionCreators} from 'redux'
import {Delete,Addchildren,AddAdult,AddAppointment,Addname} from "../../../action/addplace";
import {connect} from 'react-redux'

const DateState = withState("DateState","setDateState",false);
const NameState = withState("NameState","setNameState",false);
const PlaceState = withState("PlaceState","setPlaceState",false);
const handleEvent = withHandlers({
  Add: props => event => {
    props.history.push('/createtrip/add');
  },
  ChildrenNumber: props => event => {
  return props.Addchildren(event.target);
  },
  AddName:props=>event=>{
    const  value =  event.target.value;
    const {NameState,setNameState} = props;
    setNameState(false);
   props.Addname(value)
  },
  AdultNumber: props => event => {
    return props.AddAdult(event);
  },
  Appointment: props => (data,dataString) =>{
  const {DateState,setDateState} = props;
    setDateState(false);
    return props.AddAppointment(dataString);
  },
  Deleteplace: props => event => {
    const {Delete} = props;
    const {id} = event.target;
    Delete(id)
  },
  onSubmit: props => event=>{
    const {myplan,DateState,setDateState,NameState,setNameState,PlaceState,setPlaceState} = props;
    const {appointment,name,place} = myplan
    if(!appointment){
       setDateState(!DateState)
    } if(!name){
      setNameState(!NameState)
    } if(place.length==0){
      setPlaceState(!PlaceState)
    } if(name&&appointment){
    console.log('submit')
    }
   
    
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
    AddAdult,
    AddAppointment,
    Addname}, dispatch)
};

export default compose(
  connect(mapStateToProps, mapDispachToProps),
  DateState,
  NameState,
  PlaceState,
  handleEvent,
  
)