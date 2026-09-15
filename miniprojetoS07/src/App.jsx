import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Carrinho from './pages/Carrinho'
import Pagamento from './pages/Pagamento'
import Sucesso from './pages/Sucesso'
import Falha from './pages/Falha'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (

    <BrowserRouter>

      <Header />

      <main>
        
        {/* gerenciamento das rotas da aplicação */}
        <Routes>
      
          {/* Carrinho: conferência de produtos selecionados antes da compra*/}
          <Route path="/carrinho" element={<Carrinho />} />

          {/* Pagamento: interface de entrada de dados bancários, pagamento & checkout */}
          <Route path="/pagamento" element={<Pagamento />} />

          {/* Página de erro: falha no processo de autenticação dos dados bancários */}
          <Route path="/falha" element={<Falha />} />

          {/* Página de sucesso: autenticação dos dados e aprovação do pagamento */}
          <Route path="/sucesso" element={<Sucesso />} />
      
        </Routes>
      </main>

      <Footer />

    </BrowserRouter>

  )

}

export default App