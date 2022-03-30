import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          Você grita por alguém, na esperança de que alguma alma viva lhe socorra ou que responda ao seu chamado, você
          nota que aparece alguns pontos brilhantes em algumas janelas, e, as luzes parecem piscar em um tom levemente
          mais acelerado, mas o silêncio ainda pendura nessa fria noite.
        </p>
      </BoardContent>
      <Option board={5}>Você grita novamente por alguém</Option>
    </Layout>
  )
}

export default Board
