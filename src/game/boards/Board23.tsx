import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          &quot;Bem vindo minha criança, parece que você passou por muita coisa não ? Eu sei o que você procura, a
          lente carmesim está aqui?&quot; Ela estende sua mão e nela há uma lente de óculos vermelha, você pega ela e
          encaixa na armação do óculos, e logo você lembra que já esteve aí antes, por algum motivo você começa a
          chorrar, sente que já passou por muita coisa e é como se a aura desse ser gigante fizesse você soltar tudo
          que já dentro de você.
        </p>
      </BoardContent>
      <Option board={24}>Continuar</Option>
    </Layout>
  )
}

export default Board
