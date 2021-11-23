import { Icon } from "@iconify/react";
import pieChart2Fill from "@iconify/icons-eva/pie-chart-2-fill";
import peopleFill from "@iconify/icons-eva/people-fill";
import shoppingBagFill from "@iconify/icons-eva/shopping-bag-fill";
import fileTextFill from "@iconify/icons-eva/file-text-fill";
import shoppingCartFill from "@iconify/icons-eva/shopping-cart-fill";
import personAddFill from "@iconify/icons-eva/book-open-fill";

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
        path: "/dashboard/products",
      },
      {
        title: "CSC2303",
        path: "/register",
      },
      {
        title: "PHY1402",
        path: "/login",
      },
    ],
  },
  {
    title: "Students",
    path: "/dashboard/users",
    icon: getIcon(shoppingBagFill),
  },
  {
    title: "Student Outcomes",
    path: "/dashboard/orders",
    icon: getIcon(shoppingCartFill),
  },
  {
    title: "Register",
    path: "/register",
    icon: getIcon(personAddFill),
  },
  {
    title: "Login",
    path: "/login",
    icon: getIcon(peopleFill),
  },
];

export default sidebarConfig;
