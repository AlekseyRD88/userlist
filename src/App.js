import { useState } from 'react';
import './App.css';
import NewUser from './components/newuser/NewUser';
import Userlist from './components/userlist/Userlist';

function App() {
  const [userList, setUserList] = useState([]);
  const addUser = (userName, userAge) => {
    setUserList(previousUserList => {
      return [
        ...previousUserList,
        {
        name: userName,
        age: userAge,
        id: Math.random().toString()}];
    })
  }
  return (
    <div>
      <NewUser onAddUser={addUser}/>
      <Userlist users={userList}/>
    </div>
  );
}

export default App;
