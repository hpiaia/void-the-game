import { FC } from 'react'

const Layout: FC = ({ children }) => {
  return (
    <div className="font-grenze flex h-screen items-center justify-center bg-black text-7xl text-white">
      <div>
        <h1 className="text-center">V.O.I.D</h1>
        <div className="mt-16 max-w-4xl">{children}</div>
      </div>
    </div>
  )
}

export default Layout
