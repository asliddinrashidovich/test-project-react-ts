import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react"
import { LIstsProp, Todo } from "../constants/interfaces";

interface setNewItemsGroup {
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setLIsts: React.Dispatch<React.SetStateAction<LIstsProp[]>>;
  item: string,
  clicked: boolean
}

function EditItem({setClicked, setLIsts, item, clicked}: setNewItemsGroup ): JSX.Element {
  const [textItems, steTextItem] = useState<string>()
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const data = JSON.parse(localStorage.getItem('cards') ?? "[]")
  let dataItemsIndex: number;

  function handleAdder(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    if(!textItems?.trim().length) {
      alert('please fill the form')
    } else {
      handleOnFormEnter()
    }
  }
  function handleOnFormEnter() {
    Idgenerator()
    setLIsts(prevList => {
      return prevList.map((list: LIstsProp, i) => {
        if(i == dataItemsIndex) {
          return [...list, {id: list.length++ + 1, Index: 23, context: textItems}]
        } else {
          return [...list]
        }
      })
    })
    setClicked(false)
  }
  function Idgenerator() {
    data.forEach((dataItem: Todo, i:number) =>{
      if(dataItem?.text == item) {
        dataItemsIndex = i
      }
    })
  }
  function handleCloseItem() {
    setClicked(false)
  }
  
  function handleTextArea(eve: ChangeEvent<HTMLTextAreaElement>): void {
    steTextItem(eve.target.value)
  }

  useEffect(() => {
    if (clicked && textAreaRef.current) {
      textAreaRef.current.focus();
      textAreaRef.current.select();
    }
  }, [clicked])

  const handleKeyDownForm = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key == "Enter" && textItems?.trim().length) {
      e.preventDefault(); 
      setClicked(false)
      handleOnFormEnter()  
    }
  };
  return (
    <form onSubmit={handleAdder} className='bg-white p-[7px] rounded-[10px] edit-item mb-2'>
        <textarea onChange={handleTextArea} onKeyDown={handleKeyDownForm} ref={textAreaRef} placeholder="Enter new item" className="p-[6px] border w-full h-full rounded-[4px] border-yellow"></textarea>
        <div className="flex gap-[10px] items-center">
            <button type="submit" className="bg-blue-500 p-[3px] rounded cursor-pointer text-white px-2 hover:bg-blue-600 ">Add card</button>
            <i onClick={handleCloseItem} className="fa-solid fa-xmark  w-7 cursor-pointer text-[18px] hover:bg-[#bbbbbb9c] p-1 rounded-[4px]" ></i>    
        </div>
    </form>
  )
}

export default EditItem