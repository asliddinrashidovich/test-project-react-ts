import { useState } from "react"
import AnotherButton from "./another-button"
import EditCard from "./edit-card"
import ItemLists from "./item-lists"
import { LIstsProp, Todo } from "../contants/interfaces"

interface ItemProps {
  item: string,
  setCards: React.Dispatch<React.SetStateAction<Todo[]>>
  setLIsts: React.Dispatch<React.SetStateAction<LIstsProp[]>>
  listItem: LIstsProp
  lists: LIstsProp
}

function Card({item, setCards, setLIsts, listItem, lists}: ItemProps): JSX.Element {
  const [editButton, setEditButton] = useState(false);
  function hundleEditItem() {
    setEditButton(true)
  }

  function handleDelete() {
    let indexItem:number = 0;

    setCards((prevItems) => {
      return prevItems.filter((prev, i) => {
        if(item == prev.text) {
          indexItem = i
        }
        if(item != prev.text) {
          return {...prev}
        } 
      })
    })
    
    setLIsts((prevItem) => {
     return prevItem.filter((prev, i) => {
      return i != indexItem
     })
    })
  }

  return (
    <div className="py-5 px-4 ml-5 bg-[#3554479c]    min-w-[350px] rounded-[10px]" >
        <div className="flex justify-between items-center mb-4">
            {!editButton && <span className="text-white" onClick={hundleEditItem}>{item}</span>}
            {editButton && <EditCard editButton={editButton}  setEditButton={setEditButton} setCards={setCards} item={item}/>}
            <i onClick={handleDelete} className="fa-solid fa-xmark text-[22px] w-8 hover:bg-[#bbbbbb9c] p-1 rounded-full text-white cursor-pointer"></i>
        </div>
       
        <ItemLists lists={lists} setLIsts={setLIsts} listItem={listItem} item={item}/>
        <AnotherButton setLIsts={setLIsts} item={item} />
    </div>    
  )
}

export default Card