import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Loja from './pages/Loja';
import Produto from './pages/Produto';
import Novidades from './pages/Novidades';
import Colecoes from './pages/Colecoes';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Carrinho from './pages/Carrinho';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/produto/:id" element={<Produto />} />
        <Route path="/novidades" element={<Novidades />} />
        <Route path="/colecoes" element={<Colecoes />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Route>
    </Routes>
  );
}

export default App;
