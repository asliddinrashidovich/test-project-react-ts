import { ChangeEvent, FormEvent, useState } from "react"
import { LIstsProp } from "../contants/interfaces";
import { IndexHtmlTransform } from "vite";


interface setNewItemsGroup {
  setClickedItem: React.Dispatch<React.SetStateAction<boolean>>;
  calickedItem: boolean,
  lists: LIstsProp
  setLIsts: React.Dispatch<React.SetStateAction<LIstsProp[]>>;
  listElement: string
}
  
function EditList({setClickedItem, calickedItem, lists, setLIsts , listElement}: setNewItemsGroup ) {
  const [textItems, steTextItem] = useState<string>(listElement)

  function handleAdder(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    
    let editedArray = lists.map(prev => {
        return prev.map(arrayItem => {
            if(listElement == arrayItem.context) {
                return {...arrayItem, context: textItems}
            }
            return {...arrayItem}
        })
    }); 
    setLIsts(editedArray)
    setClickedItem(false)
  }

  function handleCloseItem() {
    setClickedItem(false)
  }
  document.addEventListener('click', (e) => {
    console.log(e)
  })
  function handleTextArea(eve: ChangeEvent<HTMLTextAreaElement>): void {
    steTextItem(eve.target.value)
  }
  return (
    <form onSubmit={handleAdder} id="editForm" className='bg-white p-[6px] rounded-[10px] edit-item mb-2 editForm'>
        <textarea value={textItems} onChange={handleTextArea} placeholder="Enter new item" className="p-[6px] border w-full h-full rounded-[4px] border-yellow"></textarea>
        <div className="flex gap-[10px] items-center">
            <button  className="bg-blue-500 p-[3px] rounded cursor-pointer">Edit card</button>
            <i onClick={handleCloseItem} className="fa-solid fa-xmark cursor-pointer bg-[#999] p-1 rounded " ></i>    
        </div>
    </form>
  )
}

export default EditList