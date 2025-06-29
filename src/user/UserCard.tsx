import { Button } from "@/components/ui/button";

import { Trash2 } from "lucide-react";
import type { Iuser } from "@/interface/type";
import { useAppDispatch } from "@/Redux/hook/hook";
import { deleteUser } from "@/Redux/Feature/userSlice";

const UserCard = ({ user }: { user: Iuser }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="mt-4 rounded-md border px-5 h-32  py-3 shadow-sm shadow-green-300">
      <div className="flex justify-between items-center mt-8 ">
        <div className="">
          <div className="flex items-center gap-2">
            <h1 className="text-base font-medium ">{user.name}</h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="link"
            className="p-0 text-red-500 hover:text-red-600"
            onClick={() => dispatch(deleteUser(user.id))}
          >
            <Trash2 className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
