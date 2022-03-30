import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          Após uma longa caminhada, você finalmente se depara com o fim desta rua. a sua frente, uma espessa neblina
          Azul e Vermelha dança entre si formando uma película quase marmorizada, mas harmonizada, você toca ela e
          percebe que ela cria uma tensão elástica, como se estivesse barrando sua passagem, mas não totalmente te
          impedindo, um frio na barriga lhe corre ao fazer isso.
        </p>
      </BoardContent>
      <Option board={8}>Continuar</Option>
    </Layout>
  )
}

export default Board
