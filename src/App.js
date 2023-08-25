import { useState } from 'react';
import './App.css';
import { TodoInput } from './Components/TodoInput/TodoInput';
import { TodoList } from './Components/TodoList/TodoList';


function App() {
  const [listTodo,setListTodo] = useState([]);
  let addList = (inputText) =>{
   if (inputText !== '') {
    setListTodo([...listTodo,inputText])
    
   }
  
  }
  const deleteListItem = (key) =>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <div className="App">
      <div className="container-middle">
        <TodoInput addList={addList}></TodoInput>
        <h1 className="app-heading">TODO</h1>
        <hr />
        {
          listTodo.map((listItem,i) =>{
            return(
              <TodoList deleteListItem={deleteListItem} key={i} index={i} item={listItem}></TodoList>
            )
          })
        }
      </div>
      
    </div>
  );
}

export default App;
