import {withState, withHandlers, compose} from 'recompose'
import {bindActionCreators} from 'redux'
import {Delete} from "../../../action/addplace";
import {connect} from 'react-redux'


const handleEvent = withHandlers({
  Add: props => event => {
    props.history.push('/createtrip/add');
  },
  PersonNumbe: props => event => {
  console.log(event)
  },
  Deleteplace: props => event => {
    const {Delete} = props;
    const {id} = event.target;
    Delete(id)
  }
})
const mapStateToProps = ({myplan}) => {
  return {
    myplan,
  }
}
const mapDispachToProps = dispatch => {
  return bindActionCreators({Delete}, dispatch)
}

export default compose(
  connect(mapStateToProps, mapDispachToProps),
  handleEvent
)