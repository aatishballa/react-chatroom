import React, { Component } from 'react';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import NewRoomForm from './components/NewRoomForm';
import SendMessageForm from './components/SendMessageForm';

import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import { instanceLocator, tokenUrl } from './config'
import { } from 'module'


class App extends Component {

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
            currentUser.subscribeToRoomMultipart({
                  roomId: '19766999',
                  hooks:{
                    onMessage: message =>{
                      console.log("Received message: ", message);
                    }
                  }

            });
      });

  }

  render() {
    return (
      <div className="App">
        <RoomList />
        <MessageList />
        <SendMessageForm />
        <NewRoomForm />
      </div>
    );
  }
}

export default App;
