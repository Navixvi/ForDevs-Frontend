import { Project } from "@/app/home/types";

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await fetch("http://localhost:3000/project"); // Cambiar por contante env
  const projects = await response.json();

  return projects;
};
