import { ChangeEvent, FormEvent, useState } from "react"

interface Todo {
    id: number,
    text: string
    isFocus: boolean,
}
interface EditCardParams {
    item: string,
    setCards: React.Dispatch<React.SetStateAction<Todo[]>>,
    setEditButton: React.Dispatch<React.SetStateAction<boolean>>;
}


function EditCard({item, setCards, setEditButton}: EditCardParams): JSX.Element {
    const [textNew, setText] = useState<string>(item);

    function handleEditName(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault()
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
  return (
    <form id="formCard" onSubmit={handleEditName} className='bg-white p-[6px] rounded-[10px] edit-item'>
        <textarea value={textNew} onChange={changeTextArea} placeholder="Enter new item" className="p-[6px] border w-full h-full rounded-[4px] border-yellow"></textarea>
        <div className="flex gap-[10px] items-center">
            <button  className="bg-blue-500 p-[3px] rounded cursor-pointer">Save</button>
            <i onClick={() => setEditButton(false)} className="fa-solid fa-xmark text-[22px] cursor-pointer"></i>  
        </div>
    </form>
  )
}

export default EditCard