'use client';

import React from 'react';
import { useGetProjectsQuery, Project } from '@/src/redux/store/services/projectService';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/src/components/ui/card';


export default function Home() {
  // Utiliza el hook de RTK Query para cargar los proyectos
  const { data: projects, error, isLoading } = useGetProjectsQuery();

  

  if (isLoading) return <p className="text-center mt-10">Cargando proyectos...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Ha ocurrido un error al cargar los proyectos</p>;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-6">Proyectos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
        {projects?.map((project: Project) => (
          <Card key={project.id} className="w-full">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <button className="text-blue-500 hover:underline">Ver más</button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
