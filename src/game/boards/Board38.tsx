import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          Quando você toma um pouco de coragem, e decide falar algo, ele grita novamente &quot;CALE A BOCA CRIANÇA, NAO
          OUSE RESPONDER AO SEU PAI, AGORA APAGUE ESSA TOCHA NOJENTA OU SE NAO...&quot;.
        </p>
      </BoardContent>
      <Option board={39}>Apagar</Option>
      <Option board={41}>Não apagar</Option>
    </Layout>
  )
}

export default Board
