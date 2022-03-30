import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  // collect stone

  return (
    <Layout>
      <BoardContent>
        <p>
          Você remove a pedra da mão do esqueleto, ela é uma pedra lisa negra com diversas gravuras runicas em todo o
          seu corpo, ela contem pequenos farelos de vidro pelo seu corpo que você facilmente remove passando a mão por
          cima.
        </p>
        <p>Você se sente levemente atraido por ela e decide pega-la para si mesmo, talvez seja util.</p>
      </BoardContent>
      <Option board={18}>Jogar a pedra contra a rachadura</Option>
      <Option board={19}>Continuar</Option>
    </Layout>
  )
}

export default Board
