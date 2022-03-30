import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          Não muito diferente do imaginado, o jardim se mostra ser bem luxuoso, diversas estatuas de animais de marmore
          cobrem o local, uma variedade de flora que deixaria qualquer um estupefato cresce para todos os lados, um
          aroma floral permeia o caminho tornando a caminhada agradavel.
        </p>
      </BoardContent>
      <Option board={22}>Continuar</Option>
    </Layout>
  )
}

export default Board
