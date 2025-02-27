import EditList from "./edit-list";
import { LIstsProp } from "../constants/interfaces";
import { useState } from "react";

interface ItemProps {
  listElement: string,
  setLIsts: React.Dispatch<React.SetStateAction<LIstsProp[]>>;
  lists: LIstsProp
}

function ItemCard({listElement, setLIsts, lists}: ItemProps): JSX.Element {
  const [calickedItem, setClickedItem] = useState<boolean>(false)

  
  
  function handleEdit() {
    setClickedItem(true)
  }

  
  function handleDelete() {
    const newArray = lists.map(prev => {
      return prev.filter(arrayItem => {
        return arrayItem.context != listElement
      })
    }); 
    setLIsts(newArray)
  }
  return (
    <>
      {!calickedItem &&  
      
      <div className="group flex justify-between items-center p-2 bg-[#fff] rounded-[10px] border-[1px] border-[#fff] hover:border-[1px] hover:border-[blue] cursor-grab  mb-2">
          <span>{listElement}</span>
          <div className="gap-[10px] flex">
              <i onClick={handleEdit} className="hover:bg-[#bbbbbb9c]  p-1 rounded-full hidden fa-solid fa-pencil cursor-pointer"></i>
              <i onClick={handleDelete} className="hover:bg-[#bbbbbb9c] rounded-full p-1 fa-regular fa-circle-xmark cursor-pointer"></i>
          </div>
      </div>
      }
      {calickedItem && 
        <EditList setClickedItem={setClickedItem} calickedItem={calickedItem} lists={lists} setLIsts={setLIsts} listElement={listElement}/>
      }
    </>
   
  )
}

export default ItemCard