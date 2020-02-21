import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';

class User extends Component {

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array,
    getSingleUser: PropTypes.func.isRequired
  }

  componentDidMount()
    {
      this.props.getSingleUser(this.props.match.params.login);
    }

  render() {

    // { name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable }

    const { avatar_url, location, bio, html_url } = this.props.user;

    const {loading} = this.props;

    if(loading)
    {
      return <Spinner />
    }
    else
    {
      return (
        <Fragment>
          <Link className="btn red" to="/">Search</Link>

          <div className="card">
            <div className="row">
              <div className="col s6">
                <div className="card-image">
                  <img src={avatar_url} alt=""/>
                </div>
              </div>

              <div className="col s6">
                <div className="card-content">
                <p className="flow-text">{bio}</p>
                <br/>
                <h6>Location: <strong>{location}</strong></h6>
                <br/>
                <a href={html_url} className="btn green waves-effect waves-light">Profile</a>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <p className="flow-text">I will get back to you on this one</p>
            </div>
          </div>
        </Fragment>
      )
    }
  }
}

export default User
