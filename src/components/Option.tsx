import { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  board: number
}

const Option: FC<Props> = ({ board, children }) => {
  if (board === -1) {
    return (
      <button
        className="font-grenze mx-auto my-8 block w-96 border-t border-b py-2 text-center text-xl font-light"
        onClick={() => alert('todo')}
      >
        {children}
      </button>
    )
  }

  return (
    <Link
      to={`/boards/${board}`}
      className="font-grenze mx-auto my-8 block w-96 border-t border-b py-2 text-center text-xl font-light"
    >
      {children}
    </Link>
  )
}

export default Option
