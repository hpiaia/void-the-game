import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'
import { ITEM, useItems } from '../../contexts/ItemsContext'

const Board = () => {
  const { has } = useItems()

  return (
    <Layout>
      <BoardContent>
        <p>
          Você finalmente chega ao final do corredor, uma porta de madeira prensada barra a saída, e ela não parece se
          mover, a fechadura dela parece ter um encaixe redondo, diferente do padrão de ser uma chave, um pico de
          ansiedade começa a tomar conta de você, como se você estivesse preso ali, OQUE você não sentiu antes pelo
          corredor está começando a lhe atingir você começa a pensar se não existe uma saída.
        </p>
      </BoardContent>
      <Option board={has(ITEM.STONE) ? 33 : 32}>Continuar</Option>
    </Layout>
  )
}

export default Board
