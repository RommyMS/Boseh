import React from 'react'
import '../style/home_customer.css'
import { Link } from 'react-router-dom'

const HomeCustomer = () => {
  return (
    <>
    <div class="header_customer">
      <h1 className="logo">
        B<span className="logo-o" />
        SEH
      </h1>
    </div>

    <div className="welcome-form">
    <h1>Welcome</h1>
    <p>Selamat Datang di layanan kami</p>
    <div className="input-group">
      <label htmlFor="address">Alamat</label>
      <input type="text" id="address" />
    </div>
    <div className="input-group">
      <label htmlFor="phone">Telepon</label>
      <input type="text" id="phone"/>
    </div>
    <div className="buttons">
      <Link to="http://localhost:5173/">
      <button id="logoutButton" className="logout">
        Logout
      </button>
      </Link>
      
      <Link to="http://localhost:5173/pemesanan">
      <button id="orderButton" className="order">
        Buat Pemesanan Sepeda
      </button>
      </Link>
      
    </div>
  </div>
    
      
    </>
    
  )
}

export default HomeCustomer