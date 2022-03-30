import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          Você bota rapidamente o óculos para ver se alguma coisa acontece e percebe q a parte vermelha da barreira de
          névoa desaparece quando com o óculos , então agora só falta mais uma lente , e ela provavelmente está no outro
          caminho.
        </p>
      </BoardContent>
      <Option board={12}>Voltar para o jardim</Option>
    </Layout>
  )
}

export default Board
