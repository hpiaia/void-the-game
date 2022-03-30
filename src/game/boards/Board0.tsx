import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          Você acorda em meio a uma estrada vazia, as luzes dos postes que já geram pouca energia piscam em sincronia
          como se estivessem indicando uma direção. Uma leve neblina rodeia o local, e você se sente observado nesse
          meio vazio por algum motivo.
        </p>
      </BoardContent>
      <Option board={1}>Você observa os seus arredores</Option>
      <Option board={2}>Você grita por alguém</Option>
      <Option board={3}>Você segue em direção às luzes</Option>
    </Layout>
  )
}

export default Board
