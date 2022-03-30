import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          Você chega finalmente a uma grande porta, seu quadro é feito inteiramente de raizes grossas e retorcidas, em
          seu contorno há vinhas com espinhos afiados que parecem que podem dilacerar até mesmo a couraça de um
          rinoceronte, e em seu meio, rosas vermelhas como sangue desabrocham com sua aproximação, pingando um liquido
          vermelho ao qual você se pergunta oque quer que seja.
        </p>
        <p>
          Você finalmente segue adiante, pela grande luz iradiante, e se encontra em um grande jardim floresta rodeado
          por uma enorme cupula de vidro, que parece manter este ecosistema estavel, as arvores e plantas irradiam vida
          para onde quer que você olhe e um senso de conforto toma conta de seu corpo.
        </p>
      </BoardContent>
      <Option board={12}>Continuar</Option>
    </Layout>
  )
}

export default Board
