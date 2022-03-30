import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          Você percebendo que não há muito o que fazer, E decide seguir rumo pela solitária estrada nublada, as luzes
          piscando em direção do alem parecem lhe guiar entre o nevoeiro que se torna cada vez menos espeço, as janelas
          que antes cobriam as paredes, foram tomadas por um infinito manto de massa corrida, que ja velha e degradada
          pelo tempo, apresenta diversas fissuras ao seu longo, e entre essas fissuras, um abismo negro parece se
          expandir infinitamente para seu interior. a parede a esquerda começa lentamente a tomar tons de vermelho, que
          vagarosamente vão formando um degradê até atingir o mais puro Carmesim. á Parede a direita quase que segue o
          mesmo padrão, mas seguindo de um azul cristalino para um Azul Maculado e sujo.
        </p>
      </BoardContent>
      <Option board={7}>Continuar</Option>
    </Layout>
  )
}

export default Board
