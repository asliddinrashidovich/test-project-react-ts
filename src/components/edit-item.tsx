import { ChangeEvent, FormEvent, useState } from "react"
interface LIstsProp {
  id: number,
  Index: number,
  context: string
}
interface setNewItemsGroup {
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setLIsts: React.Dispatch<React.SetStateAction<LIstsProp[]>>;
  item: string,
}
interface Todo {
  id: number,
  text: string,
}

function EditItem({setClicked, setLIsts, item}: setNewItemsGroup ) {
  const [textItems, steTextItem] = useState<string>()
  const data = JSON.parse(localStorage.getItem('cards') ?? "[]")
  let dataItemsIndex: number;

  function handleAdder(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    Idgenerator()
    console.log(item, data)
    setLIsts(prevList => {
      return prevList.map((list: LIstsProp, i) => {
        if(i == dataItemsIndex) {
          return [...list, {id: 3, Index: 23, context: textItems}]
        } else {
          return [...list]
        }
      })
    })

    
    setClicked(false)
  }
  function Idgenerator() {
    data.forEach((dataItem: Todo[], i:number) =>{
      if(dataItem.text == item) {
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
  return (
    <form onSubmit={handleAdder} className='bg-white p-[6px] rounded-[10px] edit-item'>
        <textarea onChange={handleTextArea} placeholder="Enter new item" className="p-[6px] border w-full h-full rounded-[4px] border-yellow"></textarea>
        <div className="flex gap-[10px] items-center">
            <button  className="bg-blue-500 p-[3px] rounded cursor-pointer">Add card</button>
            <i onClick={handleCloseItem} className="fa-solid fa-xmark cursor-pointer bg-[#999] p-1 rounded " ></i>    
        </div>
    </form>
  )
}

export default EditItem