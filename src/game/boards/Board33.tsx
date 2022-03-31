import BoardContent from '../../components/BoardContent'
import End from '../../components/End'
import Layout from '../../components/Layout'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          Prestes a quebrar por completo, você se lembra daquela pedra estranha que pegou em um esqueleto, Você percebe
          que o formato dela é perfeito no encaixe e rapidamente empurra contra o buraco, a porta começa a fazer alguns
          barulhos e a ansiedade dentro de si continua crescendo, você sente que está perdendo a cabeça e lembrando de
          coisas que não quer lembrar e então a porta de abre. Um clarão de luz imenso é expelido contra sua cara, mas
          isso é o de menos, você bota o pé para dentro desta luz e instantaneamente a ansiedade e medo passam, você se
          vê de costas para sua casa, você lembra de tudo, de cada vida que passou, de cada vez que pereceu nesse limbo,
          tudo isso para superar os traumas de sua infância, e logo você se toca que não é a ali que termina, pois você
          ainda está no limbo, no vazio, no VOID da existência, então novos problemas devem estar por vir junto com uma
          nova ansiedade crescente que nasce em seu peito.
        </p>
      </BoardContent>
      <End end={6}>Fim de jogo</End>
    </Layout>
  )
}

export default Board
