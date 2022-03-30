import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          &quot;Talvez você devesse parar um pouco , já foram tantas vezes e apenas dor você encontrou , eu sei que pode
          ser mais uma vez mas , se quiser , eu posso deixa-lo mais confortável e parar essa dor por um momento&quot;,
          enquanto ela fala isso ela estende seus braços como se estivesse de abrindo para um abraço.
        </p>
      </BoardContent>
      <Option board={25}>Abraçar</Option>
      <Option board={26}>Seguir em frente</Option>
    </Layout>
  )
}

export default Board
