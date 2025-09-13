import React, { useState } from 'react';
import { auth, firestore } from '../firebase'; // Import your Firebase config
import { useHistory } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Get user role from Firestore
      const userDoc = await firestore.collection('users').doc(user.uid).get();
      const role = userDoc.data().role;

      // Redirect based on role
      if (role === 'volunteer') history.push('/volunteer');
      else if (role === 'gate-admin') history.push('/gate-admin');
      else if (role === 'main-admin') history.push('/main-admin');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
