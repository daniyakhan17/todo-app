
import { useRef, useState } from "react"
import './App.css'

function App() {

const input = useRef()
const [todo,  setTodo] = useState([])

const addTodo = (event)=>{
 event.preventDefault()
  console.log(input.current.value);
  todo.push(input.current.value);
  setTodo([...todo])
  console.log(todo);  
  input.current.value =" ";  
  
}

const deleteTodo = (index)=>{
  todo.splice(index,1)
  setTodo([...todo])

}
const editTodo = (index)=>{
  const edit = prompt("Please enter your todo")
  todo.splice(index,1,edit)
  setTodo([...todo])


}




return(
<>
<div className="div">
  <form onSubmit={addTodo}>
    <input type="text" placeholder="Enter" ref={input}/>
    <button type="submit" className="todobtn">Add Todo</button>
  </form>
  <ol className="ol">
    {todo.length > 0? todo.map( (item , index)=>{
      return <li className="li" key={index}> {item} 
      
      <div>
      <button onClick={()=> deleteTodo(index)} className="delbtn">Delete</button>
      
      
      <button onClick={()=> editTodo(index)} className="edbtn">Edit</button>
      </div>


      </li>
      
    }): <h1>No item found...</h1> }
  </ol>
</div>

</>


)





}

export default App