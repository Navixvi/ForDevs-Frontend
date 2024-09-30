import { fetchProjects } from "@/lib/project-util";

import {
  Card,
  CardDescription,
  CardTitle,
  CardImage,
} from "@/components/ui/card";

const Home = async () => {
  const projects = await fetchProjects();

  return (
    <>
      {projects.map((project) => (
        <Card key={project.id}>
          <CardImage
            src={project.image}
            alt={project.title}
            width={500}
            height={400}
          />
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </Card>
      ))}
    </>
  );
};
export default Home;
