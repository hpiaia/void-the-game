import { createContext, FC, useContext, useEffect, useState } from 'react'

export enum ITEM {
  STONE,
  TORCH,
  OCULUS,
}

interface ContextData {
  all: ITEM[]
  collect: (item: ITEM) => void
  has: (item: ITEM) => boolean
  clear: () => void
}

const ItemsContext = createContext<ContextData>({} as ContextData)

export const useItems = () => useContext(ItemsContext)

export const ItemsProvider: FC = ({ children }) => {
  const storageItems = localStorage.getItem('items')

  const [items, setItems] = useState<ITEM[]>(storageItems ? JSON.parse(storageItems) : [])

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  const collect = (item: ITEM) => {
    if (!has(item)) {
      setItems([...items, item])
    }
  }

  const has = (item: ITEM) => {
    return items.includes(item)
  }

  const clear = () => setItems([])

  return <ItemsContext.Provider value={{ all: items, collect, has, clear }}>{children}</ItemsContext.Provider>
}
