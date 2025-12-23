export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  stats: Record<string, string>;
}

export interface StatProps {
  icon: React.ElementType;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}
