function Navbar({ count, dark, setDark }) {
  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">AI Job Board</h1>

      <div className="flex gap-4 items-center">
        <span>Saved Jobs: {count}</span>

        <button
          onClick={() => setDark(!dark)}
          className="bg-white text-black px-3 py-1 rounded"
        >
          {dark ? "Light" : "Dark"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
