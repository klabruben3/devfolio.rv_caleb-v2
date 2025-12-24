import {
  House,
  User,
  Mail,
  Briefcase,
  ChartNoAxesCombined,
} from "lucide-react";

import { NavLink } from "./types";

export const navLinks: NavLink[] = [
  { title: "Home", icon: House },
  { title: "Live Data", icon: ChartNoAxesCombined },
  { title: "About", icon: User },
  { title: "Projects", icon: Briefcase },
  { title: "Contact", icon: Mail },
];
