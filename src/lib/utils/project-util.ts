import { Project } from "@/src/app/home/types";

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await fetch("http://localhost:3000/project");
  const projects = await response.json();
  return projects;
};
