import React, {useState, Fragment} from 'react';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';


function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (userName, userAge) => {
    setUserList(preventUserList => {
      return [...preventUserList, { name: userName, age: userAge, id:Math.random().toString()}]
    })
  }
  return (
    <Fragment>
        <AddUser onAddUser={addUserHandler}/>
        <UserList users = {userList}/>
    </Fragment>
  );
}

export default App;
