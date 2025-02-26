import { useState } from "react"
import EditItem from "./edit-item";

interface LIstsProp {
  id: number,
  Index: number,
  context: string
}
interface setNewItems {
  setLIsts: React.Dispatch<React.SetStateAction<LIstsProp[]>>;
  item: string,
}

function AnotherButton({setLIsts, item}: setNewItems): JSX.Element{
    const [clicked, setClicked] = useState(false);

    function handleAdd() {
        setClicked(true)
    }
  return (
    <>
    
     {!clicked && <button onClick={handleAdd} className="text-start bg-[#444] cursor-pointer flex gap-2 items-center w-full p-2 rounded-[10px] text-white" >
        <i className="fa-solid fa-plus"></i>
        <span>Add another card</span>
    </button> }  
    {clicked && <EditItem item={item} setLIsts={setLIsts} setClicked={setClicked}/>}
    </>
  )
}

export default AnotherButton