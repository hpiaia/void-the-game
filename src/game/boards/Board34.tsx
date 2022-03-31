import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          A escuridão espessa ofusca completamente sua visão, um medo inigualavel toma conta de todo o seu ser e você se
          sente obrservado, você teme pela sua vida e não ousa por os pés lá dentro
        </p>
      </BoardContent>
      <Option board={9}>Voltar</Option>
    </Layout>
  )
}

export default Board
