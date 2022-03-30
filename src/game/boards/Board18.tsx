import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          Após Analisar a situação do corpo, e saber que ele utilizou a pedra para tentar quebrar o vidro, você se
          imerge em seus pensamentos sobre o porque dessa pessoa ter feito isso, seu cabeça começa a pensar em todo o
          tipo de possibilidade ruim e o panico começa lentamente a tomar conta de sua mente, a pedra começa a emitir um
          leve brilho e paresse susurar em sua mente &quot;quebre o vidro&quot;, &quot;Se liberte do Ciclo&quot;,
          &quot;a saida de tudo está logo ali&quot;. Ouvindo tudo isso você se sente compelido a jogar a pedra contra o
          painel, e assim faz.
        </p>
      </BoardContent>
      <Option board={20}>Continuar</Option>
    </Layout>
  )
}

export default Board
