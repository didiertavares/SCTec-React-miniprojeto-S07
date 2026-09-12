import { Routes, Route } from 'react-router-dom'
import './App.css'

import Carrinho from './pages/Carrinho'
import Pagamento from './pages/Pagamento'
import Sucesso from './pages/Sucesso'
import Falha from './pages/Falha'


function App() {



  return (

    <>
    
      {/* componente exibido na tela para acompanhamento no desenvolvimento */}
      <>
        <Carrinho />
      </>


      <Routes>
        {/* Carrinho: conferência de produtos selecionados antes da compra*/}
        <Route path="/carrinho" element={<Carrinho />} />

        {/* Pagamento: interface de entrdad de dados bancários, pagamento & checkout */}
        <Route path="/pagamento" element={<Pagamento />} />

        {/* Página de erro: falha no processo de autenticação dos dados bancários */}
        <Route path="/falha" element={<Falha />} />

        {/* Página de sucesso: autenticação dos dados e aprovação do pagamento */}
        <Route path="/sucesso" element={<Sucesso />} />
      </Routes>

    </>
  )
}

export default App
