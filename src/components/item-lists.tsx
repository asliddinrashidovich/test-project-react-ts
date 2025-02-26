import { Draggable, Droppable } from "react-beautiful-dnd";
import { LIstsProp } from "../contants/interfaces";
import ItemCard from "./item"
import { useState } from "react";

// console.log(DragDropContext)
interface ItemsListsProps {
    listItem: LIstsProp,
    setLIsts: React.Dispatch<React.SetStateAction<LIstsProp[]>>;
    lists: LIstsProp,
    item: string;
}

function ItemLists({ listItem, setLIsts, lists, item}:ItemsListsProps ) {
  return (
    <div>
       <Droppable droppableId={item}>
          {(provided, snapshot) => (
            <div className="py-1"
                ref={provided.innerRef}
                style={{ backgroundColor: snapshot.isDraggingOver ? 'transparent' : 'transparent' }}
                {...provided.droppableProps}
              >
              {listItem.map((listElement, i) => {
                  return (
                    <Draggable key={Math.random()} draggableId={listElement.context} index={i}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <ItemCard  lists={lists} setLIsts={setLIsts} listElement={listElement.context} key={Math.random()}/>
                        </div>
                      )}
                    </Draggable>
                  )
              })} 
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        
    </div>
  )
}

export default ItemLists