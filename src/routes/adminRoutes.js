import Dashboard from "../pages/Dashboard";
import Order from "../pages/Order";

var adminRoutes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    component: Dashboard,
    layout: "/user",
    isview: true,
  },
  {
    name: "Order",
    path: "/Order",
    component: Order,
    layout: "/user",
    isview: true,
  },
];
export default adminRoutes;
