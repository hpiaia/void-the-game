import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          você começa a andar entre a floresta seguindo a leve brisa quente que sentiu anteriormente. antes aquela
          vivida e verde floresta começa a lentamente ficar mais escassa, fragil, seca e sem vida,o caminho que antes
          era pintado pelos mais distintos tons de verde,foi tomando um aspecto mais arenoso, aquele antes clima
          tropical e humido que permeava o ambiente, torna-se como um verão seco e infernal,e ali você encontra o
          motivo, em meio a areia e aquele solo negro que parece agora carvao, a parede de vidro da cupula apresenta uma
          larga rachadura, por qual entre ela vaza ondas de calor que são expelidas por uma gigante estrela que há do
          outro lado, rajadas são emitidas que se chocam contra a cupula, que parece nem se mecher, quase como se fosse
          uma força imóvel e indestrutivel, isso se não fosse por esse painel rachado.
        </p>
      </BoardContent>
      <Option board={14}>Observar melhor os aredores da rachadura</Option>
      <Option board={15}>Retornar a entrada do jardim</Option>
    </Layout>
  )
}

export default Board
