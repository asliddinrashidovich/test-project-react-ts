import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react"
import { LIstItemPop, LIstsProp } from "../constants/interfaces";


interface setNewItemsGroup {
  setClickedItem: React.Dispatch<React.SetStateAction<boolean>>;
  calickedItem: boolean
  lists: LIstsProp
  setLIsts: React.Dispatch<React.SetStateAction<LIstsProp[]>>;
  listElement: string
}
  
function EditList({setClickedItem, calickedItem, lists, setLIsts , listElement}: setNewItemsGroup ) {
  const [textItems, steTextItem] = useState<string>(listElement)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  function handleAdder(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    handleOnFormEvent()    
  }

  function handleOnFormEvent() {
    const editedArray: LIstsProp = lists.map((prev: LIstItemPop) => {
      return prev.map(arrayItem => {
          if(listElement == arrayItem.context) {
              return {...arrayItem, context: textItems}
          }
          return {...arrayItem}
      })
  }); 
  setLIsts(editedArray.flat())
  setClickedItem(false)
  }
 
  function handleCloseItem() {
    setClickedItem(false)
  }
  function handleTextArea(eve: ChangeEvent<HTMLTextAreaElement>): void {
    steTextItem(eve.target.value)
  }
  useEffect(() => {
    if (calickedItem && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [calickedItem])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key == "Enter") {
      e.preventDefault(); 
      setClickedItem(false)
      handleOnFormEvent()  
    }
  };
  return (
    <form onSubmit={handleAdder} id="editForm" className='bg-white p-[6px] rounded-[10px] edit-item mb-2 editForm'>
        <textarea value={textItems} ref={inputRef} onKeyDown={handleKeyDown} onChange={handleTextArea} placeholder="Enter new item" className="p-[6px] border w-full h-full rounded-[4px] border-yellow"></textarea>
        <div className="flex gap-[10px] items-center">
            <button  className="bg-blue-500 p-[3px] text-white rounded cursor-pointer">Edit card</button>
            <i onClick={handleCloseItem} className="fa-solid fa-xmark cursor-pointer bg-[#999] p-1 rounded " ></i>    
        </div>
    </form>
  )
}

export default EditList