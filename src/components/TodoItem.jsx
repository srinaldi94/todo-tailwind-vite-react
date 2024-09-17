import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross"

const TodoItem = ({todo, deleteTodo, updateTodo}) => {

  const {id, title, completed} = todo;

    return (
        <article className="flex gap-4 border-b-gray-400 border-b">
        <button className={`w-5 h-5 flex-none border-2 rounded-full 
            ${completed ? "bg-gradient-to-t from-indigo-400 via-purple-400 to-sky-400 flex justify-center items-center" : "inline-block"}`}  onClick={ () => updateTodo(id)} >
          {completed  && <IconCheck/>}
          </button>
        <p className={`text-gray-600 grow ${completed && "line-through text-gray-200" }`}>{title}</p>
        <button className="flex-none" onClick={ () => deleteTodo(id)}><IconCross/></button>
      </article>
    )
}

export default TodoItem