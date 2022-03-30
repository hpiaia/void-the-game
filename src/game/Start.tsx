import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import BoardContent from '../components/BoardContent'
import Layout from '../components/Layout'
import { useItems } from '../contexts/ItemsContext'

function Start() {
  const { clear } = useItems()

  // clear items on start
  useEffect(() => clear(), [])

  return (
    <Layout>
      <BoardContent>
        <p>Silêncio.........</p>
        <p>
          Sinto como se estivesse flutuando em um abismo avassalador, tudo está escuro, tudo está leve, tudo está
          quieto. Oque aconteceu comigo?
        </p>
      </BoardContent>

      <Link
        to="/boards/0"
        className="font-grenze mx-auto my-8 block w-96 border-t border-b py-2 text-center text-xl font-light text-white"
      >
        Iniciar
      </Link>
    </Layout>
  )
}

export default Start
