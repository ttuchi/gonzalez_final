function Register() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Registro</h1>
      <form>
        <div>
          <label>Nombre: </label>
          <input type="text" />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" />
        </div>
        <div>
          <label>Contraseña: </label>
          <input type="password" />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
