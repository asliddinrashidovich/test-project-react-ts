import { useState } from "react"
import EditItem from "./edit-item";
import { LIstsProp } from "../constants/interfaces";

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
    
     {!clicked && <button onClick={handleAdd} className="addBtn text-start bg-transparent  cursor-pointer flex gap-2 items-center w-full p-2 rounded-[10px] text-white" >
        <i className="fa-solid fa-plus"></i>
        <span>Add another card</span>
    </button> }  
    {clicked && <EditItem item={item} clicked={clicked} setLIsts={setLIsts} setClicked={setClicked} />}
    </>
  )
}

export default AnotherButton