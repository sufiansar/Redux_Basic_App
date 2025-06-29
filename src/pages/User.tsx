import { userSelect } from "@/Redux/Feature/userSlice";
import { useAppSelector } from "@/Redux/hook/hook";
import { AddUser } from "@/user/AddUser";
import UserCard from "@/user/UserCard";

const User = () => {
  const users = useAppSelector(userSelect);

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        User
        <div>
          <AddUser />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-20">
        {users.map((user: any) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default User;
