import { FC } from 'react'

const BoardContent: FC = ({ children }) => {
  return <div className="font-grenze prose mb-20 px-8 text-justify text-2xl font-light text-white">{children}</div>
}

export default BoardContent
