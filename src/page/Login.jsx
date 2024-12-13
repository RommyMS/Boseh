import '../style/Login.css'


function Login() {

  return (
    <>
  <div className="container">
    <header className="header">
      <h1 className="logo">
        B<span className="logo-o" />
        SEH
      </h1>
    </header>
    <main className="login-form">
      <h2>Login</h2>
      <form action="#" method="post">
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="login-button">
          LOGIN
        </button>
      </form>
      <p className="register-link">
        Belum punya akun? <a href="#">Daftar di sini</a>
      </p>
    </main>
  </div>
</>

  )
}

export default Login
