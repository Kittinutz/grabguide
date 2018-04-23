import openSocket from 'socket.io-client';
const testsocket =openSocket.connect(`http://localhost:5012`);

function ReceiveMessage(name,callback) {
  testsocket.on(name,(data)=>{
    if(data){
      return callback(null,data);
    }
  })
}
function SendMessage(FromUser,ToUser,Message) {
  console.log(FromUser, ToUser, Message);
  testsocket.emit('subscribe', ToUser);
  testsocket.emit('sendmessage', {
    from: FromUser,
    to: ToUser,
    message: Message
  });
}

export {ReceiveMessage,SendMessage}