import { useState } from "react"; 
import Item from "./Item";


const PackingList  = ({items , onDeteleItem , onToggleItems , onClearItems}) => {

    const [sortBy , setSortBy] = useState('input')
  
  
    let sortedItems;
  
    if(sortBy === 'input') sortedItems = items
  
    if(sortBy === "description") sortedItems = items.slice().sort((a ,b) => a.description.localeCompare(b.description))
  
  
    if(sortBy === 'packed') sortedItems = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed))
  
  
  
    return (
      <div className="list">
        <ul>
          {sortedItems.map(item => <Item onDeteleItem = {onDeteleItem} onToggleItems = {onToggleItems} key = {item.id} item = {item} />)}
        </ul>
  
        <div className="actions">
          <select onChange = {(e) => setSortBy(e.target.value)}  value = {sortBy}>
            <option value = "input">Sort by input order</option>
            <option value = "description">Sort by descriptioin</option>
            <option value ='packed'>Sort by packed status </option>
          </select>
  
          <button onClick={() => onClearItems() }>Clear List</button>
        </div>
      </div>
    )
  }
  
   

export default PackingList