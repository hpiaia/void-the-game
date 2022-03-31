import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          Você abaixa a cabeça para ele e sem coragem nenhuma de reagir voce esmaga cada um dos vagalumes, o galho em
          sua mão seca e desaparece e o ser fala &quot;Muito bem&quot; ele pega você com a mão e &quot;Você não vai mais
          precisar disso aqui&quot;.
        </p>
        <p>
          Com a outra mão, ele arranca suas roupas e começa arancar ambos os seus olhos, voce ura de dor e então de
          alguma forma ele arranca suas cordas vocais, ele joga você contra o chão bota o pé em cima de você e
          &quot;RASTEJE AGORA COMO O VERME QUE VOCE É, APENAS SIGA OQUE FALO SEM VER, E NUNCA MAIS OUSE RESPONDER AO SEU
          PAI, AGORA VA SE JUNTAR AOS SEUS IRMÃOS&quot;.
        </p>
      </BoardContent>
      <Option board={42}>Continuar</Option>
    </Layout>
  )
}

export default Board
