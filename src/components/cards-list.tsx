import { useState } from "react";
import Card from "./card"
import { LIstsProp, Todo } from "../contants/interfaces";
import { DragDropContext } from "react-beautiful-dnd";

interface CardsListsProps {
  cards: Todo[]
  setCards: React.Dispatch<React.SetStateAction<Todo[]>>;
  setLIsts: React.Dispatch<React.SetStateAction<LIstsProp[]>>;
  lists: LIstsProp[]
}

function CardsLists({cards, setCards, setLIsts, lists}: CardsListsProps): JSX.Element {
  const onDragEnd = (result) => {
    if (!result.destination) {
      return ; 
    } else {
      let indexNum: number = 0;
      const items = Array.from(lists)  

      let newArray = items.map(prev => {
        return prev.filter(arrayItem => {
          return arrayItem.context != result.draggableId
        })
      }); 
      
      cards.forEach((item, i) => {
        if(item.text == result.destination.droppableId) {
          indexNum = i
        }
      })
      newArray[indexNum].splice(result.destination.index, 0, {id: 234, Index:23, context: result.draggableId}); // Yangi joyiga qo‘shamiz
      setLIsts(newArray)
    }
  };
  

  function getLists(id: number):void {
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