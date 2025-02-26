import { useState } from "react"
import AnotherButton from "./another-button"
import EditCard from "./edit-card"
import ItemCard from "./item"
import ItemLists from "./item-lists"
interface Todo {
  id: number,
  text: string
}
interface LIstsProp {
  id: number,
  Index: number,
  context: string
}
interface ItemProps {
  item: string,
  setCards: React.Dispatch<React.SetStateAction<Todo[]>>
  setLIsts: React.Dispatch<React.SetStateAction<LIstsProp[]>>
  listItem: LIstsProp
}

function Card({item, setCards, setLIsts, listItem}: ItemProps): JSX.Element {
  const [editButton, setEditButton] = useState(false);
  function hundleEditItem() {
    setEditButton(true)
  }

  function handleDelete() {
    setCards((prevItems) => {
      return prevItems.filter((prev) => {
        return item != prev.text
      })
    })
  }
  return (
    <div className="p-5 ml-5 bg-[#555]   min-w-[350px] rounded-[10px]" >
        <div className="flex justify-between items-center mb-4">
            {!editButton && <span onClick={hundleEditItem}>{item}</span>}
            {editButton && <EditCard setEditButton={setEditButton} setCards={setCards} item={item}/>}
            <i onClick={handleDelete} className="fa-solid fa-xmark text-[22px] cursor-pointer"></i>
        </div>
        <ItemLists listItem={listItem} item={item}/>
        <AnotherButton setLIsts={setLIsts} item={item}/>
    </div>    
  )
}

export default Card