import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          Você cria coragem dentro de si, sentindo se protegido pela luz, encara a criatura bem nos olhos
          &quot;NÃO&quot;. O silêncio perdura por um momento naquela caverna, você espera o pior e então &quot;Vejo que
          criou coragem finalmente nessa vida, diferente de seus irmão, então saia logo daqui, e não volte nunca
          mais.&quot;
        </p>
      </BoardContent>
      <Option board={40}>Continuar</Option>
    </Layout>
  )
}

export default Board
