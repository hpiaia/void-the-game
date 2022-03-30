import { FC } from 'react'

const BoardContent: FC = ({ children }) => {
  return <div className="prose mb-20 text-justify text-white">{children}</div>
}

export default BoardContent
