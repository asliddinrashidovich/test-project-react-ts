import Card from "./card"
interface Todo {
  id: number,
  text: string ,
  isFocus: boolean,
}
interface CardsListsProps {
  cards: Todo[]
  setCards: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function CardsLists({cards, setCards}: CardsListsProps): JSX.Element {
  return (
    <>  
      {cards && cards.map((item: Todo) => {
        return <Card setCards={setCards} item={item.text} key={item.id}/>
      })}
    </>
  )
}

export default CardsLists