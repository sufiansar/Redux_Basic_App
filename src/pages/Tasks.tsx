import { updateTask, useSelectTask } from "@/Redux/Feature/taskSlice";

import TaskCard from "./task/TaskCard";

import * as React from "react";
import { Progress } from "@/components/ui/progress";

import type { Itask } from "@/interface/type";
import { useAppDispatch, useAppSelector } from "@/Redux/hook/hook";
import { AddTaskModel } from "./task/AddTask";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/Redux/api/baseApi";

const Task = () => {
  const [progress, setProgress] = React.useState(13);
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  const tasks = useAppSelector(useSelectTask);
  console.log("tasks: ", tasks);
  const dispatch = useAppDispatch();
  const { data, isLoading, isError } = useGetTasksQuery(undefined);
  console.log(data, isLoading, isError);
  if (isLoading) {
    return <Progress value={progress} className="w-[60%]" />;
  }

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
      {/* {tasks.map((task: Itask) => (
        <TaskCard key={task.id} task={task} />
      ))} */}
      {data.tasks.map((task: Itask) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Task;
