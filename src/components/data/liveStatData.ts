import { Code2, GitCommit, Zap, Database } from "lucide-react";
import { StatProps } from "./types";

export const stats: StatProps[] = [
  {
    icon: Code2,
    label: "Lines of Code",
    value: 127,
    suffix: "K+",
    decimals: 0,
  },
  {
    icon: GitCommit,
    label: "Commits",
    value: 2847,
    suffix: "+",
    decimals: 0,
  },
  {
    icon: Zap,
    label: "Projects Completed",
    value: 42,
    suffix: "",
    decimals: 0,
  },
  {
    icon: Database,
    label: "APIs Built",
    value: 18,
    suffix: "+",
    decimals: 0,
  },
];
