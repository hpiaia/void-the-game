import BoardContent from '../../components/BoardContent'
import End from '../../components/End'
import Layout from '../../components/Layout'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          O desespero começa a tomar conta de você, o medo, angústia tudo toma conta de seu corpo e você tenta arrombar
          a porta, mas ela nem mesmo se move, como se fosse feito de aço. Seu corpo começa a diminuir de tamanho até
          atingir uma estatura infantil,você entra em posição fetal e começa a chorrar encostado contra a porta,até que
          lentamente você começa a apagar e finalmente dorme sabendo que está preso ali pela eternidade.
        </p>
        <p>Silêncio.........</p>
        <p>
          Sinto como se estivesse flutuando em um abismo avassalador, tudo está escuro, tudo está leve, tudo está
          quieto. Oque aconteceu comigo?
        </p>
      </BoardContent>
      <End end={5}>Fim de jogo</End>
    </Layout>
  )
}

export default Board
