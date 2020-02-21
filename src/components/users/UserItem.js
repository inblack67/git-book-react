import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const UserItem = ({user: { login, avatar_url, html_url }}) => {

    return (
      <div>
        <div className="col s4">
          <div className="card center">
            <img src={avatar_url} alt="" style={{ width:'60px'}}/>
            <div className="card-title">
            <p className="flow-text">{login}</p>
            </div>
            <div className="card-content">
            <Link to={`/user/${login}`} className="btn red waves-effect waves-light">Explore</Link>
            </div>
          </div>
        </div>
      </div>
    )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem;
