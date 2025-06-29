import { updateTask, useSelectTask } from "@/Redux/Feature/taskSlice";
import TaskCard from "./task/TaskCard";

import type { Itask } from "@/interface/type";
import { useAppDispatch, useAppSelector } from "@/Redux/hook/hook";
import { AddTaskModel } from "./task/AddTask";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Task = () => {
  const tasks = useAppSelector(useSelectTask);
  // console.log("tasks: ", tasks);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className=" flex justify-between mt-5">
        <h1>Task</h1>
        <div className=" flex gap-5">
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger
                onClick={() => dispatch(updateTask("all"))}
                value="all"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                onClick={() => dispatch(updateTask("high"))}
                value="high"
              >
                High
              </TabsTrigger>
              <TabsTrigger
                onClick={() => dispatch(updateTask("medium"))}
                value="meduim"
              >
                Meduim
              </TabsTrigger>
              <TabsTrigger
                onClick={() => dispatch(updateTask("low"))}
                value="low"
              >
                Low
              </TabsTrigger>
            </TabsList>
          </Tabs>
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
