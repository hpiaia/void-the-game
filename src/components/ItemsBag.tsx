import { ITEM, useItems } from '../contexts/ItemsContext'

const itemsNames = {
  [ITEM.STONE]: 'Pedra',
  [ITEM.TORCH]: 'Tocha',
  [ITEM.GLASSES]: 'Óculos',
}

const ItemsBag = () => {
  const { all } = useItems()

  return (
    <div className="absolute bottom-12 right-12 mx-auto text-center text-white">
      <ul>
        {all.map((item) => (
          <li key={item}>{itemsNames[item]}</li>
        ))}
      </ul>
    </div>
  )
}

export default ItemsBag
