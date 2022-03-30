import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          Indo contra todos os seus instintos mais primais, você decide gritar novamente por ajuda enquanto observa
          aqueles pontos lhe observando. As ultimas janelas apagadas finalmente se acendem, e as luzes dos postes
          começam a piscar em uma velocidade abominável, até que... elas estouram, a rua inteira fica escura, a neblina
          que antes era suave como parafina, se tornou espeça como algodão, o frio que antes era tolerável se tornou
          gelado como uma tormenta. enquanto seu queixo trepida devido ao frio inigualável, seus sentidos pouco a pouco
          vão se amortecendo, e no meio da névoa, pequenos pontos de luz, sempre em dupla, começam a surgir ao seu
          redor, lhe cercando por completo,sua consciência começa lentamente a apagar enquanto o sussurrar do vento ecoa
          em seu ouvido com um novamente e singelo, “Shhhhhhhhhhhh” .
        </p>
      </BoardContent>
      <Option board={0}>FIM DE JOGO</Option>
    </Layout>
  )
}

export default Board
