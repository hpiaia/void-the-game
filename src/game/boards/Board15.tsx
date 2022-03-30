import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>Com o calor insuportável você decide voltar ao inicio.</p>
      </BoardContent>
      <Option board={12}>Voltar ao jardim</Option>
    </Layout>
  )
}

export default Board
