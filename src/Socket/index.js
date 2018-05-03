import openSocket from 'socket.io-client';
const server = 'http://dev.werapun.com:5012';
const testsocket =openSocket.connect(`${server}`);

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