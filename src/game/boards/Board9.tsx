import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          Já à sua direita, uma fissura gigante é formada na parede de cima à abaixo, a escuridão que antes era
          levemente visível das pequenas fissuras nas paredes, agora se torna aparente, uma brisa Gélida é soprada por
          essa enorme fissura e um assoviar é gerado pelo ar que corre pelas pequenas brechas da parede.
        </p>
      </BoardContent>
      <Option board={10}>Você segue a trilha da esquerda</Option>
      <Option board={-1}>Você toca na barreira de névoa</Option>
      <Option board={28}>Inspecionar item no chão</Option>
    </Layout>
  )
}

export default Board
