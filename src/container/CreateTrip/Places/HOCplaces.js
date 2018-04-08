import {withState,withHandlers,lifecycle,compose } from 'recompose'
import {GetPlacebyActivities} from '../../../action'
import {addplace,addtoarray} from '../../../action/addplace';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {FILTER_PLACE} from "../../../action/api";
const LifeCycle = lifecycle({
    componentDidMount(){
        const {name} = this.props.match.params
        this.props.GetPlacebyActivities(name);
    }
})
const handleEvent = withHandlers({
  handleClickAdd:props=>event=> {
    let {id} = event.target
    const {history,places,addtoarray} = props
    id = parseInt(id);
    let place = places.filter(data=>data.id === id)
    place = place[0]
    return  addtoarray(place,history.push('/createtrip'));
  }
})
const mapStateToProps = ({places}) =>{
    return {
        places
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({GetPlacebyActivities,addplace,addtoarray}, dispatch);
};

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    LifeCycle,
  handleEvent
)
