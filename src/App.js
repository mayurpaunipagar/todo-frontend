import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import { useState } from 'react';

function App() {
  const [loggedIn,setLoggedIn]=useState(false);
  const [error,setError]=useState(undefined);
  const signinHandler=(username,password)=>{
    loginSignUp('https://todo-backend-mayur.herokuapp.com/signup',
            username,
            password);
  }
  const signupHandler=(username,password)=>{
    loginSignUp('https://todo-backend-mayur.herokuapp.com/login',
            username,
            password);
  }
  const loginSignUp=(url,username,password)=>{
    fetch(url,{
      method:"POST",
      body: JSON.stringify({userName:username,password}),
      headers:{
        "Content-Type":"application/json",
      },
      credentials:"include"
    })
    .then((r)=>{
      if(r.ok){
        return {success:true};
      }else{
        return r.json();
      }
    })
    .then((r)=>{
      if(r.success===true){
        
      }else{
        setError(r.err);
      }
    })
  }
  return (
    <div className="App">
      <h1>Mayur's Todo App</h1>
      {loggedIn?<h2>My todo list</h2>:
      <LoginForm
        signinHandler={signinHandler}
        signupHandler={signupHandler}
        error={error}
      />}
    </div>
  );
}

export default App;
