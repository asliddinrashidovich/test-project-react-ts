interface LIstsProp {
  listElement: string
}

function ItemCard({listElement}: LIstsProp) {
  return (
    <div className="flex justify-between items-center p-2 bg-[#fff] rounded-[10px] border-[1px] border-[#fff] hover:border-[1px] hover:border-[blue] cursor-grab  mb-2">
        <span>{listElement}</span>
        <div className="gap-[10px] flex">
            <i className="fa-solid fa-pencil cursor-pointer"></i>
            <i className="fa-regular fa-circle-xmark cursor-pointer"></i>
        </div>
    </div>
  )
}

export default ItemCard