import {withState,compose,withHandlers} from 'recompose'

const MyState = withState("MyState","setMyState",0);

export default compose(
  MyState,
)