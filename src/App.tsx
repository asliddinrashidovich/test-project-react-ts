import CardsLists from "./components/cards-list"
import AnotherCard from "./components/another-card"
import { useEffect, useState } from "react";
import { LIstsProp, Todo } from "./contants/interfaces";

function App(): JSX.Element {
  const loadCards = (): Todo[] => {
    const data = localStorage.getItem("cards");
    return data ? JSON.parse(data) : []; 
  };

  const loadLists = (): LIstsProp[] => {
    const data = localStorage.getItem("lists");
    return data ? JSON.parse(data) : []; 
  };
  const [cards, setCards] = useState<Todo[]>(loadCards);
  const [lists, setLIsts] = useState<LIstsProp[]>(loadLists);
  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards])

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists))
  }, [lists])


  return (
    <div className="text-center h-[100vh] overflow-x-auto relative ">
      <h2 className="text-[20px] md:text-[40px] font-[600] text-white py-6 fixed translate-x-[-50%] left-[50%]">Test Project</h2>
      <div className="flex gap-[20px]  items-start overflow-x-auto  absolute top-[100px] bottom-0">
        <CardsLists cards={cards} lists={lists} setLIsts={setLIsts} setCards={setCards}/>
        <div className=" bg-[#4c4c4c9c] min-w-[350px] rounded-[10px]">
          <AnotherCard setLIsts={setLIsts} setCards={setCards}/>
        </div>      
      </div>
    </div>
  )
}

export default App