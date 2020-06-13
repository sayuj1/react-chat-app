import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChatState from './context/chat/ChatState';
import Loader from './components/loader/Loader.js';

import './App.css';

const Navbar = lazy(() => import('./components/navbar/Navbar'));
const LandingPage = lazy(() => import('./components/landingPage/LandingPage'));
const Join = lazy(() => import('./components/join/Join'));
const Chat = lazy(() => import('./components/chat/Chat'));
const Page404 = lazy(() => import('./components/page404/Page404'));
const Footer = lazy(() => import('./components/footer/Footer'));

function App() {
  return (
    <div className='App'>
      <Router>
        <Suspense fallback={<Loader />}>
          <ChatState>
            <Navbar />
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/join' component={Join} />
              <Route exact path='/chat' component={Chat} />
              <Route path='*' component={Page404} />
            </Switch>
            <Footer />
          </ChatState>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
