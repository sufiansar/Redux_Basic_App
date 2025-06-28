import { ModeToggle } from "@/theme/mode-toggle";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <nav className="shadow-md px-4 py-3  ">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link className="text-2xl font-bold text-blue-600" to={"/"}>
            {" "}
            Redux
          </Link>
          <div className="space-x-6 hidden md:flex">
            <Link
              to={"users"}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              User
            </Link>

            <Link
              to={"tasks"}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Task
            </Link>
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
