import { useState } from "react"
import EditItem from "./edit-item";

function AnotherButton(): JSX.Element{
    const [clicked, setClicked] = useState(false);

    // document.addEventListener('click', (e) => {
    //     console.log(e)
    // })
    function handleAdd() {
        setClicked(true)
    }
  return (
    <>
    
     {!clicked && <button onClick={handleAdd} className="text-start bg-[#444] cursor-pointer flex gap-2 items-center w-full p-2 rounded-[10px] text-white" >
        <i className="fa-solid fa-plus"></i>
        <span>Add another card</span>
    </button> }  
    {clicked && <EditItem/>}
    </>
  )
}

export default AnotherButton