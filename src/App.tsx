import CardsLists from "./components/cards-list"
import AnotherCard from "./components/another-card"
import { useEffect, useState } from "react";
import { LIstsProp, Todo } from "./constants/interfaces";

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
      <h2 className="text-[20px] md:text-[40px] font-[600] text-white py-6 fixed top-[-10px] translate-x-[-50%] left-[50%]">Test Project</h2>
      <p className="text-white py-6 fixed translate-x-[-50%] left-[50%] top-10">Created by <a target="_blank" href="https://github.com/asliddinrashidovich/test-project-react-ts" className="text-blue-900">Asliddin Norboyev</a></p>
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