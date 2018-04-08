import {withState,withHandlers,lifecycle,compose } from 'recompose'
import {GetPlacebyActivities} from '../../../action'
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
    const {id} = event.target
    console.log(id);
  }
})
const mapStateToProps = ({places}) =>{
    return places
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({GetPlacebyActivities}, dispatch);
};

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    LifeCycle,
  handleEvent
)
