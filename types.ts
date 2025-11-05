
// FIX: Import React to use React.ReactNode type.
import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  links: {
    behance?: string;
    dribbble?: string;
    live?: string;
    github?: string;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  avatarUrl: string;
  quote: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: React.ReactNode;
  fact: string;
  proficiency: number; // 0-100
}

export interface Post {
    id: number;
    title: string;
    excerpt: string;
    imageUrl: string;
    date: string;
    readTime: number; // in minutes
}
