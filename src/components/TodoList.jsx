import TodoItem from "./TodoItem"

const TodoList = ({todos, deleteTodo, updateTodo}) => {
    return (
        <div className="bg-white rounded-md [&>article]:p-4 mt-8">
          {todos.map( todo => (
            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>

          ))}
      </div>
    )
}

export default TodoList