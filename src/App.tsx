import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState("John");

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleClick = () => {
    setFirstName("James");
  };

  return (
    <>
      <h1>This is first time using React</h1>

      <p className="text-red-600">Hello World</p>

      <button
        type="button"
        className="bg-blue-600 text-white rounded-lg p-2 hover:bg-blue-700 cursor-pointer"
        onClick={handleIncrement}
      >
        Click Me! {count}
      </button>

      <div>
        <button
          type="button"
          className="bg-red-600 text-white p-2 rounded-lg shadow-lg hover:bg-white hover:text-black cursor-pointer"
          onClick={handleClick}
        >
          Click Me!
        </button>
        <h1>{firstName}</h1>
      </div>
    </>
  );
};

export default App;
