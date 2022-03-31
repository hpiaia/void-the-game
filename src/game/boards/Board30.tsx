import BoardContent from '../../components/BoardContent'
import Layout from '../../components/Layout'
import Option from '../../components/Option'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          Voce segue pelo caminho aberto pela névoa, inicialmente ele segue o mesmo padrão anterior, mas agora ele vai
          estreitando cada vez até formar um corredor, ele vai deixando seu aspecto cimentado e vai se aproximando cada
          vez mais de um corredor de uma casa americana clichê.
        </p>
        <p>
          Seguindo por um tempo, você vai se deparando com diversos quadros pelas paredes, com fotos de um família que
          lhe lembra os seres que você viu anteriormente, um pai grande e forte com aparência bruta, uma mãe com um
          sorriso meigo mas com grandes olheiras como se estivesse cansada, e uma criança no meio com um sorriso
          resplandecente, você se vê naquelas fotos mas parece não se importar mais com isso por algum motivo.
        </p>
      </BoardContent>
      <Option board={31}>Continuar</Option>
    </Layout>
  )
}

export default Board
