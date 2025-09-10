function Login() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Login</h1>
      <form>
        <div>
          <label>Email: </label>
          <input type="email" />
        </div>
        <div>
          <label>Contraseña: </label>
          <input type="password" />
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
