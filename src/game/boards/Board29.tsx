import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>A espessa névoa barra o seu caminho.</p>
      </BoardContent>
      <Option board={9}>Voltar</Option>
    </Layout>
  )
}

export default Board
