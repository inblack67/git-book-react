import React, {useState, useContext} from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {

  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { clearUsers, users } = githubContext;
  const { setAlert } = alertContext;

  const [text, setText] = useState('');

  const onChange = (e) =>{
    setText(e.target.value);
  }

  const onClick = async (e) => {

    e.preventDefault();

    if(text==='')
    {
      setAlert('Start Typing...');
    }
    else
    {
      githubContext.searchUsers(text);
      setText('');
    }
    
  }

    return (
      <div>
        <div className="input-field">
        <input type="text" name="text" value={text} onChange={onChange}/>
        <input type="submit" value="Submit" className="btn red waves-effect waves-light" onClick={onClick}/>
        {users.length > 0 && <button className="btn black right" onClick={clearUsers}>Clear</button> }
        </div>
      </div>
    )
}

export default Search;
