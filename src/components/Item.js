
const Item = ({item , onDeteleItem , onToggleItems}) => {
    return (
      <li>
        <input onChange={() => onToggleItems(item.id)} value = {item.packed} type="checkbox" />
        <span style={item.packed ? {textDecoration:"line-through"}: {}}>
          {item.quantity} {item.description}
        </span> 
        <button onClick={() => onDeteleItem(item.id)}>❌</button>
  
      </li>
    )
  }

export default Item