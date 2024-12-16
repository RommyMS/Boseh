import { Link } from 'react-router-dom'
import '../style/Register.css'


function Register() {

  return (
    <>
  <div className="container">
    <div className="header_register">
      <h1 className="logo">
        B<span className="logo-o" />
        SEH
      </h1>
    </div>
    <main className="register-form">
      <h2>Register</h2>
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
        <Link to="http://localhost:5173/login">
        <button type="submit" className="register-button">
          REGISTER
        </button>
        </Link>
      </form>
      <p className="register-link">
        Sudah punya akun? <a href="http://localhost:5173/login">Login di sini</a>
      </p>
    </main>
  </div>
</>

  )
}

export default Register
