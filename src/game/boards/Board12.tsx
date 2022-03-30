import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          Perante tudo isso, há apenas uma pequena trilha de marmore que segue em meio aos arranjos de flores e bancadas
          de marmore, algo que realmente se destaca entre a floresta que lhe rodeia, e uma brisa mais quente que vem de
          uma das direções da floresta.
        </p>
      </BoardContent>
      <Option board={13}>Ir em direção a brisa quente</Option>
      <Option board={21}>Seguir a trilha</Option>
    </Layout>
  )
}

export default Board
