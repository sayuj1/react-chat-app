import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Join from './components/join/Join';
import Chat from './components/chat/Chat';
import Page404 from './components/page404/Page404';
import ChatState from './context/chat/ChatState';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <ChatState>
          <Switch>
            <Route exact path='/' component={Join} />
            <Route exact path='/chat' component={Chat} />
            <Route path='*' component={Page404} />
          </Switch>
        </ChatState>
      </Router>
    </div>
  );
}

export default App;
