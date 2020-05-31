import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Join from './components/join/Join';
// import Chat from './components/chat/Chat';
// import Page404 from './components/page404/Page404';
import ChatState from './context/chat/ChatState';
import Loader from './components/loader/Loader.js';

import './App.css';

const Join = lazy(() => import('./components/join/Join'));
const Chat = lazy(() => import('./components/chat/Chat'));
const Page404 = lazy(() => import('./components/page404/Page404'));

function App() {
  return (
    <div className='App'>
      <Router>
        <Suspense fallback={<Loader />}>
          <ChatState>
            <Switch>
              <Route exact path='/' component={Join} />
              <Route exact path='/chat' component={Chat} />
              <Route path='*' component={Page404} />
            </Switch>
          </ChatState>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
