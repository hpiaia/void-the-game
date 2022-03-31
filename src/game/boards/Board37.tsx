import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          &quot;COMO OUSA VOLTAR AQUI FILHO INSOLENTE, VOCE CHEGA NA MINHA CASA, SEM PERMISSAO E PEGA AS MINHAS COISAS?
          E AINDA VEM COM ESSE ITEM NOJENTO PARA PERTO DOS SEUS IRMAOS?&quot;
        </p>
        <p>
          O medo urge dentro de você, seu instinto diz para você correr mas ao mesmo tempo para ficar parado, você não
          acha que conseguiria fugir desse Ser que está parado a sua frente.
        </p>
      </BoardContent>
      <Option board={38}>Continuar</Option>
    </Layout>
  )
}

export default Board
