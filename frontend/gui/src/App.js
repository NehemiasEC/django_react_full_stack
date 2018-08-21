import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Button from '@material-ui/core/Button';
import CustomLayout from './containers/Layout';
import ArticleList from './containers/ArticleListView';
import BaseRouter from './routes';
import {BrowserRouter as Router}  from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
              <CustomLayout>
                  <ArticleList/>
              </CustomLayout>
          </Router>

      </div>
    );
  }
}

export default App;
