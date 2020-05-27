import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Join from './components/join/Join';
import Chat from './components/chat/Chat';
import ChatState from './context/chat/ChatState';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <ChatState>
          <Route path='/' exact component={Join} />
          <Route path='/chat' exact component={Chat} />
        </ChatState>
      </Router>
    </div>
  );
}

export default App;
