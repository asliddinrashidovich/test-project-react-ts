
function EditItem() {
  return (
    <div className='bg-white p-[6px] rounded-[10px] edit-item'>
        <textarea placeholder="Enter new item" className="p-[6px] border w-full h-full rounded-[4px] border-yellow">
        </textarea>
        <div className="flex gap-[10px] items-center">
            <button className="bg-blue-500 p-[3px] rounded cursor-pointer">Add card</button>
            <i className="fa-solid fa-plus cursor-pointer bg-[#999] p-1 rounded " ></i>    
        </div>
    </div>
  )
}

export default EditItem