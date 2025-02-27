import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react"
import { Todo } from "../constants/interfaces";

interface EditCardParams {
    editButton: boolean,
    item: string,
    setCards: React.Dispatch<React.SetStateAction<Todo[]>>,
    setEditButton: React.Dispatch<React.SetStateAction<boolean>>;
}


function EditCard({editButton, item, setCards, setEditButton}: EditCardParams): JSX.Element {
    const [textNew, setText] = useState<string>(item);
    const inputRefCard = useRef<HTMLTextAreaElement>(null)
    function handleEditName(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault()
        if(!textNew?.trim().length) return;
        handleOnCardEnter()
    }  
    function handleOnCardEnter() {
        setCards((prevItems) => {
            return  prevItems.map((prev) => {
                if(prev.text == item) {
                    return {...prev, text: textNew ?? prev.text}
                } else {
                    return {...prev}
                }
            })
        })
        setEditButton(false)
    }

    function changeTextArea(eve: ChangeEvent<HTMLTextAreaElement>): void {
        setText(eve.target.value)
    }

    useEffect(() => {
        if (inputRefCard && inputRefCard.current) {
            inputRefCard.current.focus();
            inputRefCard.current.select();
        }
    }, [editButton])
    const handleKeyDownCard = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key == "Enter" && textNew?.trim().length) {
          e.preventDefault(); 
          setEditButton(false)
          handleOnCardEnter()  
        }
      };

  return (
    <form id="formCard" onSubmit={handleEditName} className='bg-white p-[6px] rounded-[10px] edit-item'>
        <textarea value={textNew} onKeyDown={handleKeyDownCard} ref={inputRefCard} onChange={changeTextArea} placeholder="Enter new item" className="p-[6px] border w-full h-full rounded-[4px] border-yellow"></textarea>
        <div className="flex gap-[10px] items-center">
            <button  className="bg-blue-500 p-[3px] rounded cursor-pointer text-white px-2 hover:bg-blue-600">Save</button>
            <i onClick={() => setEditButton(false)} className="fa-solid fa-xmark text-[18px] w-7 cursor-pointer hover:bg-[#bbbbbb9c] p-1 rounded-[4px]"></i>  
        </div>
    </form>
  )
}

export default EditCard