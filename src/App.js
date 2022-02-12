import { useState, useEffect } from 'react';
import axios from 'axios';
const App = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmP, setConfirmP] = useState(null);
  const [error, setError] = useState(null);
  const submit = 'submit';

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmP) {
      setError('Make sure your Passwords match!');
      return;
    }

    axios.post('http://localhost:5002/signup', {
      username,
      password,
    });

    console.log(username);
    console.log(password);
    console.log(confirmP);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="usrnm"
          placeholder="username"
          id="usrnm"
          required
          autoComplete="off"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="text"
          name="pswd"
          placeholder="password"
          id="pswd"
          required
          autoComplete="off"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="text"
          name="cnfrm-pass"
          placeholder="confirm password"
          id="cnfrm-pass"
          required
          autoComplete="off"
          onChange={(e) => {
            setConfirmP(e.target.value);
          }}
        />
        <input type={submit} autoComplete="off" />
      </form>
      {<h1>{error}</h1>}
    </>
  );
};

export default App;
