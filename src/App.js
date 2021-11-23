import React from 'react';
import './App.css';
import Header from "./components/Header";
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Main from "./components/Main";





function App() {
  return (
    <>
      <LoginButton />
      <LogoutButton />
      <Header />
      <Main />

    </>
  );
}

export default App;
