import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>Quadro</p>
      </BoardContent>
      <Option board={0}>Opção</Option>
    </Layout>
  )
}

export default Board
