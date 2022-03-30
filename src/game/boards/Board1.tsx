import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          Você decide dar uma melhor checada ao seu redor. você observa o céu e percebe que ele não possui nenhuma
          estrela, nuvem ou lua, apenas a infinda escuridão. os prédios que cercam as laterais da rua, se estendem ao
          infinito da leve névoa que cobre o cenário, e, em uma das janelas você nota pequenos pontos de luz, que
          rapidamente desaparecem, ao olhar para trás, percebe que uma barricada imensa cobre a rua não lhe dando chance
          de ir nesta direção, e mesmo forçando, é como se houvesse algo lhe impedindo de prosseguir. nada mais lhe
          chama a atenção, apenas o caminho a frente iluminado pelos postes de luz piscando em sequência
        </p>
      </BoardContent>
      <Option board={2}>Forçar passagem pela barricada</Option>
      <Option board={0}>Retornar</Option>
    </Layout>
  )
}

export default Board
