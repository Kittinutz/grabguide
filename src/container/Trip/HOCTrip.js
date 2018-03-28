import {withState, compose, withHandlers, lifecycle} from 'recompose'
import {connect} from 'react-redux'
import {SelectedTrip} from '../../action';
import {bindActionCreators} from "redux";

const Lifecycle = lifecycle(
    {
        componentDidMount() {
            console.log(this.props);
            const {id} = this.props.match.params;
            this.props.SelectedTrip(id)
        }
    }
);
const loading = withState('loadingState', 'setLoadingState', false);
const loadingState = withState('iconloadingState', 'setIconloadingState', false);

const handleEvent = withHandlers({
    enterIconLoading: ({ iconloadingState , setIconloadingState,match,history}) => event => {
        setIconloadingState(!iconloadingState,()=>{
          const {id} = match.params;
            return setTimeout(()=>{ history.push(`/booking/trip/${id}`) }, 1000);
        });
    },

})
const mapStateToProps = ({tripseleted,status}) => {
    return {
        tripseleted,
        status
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({SelectedTrip}, dispatch);
};
export default compose(
    loadingState,
    connect(mapStateToProps, mapDispatchToProps),
    Lifecycle,
    handleEvent

);