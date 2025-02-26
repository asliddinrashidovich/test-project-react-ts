import { LIstsProp, Todo } from "../contants/interfaces";

interface setNewCards {
  setCards: React.Dispatch<React.SetStateAction<Todo[]>>;
  setLIsts: React.Dispatch<React.SetStateAction<LIstsProp[]>>;
}

function AnotherCard({setCards, setLIsts}: setNewCards): JSX.Element{
  function handleAddCard() {
    setCards((item) => {
      return [...item, {id: item.length++ + 1, text: `New Column ${item.length++}`}]
    })
    
    setLIsts((lists) => {
      return [...lists, []]
    })
  }
  return (
    <>
        <button onClick={handleAddCard} className="addBtn bg-[#3554479c] text-center justify-center  cursor-pointer flex gap-2 items-center w-full py-3 rounded-[10px] text-white" >
            <i className="fa-solid fa-plus"></i>
            <span>Add another card</span>
        </button>
    </>
  )
}

export default AnotherCard