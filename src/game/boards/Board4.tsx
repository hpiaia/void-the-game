import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          Voce decide forçar sua passagem pela barricada, uma das tábuas que bloqueava a passagem estava meio solta e
          apartir dali você consegue abrir uma pequena passagem para se esgueirar. o Local é lotado de mesas, cadeiras,
          carros e tudo que se possa imaginar empilhados um em cima do outro, você começa lentamente a se arrastar por
          algumas aberturas tentando tomar cuidado com a estrutura instável do local, e após algum tempo você vê
          finalmente uma saida,uma pequena e apertada saida.
        </p>
        <p>
          Você se sente como um bebê prestes a nascer, a parte de cima do seu torso passa facilmente, mas acaba
          entalando na abertura, você se meche e remeche tentando se desprender, até que sente-se mais leve, você
          consegue rastejar para fora, mas não consegue ficar em pé. quando olha para trás, vê 2 figuras de negras de
          sobretudo te encarando , 1 delas segura uma pequena corrente que liga à passagem por qual você se esgueirou ,
          e nela conecta-se uma grande lamina manchada de sangue que agora tampa o buraco por qual passou, e esse sangue
          forma um rastro até o seu torso, que agora está separado da sua parte inferior. você perde totalmente suas
          forças enquanto ambas as figuras se aproximam e seu sangue jora para fora, lentamente sua consciencia vai se
          apagando até que apenas a escuridão reste em sua mente.
        </p>
      </BoardContent>

      <Option board={0}>FIM DE JOGO</Option>
    </Layout>
  )
}

export default Board
