import { useEffect } from 'react'

import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'
import { ITEM, useItems } from '../../contexts/ItemsContext'

const Board = () => {
  const { collect } = useItems()

  // collect oculus
  useEffect(() => collect(ITEM.OCULUS), [])

  return (
    <Layout>
      <BoardContent>
        <p>
          Observando melhor o chão próximo a névoa, você encontra uma armação de um óculos de plástico, uma memória é
          desbloqueada no seu subconsciente e você lembra de adentrar em uma sala de cinema e experimentar pela primeira
          vez um filme em 3d. Você sente que isso é importante e então carrega com sigo mesmo essa armação.
        </p>
      </BoardContent>
      <Option board={9}>Voltar</Option>
    </Layout>
  )
}

export default Board
