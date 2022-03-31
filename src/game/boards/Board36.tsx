import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          Após algumas horas caminhando, você chega a uma grande caverna sem saída, e em seu centro há um pequeno altar
          com uma lente azul em seu topo. Você já corajoso por possuir a tocha de vagalumes de aproxima do altar e pega
          a lente. Nesse momento, uma criatura enorme vai em sua frente, ele parece um Tita azulado, com 5 metros de
          altura, sua barba é grande e toda bagunça e você não consegue ver a separação entre a barba e o cabelo, ele se
          aproxima a passos largos e pesados de você e para bem a sua frente.
        </p>
      </BoardContent>
      <Option board={37}>Continuar</Option>
    </Layout>
  )
}

export default Board
