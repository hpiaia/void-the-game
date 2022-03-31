import { useEffect } from 'react'

import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'
import { ITEM, useItems } from '../../contexts/ItemsContext'

const Board = () => {
  const { collect } = useItems()

  // collect torch
  useEffect(() => collect(ITEM.TORCH), [])

  return (
    <Layout>
      <BoardContent>
        <p>
          &quot;Tudo bem, eu entendo, aqui isso vai lhe ajudar em seu caminho&quot; ela lhe entrega uma raiz, e em sua
          ponta diversos vagalumes rodeiam formando uma tocha sem fogo. Você aceita o presente e retorna pelo caminho do
          qual veio, aquele calor confortável que sentia antes agora é novamente tomado pelo gélido e solitário frio,
          você se pergunta se fez o certo ao nao ficar lá mas ao olhar para trás agora o buraco está coberto por vinhas
          tornando impossível o retorno.
        </p>
      </BoardContent>
      <Option board={27}>Continuar</Option>
    </Layout>
  )
}

export default Board
