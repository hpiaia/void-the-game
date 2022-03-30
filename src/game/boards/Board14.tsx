import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          Observando e se focando melhor nos aredores, você começa a notar que as ondas de calor estavam produzindo uma
          miragem e distorcendo algumas coisas no local que haviam sumido, lentamente uma figura de um esqueleto humano
          começa a surgir estirado no chão, seus ossos estão levemente carbonizados e seu braço direito esta
          desaparecido, e onde era pra ser seu ombro há uma pequena vinha seca que parece ter sido cortada. enquanto
          isso, na sua mão esquerda, parece que ele segurava uma pedra negra estranha, nela há pequenos fragmentos de um
          material transparente, que aparenta ser o vidro da cupula, talvez ele estivesse tentando fugir de algo e
          tentou quebrar o vidro, oque explicaria a rachadura no painel.
        </p>
      </BoardContent>
      <Option board={16}>Pegar a pedra</Option>
      <Option board={17}>Continuar</Option>
    </Layout>
  )
}

export default Board
