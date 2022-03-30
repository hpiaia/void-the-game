import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          Você segue pelo caminho a esquerda, o buraco na parede é grande o suficiente para que consiga atravessar sem
          problemas, e oque antes era de concreto, começa a lentamente passar para pedra lisa, pedra robusta, e em fim
          terra. As paredes começam a demonstrar sinais de vida com pequenas plantas e raizes que vem da direção de onde
          você está seguindo, o ar se torna mais humido e um clima quase que tropical toma conta do corredor, que agora
          ja é totalmente verde.
        </p>
      </BoardContent>
      <Option board={11}>Continuar</Option>
    </Layout>
  )
}

export default Board
