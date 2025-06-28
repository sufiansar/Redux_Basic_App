import { useSelectTask } from "@/Redux/Feature/taskSlice";
import TaskCard from "./task/TaskCard";

import type { Itask } from "@/interface/type";
import { useAppSelector } from "@/Redux/hook/hook";
import { AddTaskModel } from "./task/AddTask";

const Task = () => {
  const tasks = useAppSelector(useSelectTask);
  console.log("tasks: ", tasks);

  return (
    <div>
      <div className=" flex justify-between mt-5">
        <h1>Task</h1>
        <div className="">
          <AddTaskModel />
        </div>
      </div>
      {tasks.map((task: Itask) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Task;
