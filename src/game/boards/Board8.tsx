import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          Á sua esquerda, aquele grande paredão Carmesim que antes corria infinitamente agora dispõe de um enorme
          buraco, uma leve luz Irradia entre seu interior e as fissuras das paredes, e uma leve brisa quente é expelida
          por sua entrada, tornando-o um caminho convidativo e aconchegante devido ao frio geral que se extende pela
          rua.
        </p>
      </BoardContent>
      <Option board={9}>Continuar</Option>
    </Layout>
  )
}

export default Board
