import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          Você ao ver os pequenos pontos de luz nas janelas, Decide gritar novamente por ajuda, mais pontos se iluminam
          nas construções, Iluminando quase todas as janelas, As Luzes dos Postes começam a Piscar mais freneticamente,
          e voce sente um frio correr em sua espinha enquanto uma leve brisa gélida sussurra em seu ouvido como um som
          de “Shhhhhhhhhh”.
        </p>
        <p>Você sente que talvez deva ficar em silêncio.</p>
      </BoardContent>
      <Option board={8}>Você grita mais uma vez por alguém</Option>
    </Layout>
  )
}

export default Board
