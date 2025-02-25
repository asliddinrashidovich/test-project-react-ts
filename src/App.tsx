import CardsLists from "./components/cards-list"
import AnotherCard from "./components/another-card"
import { useEffect, useState } from "react";

interface Todo {
  id: number,
  text: string,
  isFocus: boolean,
}

function App(): JSX.Element {
  const loadTodosFromLocalStorage = (): Todo[] => {
    const data = localStorage.getItem("cards");
    return data ? JSON.parse(data) : []; 
  };
  const [cards, setCards] = useState<Todo[]>(loadTodosFromLocalStorage);

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards])

  return (
    <div className="text-center h-[100vh]">
      <h2 className="text-[40px] font-[600] py-6">Test Project</h2>
      <div className="flex gap-[20px]  items-start overflow-auto h-[80%]">
        <CardsLists cards={cards} setCards={setCards}/>
        <div className="p-5 bg-[#555] min-w-[350px] rounded-[10px]">
          <AnotherCard setCards={setCards}/>
        </div>      
      </div>
    </div>
  )
}

export default App