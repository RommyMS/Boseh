import React from 'react'


function Landingpage() {
  return (
    <div>
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BOSEH - Pedalmu, Kontribusimu</title>
  <link rel="stylesheet" href="styles.css" />
  <nav className="navbar">
    <div className="logo">BOSEH</div>
    <ul>
      <li>
        <a href="#products">Products</a>
      </li>
      <li>
        <a href="#about">About us</a>
      </li>
    </ul>
  </nav>
  <header className="hero">
    <video autoPlay="" muted="" loop="" className="background-video">
      <source src="src/assets/video.mp4" type="video/mp4" />
      Browser Anda tidak mendukung video tag.
    </video>
    <div className="overlay">
      <h1>BOSEH</h1>
      <h2>Pedalmu, Kontribusimu</h2>
      <div className="buttons">
        <button className="btn btn-signin">Sign in</button>
        <button className="btn btn-register">Register</button>
      </div>
    </div>
  </header>
  <section className="best-product" id="products">
    <h3>Best Product</h3>
    <div className="product-container">
      <div className="product-card">
        <img src="polygon.jpg" alt="Sepeda polygon" />
        <h4>Sepeda Polygon</h4>
        <p>
          Cocok untuk berbagai jenis medan, mulai dari jalan perkotaan hingga
          jalur off-road.
        </p>
      </div>
      <div className="product-card">
        <img src="senator.jpg" alt="Sepeda senator" />
        <h4>Sepeda Senator</h4>
        <p>
          Cocok digunakan di berbagai jenis medan, dari jalanan perkotaan hingga
          jalanan ringan di alam terbuka.
        </p>
      </div>
      <div className="product-card">
        <img src="odessy.jpg" alt="Sepeda odessy" />
        <h4>Sepeda Odessy</h4>
        <p>
          Cocok untuk jalan perkotaan dan aktivitas luar ruangan, sepeda ini
          ringan namun tangguh.
        </p>
      </div>
    </div>
  </section>
  <footer id="about">
    <div className="footer-content">
      <p>
        <strong>BOSEH</strong> merupakan akronim dari: <br />
        Bike On Street Everybody Happy (bahasa Inggris) yang jika diartikan
        adalah: <br />
        Sepeda di jalanan dan semua orang senang. Kata "boseh" secara harfiah
        memiliki arti kegiatan mengayuh (pedal) sepeda.
      </p>
    </div>
  </footer>
</>

    </div>
  )
}

export default Landingpage