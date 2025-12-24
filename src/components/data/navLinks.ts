import { House, User, Mail, Briefcase, Settings } from "lucide-react";

import { NavLink } from "./types";

export const navLinks: NavLink[] = [
  { title: "Home", icon: House },
  { title: "About", icon: User },
  { title: "Projects", icon: Briefcase },
  { title: "Contact", icon: Mail },
  { title: "Settings", icon: Settings },
];
