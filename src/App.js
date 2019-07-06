import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainMenu from './components/MainMenu';
import './App.css';
import './Style.css';
import SubMenu from './components/SubMenu';
import WebView from './components/WebView';
import Profile from './components/Profile';

class App extends React.Component {
  state = {
    item:{},
    web:false

  };
  getSelectedItem = (item) => {
    this.setState({
      item: item.item,
      web: true
    })
  }


  render() {
    return (
      <Router>
        <div className="Portfolio-App">
          <MainMenu />
          <Route path="/" component={Profile} exact />
          <Route path="/projects/" component={() => <SubMenu getSelectedItem={this.getSelectedItem} selectedItem={this.state.item} />} strict />
          <Route  path="/projects/" component={() => <WebView href={this.state.item} visible={this.state.web}/>} />
          
        </div>
  
      </Router>
    );

  }
}

export default App;
