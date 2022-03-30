import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          Você sente que não deve mecher com esse tipo de coisa e decide voltar, mas ja em mente que talvez esse jardim
          não seja tão seguro assim.
        </p>
      </BoardContent>
      <Option board={12}>Voltar ao jardim</Option>
    </Layout>
  )
}

export default Board
