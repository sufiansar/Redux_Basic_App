import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { deleteData, toggoleComplete } from "@/Redux/Feature/taskSlice";
import { userSelect } from "@/Redux/Feature/userSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hook/hook";
import { Trash2 } from "lucide-react";

const TaskCard = ({ task }: any) => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(userSelect);
  const assignUser = user.find((user) => user.id === task.AssignTo);
  console.log(task);
  return (
    <div className="mt-10 rounded-md border px-5 py-3 shadow-lg shadow-gray-500/50">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            <span
              className={cn("size-3 rounded-full ", {
                "bg-green-500": task.priority === "low",
                "bg-yellow-500": task.priority === "medium",
                "bg-red-500": task.priority === "high",
              })}
            />
            <h1 className="text-base font-medium">{task.title}</h1>
          </div>
          <p>Assign To - {assignUser ? assignUser.name : "No One"}</p>
          <p className="mt-4 text-sm text-gray-400">{task.description}</p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            onClick={() => dispatch(deleteData(task.id))}
            variant="link"
            className="p-0 text-red-500 hover:text-red-600"
          >
            <Trash2 className="size-4" />
          </Button>
          <Checkbox onClick={() => dispatch(toggoleComplete(task.id))} />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
