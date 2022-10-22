import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addUser, deleteUser } from './features/Users'



function App() {
  const dispatch = useDispatch()


  const userList = useSelector(state => {
    return(
      state.users.value
    )
  })


  const [name, setName] = useState('')
  const [username, setUsername] = useState('')






  return (
    <div className="App">
      <div className='addUser'>
        <input type='text' placeholder='name' onChange={(event)=> {setName(event.target.value)}} />
        <input type='text' placeholder='username' onChange={(event)=> {setUsername(event.target.value)}}/>
        <button onClick={()=> {dispatch(addUser({id: userList[userList.length - 1].id + 1, Name: name, username: username}))}}>Add User</button>
      </div>
      <div className='displayUsers'>
        {userList.map(user => {
          return(
            <div> 
              <h1>{user.Name}</h1>
              <h1>{user.username}</h1>
              <input  type='text' placeholder='New Username'/>
              <button>Update Username</button>
              <button onClick={() => {dispatch(deleteUser({id: user.id}))}}>Delete User</button>
            </div>
          ) 
        })}

      </div>
    
    </div>
  );
}

export default App;
