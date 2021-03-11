import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import { useState } from 'react';

function App() {
  const [loggedIn,setLoggedIn]=useState(false);
  return (
    <div className="App">
      <h1>Mayur's Todo App</h1>
      {loggedIn?<h2>My todo list</h2>:
      <LoginForm/>}
    </div>
  );
}

export default App;
