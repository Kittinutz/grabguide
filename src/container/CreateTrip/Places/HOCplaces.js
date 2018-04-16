import {withState,withHandlers,lifecycle,compose } from 'recompose'
import {GetPlacebyActivities} from '../../../action'
import {addplace,addtoarray} from '../../../action/addplace';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {FILTER_PLACE} from "../../../action/api";
import React from 'react'
import Spinner from "../../../component/Spinner/index";
const LifeCycle = lifecycle({
    componentDidMount(){
        const {name} = this.props.match.params;
        const {myplan} = this.props;
    
        this.props.GetPlacebyActivities(name,myplan.place);
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
  },
  LoadingPictrue:props=>event=>{
    return <Spinner/>
  }
})
const mapStateToProps = ({places,myplan}) =>{
    return {
        places,
      myplan
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
