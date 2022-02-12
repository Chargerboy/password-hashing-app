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

    axios.post('http://localhost:8000/signup', {
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
          onChange={(e) => {
            setConfirmP(e.target.value);
          }}
        />
        <input type={submit} />
      </form>
      {<h1>{error}</h1>}
    </>
  );
};

export default App;
