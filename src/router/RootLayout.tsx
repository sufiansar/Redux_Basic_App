import App from "@/App";

import Task from "@/pages/Tasks";
import User from "@/pages/User";

import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>hello Redux</div>,
    Component: App,

    children: [
      {
        path: "/users",
        Component: User,
      },
      {
        index: true,
        Component: Task,
      },
      {
        path: "/tasks",
        Component: Task,
      },
    ],
  },
]);

export default router;
