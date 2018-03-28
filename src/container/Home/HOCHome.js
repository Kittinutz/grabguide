import {withState, compose, withHandlers, lifecycle} from 'recompose'
import {connect} from 'react-redux'
import {Gettripapi, Getguideapi} from '../../action';
import {bindActionCreators} from "redux";

const Lifecycle = lifecycle(
    {
        componentDidMount () {
            this.props.Gettripapi();
            this.props.Getguideapi()
        }
    }
);

const mapStateToProps = ({trips, guides}) => {
    return {
        trips,
        guides,

    }
};
const mapDispatchToProps = dispatch => {
    return bindActionCreators({Gettripapi, Getguideapi}, dispatch);
};
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    Lifecycle
);