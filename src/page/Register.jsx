import '../style/Register.css'


function Register() {

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
          <label htmlFor="Nama">Nama</label>
          <input
            type="Nama"
            id="Nama"
            name="Nama"
            placeholder="Nama"
          />
        </div>
        <div className="input-group">
          <label htmlFor="Alamat">Alamat</label>
          <input
            type="Alamat"
            id="Alamat"
            name="Alamat"
            placeholder="Alamat"
          />
        </div>
        <div className="input-group">
          <label htmlFor="No.Telepon">No.Telepon</label>
          <input
            type="Nomor"
            id="No.Telepon"
            name="No.Telepon"
            placeholder="No.Telepon"
          />
        </div>
        <div className="input-group">
          <label htmlFor="Username">Username</label>
          <input
            type="Username"
            id="Username"
            name="Username"
            placeholder="Username"
          />
        </div>
        <div className="input-group">
          <label htmlFor="Password">Password</label>
          <input
            type="Password"
            id="Password"
            name="Password"
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

export default Register
