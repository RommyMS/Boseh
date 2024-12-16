import React from 'react'
import '../style/struk.css'

function Struk() {
  return (
    <>
    <div class="header_struk">
      <h1 className="logo">
        B<span className="logo-o" />
        SEH
      </h1>
    </div>
  <link rel="stylesheet" href="src/style/struk.css" />
  <div className="container_struk">
    <div className="struk-content">
      <div className="item">
        <span>Tanggal Peminjaman:</span>
        <span>17 Desember 2024</span>
      </div>
      <div className="item">
        <span>Durasi Peminjaman:</span>
        <span>7 Hari</span>
      </div>
      <div className="item">
        <span>Harga:</span>
        <span>Rp 150,000</span>
      </div>
    </div>
    <div className="struk-footer">Terima Kasih!</div>
  </div>
</>

  )
}

export default Struk