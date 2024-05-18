
function List(props){
  const itemno = props.selected
  const allitems = props.items
  if(itemno === 0){
     const final = allitems.map(item => <li key={item.id}>{item.name.toUpperCase()} : <b>{item.calories}cal</b></li>)
     return (final)
  }
  else if(itemno === 1){
    allitems.sort((a,b)=> a.name.localeCompare(b.name))
    const final = allitems.map(item => <li key={item.id}>{item.name.toUpperCase()} : <b>{item.calories}cal</b></li>)
     return (final)

  }
  else if( itemno === 2){
    allitems.sort((a,b)=> b.name.localeCompare(a.name))
    const final = allitems.map(item => <li key={item.id}>{item.name.toUpperCase()} : <b>{item.calories}cal</b></li>)
     return (final)
    
  }
  else if(itemno === 3){
    allitems.sort((a,b)=> a.calories-b.calories)
    const final = allitems.map(item => <li key={item.id}>{item.name.toUpperCase()} : <b>{item.calories}cal</b></li>)
     return (final)

  }
  else if(itemno === 4){
    allitems.sort((a,b)=> b.calories-a.calories)
    const final = allitems.map(item => <li key={item.id}>{item.name.toUpperCase()} : <b>{item.calories}cal</b></li>)
     return (final)
  }
  
 

 
  
}

export default List