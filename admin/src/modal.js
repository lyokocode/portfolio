import Appeparance from "./modals/Appeparance";
import { Task } from "./modals/Create/Task";
import SystemHealth from "./modals/SystemHealth";

const modal = [
    {
        name: "appeparance",
        element: Appeparance
    },
    {
        name: "systemHealth",
        element: SystemHealth
    },
    {
        name: "createTask",
        element: Task
    },
]

export default modal