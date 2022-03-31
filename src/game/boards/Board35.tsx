import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          A escuridão espessa ofusca completamente sua visão, mas graças a tocha de vagalumes você consegue enxergar a
          sua frente. O caminho a frente é uma grande caverna humida, cada passo tem de ser dado com cuidado para não
          resbalar e tombar no chão, realmente não há nada muito de destaque pela caverna, a não ser as criaturas que
          andam seguindo você em meio a escuridão lhe observando, rastejando, esperando algo acontecer, mas sem nunca
          pisar na luz emitida pela sua tocha, você se sente agraciado por aquela mulher ter lhe lado essa fonte de luz,
          quem sabe o que aconteceria se não fosse por isso.
        </p>
      </BoardContent>
      <Option board={36}>Continuar</Option>
    </Layout>
  )
}

export default Board
