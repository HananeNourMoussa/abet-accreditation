import { Icon } from "@iconify/react";
import pieChart2Fill from "@iconify/icons-eva/pie-chart-2-fill";
import peopleFill from "@iconify/icons-eva/people-fill";
import fileTextFill from "@iconify/icons-eva/file-text-fill";
// import shoppingCartFill from "@iconify/icons-eva/shopping-cart-fill";
import OpenBook from "@iconify/icons-eva/book-open-fill";

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: "Dashboard",
    path: "/dashboard/app",
    icon: getIcon(pieChart2Fill),
  },
  {
    title: "Courses",
    icon: getIcon(fileTextFill),
    children: [
      {
        title: "CSC1401",
        path: "/dashboard/students/CSC1401",
      },
      {
        title: "CSC230601",
        path: "/dashboard/students/CSC230601",
      },
      {
        title: "PHY1402",
        path: "/dashboard/students/PHY1402",
      },
    ],
  },
  {
    title: "Register",
    path: "/register",
    icon: getIcon(OpenBook),
  },
  {
    title: "Login",
    path: "/login",
    icon: getIcon(peopleFill),
  },
];

export default sidebarConfig;
