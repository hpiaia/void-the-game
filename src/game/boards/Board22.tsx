import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          Apos alguns minutos de caminhada , você se encontra no meio do jardim , o chão é coberto em flores e forma um
          enorme círculo ao redor de alguém , uma mulher gigante repousa sentada sobre suas pernas , sua pele tem uma
          leve coloração verde , seus cabelos são vinhas que parecem assumir um formato cacheado , e seus olhos emitem
          um amor incondicional como o de uma mãe ao ver seu pequeno e tolo filho.
        </p>
      </BoardContent>
      <Option board={23}>Continuar</Option>
    </Layout>
  )
}

export default Board
