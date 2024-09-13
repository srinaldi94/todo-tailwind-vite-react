import CrossIcons from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-desktop-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
            TODO
          </h1>
          <button><MoonIcon fill="#fff"/></button>
        </div>
        <form className="rounded-md bg-white overflow-hidden py-4 flex gap-4 items-center px-4 mt-8">
          <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
          <input className="w-full text-gray-400 outline-none" type="text" placeholder="Create a new todo . . ." />
        </form>
      </header>

      <main className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-md [&>article]:p-4">

          <article className="flex gap-4 border-b-gray-400 border-b">
            <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
            <p className="text-gray-600 grow">Complete online Javascript curse in bluuweb</p>
            <button className="flex-none"><CrossIcons/></button>
          </article>

          <section className="px-4 py-4 flex justify-between">
            <span className="text-gray-400">5 items lefth</span>
            <button className="text-gray-400">Clear completed</button>
          </section>

        </div>
      </main>

      <section className="container mx-auto px-4">
        <div className="bg-white mt-8 p-4 rounded-md flex justify-center gap-4">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>

      <p className="text-center mt-8">Drag and drop</p>
    </div>
  );
};

export default App;
