import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import axios from "axios";

function SignIn() {
    const {login} = useContext(AuthContext);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    async function signMeIn() {
        try {
            const response = await axios.post('http://localhost:3000/login', {
                email: email,
                password: password
            });
            console.log(response);
        } catch(e) {
            console.error(e);
        }
    }

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form onSubmit={signMeIn}>
          <label htmlFor="email">Emailadres:</label>
          <input
              type="text" id="email" name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Wachtwoord:</label>
          <input
              type="password" id="password" name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
        <button type="submit">Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;