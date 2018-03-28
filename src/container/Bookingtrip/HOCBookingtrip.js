import {withState, compose, withHandlers, lifecycle} from 'recompose'
import {connect} from 'react-redux'
// import {Gettripapi, Getguideapi} from '../../action';
import {bindActionCreators} from "redux";
import authentication from "../../reducers/authentication";

const Lifecycle = lifecycle(
    {
        componentDidMount () {
            console.log(this.props)
            if(!this.props.authentication.isAuth){
               return this.props.history.push('/facebook');
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
// const mapDispatchToProps = dispatch => {
//     return bindActionCreators({Gettripapi, Getguideapi}, dispatch);
// };
export default compose(
    connect(mapStateToProps),
    Lifecycle

);