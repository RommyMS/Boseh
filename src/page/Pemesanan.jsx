import { Link } from 'react-router-dom'
import '../style/Pemesanan.css'


function Pemesanan() {
  return (
    <>
  <div className="container">
    <header className="header_pemesanan">
      <h1 className="logo">
        B<span className="logo-o" />
        SEH
      </h1>
    </header>
    <div className="bikes">
      <div className="bike">
        <Link to="http://localhost:5173/struk">
        <img src="src/assets/Polygon.png" alt="Polygon" />
        </Link>
        <h2>Polygon</h2>
        <p>Rp. 10000</p>
        <p>Cangkuang, Kopo, Setiabudhi</p>
      </div>
      <div className="bike">
        <Link to="http://localhost:5173/struk">
        <img src="src/assets/Solomo.png" alt="Solomo" />
        </Link>       
        <h2>Solomo</h2>
        <p>Rp. 10000</p>
        <p>Cangkuang, Kopo, Setiabudhi</p>
      </div>
      <div className="bike">
        <Link to="http://localhost:5173/struk">
        <img src="src/assets/Detroit.png" alt="Detroit" />
        </Link>       
        <h2>Detroit</h2>
        <p>Rp. 10000</p>
        <p>Cangkuang, Kopo, Setiabudhi</p>
      </div>
      <div className="bike">
        <Link to="http://localhost:5173/struk">
        <img src="src/assets/Aviator.png" alt="Aviator" />
        </Link>    
        <h2>Aviator</h2>
        <p>Rp. 5000</p>
        <p>Cangkuang, Kopo, Setiabudhi</p>
      </div>
      <div className="bike">
        <Link to="http://localhost:5173/struk">
        <img src="src/assets/United.png" alt="United" />
        </Link>       
        <h2>United</h2>
        <p>Rp. 5000</p>
        <p>Cangkuang, Kopo, Setiabudhi</p>
      </div>
      <div className="bike">
        <Link to="http://localhost:5173/struk">
        <img src="src/assets/Genio.png" alt="Genio" />
        </Link>       
        <h2>Genio</h2>
        <p>Rp. 5000</p>
        <p>Cangkuang, Kopo, Setiabudhi</p>
      </div>
    </div>
  </div>
</>

  )
}

export default Pemesanan