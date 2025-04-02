import { Inicial } from "./pages/Inicial/Inicial"
function App() {

  return (
// tags fantasmas: são as tagas vazias a ponto de persistir a renderização de dois
// ou mais elementos HTML no mesmo componente
    <>
      <Inicial></Inicial>
    </>
  )
}

// para garantir que a função seja chamada em outros elementos nós devemos "exporta-la"
export default App