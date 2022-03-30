import { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  board: number
}

const Option: FC<Props> = ({ board, children }) => {
  return (
    <Link to={`/boards/${board}`} className="mx-auto my-8 block w-96 border-t border-b py-2 text-center">
      {children}
    </Link>
  )
}

export default Option
