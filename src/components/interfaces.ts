export interface Project {
    id: number;
    name: string;
    image: string;
    web: string;
    skills: string[];
}

export interface Services {
    id: number;
    title: string;
    description: string;
}

export interface Skill {
    id: number;
    name: string;
    highlight: boolean;
}
