import {withState, withHandlers, compose,lifecycle} from 'recompose'
import {bindActionCreators} from 'redux'
import {Delete,Addchildren,AddAdult,AddAppointment,Addname,CreatTask,fetchLanguages,AddLanguages} from "../../../action/addplace";
import {connect} from 'react-redux'
const Lifecycle = lifecycle({
  componentDidMount(){
    this.props.fetchLanguages();
  }
})
const DateState = withState("DateState","setDateState",false);
const NameState = withState("NameState","setNameState",false);
const PlaceState = withState("PlaceState","setPlaceState",false);
const LangState = withState("LangState","setLangState",false);
const handleEvent = withHandlers({
  Add: props => event => {
    props.history.push('/createtrip/add');
  },
  ChildrenNumber: props => event => {
  return props.Addchildren(event);
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
    const {myplan,DateState,setDateState,NameState,setNameState,PlaceState,setPlaceState,LangState,setLangState} = props;
    const {appointment,name,place,languages} = myplan;
    if(!appointment){
       setDateState(true)
    } if(!name){
      setNameState(true)
    } if(place.length==0){
      setPlaceState(true)
    } if(name&&appointment&&languages.length>0&&place.length>0){
    props.CreatTask(myplan,props.history.push('/myplan'))
    }if(languages.length==0){
      setLangState(true)
    }
  },
  onSelect:props=>event=>{
    
    props.setLangState(false);
  return props.AddLanguages(event);
  }
});
const mapStateToProps = ({myplan,languages}) => {
  return {
    myplan,
    languages,
  }
};
const mapDispachToProps = dispatch => {
  return bindActionCreators({Delete,
    Addchildren,
    AddAdult,
    AddAppointment,
    Addname,
    CreatTask,
    fetchLanguages,AddLanguages}, dispatch)
};

export default compose(
  connect(mapStateToProps, mapDispachToProps),
  Lifecycle,
  LangState,
  DateState,
  NameState,
  PlaceState,
  handleEvent,
  
)