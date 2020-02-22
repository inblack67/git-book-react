import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from '././githubReducer';

import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER } from '../types';

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production')
{
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}
else
{
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {

  const initialState = {
    users: [],
    user: {},
    loading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // search users
  const searchUsers = async (text) => {

    setLoading();

    const user = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`);

    dispatch({
      type: SEARCH_USERS,
      payload: user.data.items
    });
  }

  const setLoading = () => dispatch({ type: SET_LOADING });

  // clear users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // get users
  const getSingleUser = async (username) => {

    setLoading();

    const user = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`);

    dispatch({
      type: GET_USER,
      payload: user.data
    });

  }


  return <GithubContext.Provider value={{     // wrapping our entire app
    users: state.users,
    user: state.user,
    loading: state.loading,
    searchUsers,
    clearUsers,
    getSingleUser
  }}>
    {props.children}
  </GithubContext.Provider>

}


export default GithubState;