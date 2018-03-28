import {withState, compose, withHandlers, lifecycle} from 'recompose'
import {connect} from 'react-redux'
import { fetchmessage} from '../../action/Authentication';
import {booking} from '../../action'
import {bindActionCreators} from "redux";
import {message} from 'antd'
import authentication from "../../reducers/authentication";


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
const current = withState('current','setCurentState',0)
const handleEvent = withHandlers({
    next: ({ current , setCurentState}) => event =>{
        setCurentState(current + 1);
    },
    prev: ({ current , setCurentState}) => event =>{
        setCurentState(current - 1);
    },
    SendToserver:({booking,bookingdetail,history})=>event=>{
        message.success('Processing complete!');
       booking(bookingdetail.stepone,()=>{
           history.push('/myplan');
       })
    }
});
const mapStateToProps = ({bookingdetail,authentication})=>{
    return {
        bookingdetail,
        authentication
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ fetchmessage,booking}, dispatch);
};
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    Lifecycle,
    current,
    handleEvent

);