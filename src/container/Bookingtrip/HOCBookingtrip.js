import {withState, compose, withHandlers, lifecycle} from 'recompose'
import {connect} from 'react-redux'
import { fetchmessage} from '../../action/Authentication';
import {bindActionCreators} from "redux";
import authentication from "../../reducers/authentication";

const step = withState('current','setCurentState',0);
const Lifecycle = lifecycle(
    {
        componentDidMount () {
            console.log(this.props)
            if(!this.props.authentication.isAuth){
               return this.props.history.push('/facebook');
            }else{
                return this.props.fetchmessage();
            }
        }
    }
);

const mapStateToProps = ({bookingdetail,authentication})=>{
    return {
        bookingdetail,
        authentication
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ fetchmessage}, dispatch);
};
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    Lifecycle,
    step

);