import { FC } from 'react'

import ItemsBag from './ItemsBag'

const Layout: FC = ({ children }) => {
  return (
    <>
      <div className="font-grenze flex h-screen items-center justify-center bg-black text-7xl text-white">
        <div>
          <h1 className="text-center text-purple-800">V.O.I.D</h1>
          <div className="mt-24">{children}</div>
        </div>
      </div>

      <ItemsBag />
    </>
  )
}

export default Layout
