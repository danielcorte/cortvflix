import { Header } from '../../components/header/header'
import { BarraNavegacao } from '../../components/BarraNavegao/BarraNavegacao'
import { Conteudo } from '../../components/Conteudo/Conteudo'
import { Footer } from '../../components/footer/Footer'

export function Inicial() {

    return (
        <>
        <Header></Header>
        <BarraNavegacao></BarraNavegacao>
        <Conteudo></Conteudo>
        <Footer></Footer>
        </>
    )
}