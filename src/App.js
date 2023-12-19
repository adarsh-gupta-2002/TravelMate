import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

 
function App() {

  const [items , setItems] = useState([])
   

  const handleAddItems = (item) => {
    setItems(prev => [...prev , item])
  }

  const handleDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }


  const handleToggleItem = (id) =>{
    setItems(items => 
      items.map(item => 
        item.id === id ? {...item , packed : !item.packed } : item ))
  }

  const handleClearItems = () => {

    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    )
    if(confirmed) setItems([])
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems = {handleAddItems}/>
      <PackingList onDeteleItem = {handleDeleteItem} onClearItems = {handleClearItems} onToggleItems = {handleToggleItem} items = {items} />
      <Stats  items = {items} />
    </div>
  );
}

 
 
export default App;
