import React, { useState, useRef } from "react";
import { FaTrello, FaPlus, FaAngleDown } from "react-icons/fa";
import "../card/Card.css";
import Button from "../button/Button";
import { MdDirectionsBoatFilled } from "react-icons/md";

interface param {
  item: string;
  pos: number;
}
const Cards: React.FC = () => {
  const [todoTask, setTodoTask] = useState<string[]>([]);
  const [doingTask, setDoingTask] = useState<string[]>([]);
  const [doneTask, setDoneTask] = useState<string[]>([]);

  const addtodoTask = () => {
    const t = prompt("Input the task");

    if (t == null) {
      alert("Enter valid input");
    } else {
      setTodoTask((prev) => {
        return [...prev, t];
      });
    }
  };

  const addDoingTask = () => {
    const dotask = prompt("Input the task in progress");

    if (dotask == null) {
      alert("Enter valid input");
    } else {
      setDoingTask((olddolist) => {
        return [...olddolist, dotask];
      });
    }
  };

  const addDoneTask = () => {
    const donetask = prompt("Enter the done tasks");

    if (donetask == null) {
      alert("Enter valid input");
    } else {
      setDoneTask((olddonelist) => {
        return [...olddonelist, donetask];
      });
    }
  };

  let dragged: Element | null = null;

  const onDragHandleStart = (
    event: React.DragEvent<HTMLDivElement>,
    param: { item: string; pos: number }[],
    category: string
  ) => {
    dragged = event.target as Element;
    console.log(dragged);
    //
    document.addEventListener("dragover", (event) => {
      event.preventDefault();
    });

    document.addEventListener("drop", (event) => {
      event.preventDefault();

      if (
        (event.target as Element).className === "doingarea" ||
        (event.target as Element).className === "todoarea"
      ) {
        dragged?.parentNode?.removeChild(dragged);
        if (dragged != null) (event.target as Element).appendChild(dragged);
      }
    });
  };

  return (
    <div className="rightdiv">
      <div className="todo">
        <h4>Todo</h4>
        <div className="todoarea">
          {todoTask.map((item, pos) => (
            <div
              className="card"
              draggable
              onDragStart={(event) => {
                onDragHandleStart(event, [{ item, pos }], "todo");
              }}
            >
              {item}
            </div>
          ))}
        </div>
        <Button
          buttonclass="taskbtn"
          label="Add a task"
          icon={<FaPlus className="addicon" size={10} />}
          onclick={() => addtodoTask()}
        />
      </div>

      <div className="doing">
        <h4>Doing</h4>
        <div className="doingarea">
          {doingTask.map((item, pos) => (
            <div
              className="card"
              onDragStart={(event) => {
                onDragHandleStart(event, [{ item, pos }], "todo");
              }}
              draggable="true"
            >
              {item}
            </div>
          ))}
        </div>
        <Button
          buttonclass="taskbtn"
          label="Add a task"
          icon={<FaPlus className="addicon" size={10} />}
          onclick={() => addDoingTask()}
        />
      </div>

      <div className="done">
        <h4>Done</h4>
        <div className="doingarea">
          {doneTask.map((item, pos) => (
            <div
              className="card"
              onDragStart={(event) => {
                onDragHandleStart(event, [{ item, pos }], "todo");
              }}
              draggable="true"
              //onDragEnd={drop}
            >
              {item}
            </div>
          ))}
        </div>
        <Button
          buttonclass="taskbtn"
          label="Add a task"
          icon={<FaPlus className="addicon" size={10} />}
          onclick={() => addDoneTask()}
        />
      </div>
    </div>
  );
};

export default Cards;
