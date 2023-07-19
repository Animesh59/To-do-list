import { useState } from "react"
import ItemList from "./ItemList";

export default function App() {
  let [task, addtask] = useState("");
  let [item, additem] = useState([]);

  function newTask(event) {
    addtask(event.target.value);
  }
  function displayTask(event) {
    event.preventDefault();
    if (task == "") {
      console.log("Please type some task to add!");
    } else {
      additem((item) => {
        return [...item, task]
      });
      console.log(`new task is added:${task}`);
      addtask("");
    }
  }
  function delItem(id) {
    console.log(`item: ${item[id]} would be deleted`);
    let result = item.filter((field, index) => {
      if (id != index) {
        return field;
      }
    });
    additem(result)
    console.log(result);
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>ToDo List</h1>
          <form>
            <input type="text" id="taskfield" placeholder="Add a item . . . " onChange={newTask} value={task} />
            <button id="addBtn" onClick={displayTask}>+</button>
          </form>
          <ol>
            {
              item.map((item, index) => {
                return <ItemList item={item} key={index} delItem={delItem} id={index} />
              })
            }
          </ol>
        </div>
      </div>
    </>
  )
}