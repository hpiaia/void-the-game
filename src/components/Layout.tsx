import { FC } from 'react'

const Layout: FC = ({ children }) => {
  return (
    <div className="font-grenze flex h-screen items-center justify-center bg-black text-7xl text-white">
      <div>
        <h1 className="text-center text-purple-800">V.O.I.D</h1>
        <div className="mt-24 max-w-4xl">{children}</div>
      </div>
    </div>
  )
}

export default Layout
