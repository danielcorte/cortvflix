import { Header } from './components/header/header'
import { BarraNavegacao } from './components/BarraNavegao/BarraNavegacao'
import { Conteudo } from './components/Conteudo/Conteudo'
import { Footer } from './components/footer/Footer'

function App() {

  return (
// tags fantasmas: são as tagas vazias a ponto de persistir a renderização de dois
// ou mais elementos HTML no mesmo componente
    <>
      <Header/>
      <BarraNavegacao/>
      <Conteudo/>
      <Footer/>
    </>
  )
}

// para garantir que a função seja chamada em outros elementos nós devemos "exporta-la"
export default App