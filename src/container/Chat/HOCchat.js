import {withState, compose, withHandlers, lifecycle} from 'recompose'
import {ReceiveMessage} from '../../Socket';
import {SendMessage} from '../../Socket';

const handleEvent = withHandlers({
  SendMessage:props=>newMessage=>{
    SendMessage("kittinutPramhan","kittinut",newMessage)
  }
})

export default compose(
  handleEvent,
)