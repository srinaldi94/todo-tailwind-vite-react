const TodoCalculado = ({computedItemsLeft, clearComplete}) => {
    return (
        <section className="px-4 py-4 flex justify-between bg-white rounded-b-md">
        <span className="text-gray-400">{computedItemsLeft} items lefth</span>
        <button className="text-gray-400" onClick={clearComplete}>Clear completed</button>
      </section>
    )
}

export default TodoCalculado