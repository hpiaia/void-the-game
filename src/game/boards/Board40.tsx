import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          Chegando novamente na rua, ela está levemente mais quente que a caverna, mas ainda sim gelado, os vagalumes da
          tocha que você segurava começam a cair e desaparecer junta com o próprio bastão, você pega a lente Azul que
          conseguiu e insere na armação, tornando o óculos completo, e, ao botar, aquela névoa que antes cobria a
          passagem desapareceu completamente.
        </p>
      </BoardContent>
      <Option board={9}>Voltar ao início da névoa</Option>
    </Layout>
  )
}

export default Board
