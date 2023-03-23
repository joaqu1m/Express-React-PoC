import React, { useState, useEffect } from 'react';
import UserService from './services/userService';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    UserService.getUsers()
      .then(users => {
        setUsers(users);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users}
      </ul>
    </div>
  );
}

export default App;