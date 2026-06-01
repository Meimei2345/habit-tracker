import "./App.css";
import {useState, useEffect} from "react";
function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState(() => {
    const savedTodos =
      localStorage.getItem("todos");

    return savedTodos
      ? JSON.parse(savedTodos)
      : [];
  });

  const addTodo =() => {
    if (inputText === "") return;
    setTodos([...todos,
      {
        text: inputText,
        completede: false
      }
    ]);
    setInputText("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  useEffect(() => {
    localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    );
  }, [todos]);

  const toggleTodo = (index) => {
    const newTodos = [...todos];

    nexTodos[index].completed =
      !nexTodos[index].completed;

    setTodos(nexTodos);
  };
    return (
      <div>
        <img
          className="images"
          src="https://i.pinimg.com/736x/32/61/81/3261816fc3e13008464f21bb5f6637ea.jpg"
        />
        <img 
          className="images2"
          src="https://i.pinimg.com/1200x/9a/83/da/9a83da44393261383baa6dd3c801be27.jpg"
        />
        <h1>習慣リスト</h1>
        <h3>～Habit Tracker～</h3>
        <p>タスク数: {todos.length}件</p>
        <input
          placeholder="習慣にしたいことを入力"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
        />
        <button onClick={addTodo}>タスク追加</button>

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(index)}
              />
              <span className="todoText">
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(index)}>
                完了した!!
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default App;