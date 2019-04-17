import React, { Component } from 'react';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import NewRoomForm from './components/NewRoomForm';
import SendMessageForm from './components/SendMessageForm'

import { ChatManager, TokenProvider } from '@pusher/chatkit-client'

import {} from 'module'


class App extends Component {
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
