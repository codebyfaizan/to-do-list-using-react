import React from "react";
import Footer from "./Footer";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function App() {
  const [items, setItems] = React.useState([]);

  function addItem(inputText) {
    setItems([...items, inputText]);
  }

  function deleteItem(id) {
    setItems(
      items.filter((item, index) => {
        return index !== id;
      })
    );
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div>
        <InputArea addItem={addItem} />
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onBeingClicked={deleteItem}
            />
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
