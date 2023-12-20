import { AiOutlineDashboard } from "../Utils/ApplicationIcon";

export const topBarPageLink = [
  {
    Page: "About us",
    hrfURL: "/about-us",
  },
  {
    Page: "Contact Us",
    hrfURL: "/contsct-us",
  },
];

export const navBarPageLink = [
  {
    Page: "Home",
    hrfURL: "/",
  },
  {
    Page: "Products",
    hrfURL: "/",
  },
  {
    Page: "Categories",
    hrfURL: "/",
  },
  {
    Page: "Top Performer",
    hrfURL: "/",
  },
  {
    Page: "Blog",
    hrfURL: "/",
  },
];

export const asidebarOptions = [
  {
    name: "Dashboard",
    iconComponent: AiOutlineDashboard, // Use the imported component
    link: "/user-dashboard",
  },
  {
    name: "TEST COMPONENT",
    iconComponent: AiOutlineDashboard, // Use the imported component
    link: "/user-dashboard/business/test",
  },
  {
    name: "Profile Update",
    iconComponent: AiOutlineDashboard, // Use the imported component
    link: "/user-dashboard/business/update-profile/id",
  },
  {
    name: "Dynimc Table",
    iconComponent: AiOutlineDashboard, // Use the imported component
    link: "/super-admin/new-users",
  },

  {
    name: "Enquires",
    iconComponent: AiOutlineDashboard, // Use the imported component
    link: "/user-dashboard",
  },
];

export const asidefooterLink = [
  {
    name: "About Us",
    link: "/",
  },
  {
    name: "Contact Us",
    link: "/",
  },
  {
    name: "Privacy Policy",
    link: "/",
  },
];
