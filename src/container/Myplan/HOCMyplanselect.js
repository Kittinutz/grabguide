import {withState, compose, withHandlers, lifecycle} from 'recompose'
import {querybookingById} from "../../action/index";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const Lifecycle = lifecycle({
    componentDidMount(){
        const {id} = this.props.match.params
        this.props.querybookingById(id)
    }
})
const mapStateToProps = ({bookingtripid})=>{
    return {
        bookingtripid
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({querybookingById}, dispatch);
};

export default compose(
    connect(null,mapDispatchToProps),
    Lifecycle,

)