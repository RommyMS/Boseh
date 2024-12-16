import Landingpage from './page/Landingpage';
import Login from './page/Login'
import Register from './page/register';
import HomeCustomer from './page/HomeCustomer'
import Pemesanan from './page/Pemesanan'
import Struk from './page/Struk';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/login" element={<Login />} />          
      <Route path="/register" element={<Register />} />
      <Route path="/customer" element={<HomeCustomer />} />  
      <Route path="/pemesanan" element={<Pemesanan />} />     
      <Route path="/struk" element={<Struk />} />
    </Routes>
    </BrowserRouter>

  )
}

export default App
