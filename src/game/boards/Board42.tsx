import BoardContent from '../../components/BoardContent'
import End from '../../components/End'
import Layout from '../../components/Layout'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          Você rasteja pelo chão se locomovendo através do tato e som, sem nunca levantar a cabeça, até ouvir um
          &quot;Outro irmão de vocês está aqui, observem ele até ele chegar aqui&quot;. Assim você o faz, se locomovendo
          com os outros em grupo até chegar a fonte do som nova que ronda aquela caverna extensa, mas por algum motivo
          você não consegue se aproximar pois algo queima em suas orbitas oculares quando muito próximo, então você fica
          apenas a distância, ouvindo e sentindo o seu Futuro novo irmão.
        </p>
      </BoardContent>
      <End end={7}>Fim de jogo</End>
    </Layout>
  )
}

export default Board
