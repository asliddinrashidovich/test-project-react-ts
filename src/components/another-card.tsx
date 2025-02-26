interface Todo {
  id: number,
  text: string,
}
interface LIstsProp {
  id: number,
  Index: number,
  context: string
}
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
        <button onClick={handleAddCard} className="text-start bg-[#444] cursor-pointer flex gap-2 items-center w-full p-2 rounded-[10px] text-white" >
            <i className="fa-solid fa-plus"></i>
            <span>Add another card</span>
        </button>
    </>
  )
}

export default AnotherCard