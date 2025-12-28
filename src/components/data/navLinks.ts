import {
  House,
  User,
  Mail,
  Briefcase,
  ChartNoAxesCombined,
  IdCard,
  SendToBack,
  ArrowRight,
} from "lucide-react";

import { NavLink } from "./types";

export const navLinks: NavLink[] = [
  { title: "Home", icon: House, href: "#home" },
  { title: "Live Data", icon: ChartNoAxesCombined, href: "#live data" },
  { title: "About", icon: IdCard, href: "#about" },
  { title: "Projects", icon: Briefcase, href: "#projects" },
  { title: "Contact", icon: Mail, href: "#contact" },
  { title: "Login to GitHub", icon: User, href: null },
  { title: "Update Github Repo", icon: SendToBack, href: "/update" },
  { title: "Logout", icon: ArrowRight, href: null },
];
