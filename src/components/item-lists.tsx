import ItemCard from "./item"

interface LIstsProp {
    id: number,
    Index: number,
    context: string
  }

interface ItemsListsProps {
    item: string,
    listItem: LIstsProp
}

function ItemLists({item, listItem}:ItemsListsProps ) {

  return (
    <div>
        {listItem.map(listElement => {
            return <ItemCard  listElement={listElement.context} key={listElement.context}/>
        })}
    </div>
  )
}

export default ItemLists