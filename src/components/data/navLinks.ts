import {
  House,
  User,
  Mail,
  Briefcase,
  ChartNoAxesCombined,
  IdCard,
} from "lucide-react";

import { NavLink } from "./types";

export const navLinks: NavLink[] = [
  { title: "Home", icon: House },
  { title: "Live Data", icon: ChartNoAxesCombined },
  { title: "About", icon: IdCard },
  { title: "Projects", icon: Briefcase },
  { title: "Contact", icon: Mail },
  { title: "Login", icon: User },
];
