const Recipe = ({name, have, missing}) => {
  return (
    <div>
        <h1>{name}</h1>
        <h2>have</h2>
        {have.map(item => (<h3>{item.name}</h3>))}    
        <h2>missing</h2>
        {missing.map(item => (<h3>{item.name}</h3>))}        
    </div>
  )
}

export default Recipe