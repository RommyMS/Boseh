import Login from './page/Login'
import HomeCustomer from './page/HomeCustomer'
import Register from './page/register';
import Pemesanan from './page/Pemesanan'
import Landingpage from './page/Landingpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/customer" element={<HomeCustomer />} />      
      <Route path="/register" element={<Register />} />
      <Route path="/pemesanan" element={<Pemesanan />} />
      <Route path="/landingpage" element={<Landingpage />} />
    </Routes>
    </BrowserRouter>

  )
}

export default App
