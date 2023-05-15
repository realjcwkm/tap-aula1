import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Cliente from "./pages/Cliente";
import Vendedor from "./pages/Vendedor";
import Produto from "./pages/Produto";
import Venda from "./pages/Venda";

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="clientes" element={<Cliente />} />
          <Route path="vendedores" element={<Vendedor />} />
          <Route path="produtos" element={<Produto />} />
          <Route path="vendas" element={<Venda />} />
        </Route>        
      </Routes>
    </Router>
  )
}

export default Rotas;