import React from 'react'
import '../style/home_customer.css'

const HomeCustomer = () => {
  return (
    <>
    <div class="header">
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
      <button id="logoutButton" className="logout">
        Logout
      </button>
      <button id="orderButton" className="order">
        Buat Pemesanan Sepeda
      </button>
    </div>
  </div>
    </>
    
  )
}

export default HomeCustomer