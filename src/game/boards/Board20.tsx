import BoardContent from '../../components/BoardContent'
import End from '../../components/End'
import Layout from '../../components/Layout'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          A pedra atravessa o painel e com ela vai levando tudo, uma grande força começa a sugar tudo ao redor como
          efeito vacuo e junto segue voce, mas quando estava prestes a ser sugado para fora,uma vinha salta da floresta
          e agarra seu braço tentando lhe puxar, mas uma rajada daquela estrela é emitida e rapidamente chega a você,
          seu corpo começa a queimar, a dor é insuportavel por um momento mas seus nervos são queimados tão rapidamente
          que logo tudo se torna amortecido, voce consegue por um momento ver a floresta em chamas e seu braço sendo
          arancado antes de seus olhos vaporizarem, e ouvir por um breve momento um grito feminino amedrontado antes que
          seu osso martelo se fundisse sua audição sumisse, sua ultima sensação fora de algo repousando em sua mão
          esquerda.
        </p>
      </BoardContent>
      <End end={3}>Fim de jogo</End>
    </Layout>
  )
}

export default Board
