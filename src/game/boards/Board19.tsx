import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          Após pegar a pedra você sente que não ha mais nada ali a não ser a fenda, e então retorna ao inicio do jardim.
        </p>
      </BoardContent>
      <Option board={20}>Continuar</Option>
      <Option board={12}>Voltar ao jardim</Option>
    </Layout>
  )
}

export default Board
