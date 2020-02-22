import React, { useEffect, Fragment, useContext } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ( {match } ) => {

  const githubContext = useContext(GithubContext);

  const {user, loading, getSingleUser} = githubContext;

    useEffect(() => {
      getSingleUser(match.params.login);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    // { name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable }

    const { name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable } = user;

    if(loading)
    {
      return <Spinner />
    }
    else
    {
      return (
        <Fragment>

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

                { hireable && (
                  <h6>Hireable: Yes</h6>
                ) }
                { !hireable && (
                  <h6>Hireable: No</h6>
                ) }

                <br/>

                <a href={html_url} className="btn green waves-effect waves-light">Profile</a>
                <br/>
                <hr/>
                <br/>
                <Link className="btn red" to="/">Search Another</Link>
                </div>
              </div>
              
            </div>

          </div>

    <div className="collection">
    <a href="#!" className="collection-item"><span className="badge">{name}</span>Name</a>
    <a href="#!" className="collection-item"><span className="badge">{blog}</span>Blog</a>
    <a href="#!" className="collection-item"><span className="badge">{login}</span>Login</a>
    <a href="#!" className="collection-item"><span className="badge">{public_repos}</span>Repos</a>
    <a href="#!" className="collection-item"><span className="badge">{public_gists}</span>Gists</a>
    <a href="#!" className="collection-item"><span className="badge">{followers}</span>Followers</a>
    <a href="#!" className="collection-item"><span className="badge">{following}</span>Following</a>

  </div>

        </Fragment>
      )
    }
}

export default User;
