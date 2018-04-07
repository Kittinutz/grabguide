import {withState,withHandlers,lifecycle,compose } from 'recompose'
import {GetPlacebyActivities} from '../../../action'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
const LifeCycle = lifecycle({
    componentDidMount(){
        const {name} = this.props.match.params
        this.props.GetPlacebyActivities(name);
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
)
