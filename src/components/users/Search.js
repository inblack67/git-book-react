import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Search = ({clearUsers, showClear, showAlert, searchUsers}) => {

  const [text, setText] = useState('');

  const onChange = (e) =>{
    setText(e.target.value);
  }

  const onClick = async (e) => {

    e.preventDefault();

    if(text==='')
    {
      showAlert('Start Typing...');
    }
    else
    {
      searchUsers(text);
      setText('');
    }
    
  }

    return (
      <div>
        <div className="input-field">
        <input type="text" name="text" value={text} onChange={onChange}/>
        <input type="submit" value="Submit" className="btn red waves-effect waves-light" onClick={onClick}/>
        {showClear && <button className="btn black right" onClick={clearUsers}>Clear</button> }
        </div>
      </div>
    )
}


Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  showAlert: PropTypes.func.isRequired
}

export default Search;
