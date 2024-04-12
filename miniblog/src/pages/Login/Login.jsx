import { useEffect, useState } from "react";

import styles from "./Login.module.css"

import { useAuthentication } from "../../hooks/useAuthentication";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: AuthError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password,
    };

    const res = await login(user);

    console.log(res);
  };

  useEffect(() => {
    if (AuthError) {
      setError(AuthError);
    }
  }, [AuthError]);


  return (
    <div className={styles.login}>
      <h1>Entrar</h1>
      <p>Faça o login para poder utilizar o sistema</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email:</span>
          <input
            type="text"
            name="email"
            required
            placeholder="Type your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="text"
            name="password"
            required
            placeholder="Type your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {!loading && <button className="btn">Register</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde..
          </button>
        )}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  )
}

export default Login