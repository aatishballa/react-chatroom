import React, { Component } from 'react';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import NewRoomForm from './components/NewRoomForm';
import SendMessageForm from './components/SendMessageForm';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import { instanceLocator, tokenUrl } from './config'


class App extends Component {

  constructor() {
    super();
    this.state = {
      messages:[]
    }
    this.sendMessage = this.sendMessage.bind(this)
  }
    
  componentDidMount() {

    const chatManager = new ChatManager({
      instanceLocator,
      userId: 'aballa',
      tokenProvider: new TokenProvider({
        url: tokenUrl
      })
    });

    chatManager.connect()
      .then(currentUser => {
        this.currentUser = currentUser
            this.currentUser.subscribeToRoomMultipart({
                  roomId: '19766999',
                  hooks:{
                    onMessage: message =>{
                      this.setState({
                        messages: [...this.state.messages, message]
                      })
                      console.log("Received message: ", message);
                    }
                  }
            });
      });
  }

  sendMessage(text){
    this.currentUser.sendMessage({
        text,
        roomId: '19766999'
    })
  };


  render() {
    return (
      <div className="App">
        <RoomList />
        <MessageList message={this.state.messages}/>
        <SendMessageForm sendMessage ={this.sendMessage}/>
        <NewRoomForm />
      </div>
    );
  }
}

export default App;
