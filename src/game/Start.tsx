import BoardContent from '../components/BoardContent'
import Layout from '../components/Layout'
import Option from '../components/Option'

function Start() {
  return (
    <Layout>
      <BoardContent>
        <p>Silêncio.........</p>
        <p>
          Sinto como se estivesse flutuando em um abismo avassalador, tudo está escuro, tudo está leve, tudo está
          quieto. Oque aconteceu comigo?
        </p>
      </BoardContent>
      <Option board={0}>Iniciar</Option>
    </Layout>
  )
}

export default Start
