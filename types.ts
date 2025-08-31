
export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  avatarUrl: string;
  quote: string;
  project: {
    title: string;
    role: string;
    transformation: string;
  }
}

export interface Skill {
  id: number;
  name: string;
  icon: React.ReactNode;
  fact: string;
}
