import { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  end: number
}

const Option: FC<Props> = ({ end, children }) => {
  return (
    <Link to={`/ends/${end}`} className="mx-auto my-8 block w-96 border-t border-b py-2 text-center">
      {children}
    </Link>
  )
}

export default Option
