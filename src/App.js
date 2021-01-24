import Sidebar from './Sidebar';
import Content from './Content';
import React, { Component } from 'react';

class App extends Component {
  render(){
    return(
      <div>

        <Sidebar />
        <Content />

      </div>
    )
  }
}

export default App;