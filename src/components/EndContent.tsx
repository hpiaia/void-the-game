import { FC } from 'react'
import { Link } from 'react-router-dom'

const EndContent: FC = ({ children }) => {
  return (
    <>
      <div className="font-grenze prose mb-20 text-center text-2xl font-light text-white">{children}</div>

      <Link
        to={`/`}
        className="font-grenze mx-auto my-8 block w-96 border-t border-b py-2 text-center text-xl font-light text-white"
      >
        Jogar novamente
      </Link>
    </>
  )
}

export default EndContent
