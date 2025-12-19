export interface Skill {
  name: string;
  level: number;
  logo: string;
  color: string;
}

export interface Skills {
  [categoryName: string]: {
    skills: Skill[];
    avarage?: number;
    description: string;
  };
}

export type Avarage = {
  name: string, A: number, B: number, C: number, D: number, E:number
}[]