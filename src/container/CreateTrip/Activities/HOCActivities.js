import {lifecycle,withHandlers,withState,compose} from 'recompose'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import{GetActivitiesAPi} from "../../../action/index";

const Lifecycle = lifecycle({
    componentDidMount(){
        this.props.GetActivitiesAPi();
    }
})
const handlerEvent = withHandlers({
    handlcerClick:props =>event =>{
        var {alt} = event.target;
        alt = alt.split(" ").join("-")
        props.history.push(`/createtrip/activities/${alt}`)
    }
})

const mapStateToProps = ({activities})=>{
    return {
        activities
    }
}
const mapDispachToProps = dispatch =>{
    return bindActionCreators({GetActivitiesAPi},dispatch)
}
export default compose(
    connect(mapStateToProps,mapDispachToProps),
    Lifecycle,
    handlerEvent
)