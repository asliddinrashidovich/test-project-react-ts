import Card from "./card"
interface Todo {
  id: number,
  text: string ,
}
interface LIstsProp {
  id: number,
  Index: number,
  context: string
}
interface CardsListsProps {
  cards: Todo[]
  setCards: React.Dispatch<React.SetStateAction<Todo[]>>;
  setLIsts: React.Dispatch<React.SetStateAction<LIstsProp[]>>;
  lists: LIstsProp
}

function CardsLists({cards, setCards, setLIsts, lists}: CardsListsProps): JSX.Element {
  function getLists(id: number):void {
    return lists[id]
  }
  getLists(2)
  return (
    <>  
      {cards && cards.map((item: Todo, i) => {
        return <Card setCards={setCards} setLIsts={setLIsts} listItem={getLists(i)} item={item.text} key={item.id}/>
      })}
    </>
  )
}

export default CardsLists