import { LucideIcon } from "lucide-react";
export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  stats: { Created: string; Pushed: string };
}

export interface StatProps {
  icon: LucideIcon;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export interface FloatButton {
  title: string;
  icon: LucideIcon;
  href: string | null;
  position: { left: number; top: number };
  index: number;
  iconProps?: React.ComponentProps<React.ElementType>;
}

export interface NavLink {
  title: string;
  icon: LucideIcon;
  href: string | null;
}
