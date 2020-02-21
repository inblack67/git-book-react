import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' ;
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import Users from './components/users/Users';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import './App.css';


class App extends Component {

  state = {
    users: [],
    user: {},
    repos: [] ,
    loading: false,
    alert: null
  }

  searchUsers = async (text) => {

    this.setState({ loading: true });

    const user = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ loading: false, users: user.data.items });
  }

  getSingleUser = async (username) => {

    this.setState({ loading: true });
    const user = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ loading: false, user: user.data });

  }

  // https://api.github.com/users/inblack67/repos


  clearUsers = (e) => {
    this.setState({ users: [], loading: false });
  }

  showAlert = (msg) => {
    this.setState({
      alert: {
        msg
      }
    });
    setTimeout(() => {
      this.setState({alert: null});
    }, 3000);
  }


 
  render()
  {
    const { users, user, loading, repos } = this.state;

    return (
     <Router>
      <Fragment>
      <Navbar/>
      <div className="container">
      <Alert alert={this.state.alert}/>
      <Switch >
        <Route exact path="/" render={ props => (
          <Fragment>
            <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={ users.length > 0 ? true : false } showAlert={this.showAlert} />
            <Users loading={loading} users={users} />
          </Fragment>
        ) }>
        </Route>

        <Route exact path="/about" render={About}></Route>

        <Route exact path="/user/:login" render={props => (
          <User {...props} getSingleUser={this.getSingleUser} getSingleUserRepos={this.getSingleUserRepos} repos={repos} user={user} loading={loading} />
        )}>

        </Route>

      </Switch>
      </div>
      </Fragment>
     </Router>
    );
  }
}

export default App;
