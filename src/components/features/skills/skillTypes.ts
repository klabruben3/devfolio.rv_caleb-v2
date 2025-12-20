export interface Skill {
  name: string;
  level: number;
  logo: string;
  color: string;
}

export interface Skills {
  [categoryName: string]: {
    skills: Skill[];
    description: string;
  };
}
