import {withState, withHandlers, compose} from 'recompose'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'


const handleEvent = withHandlers({
  Add: props => event => {
    props.history.push('/createtrip/add');
  }
})
const mapStateToProps = ({myplan}) => {
  return {
    myplan,
  }
}

export default compose(
  connect(mapStateToProps, null),
  handleEvent
)