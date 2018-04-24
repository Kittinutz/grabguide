import {withState, compose, withHandlers, lifecycle} from 'recompose'
import {ReceiveMessage} from '../../Socket/index';
import {SendMessage} from '../../Socket/index';

const handleEvent = withHandlers({
  SendMessage:props=>newMessage=>{
    SendMessage("kittinutPramhan","kittinut",newMessage)
  }
})

export default compose(
  handleEvent,
)