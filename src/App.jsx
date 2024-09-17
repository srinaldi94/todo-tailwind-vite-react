import { useState } from "react";
import Header from "./components/Header";
import TodoCalculado from "./components/TodoCalculado";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = [
  {id: 1,title: 'Complete online javascript', completed: true}, 
  {id: 2,title: 'Go to the gym', completed: false}, 
  {id: 3,title: '10 minutes meditation', completed: false}, 
  {id: 4,title: 'Pick up groceries', completed: false},
  {id: 5,title: 'Complete todo app', completed: false}
]

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
          id: Date.now(),
          title: title.trim(),
          completed: false
    }
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter( todo => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  };

  const computedItemsLeft = todos.filter(todo => !todo.completed).length;

  const clearComplete = () => {
    setTodos(todos.filter(todo => !todo.completed));
  }

  const [filter, setFilter] = useState("all")

  const filteredTodos = () => {
      switch (filter) {
        case 'all':
          return todos;
        case 'active': 
          return todos.filter( todo => !todo.completed);
        case 'completed':
          return todos.filter( todo => todo.completed);
        default:
          return todos;
      } 
  }

  const changeFilter = (filter) => setFilter(filter);

  return (
    <div className="bg-[url('./assets/images/bg-desktop-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">
      <Header/>

      <main className="container mx-auto px-4 mt-8">
        <TodoCreate createTodo={createTodo}/>

        <TodoList todos={filteredTodos()} deleteTodo={deleteTodo} updateTodo={updateTodo}/>

        <TodoCalculado computedItemsLeft={computedItemsLeft} clearComplete={clearComplete}/>

        <TodoFilter changeFilter={changeFilter} filter={filter}/>
      </main>


      <p className="text-center mt-8">Drag and drop</p>
    </div>
  );
};

export default App;
