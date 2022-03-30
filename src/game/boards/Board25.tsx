import BoardContent from '../../components/BoardContent'
import End from '../../components/End'
import Layout from '../../components/Layout'

const Board = () => {
  return (
    <Layout>
      <BoardContent>
        <p>
          Você não tem realmente certeza do que ela está falando, mas é como se seu corpo se lembrasse, você se acolhe
          no abraço desta mulher, e é como você fosse um bebê assustado que foi pego nos braços quentes de sua mãe.
          Você começa a se sentir mais leve, como se todos os seus problemas estivessem sumindo, a aura maternal é tão
          confortável que você não sente mais vontade de largar, pequenas vinhas começam lentamente a se enrolar em você
          e seu corpo começa lentamente a envelhecer, mas isso já não é mais problema, você pela primeira vez sente
          que está seguro, seu corpo começa lentamente a definhar e se decompor, o calor que você estava sentindo
          permanece com você até o final, e a última coisa que você ouve e com um sorriso no rosto é&quot; durma bem
          minha criança, o caminho ainda é longo e cheio de desafios, tenha uma boa noite, e até em breve&quot;.
        </p>
        <p>
          Seu corpo finalmente desaparece e algumas rosas crescem no lugar, se alimentando das energias e nutrientes
          deixados por seu corpo.
        </p>
      </BoardContent>
      <End end={4}>Abraçar</End>
    </Layout>
  )
}

export default Board
