import { MenuItem } from "@/interFace/interFace";

const navMenuData: MenuItem[] = [
  {
    id: 1,
    label: "Home", 
    link: "/"
  },
  { id: 2, hasDropdown: false, label: "About", link: "/about" },
  {
    id: 3,
    label: "Service",
    link: "/service-1",
    hasDropdown: true,
    subMenu: [
      {id: 9,
        label: "Service One",
        link: "/service-1",
      },
      {id: 10,
        label: "Service Two",
        link: "/service-2",
      },
      {id: 11,
        label: "Service Three",
        link: "/service-3",
      },
      {id: 12,
        label: "Service Manage",
        link: "/service-manage",
      },
    ],
  },
  // {
  //   id: 4,
  //   label: "Blog",
  //   link: "/blog",
  //   hasDropdown: true,
  //   subMenu: [
  //     {id: 13,
  //       label: "Blog",
  //       link: "/blog",
  //     },
  //     {id: 14,
  //       label: "Blog details",
  //       link: "/blog-details",
  //     },
  //   ],
  // },
  // {
  //   id: 5,
  //   label: "Pages",
  //   link: "",
  //   hasDropdown: true,
  //   subMenu: [
  //     {id: 15,
  //       label: "Case One",
  //       link: "/case-1",
  //     },
  //     {id: 16,
  //       label: "Case Two",
  //       link: "/case-2",
  //     },
  //     {id: 17,
  //       label: "Case Three",
  //       link: "/case-3",
  //     },
  //     {id: 18,
  //       label: "Case Details",
  //       link: "/case-details",
  //     },
  //     {id: 19,
  //       label: "Career",
  //       link: "/career",
  //     },
  //     {id: 21,
  //       label: "Faq",
  //       link: "/faq",
  //     },
  //     {id: 22,
  //       label: "Goals",
  //       link: "/goals",
  //     },
  //     {id: 23,
  //       label: "Price",
  //       link: "/price",
  //     },
  //     {id: 24,
  //       label: "Team",
  //       link: "/team",
  //     },
  //     {id: 25,
  //       label: "Team Single",
  //       link: "/team-details",
  //     },
  //     {id: 26,
  //       label: "Shop",
  //       link: "/shop",
  //     },
  //     {id: 27,
  //       label: "Contact",
  //       link: "/contact",
  //     },
  //     {id: 28,
  //       label: "Login",
  //       link: "/login",
  //     },
  //     {id: 29,
  //       label: "Register",
  //       link: "/register",
  //     },
  //   ],
  // },
  { id: 6, hasDropdown: false, label: "Contact", link: "/contact" },
];

export default navMenuData;
