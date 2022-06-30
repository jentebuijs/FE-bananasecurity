import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';

function SignUp() {
    const history = useHistory();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ username, setUsername ] = useState('');

    async function signMeUp(email, password) {
        try {
            const response = axios.post('http://localhost:3000/register', {
                email: email,
                password: password
            });
            { response && history.push('/signin') }
        } catch(e) {
            console.error(e);
        }
    }

  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
      <form onSubmit={() => signMeUp(email, password)}>
          <label htmlFor="email">Emailadres:</label>
          <input
              type="text" id="email" name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Wachtwoord:</label>
          <input
              type="text" id="password" name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="username">Gebruikersnaam:</label>
          <input
              type="text" id="username" name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit">Submit</button>
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;