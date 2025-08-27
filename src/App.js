
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import News from './components/News';
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize=15;
  apiKey= process.env.REACT_APP_NEWS_API;

  state= {
    progress: 0
  }

  setProgress= (progress)=> {
    this.setState({progress: progress});
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar title="My App"/>
          <div>
            <LoadingBar
              color="red"
              progress={this.state.progress}
              onLoaderFinished={() => this.setProgress(0)}
            />
          </div>
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" category="General" pageSize= {this.pageSize} country="us"/>}/>
            <Route exact path="/business"element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" category="Business" pageSize= {this.pageSize} country="us"/>} />
            <Route exact path="/entertainment"element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Entertainment" category="Entertainment" pageSize= {this.pageSize} country="us"/>} />
            <Route exact path="/health"element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" category="Health" pageSize= {this.pageSize} country="us"/>} />
            <Route exact path="/science"element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" category="Science" pageSize= {this.pageSize} country="us"/>} />
            <Route exact path="/sports"element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" category="Sports" pageSize= {this.pageSize} country="us"/>} />
            <Route exact path="/technology"element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" category="Technology" pageSize= {this.pageSize} country="us"/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}

