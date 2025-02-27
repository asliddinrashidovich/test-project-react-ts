import Card from "./card"
import { Lists, LIstsProp, Todo } from "../constants/interfaces";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

interface CardsListsProps {
  cards: Todo[]
  setCards: React.Dispatch<React.SetStateAction<Todo[]>>;
  setLIsts: React.Dispatch<React.SetStateAction<LIstsProp[]>>;
  lists: LIstsProp[]
}

function CardsLists({cards, setCards, setLIsts, lists}: CardsListsProps): JSX.Element {

  // Drogcontext code
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return ; 
    } else {
      let indexNum: number = 0;
      const items = Array.from(lists) 
      console.log(items) 

      const newArray = items.map((prev) => {
        return prev.filter((arrayItem: Lists[]) => {
          console.log(arrayItem)
          return arrayItem.context != result.draggableId
        })
      }); 
      
      cards.forEach((item, i) => {
        if(item.text == result?.destination?.droppableId) {
          indexNum = i
        }
      })
      newArray[indexNum].splice(result.destination.index, 0, {id: 234, Index:23, context: result.draggableId}); 
      setLIsts(newArray)
    }
  };
  

  function getLists(id: number) {
    return lists[id]
  }
  return (
    <>  
      <DragDropContext   onDragEnd={onDragEnd}>
        {cards && cards.map((item: Todo, i) => {
          return <Card setCards={setCards} lists={lists} setLIsts={setLIsts}  listItem={getLists(i)} item={item.text} key={Math.random()}/>
        })}
      </DragDropContext>
    </>
  )
}

export default CardsLists