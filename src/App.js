import React, { Component } from 'react';
import './App.css';

import Header from './Containers/Header';
import Sidebar from './Containers/Sidebar';
import Artwork from './Containers/Artwork';
import About from './Containers/About';
import Contact from './Containers/Contact';

import { Switch, Route } from 'react-router-dom';
import ArtDisplay from './Components/ArtDisplay';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Sidebar />
        <main className='content'>
          <Switch>
            <Route exact path='/'>
              <Artwork />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path="/artwork/:id">
              <ArtDisplay />
            </Route>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
