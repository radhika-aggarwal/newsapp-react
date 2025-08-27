
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import News from './components/News';

export default class App extends Component {
  pageSize=15;
  render() {
    return (
      <div>
        <Router>
          <Navbar title="My App"/>
          <Routes>
            <Route exact path="/"  element={<News key="general" category="General" pageSize= {this.pageSize} country="us"/>}/>
            <Route exact path="/business" element={<News key="business" category="Business" pageSize= {this.pageSize} country="us"/>} />
            <Route exact path="/entertainment" element={<News key="general" category="Entertainment" pageSize= {this.pageSize} country="us"/>} />
            <Route exact path="/general" element={<News key="general" category="General" pageSize= {this.pageSize} country="us"/>} />
            <Route exact path="/health" element={<News key="health" category="Health" pageSize= {this.pageSize} country="us"/>} />
            <Route exact path="/science" element={<News key="science" category="Science" pageSize= {this.pageSize} country="us"/>} />
            <Route exact path="/sports" element={<News key="sports" category="Sports" pageSize= {this.pageSize} country="us"/>} />
            <Route exact path="/technology" element={<News key="technology" category="echnology" pageSize= {this.pageSize} country="us"/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}

